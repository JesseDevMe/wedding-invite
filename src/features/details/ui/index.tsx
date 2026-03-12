import { Container } from "@/shared/ui/Container";

const details = [
  {
    title: "01 — Горько!",
    description:
      "Будем признательны, если вы воздержитесь от криков “Горько!” на празднике, ведь поцелуй  —  это знак выражения чувств и он не может быть по заказу.",
  },
  {
    title: "02 — Цветы",
    description:
      "Мы верим, что красота цветка — в его жизни. Чтобы не прерывать эту красоту, мы сердечно просим вас не дарить нам цветов.  А если вы хотите сделать нам символический подарок, мы будем рады мудрому пожеланию в нашу семейную книгу. Она будет ждать ваших слов в самом сердце нашего праздника — там, где зазвучат главные тосты и начнется наш праздничный пир.",
  },
  {
    title: "03 — Подарки",
    description:
      "Ваши улыбки и смех подарят нам незабываемое счастье в этот день! А пожелания в конвертах помогут осуществить наши мечты.",
  },
  {
    title: "04 — Маленькие гости",
    description:
      "Мы будем рады разделить этот день с вами и вашими детьми. Для наших маленьких гостей будет организован отдельный стол, чтобы им было комфортно и интересно провести вечер.",
  },
];

export const Details = () => {
  return (
    <Container className="flex flex-col gap-10 max-w-[600px]">
      <h2 className="font-serif text-[32px] text-center text-wine font-semibold">
        Детали
      </h2>
      <ol className="flex flex-col gap-10">
        {details.map((item) => (
          <DetailsItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </ol>
    </Container>
  );
};

const DetailsItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <li className="flex flex-col gap-4">
      <h3 className="text-2xl font-medium text-wine">{title}</h3>
      <p className="">{description}</p>
    </li>
  );
};
