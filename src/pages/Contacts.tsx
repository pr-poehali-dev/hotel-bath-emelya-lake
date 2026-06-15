import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";
import BookingWidget from "@/components/BookingWidget";

export default function Contacts() {
  return (
    <Layout>
      <section className="py-16 px-4 bg-[#FBF5E8]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-[#7B3320] mb-4">Контакты</h1>
          <p className="text-[#8C7E6E] max-w-xl mx-auto leading-relaxed">
            Свяжитесь с нами любым удобным способом — ответим быстро.
          </p>
        </div>
      </section>

      <section className="py-12 px-4" style={{ background: "#F5EDE0" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Контактная информация */}
          <div className="bg-[#FBF5E8] rounded-2xl p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-[#7B3320] mb-6">Как связаться</h2>
            <div className="space-y-5">
              <a href="tel:+79128052242" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition group-hover:opacity-90" style={{ background: "#C17A2C" }}>
                  <Icon name="Phone" size={18} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p className="text-xs text-[#8C7E6E] mb-0.5">Телефон</p>
                  <p className="text-[#3D2212] font-medium group-hover:text-[#C17A2C] transition">+7 (912) 805-22-42</p>
                </div>
              </a>
              <a href="tel:+79048082512" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#C17A2C" }}>
                  <Icon name="Phone" size={18} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p className="text-xs text-[#8C7E6E] mb-0.5">Телефон</p>
                  <p className="text-[#3D2212] font-medium group-hover:text-[#C17A2C] transition">+7 (904) 808-25-12</p>
                </div>
              </a>
              <a href="mailto:reception@nabannom.ru" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#C17A2C" }}>
                  <Icon name="Mail" size={18} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p className="text-xs text-[#8C7E6E] mb-0.5">Email</p>
                  <p className="text-[#3D2212] font-medium group-hover:text-[#C17A2C] transition">reception@nabannom.ru</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#C17A2C" }}>
                  <Icon name="MapPin" size={18} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p className="text-xs text-[#8C7E6E] mb-0.5">Адрес</p>
                  <p className="text-[#3D2212] text-sm leading-relaxed">Респ. Башкортостан, Абзелиловский р-н,<br />д. Зелёная Поляна, ул. Курортная, 15/1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Модуль бронирования */}
          <div className="bg-[#FBF5E8] rounded-2xl p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-[#7B3320] mb-6">Забронировать</h2>
            <BookingWidget />
          </div>
        </div>

        {/* Яндекс карта */}
        <div className="max-w-4xl mx-auto mt-8 rounded-2xl overflow-hidden shadow-sm" style={{ height: 400 }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=58.700000%2C53.350000&z=14&pt=58.700000,53.350000,pm2rdm~&text=%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD%2C%20%D0%90%D0%B1%D0%B7%D0%B5%D0%BB%D0%B8%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%2C%20%D0%97%D0%B5%D0%BB%D1%91%D0%BD%D0%B0%D1%8F%20%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D0%B0%2C%20%D0%9A%D1%83%D1%80%D0%BE%D1%80%D1%82%D0%BD%D0%B0%D1%8F%2015%2F1"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
            title="Карта — Гостевой комплекс Емеля"
            style={{ border: 0 }}
          />
        </div>

        {/* Как добраться */}
        <div className="max-w-4xl mx-auto mt-8 bg-[#FBF5E8] rounded-2xl p-8 shadow-sm">
          <h2 className="font-serif text-2xl text-[#7B3320] mb-5">Как добраться</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "Car", title: "На автомобиле", desc: "40 км западнее Магнитогорска по трассе Р-254. Поворот на Зелёную Поляну, затем по указателям к озеру Банное." },
              { icon: "Train", title: "На поезде", desc: "До станции Магнитогорск, далее такси или автобус до озера Банное (~40 мин)." },
              { icon: "Plane", title: "На самолёте", desc: "Аэропорт Магнитогорск (МАГ), далее 40 км на такси до комплекса." },
            ].map(r => (
              <div key={r.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#C17A2C" }}>
                  <Icon name={r.icon as "Car"} size={16} style={{ color: "#fff" }} />
                </div>
                <div>
                  <p className="font-medium text-[#3D2212] mb-1">{r.title}</p>
                  <p className="text-sm text-[#8C7E6E] leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}