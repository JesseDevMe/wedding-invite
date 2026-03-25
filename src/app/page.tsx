import prisma from "@/services/db/model/prisma";
import { forbidden } from "next/navigation";
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

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ token: string | string[] | undefined }>;
}) {
  const tokenValue = (await searchParams)?.token;
  const token = Array.isArray(tokenValue) ? tokenValue[0] : tokenValue;

  const user = token
    ? await prisma.user.findFirst({
        where: {
          id: token,
        },
      })
    : null;

  if (!user) {
    forbidden();
  }

  const form = user
    ? await prisma.form.findFirst({
        where: {
          userId: user.id,
        },
      })
    : null;

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="min-h-screen w-full">
        <Welcome />
        <Timer />
        <Location />
        <Schedule />
        <DressCode />
        <Details />
        <Chat inviteLink={user.inviteLink ?? ""} />
        <Form userId={user.id} form={form ?? undefined} />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}
