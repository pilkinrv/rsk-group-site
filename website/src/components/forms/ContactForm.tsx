"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const errs: Partial<typeof form> = {};
    if (!form.name.trim()) errs.name = "Введите ваше имя";
    if (!form.contact.trim()) {
      errs.contact = "Укажите телефон или email";
    } else if (
      !/^[\d\s\-\+\(\)]{7,}$/.test(form.contact) &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact)
    ) {
      errs.contact = "Некорректный телефон или email";
    }
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, contact: form.contact, message: form.message }),
      });
      if (!res.ok) throw new Error("server_error");
      setSubmitted(true);
    } catch {
      setErrors({ contact: "Не удалось отправить. Напишите напрямую: mail@rsc-groupp.ru" });
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <CheckCircle className="w-14 h-14 text-amber-600 mx-auto mb-4" />
        <p className="text-zinc-900 font-semibold text-lg mb-2">Заявка отправлена!</p>
        <p className="text-zinc-500">
          Мы ответим вам в течение рабочего дня. Пн–Пт 8:00–17:00.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label className="block text-sm text-zinc-600 mb-1">
          Ваше имя <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Иван Иванов"
          autoComplete="name"
          className={`w-full px-4 py-2.5 bg-white border rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition ${
            errors.name ? "border-red-500" : "border-zinc-200"
          }`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm text-zinc-600 mb-1">
          Телефон или email <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={form.contact}
          onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
          placeholder="+7 960 079-68-53 или mail@example.ru"
          className={`w-full px-4 py-2.5 bg-white border rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition ${
            errors.contact ? "border-red-500" : "border-zinc-200"
          }`}
        />
        {errors.contact && (
          <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-zinc-600 mb-1">Сообщение</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Опишите ваш запрос..."
          className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 amber-btn disabled:opacity-60 disabled:cursor-not-allowed rounded-xl"
      >
        {loading ? "Отправляем..." : "Отправить заявку"}
      </button>

      <p className="text-zinc-500 text-xs text-center">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/politika-konfidentsialnosti" className="underline hover:text-amber-600 transition">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
