import Link from "next/link";
import { Contacts } from "@/features/contacts";

export default function Forbidden() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Доступ запрещен</h2>
      <p className="text-lg">Копируйте отправленную вам ссылку целиком</p>
      <p className="text-lg">Если ошибка повторяется, обратитесь к Никитуле</p>
      <Contacts />
    </div>
  );
}
