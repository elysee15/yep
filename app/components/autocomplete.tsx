import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

function Autocomplete() {
  return (
    <Combobox aria-label="choose a fruit">
      <ComboboxInput
        className="p-6 outline-none focus-within:border focus-within:border-amber-500"
        placeholder="De quoi avez-vous besoin?"
      />
      <ComboboxPopover>
        <ComboboxList className="bg-white px-2 py-2">
          <ComboboxOption value="Apple" />
          <ComboboxOption value="Banana" />
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}

export default Autocomplete;
