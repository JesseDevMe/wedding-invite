"use client";
import { Container } from "@/shared/ui/Container";
import backgroundImage from "@/shared/ui/big-quality-red-bg.jpg";
import foregroundImage from "./welcome-fg-svg.svg";
import Image from "next/image";

export const Welcome = () => {
  return (
    <Container
      className="h-dvh max-h-[850px] min-h-[680px] relative flex items-center justify-center cursor-pointer overflow-hidden"
      id="welcome-container"
      onClick={() => {
        const timerContainer = document.getElementById("timer-container");
        if (timerContainer) {
          timerContainer.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        preload
        placeholder="blur"
        quality={60}
        className="object-cover object-center -z-10"
        sizes="100vw"
      />
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
