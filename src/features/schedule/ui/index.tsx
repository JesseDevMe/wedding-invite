import { Container } from "@/shared/ui/Container";

const schedule = [
  {
    title: "Welcome",
    time: "10:00",
    description: "Сбор гостей",
  },
  {
    title: "Wedding ceremony",
    time: "17:00",
    description: "Свадебная церемония. Самое важное событие в нашей жизни!",
  },
  {
    title: "Wedding start",
    time: "18:00",
    description: "Время вкусной еды, танцев и веселья",
  },
  {
    title: "Afterparty",
    time: "21:00",
    description: "Вечеринка!",
  },
  {
    title: "End of the evening",
    time: "23:00",
    description: "Финал вечера и теплые объятия",
  },
];

export const Schedule = () => {
  return (
    <Container className="flex flex-col gap-10 max-w-[400px]">
      <h2 className="font-serif text-[32px] text-center text-wine font-semibold">
        Расписание торжества
      </h2>
      <ul className="flex flex-col gap-[30px]">
        {schedule.map((item) => (
          <ScheduleItem
            key={item.title}
            title={item.title}
            time={item.time}
            description={item.description}
          />
        ))}
      </ul>
    </Container>
  );
};

const ScheduleItem = ({
  title,
  time,
  description,
}: {
  title: string;
  time: string;
  description: string;
}) => {
  return (
    <li className="flex gap-[30px] items-center">
      <span className="text-2xl [writing-mode:vertical-rl] rotate-180 text-wine font-medium underline underline-offset-1 decoration-1">
        {time}
      </span>
      <div className="flex flex-col gap-2.5">
        <h3 className="font-caligraphy text-2xl">{title}</h3>
        <p className="">{description}</p>
      </div>
    </li>
  );
};
