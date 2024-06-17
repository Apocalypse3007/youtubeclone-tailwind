import Image from "next/image";
import { Videocard } from "../components/Videocard";
import { Videogrid } from "../components/Videogrid";
import {Appbar} from "../components/Appbar";


export default function Home() {
  return (
    <div>
      <Appbar></Appbar>
      <Videogrid></Videogrid>
    </div>
  );
}