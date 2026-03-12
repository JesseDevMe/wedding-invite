"use client";
import { Container } from "@/shared/ui/Container";
import backgroundImage from "./location-bg.jpg";
import mapPin from "./map-pin.svg";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";

export const Location = () => {
  return (
    <Container
      className="relative bg-cover bg-center text-background max-w-[800px] overflow-hidden min-[800px]:rounded-4xl"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative flex flex-col gap-10">
        <div className="">
          <div className="font-caligraphy text-[88px] text-center leading-[88px]">
            Location
          </div>
          <h2 className="font-serif text-[32px] font-semibold text-center">
            Место проведения
          </h2>
        </div>
        <div className="flex items-start gap-5 max-w-[300px] mx-auto">
          <Image
            src={mapPin}
            alt="map pin"
            width={24}
            height={24}
            className="mt-2"
          />
          <p>Ресторан “Жар-Птица” г. Севастополь, ул. Ирисовая, 10А</p>
        </div>
        <Button
          onClick={() =>
            window.open("https://yandex.com/maps/-/CPBGeV1-", "_blank")
          }
        >
          Открыть на карте
        </Button>
      </div>
    </Container>
  );
};
