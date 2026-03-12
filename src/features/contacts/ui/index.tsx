import { Container } from "@/shared/ui/Container";

const contacts = [
  {
    name: "Ксения",
    phone: "+7 (978) - 565 - 23 - 85",
    rawPhone: "+79785652385",
    telegram: "https://t.me/lisinhell",
  },
  {
    name: "Никита",
    phone: "+7 (978) - 550 - 04 - 84",
    rawPhone: "+79785500484",
    telegram: "https://t.me/jessemee",
  },
];

export const Contacts = () => {
  return (
    <Container className="flex flex-col gap-10 items-center max-w-[600px]">
      <div className="text-center  text-wine">
        <h2 className="font-caligraphy text-[80px] leading-[80px]">Contact</h2>
        <p className="font-serif text-2xl font-semibold">Контакты</p>
      </div>
      <p className="text-center">
        Если у вас появятся вопросы, пожалуйста, дайте нам знать. Мы всегда на
        связи и будем рады помочь.
      </p>

      <ul className="flex flex-col gap-10">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.name}
            name={contact.name}
            phone={contact.phone}
            rawPhone={contact.rawPhone}
            telegram={contact.telegram}
          />
        ))}
      </ul>
    </Container>
  );
};

const ContactItem = ({
  name,
  phone,
  rawPhone,
  telegram,
}: {
  name: string;
  phone: string;
  rawPhone: string;
  telegram: string;
}) => {
  return (
    <li className="flex flex-col gap-4">
      <div className="flex items-center gap-5">
        <span>{name}:</span>
        <a
          href={`tel:${rawPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-wine"
        >
          {phone}
        </a>
      </div>
      <div className="flex items-center gap-5">
        <span>Telegram:</span>
        <a
          href={telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {telegram}
        </a>
      </div>
    </li>
  );
};
