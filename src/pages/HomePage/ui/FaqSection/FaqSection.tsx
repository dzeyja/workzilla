'use client'

import { useState } from "react";

const faqs = [
  { question: "Что такое WorkZilla?", answer: "WorkZilla — это биржа фриланса, где исполнители находят заказы." },
  { question: "Какие преимущества работы на WorkZilla?", answer: "Преимущества: удобный интерфейс, быстрые выплаты и поддержка." },
  { question: "Как повысить свои шансы на получение задания?", answer: "Заполните профиль, получите рейтинги и делайте тестовые задания." },
  { question: "Как получить отзыв от заказчика?", answer: "Выполните задание качественно и попросите заказчика оставить отзыв." },
  { question: "Какие задания я могу найти на WorkZilla?", answer: "Разработка, дизайн, копирайтинг, маркетинг и многое другое." },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto my-20">
      <div className="text-[40px] text-[var(--primary-color)] font-bold text-center mb-6">Вопросы и ответы</div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <button
              className="w-full px-5 py-3 text-left bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="px-5 py-3 bg-gray-100">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

