import { Container } from "@/shared/ui/Container";
import { Countdown } from "./Countdown";

export const Timer = () => {
  return (
    <Container className="flex flex-col gap-10" id="timer-container">
      <h2 className="font-serif text-[32px] font-semibold text-center text-wine">
        Дорогие гости!
      </h2>
      <div className="max-w-[600px] mx-auto">
        <p className="text-center">
          Один день в этом году будет для нас особенным и мы хотим провести его
          в кругу близких и друзей.
        </p>
        <br />
        <p className="text-center">
          С большим удовольствием приглашаем вас провести этот день вместе с
          нами.
        </p>
      </div>
      <span className="text-center">До свадьбы осталось:</span>
      <Countdown />
    </Container>
  );
};
