import { Container } from "@/shared/ui/Container";
import greenImage from "./dress-code-images/green.png";
import redImage from "./dress-code-images/red.jpg";
import brownImage from "./dress-code-images/brown.jpg";
import beigeImage from "./dress-code-images/beige.jpg";
import blackImage from "./dress-code-images/black.jpg";
import Image, { StaticImageData } from "next/image";

const dressCode = [
  {
    colorHex: "#1F4D3A",
    imageSrc: greenImage.src,
  },
  {
    colorHex: "#7B1E2B",
    imageSrc: redImage.src,
  },
  {
    colorHex: "#7A4E36",
    imageSrc: brownImage.src,
  },
  {
    colorHex: "#EDDBC2",
    imageSrc: beigeImage.src,
  },
  {
    colorHex: "#2E2E2E",
    imageSrc: blackImage.src,
  },
];

export const DressCode = () => {
  return (
    <Container className="flex flex-col gap-10 items-center">
      <h2 className="font-caligraphy text-[70px] text-wine scale-110">
        Dress-Code
      </h2>
      <p className="text-center max-w-[320px]">
        Нам будет очень приятно, если вы поддержите цветовую гамму торжества
      </p>
      <ul className="flex">
        {dressCode.map((item) => (
          <DressCodeItem
            key={item.colorHex}
            colorHex={item.colorHex}
            imageSrc={item.imageSrc}
          />
        ))}
      </ul>
    </Container>
  );
};

const DressCodeItem = ({
  colorHex,
  imageSrc,
}: {
  colorHex: string;
  imageSrc: string;
}) => {
  return (
    <li className="flex flex-col gap-4 items-center">
      <div
        className="w-[50px] h-[50px] rounded-full"
        style={{ backgroundColor: colorHex }}
      />
      <div
        className="w-[64px] h-[116px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
    </li>
  );
};
