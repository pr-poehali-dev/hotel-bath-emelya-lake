import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/d6c804f2-e95a-4710-b6ae-6e37f2458635.jpg";
const SAUNA_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/0a1c57eb-b496-4ac6-adce-6797dfdbf55a.jpg";
const ROOM_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/3018d43a-d9a1-442c-9c9e-f0db063f00f0.jpg";

const NAV_LINKS = [
  { label: "О комплексе", href: "#about" },
  { label: "Номера", href: "#rooms" },
  { label: "Трактир", href: "#traktir" },
  { label: "Бронирование", href: "#booking" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5EDE0] font-sans">
      {/* Шапка */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
        style={{ background: "rgba(245,237,224,0.95)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl text-[#7B3320]">Емеля</a>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="text-sm text-[#3D2212] hover:text-[#C17A2C] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2" style={{ background: "rgba(245,237,224,0.98)" }}>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="block py-2 text-sm text-[#3D2212] border-b border-[#C17A2C]/20"
                onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Герой */}
      <section className="relative min-h-screen flex items-center" style={{ paddingTop: 64 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 leading-tight">Емеля</h1>
          <p className="text-xl text-white/80 mb-8 max-w-lg">
            Гостинично-банный комплекс на берегу озера Банное в Башкирии
          </p>
          <a href="#booking" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-medium transition hover:opacity-90"
            style={{ background: "#C17A2C" }}>
            Забронировать домик
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </section>

      {/* О комплексе */}
      <section id="about" className="py-20 px-4 bg-[#FBF5E8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl text-[#7B3320] mb-4">О комплексе</h2>
            <p className="text-[#8C7E6E] leading-relaxed mb-6">
              Наш комплекс находится в живописной Башкирии, всего в 40 км западнее Магнитогорска,
              на берегу кристально чистого озера Банное (Якты-Куль).
            </p>
            <a href="#booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium"
              style={{ background: "#C17A2C" }}>
              Забронировать
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
          <img src={HERO_IMG} alt="Комплекс" className="w-full h-72 object-cover rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Номера */}
      <section id="rooms" className="py-20 px-4" style={{ background: "#F5EDE0" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-[#7B3320] text-center mb-12">Проживание</h2>

          {/* Домики */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { img: ROOM_IMG, name: "Домик 1", desc: "Уютный трёхкомнатный коттедж с видом на лес. Всё необходимое для комфортного отдыха до 6 человек." },
              { img: SAUNA_IMG, name: "Домик 2", desc: "Просторный коттедж с зоной барбекю и выходом на природу. Идеален для семей и компаний до 6 человек." },
              { img: HERO_IMG, name: "Домик 3", desc: "Уютный домик с панорамными окнами и открытой верандой. Отличный выбор для романтического отдыха." },
            ].map(r => (
              <div key={r.name} className="rounded-xl overflow-hidden shadow-md bg-[#FBF5E8]">
                <img src={r.img} alt={r.name} className="w-full h-52 object-cover" />
                <div className="p-5">
                  <h3 className="font-serif text-xl text-[#7B3320] mb-2">{r.name}</h3>
                  <p className="text-sm text-[#8C7E6E] mb-4 leading-relaxed">{r.desc}</p>
                  <a href="#booking" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-medium transition hover:opacity-90"
                    style={{ background: "#C17A2C" }}>
                    Забронировать
                    <Icon name="ArrowRight" size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Цены */}
          <h3 className="font-serif text-2xl text-[#7B3320] text-center mb-6">Цены за сутки до 6 человек</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: ROOM_IMG, title: "Будние дни", price: "6 000 руб." },
              { img: SAUNA_IMG, title: "Пятница–суббота", price: "8 300 руб." },
              { img: HERO_IMG, title: "Суббота–воскресенье", price: "9 500 руб." },
            ].map(r => (
              <div key={r.title} className="rounded-xl overflow-hidden shadow-md bg-[#FBF5E8]">
                <img src={r.img} alt={r.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <p className="text-sm text-[#8C7E6E] mb-1">{r.title}</p>
                  <p className="font-serif text-2xl text-[#7B3320]">{r.price}</p>
                  <p className="text-xs text-[#8C7E6E] mt-1">за сутки, до 6 человек</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Трактир */}
      <section id="traktir" className="py-20 px-4 bg-[#FBF5E8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={SAUNA_IMG} alt="Трактир" className="w-full h-72 object-cover rounded-lg shadow-lg" />
          <div>
            <h2 className="font-serif text-4xl text-[#7B3320] mb-4">Трактир</h2>
            <p className="text-[#8C7E6E] leading-relaxed">
              Уютный трактир с домашней русской кухней. Свежие фермерские продукты,
              фирменные блюда и приятная атмосфера.
            </p>
          </div>
        </div>
      </section>

      {/* Бронирование */}
      <section id="booking" className="py-20 px-4" style={{ background: "#F5EDE0" }}>
        <div className="max-w-lg mx-auto">
          <h2 className="font-serif text-4xl text-[#7B3320] text-center mb-8">Бронирование</h2>
          <form className="space-y-4 p-8 rounded-xl shadow-md bg-[#FBF5E8]"
            onSubmit={e => { e.preventDefault(); alert("Спасибо! Мы свяжемся с вами."); }}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1 uppercase tracking-wider text-[#C17A2C]">Заезд</label>
                <input type="date" required className="w-full px-3 py-3 rounded-lg text-sm outline-none bg-white border border-[#C17A2C]/30 text-[#3D2212]" />
              </div>
              <div>
                <label className="block text-xs mb-1 uppercase tracking-wider text-[#C17A2C]">Выезд</label>
                <input type="date" required className="w-full px-3 py-3 rounded-lg text-sm outline-none bg-white border border-[#C17A2C]/30 text-[#3D2212]" />
              </div>
            </div>
            <div>
              <label className="block text-xs mb-1 uppercase tracking-wider text-[#C17A2C]">Имя</label>
              <input type="text" required placeholder="Иван" className="w-full px-3 py-3 rounded-lg text-sm outline-none bg-white border border-[#C17A2C]/30 text-[#3D2212]" />
            </div>
            <div>
              <label className="block text-xs mb-1 uppercase tracking-wider text-[#C17A2C]">Телефон</label>
              <input type="tel" required placeholder="+7 (912) ..." className="w-full px-3 py-3 rounded-lg text-sm outline-none bg-white border border-[#C17A2C]/30 text-[#3D2212]" />
            </div>
            <button type="submit" className="w-full py-4 rounded-lg font-semibold text-white transition hover:opacity-90"
              style={{ background: "#C17A2C" }}>
              Забронировать домик
            </button>
          </form>
        </div>
      </section>

      {/* Контакты / Футер */}
      <footer id="contacts" style={{ background: "#4A5C3A" }} className="py-14 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-serif text-3xl mb-6" style={{ color: "#C17A2C" }}>Есть вопросы?<br />Свяжитесь с нами</h3>
            <div className="space-y-2">
              <a href="tel:+79128052242" className="block text-lg hover:underline" style={{ color: "#C17A2C" }}>+7 (912) 805-22-42</a>
              <a href="tel:+79048082512" className="block text-lg hover:underline" style={{ color: "#C17A2C" }}>+7 (904) 808-25-12</a>
              <a href="mailto:reception@nabannom.ru" className="block text-base hover:underline" style={{ color: "#C17A2C" }}>reception@nabannom.ru</a>
              <p className="text-sm mt-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                Респ. Башкортостан, Абзелиловский р-н, д. Зелёная Поляна, ул. Курортная, 15/1
              </p>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>© 2024 Гостинично-банный комплекс «Емеля»</p>
          </div>
        </div>
      </footer>
    </div>
  );
}