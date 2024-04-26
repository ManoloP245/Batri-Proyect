import { Carousel } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";

export function Carousell() {
  return (
    <>
    <Carousel className="rounded-xl ml-2">
      <img
        src="/images/carru1.webp"
        alt="image 1"
        className="h-96 w-full object-cover"
      />
      <img
        src="/images/audio.jpg"
        alt="image 2"
        className="h-96 w-full object-cover"
      />
      <img
        src="/images/cargadores.png"
        alt="image 3"
        className="h-96 w-full object-cover"
      />
    </Carousel></>
  );
}