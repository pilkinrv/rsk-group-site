export const metadata = {
  title: "Политика конфиденциальности — РСК ГРУПП",
};

export default function PolitikaPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <h1 className="text-4xl font-bold mb-8 text-zinc-900 inline-block">Политика конфиденциальности</h1>
      <div className="prose max-w-none text-zinc-600 space-y-6 prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-a:text-amber-600 prose-a:hover:text-amber-700">
        <p>
          ООО «РСК ГРУПП» (ИНН 1657223686) уважает конфиденциальность пользователей
          и обязуется защищать персональные данные в соответствии с Федеральным законом
          № 152-ФЗ «О персональных данных».
        </p>
        <h2 className="text-xl font-semibold text-zinc-900">Какие данные мы собираем</h2>
        <p>
          При заполнении форм на сайте мы можем собирать: имя, телефон, email, название
          компании и должность. Данные используются исключительно для обратной связи
          и не передаются третьим лицам без вашего согласия.
        </p>
        <h2 className="text-xl font-semibold text-zinc-900">Как мы используем данные</h2>
        <p>
          Данные используются для: ответа на ваши запросы, предоставления технических
          материалов (BIM, IES), улучшения качества обслуживания.
        </p>
        <h2 className="text-xl font-semibold text-zinc-900">Ваши права</h2>
        <p>
          Вы вправе запросить удаление, исправление или получение копии своих данных.
          Для этого свяжитесь с нами по email:{" "}
          <a href="mailto:mail@rsc-groupp.ru" className="text-amber-600 hover:text-amber-700 transition">
            mail@rsc-groupp.ru
          </a>
        </p>
        <h2 className="text-xl font-semibold text-zinc-900">Cookies</h2>
        <p>
          Сайт использует cookies для улучшения работы. Продолжая использование сайта,
          вы соглашаетесь с их использованием.
        </p>
      </div>
    </div>
  );
}
