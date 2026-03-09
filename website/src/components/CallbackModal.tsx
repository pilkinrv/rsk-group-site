"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { CallbackForm } from "@/components/forms/CallbackForm";

interface CallbackModalProps {
  open: boolean;
  onClose: () => void;
}

export function CallbackModal({ open, onClose }: CallbackModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Заказать звонок"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-900 rounded-lg hover:bg-zinc-100 transition"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-zinc-900 mb-1">Заказать звонок</h2>
        <p className="text-zinc-600 text-sm mb-6">
          Оставьте контакты — перезвоним в течение рабочего дня
        </p>

        <CallbackForm onSuccess={() => setTimeout(onClose, 2000)} compact />
      </div>
    </div>
  );
}
