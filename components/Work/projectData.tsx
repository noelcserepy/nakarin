import { StaticImageData } from "next/image";
import dosenbachThumb from "../../public/projects/dosenbach/dosenbach-nakarin-saisorn-2.jpg";
import takeoffThumb from "../../public/projects/takeoff_birrfeld/takeoff-birrfeld-nakarin-saisorn-8.jpg";
import tremondiThumb from "../../public/projects/tremondi_quinten/tremondi-quinten-nakarin-saisorn-1.jpg";
import oppoThumb from "../../public/projects/oppo/oppo-nakarin-saisorn-7.jpg";
import michelThumb from "../../public/projects/michel_freudenberg/michel-freudenberg-nakarin-saisorn-6.jpg";
import vfgThumb from "../../public/projects/VFG_burning_season/VFG-burning-season-nakarin-saisorn-3.jpg";
import schlierenThumb from "../../public/projects/stadt_schlieren/stadt-schlieren-nakarin-saisorn-8.jpg";
import adliswilThumb from "../../public/projects/stadt_adliswil/stadt-adliswil-nakarin-saisorn-0.jpg";
import pantheraThumb from "../../public/projects/panthera_onca/panthera-onca-nakarin-saisorn-0.jpg";
import {
  michel,
  oppo,
  vfgBurningSeason,
  stadtSchlieren,
  stadtAdliswil,
  pantheraOnca,
  takeoffBirrfeld,
  tremondiQuinten,
  dosenbach,
} from "./images";

export type Project = {
  index: number;
  name: string;
  slug: string;
  description: string;
  location: string;
  thumbnail: StaticImageData;
  yearStart: string;
  yearEnd: string;
  client: string;
  role: string;
  link: string;
  images: StaticImageData[];
};

const projectData: Project[] = [
  {
    index: 0,
    name: "OPPO",
    slug: "oppo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed adipisci veritatis, dolor necessitatibus vel molestiae animi consequuntur soluta? Ipsa, enim. Animi temporibus quos modi sed sint deleniti vel exercitationem.",
    location: "Zürich",
    thumbnail: oppoThumb,
    yearStart: "2020",
    yearEnd: "laufend",
    client: "OPPO",
    role: "Fotograf",
    link: "",
    images: oppo,
  },
  {
    index: 1,
    name: "Michel Freudenberg",
    slug: "michel-freudenberg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed adipisci veritatis, dolor necessitatibus vel molestiae animi consequuntur soluta? Ipsa, enim. Animi temporibus quos modi sed sint deleniti vel exercitationem.",
    location: "Zürich",
    thumbnail: michelThumb,
    yearStart: "2019",
    yearEnd: "2019",
    client: "Michel Freudenberg",
    role: "Fotograf",
    link: "",
    images: michel,
  },
  {
    index: 2,
    name: "Dosenbach",
    slug: "dosenbach",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed adipisci veritatis, dolor necessitatibus vel molestiae animi consequuntur soluta? Ipsa, enim. Animi temporibus quos modi sed sint deleniti vel exercitationem.",
    location: "Genf",
    thumbnail: dosenbachThumb,
    yearStart: "2021",
    yearEnd: "2021",
    client: "Dosenbach",
    role: "Fotograf",
    link: "",
    images: dosenbach,
  },
  {
    index: 3,
    name: "Stadt Adliswil",
    slug: "stadt-adliswil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed adipisci veritatis, dolor necessitatibus vel molestiae animi consequuntur soluta? Ipsa, enim. Animi temporibus quos modi sed sint deleniti vel exercitationem.",
    location: "Adliswil",
    thumbnail: adliswilThumb,
    yearStart: "2020",
    yearEnd: "laufend",
    client: "Dosenbach",
    role: "Fotograf",
    link: "",
    images: stadtAdliswil,
  },
  {
    index: 4,
    name: "Stadt Schlieren",
    slug: "stadt-schlieren",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed adipisci veritatis, dolor necessitatibus vel molestiae animi consequuntur soluta? Ipsa, enim. Animi temporibus quos modi sed sint deleniti vel exercitationem.",
    location: "Schlieren",
    thumbnail: schlierenThumb,
    yearStart: "2021",
    yearEnd: "2021",
    client: "Stadt Schlieren",
    role: "Fotograf",
    link: "",
    images: stadtSchlieren,
  },
  {
    index: 5,
    name: "VFG Burning Season",
    slug: "vfg-burning-season",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed adipisci veritatis, dolor necessitatibus vel molestiae animi consequuntur soluta? Ipsa, enim. Animi temporibus quos modi sed sint deleniti vel exercitationem.",
    location: "Chiang Mai, Thailand",
    thumbnail: vfgThumb,
    yearStart: "2019",
    yearEnd: "2019",
    client: "VFG Burning Season",
    role: "Fotograf",
    link: "",
    images: vfgBurningSeason,
  },
  {
    index: 6,
    name: "Panthera Onca",
    slug: "panthera-onca",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed adipisci veritatis, dolor necessitatibus vel molestiae animi consequuntur soluta? Ipsa, enim. Animi temporibus quos modi sed sint deleniti vel exercitationem.",
    location: "Mollis Glarus",
    thumbnail: pantheraThumb,
    yearStart: "2018",
    yearEnd: "2018",
    client: "Panthera Onca",
    role: "Fotograf",
    link: "",
    images: pantheraOnca,
  },
  {
    index: 7,
    name: "Take-Off Birrfeld",
    slug: "take-off-birrfeld",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed adipisci veritatis, dolor necessitatibus vel molestiae animi consequuntur soluta? Ipsa, enim. Animi temporibus quos modi sed sint deleniti vel exercitationem.",
    location: "Birrfeld",
    thumbnail: takeoffThumb,
    yearStart: "2018",
    yearEnd: "2018",
    client: "Take-Off Birrfeld",
    role: "Fotograf",
    link: "",
    images: takeoffBirrfeld,
  },
  {
    index: 8,
    name: "Tremondi Quinten",
    slug: "tremondi-quinten",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed adipisci veritatis, dolor necessitatibus vel molestiae animi consequuntur soluta? Ipsa, enim. Animi temporibus quos modi sed sint deleniti vel exercitationem.",
    location: "Quinten",
    thumbnail: tremondiThumb,
    yearStart: "2020",
    yearEnd: "2020",
    client: "Tremondi Quinten",
    role: "Fotograf",
    link: "",
    images: tremondiQuinten,
  },
];

export default projectData;
