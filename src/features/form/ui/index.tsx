"use client";

import { useState } from "react";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { saveForm } from "../actions";
import { FormModel as FormType } from "@/services/db/prisma/models/Form";

const formConfig = [
  {
    id: "will-come",
    title: "Вы придете?",
    type: "radio",
    options: [
      { label: "С радостью приду", value: "yes" },
      { label: "К сожалению, не смогу", value: "no" },
    ],
  },
  {
    id: "preferences-drinks",
    title: "Предпочтения по напиткам",
    type: "checkbox",
    options: [
      { label: "Вино красное", value: "red-wine" },
      { label: "Вино белое", value: "white-wine" },
      { label: "Шампанское", value: "champagne" },
      { label: "Виски", value: "whiskey" },
      { label: "Коньяк", value: "cognac" },
      { label: "Водка", value: "vodka" },
      { label: "Безалкогольные", value: "non-alcoholic" },
      { label: "Пью все", value: "all" },
    ],
    hasCustomInput: true,
    customInputPlaceholder: "Ваш вариант (необязательно)",
  },
  {
    id: "music-preferences",
    title: "Выбор музыки",
    subtitle: "(необязательно)",
    type: "textarea",
    placeholder:
      "Напишите исполнителей или названия песен, которые вы бы хотели услышать",
  },
];

interface FormData {
  "will-come": string;
  "preferences-drinks": string[];
  "preferences-drinks-custom": string;
  "music-preferences": string;
}

type Props = {
  userId: string;
  form?: FormType;
};

export const Form = ({ userId, form }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    "will-come": form?.willCome ?? "",
    "preferences-drinks": form?.preferencesDrinks ?? [],
    "preferences-drinks-custom": form?.preferencesDrinksCustom ?? "",
    "music-preferences": form?.musicPreferences ?? "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRadioChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleCheckboxChange = (fieldId: string, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[fieldId as keyof FormData] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [fieldId]: newValues };
    });
  };

  const handleTextChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (formData["will-come"] === "") {
      alert("Пожалуйста, выберите, придете ли вы на свадьбу");
      return;
    }
    const willCome = formData["will-come"];
    const preferencesDrinks =
      willCome === "no" ? [] : formData["preferences-drinks"];
    const preferencesDrinksCustom =
      willCome === "no" ? "" : formData["preferences-drinks-custom"];
    const musicPreferences =
      willCome === "no" ? "" : formData["music-preferences"];

    if (
      willCome !== "no" &&
      preferencesDrinks.length === 0 &&
      preferencesDrinksCustom.trim() === ""
    ) {
      alert("Пожалуйста, выберите, какие напитки вам предпочтительнее");
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    try {
      await saveForm({
        userId,
        willCome: willCome === "yes" ? "yes" : "no",
        preferencesDrinks,
        preferencesDrinksCustom,
        musicPreferences,
      });

      setIsSubmitted(true);
    } catch {
      alert("Не удалось отправить анкету. Попробуйте еще раз позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="flex flex-col gap-10 max-w-[600px]">
      <div className="text-center">
        <h2 className="font-serif text-[32px] text-wine font-semibold">
          Анкета гостя
        </h2>
        <p className="mt-4">
          Чтобы сделать празднование более комфортным, пожалуйста, заполните
          анкету и подтвердите ваше присутствие до{" "}
          <span className="font-medium text-2xl">13.05.2026</span>
        </p>
      </div>

      <form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
        style={{ pointerEvents: !!form ? "none" : "auto" }}
      >
        {formConfig.map((field) => (
          <div key={field.id} className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">
              {field.title}
              {field.subtitle && (
                <span className="font-normal"> {field.subtitle}</span>
              )}
            </h3>

            {(field.type === "checkbox" || field.type === "radio") &&
              field.options && (
                <div className="flex flex-col gap-3">
                  {field.options.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type={field.type}
                        name={field.id}
                        value={option.value}
                        checked={
                          field.type === "radio"
                            ? formData[field.id as keyof FormData] ===
                              option.value
                            : (
                                formData[field.id as keyof FormData] as string[]
                              ).includes(option.value)
                        }
                        onChange={() =>
                          field.type === "radio"
                            ? handleRadioChange(field.id, option.value)
                            : handleCheckboxChange(field.id, option.value)
                        }
                        className="w-5 h-5 accent-wine border-2 border-gray-400 rounded cursor-pointer"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}

                  {field.hasCustomInput && (
                    <input
                      type="text"
                      placeholder={field.customInputPlaceholder}
                      value={
                        formData[
                          `${field.id}-custom` as keyof FormData
                        ] as string
                      }
                      onChange={(e) =>
                        handleTextChange(`${field.id}-custom`, e.target.value)
                      }
                      className="mt-2 px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-wine"
                    />
                  )}
                </div>
              )}

            {field.type === "textarea" && (
              <textarea
                placeholder={field.placeholder}
                value={formData[field.id as keyof FormData] as string}
                onChange={(e) => handleTextChange(field.id, e.target.value)}
                rows={4}
                className="px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-wine resize-none"
              />
            )}
          </div>
        ))}
        {!form && (
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting || !!form}
          >
            {isSubmitting ? "Отправка..." : "Отправить"}
          </Button>
        )}
        {(isSubmitted || !!form) && (
          <p className="text-center font-medium">Спасибо! Анкета отправлена.</p>
        )}
      </form>
    </Container>
  );
};
