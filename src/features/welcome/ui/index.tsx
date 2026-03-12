"use client";
import { Container } from "@/shared/ui/Container";
import backgroundImage from "./welcome-bg.png";
import foregroundImage from "./welcome-fg-svg.svg";
import Image from "next/image";

export const Welcome = () => {
  return (
    <Container
      className="h-dvh max-h-[850px] min-h-[680px] relative bg-cover bg-center flex items-center justify-center cursor-pointer"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      id="welcome-container"
      onClick={() => {
        const timerContainer = document.getElementById("timer-container");
        if (timerContainer) {
          timerContainer.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <Image
        src={foregroundImage}
        width={320}
        height={600}
        alt="Foreground"
        priority
        draggable={false}
        className="pointer-events-none"
      />
    </Container>
  );
};
