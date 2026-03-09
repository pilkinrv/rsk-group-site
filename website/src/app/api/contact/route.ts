import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, message } = body as {
      name?: string;
      contact?: string;
      message?: string;
    };

    if (!name?.trim() || !contact?.trim()) {
      return NextResponse.json(
        { error: "Имя и контакт обязательны" },
        { status: 400 }
      );
    }

    // --- Telegram ---
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const text =
        `✉️ *Новое сообщение с сайта РСК ГРУПП*\n\n` +
        `👤 Имя: ${name}\n` +
        `📬 Контакт: ${contact}\n` +
        (message ? `💬 Сообщение: ${message}\n` : "") +
        `🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`;

      const tgRes = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (!tgRes.ok) {
        const errText = await tgRes.text();
        console.error("Telegram error:", errText);
        return NextResponse.json(
          { error: "Не удалось отправить сообщение. Позвоните нам: +7 960 079-68-53" },
          { status: 502 }
        );
      }
    } else {
      console.info("[Contact request]", { name, contact, message, ts: new Date().toISOString() });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
