"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

interface CallbackFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export function CallbackForm({ onSuccess, compact = false }: CallbackFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const errs: { name?: string; phone?: string } = {};
    if (!name.trim()) errs.name = "Введите ваше имя";
    if (!phone.trim()) {
      errs.phone = "Введите номер телефона";
    } else if (!/^[\d\s\-\+\(\)]{7,}$/.test(phone)) {
      errs.phone = "Некорректный номер телефона";
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
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      if (!res.ok) throw new Error("server_error");
      setSubmitted(true);
      onSuccess?.();
    } catch {
      setErrors({ phone: "Не удалось отправить заявку. Позвоните нам напрямую: +7 960 079-68-53" });
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <Phone className="w-6 h-6 text-amber-600" />
        </div>
        <p className="text-zinc-900 font-semibold mb-1">Заявка принята!</p>
        <p className="text-zinc-600 text-sm">
          Мы перезвоним вам в ближайшее время в рабочие часы (Пн–Пт 8:00–17:00)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-4"} noValidate>
      <div>
        <label className="block text-sm text-zinc-600 mb-1">
          Ваше имя <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Иван Иванов"
          autoComplete="name"
          className={`w-full px-4 py-2.5 bg-white border rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 transition ${
            errors.name ? "border-red-500" : "border-zinc-200"
          }`}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm text-zinc-600 mb-1">
          Телефон <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 960 079-68-53"
          autoComplete="tel"
          className={`w-full px-4 py-2.5 bg-white border rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-amber-500 transition ${
            errors.phone ? "border-red-500" : "border-zinc-200"
          }`}
        />
        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 amber-btn disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition shadow-lg shadow-amber-600/25"
      >
        {loading ? "Отправляем..." : "Заказать звонок"}
      </button>

      <p className="text-zinc-500 text-xs text-center">
        Нажимая кнопку, вы соглашаетесь с{" "}
          <a href="/politika-konfidentsialnosti" className="underline hover:text-amber-600 transition text-zinc-600">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
