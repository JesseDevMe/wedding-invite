import { Container } from "@/shared/ui/Container";
import backgroundImage from "./footer-bg.png";

export const Footer = () => {
  return (
    <Container
      className="flex flex-col gap-10 items-center text-background bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <h2 className="font-caligraphy text-[88px] leading-[80px] text-center">
        See you soon
      </h2>
      <p className="font-serif text-2xl">С любовью, Никита и Ксения!</p>
    </Container>
  );
};
