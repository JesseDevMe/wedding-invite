import { Container } from "@/shared/ui/Container";
import backgroundImage from "./chat-bg.png";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";

export const Chat = ({ inviteLink }: { inviteLink: string }) => {
  return (
    <Container
      className="flex flex-col items-center gap-10 text-background bg-cover bg-center min-[800px]:rounded-4xl max-w-[800px]"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="mx-auto">
        <h2 className="font-caligraphy text-[80px] text-center">Telegram</h2>
        <p className="text-center">Чат для гостей</p>
      </div>
      <div className="font-thin flex flex-col gap-8 max-w-[600px]">
        <p>
          Наша свадьба — это история, которую мы пишем вместе с вами. Чтобы
          сохранить каждый её момент, мы открываем специальный Telegram-чат.
        </p>
        <p>За неделю до торжества в нем появятся все организационные детали.</p>
        <p>
          В день праздника этот чат станет нашим общим фото- и видеоархивом.
          Пожалуйста, делитесь своими кадрами — смешными, трогательными,
          неожиданными. Вместе мы соберём полную картину счастья.
        </p>
        <p>
          Спасибо, что станете не только гостями, но и летописцами нашего дня!
        </p>
      </div>
      <Button>
        <Link href={inviteLink} target="_blank">
          Присоединиться
        </Link>
      </Button>
    </Container>
  );
};
