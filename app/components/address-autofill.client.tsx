import { AddressAutofill as Autofill, config } from "@mapbox/search-js-react";
import { useState, useEffect } from "react";

function AddressAutofill() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken =
      "sk.eyJ1IjoiZWx5c2VlMTUwOCIsImEiOiJjbGU0MWZ4Y3MwODlkM25zYTY4djR2N3MxIn0.J-_vyne8au0GBV44DDoAkQ";
    setToken(accessToken);
    config.accessToken = accessToken;
  }, []);

  return (
    <Autofill accessToken={token}>
      <input
        className="p-6 outline-none w-full"
        placeholder="Cocody, II plateaux..."
        autoComplete="address-line1"
        id="mapbox-autofill"
      />
    </Autofill>
  );
}

export default AddressAutofill;
