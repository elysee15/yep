import type { LinksFunction } from "@remix-run/node";
import Slider, { type Settings } from "react-slick";
import styles from "../styles/index.styles.css";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Plumber from "~/components/icons/plumber";
import Baker from "~/components/icons/baker";
import Electricity from "~/components/icons/electricity";
import { ClientOnly } from "remix-utils";
import AddressAutofill from "~/components/address-autofill.client";
import { Button } from "~/ui/button";
import Avatar from "~/ui/avatar";
import StarRating from "~/components/ui/rating/rating";
import { Link } from "@remix-run/react";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  },
  {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
  },
  {
    rel: "stylesheet",
    type: "text/css",
    href: styles,
  },
];

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  autoplay: true,
  arrows: false,
};

export default function Index() {
  return (
    <div>
      <div className="relative">
        <div className="absolute z-10 mx-auto grid h-full w-full place-items-center bg-black/20">
          <div className="max-w-[80%] lg:max-w-[60%]">
            <h1 className="mb-4 text-5xl font-bold text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, natus.
            </h1>

            <div>
              <div className="flex overflow-hidden">
                <Combobox
                  openOnFocus
                  aria-label="choose a fruit"
                  className="relative w-full after:absolute after:right-0 after:top-1/2 after:h-5 after:-translate-y-1/2 after:border-r-2 after:border-gray-600 after:content-['']"
                >
                  <ComboboxInput
                    className="w-full p-6 outline-none"
                    placeholder="De quoi avez-vous besoin?"
                  />
                  <ComboboxPopover>
                    <ComboboxList className="space-y-3 bg-white px-2 py-2">
                      <ComboboxOption value="Apple">
                        🍎 Restaurants
                      </ComboboxOption>
                      <ComboboxOption value="Banana">
                        🍌 Services de livraisons
                      </ComboboxOption>
                      <ComboboxOption
                        value="Orange"
                        className="flex items-center gap-1 font-medium"
                      >
                        <Baker className="h-6 w-6" /> Boulangéries
                      </ComboboxOption>
                      <ComboboxOption
                        value="Pineapple"
                        className="flex items-center gap-1 font-medium"
                      >
                        <Electricity className="h-6 w-6" /> Électriciens
                      </ComboboxOption>
                      <ComboboxOption
                        value="Kiwi"
                        className="flex items-center gap-1 font-medium"
                      >
                        <Plumber className="h-6 w-6" /> Plombiers
                      </ComboboxOption>
                    </ComboboxList>
                  </ComboboxPopover>
                </Combobox>
                <div className="w-full">
                  <ClientOnly fallback={<div>nothing...</div>}>
                    {() => <AddressAutofill />}
                  </ClientOnly>
                </div>
                <button className="bg-amber-500 px-6 text-white">
                  Rechercher
                </button>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
                <Button
                  startIcon={<Baker className="h-6 w-6" />}
                  className="rounded-full"
                >
                  lorem imps
                </Button>
                <Button
                  startIcon={<Baker className="h-6 w-6" />}
                  className="rounded-full"
                >
                  lorem imps
                </Button>
                <Button
                  startIcon={<Baker className="h-6 w-6" />}
                  className="rounded-full"
                >
                  lorem imps
                </Button>
                <Button
                  startIcon={<Baker className="h-6 w-6" />}
                  className="rounded-full"
                >
                  lorem imps
                </Button>
                <Button
                  startIcon={<Baker className="h-6 w-6" />}
                  className="rounded-full"
                >
                  lorem imps
                </Button>
                <Button
                  startIcon={<Baker className="h-6 w-6" />}
                  className="rounded-full"
                >
                  lorem imps
                </Button>
                <Button
                  startIcon={<Baker className="h-6 w-6" />}
                  className="rounded-full"
                >
                  lorem imps
                </Button>
                <Button
                  startIcon={<Baker className="h-6 w-6" />}
                  className="rounded-full"
                >
                  lorem imps
                </Button>
                <Button
                  startIcon={<Baker className="h-6 w-6" />}
                  className="rounded-full"
                >
                  lorem imps
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="">
            <img
              src="/images/home/slide-1.jpeg"
              alt="Slide 1"
              className="h-[90vh] w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/images/home/slide-2.jpeg"
              alt="Slide 2"
              className="h-[90vh] w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/images/home/slide-3.jpeg"
              alt="Slide 3"
              className="h-[90vh] w-full object-cover"
            />
          </div>
        </Slider>
      </div>

      <div className="">
        <h2 className="mx-auto mt-16 mb-4 w-[60%] text-center text-3xl font-bold">
          Activités récentes
        </h2>
        <div className="container mx-auto">
          <div className="max-w-[350px] overflow-hidden rounded-lg border">
            <Link to="/#" className="group">
              <img
                src="/images/home/slide-2.jpeg"
                alt=""
                className="aspect-video bg-gray-300 object-cover"
              />
              <h2 className="ml-4 mt-2 text-xl font-semibold text-amber-500 group-hover:underline">
                Boulangerie libanaise
              </h2>
            </Link>
            <div className="m-4 mt-2">
              <div className="flex gap-1">
                <span>
                  <Avatar />
                </span>
                <div>
                  <span className="flex items-center">
                    <Link to="/#" className="hover:underline">
                      <h4 className="text-sm font-semibold">Elysee Bleu</h4>
                    </Link>
                    <span className="ml-1 font-normal italic">
                      a ajouté un avis
                    </span>
                  </span>
                  <StarRating />
                </div>
              </div>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam, repellat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
