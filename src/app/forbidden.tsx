import Link from "next/link";
import { Contacts } from "@/features/contacts";

export default function Forbidden() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center px-4 pt-10">
        <h2 className="text-2xl font-bold">Доступ запрещен</h2>
        <p className="text-lg text-center mt-4 ">
          Копируйте отправленную вам ссылку целиком
        </p>
        <p className="text-lg text-center">
          Если ошибка повторяется, обратитесь к Никитуле
        </p>
      </div>
      <Contacts />
    </div>
  );
}
