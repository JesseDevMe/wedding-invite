"use server";

import prisma from "@/services/db/model/prisma";

export type SaveFormInput = {
  userId: string;
  willCome: "yes" | "no";
  preferencesDrinks: string[];
  preferencesDrinksCustom: string;
  musicPreferences: string;
};

function assertNonEmptyString(value: unknown, name: string): asserts value is string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${name} is required`);
  }
}

function asStringArray(value: unknown): string[] {
  return Array.isArray(value) && value.every((v) => typeof v === "string")
    ? value
    : [];
}

export async function saveForm(input: SaveFormInput) {
  assertNonEmptyString(input?.userId, "userId");

  const willCome = input.willCome;
  if (willCome !== "yes" && willCome !== "no") {
    throw new Error("willCome must be yes|no");
  }

  const preferencesDrinks =
    willCome === "no" ? [] : asStringArray(input.preferencesDrinks);
  const preferencesDrinksCustom =
    willCome === "no" ? "" : (input.preferencesDrinksCustom ?? "");
  const musicPreferences = willCome === "no" ? "" : (input.musicPreferences ?? "");

  const user = await prisma.user.findUnique({
    where: { id: input.userId },
    select: { id: true },
  });
  if (!user) {
    throw new Error("Forbidden");
  }

  const data =
    willCome === "no"
      ? {
          willCome,
          preferencesDrinks: [] as string[],
          preferencesDrinksCustom: "",
          musicPreferences: "",
        }
      : {
          willCome,
          preferencesDrinks,
          preferencesDrinksCustom,
          musicPreferences,
        };

  const saved = await prisma.form.upsert({
    where: { userId: input.userId },
    create: {
      ...data,
      user: { connect: { id: input.userId } },
    },
    update: data,
    select: { id: true },
  });

  return { ok: true as const, formId: saved.id };
}

