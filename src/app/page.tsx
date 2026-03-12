import { Location } from "@/features/location";
import { Timer } from "@/features/timer";
import { Welcome } from "@/features/welcome";
import { Schedule } from "@/features/schedule";
import { DressCode } from "@/features/dress-code";
import { Details } from "@/features/details";
import { Chat } from "@/features/chat";
import { Form } from "@/features/form";
import { Contacts } from "@/features/contacts";
import { Footer } from "@/features/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="min-h-screen w-full">
        <Welcome />
        <Timer />
        <Location />
        <Schedule />
        <DressCode />
        <Details />
        <Chat />
        <Form />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}
