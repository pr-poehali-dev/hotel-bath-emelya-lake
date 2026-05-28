import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

/* ── Изображения ── */
const HERO_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/d6c804f2-e95a-4710-b6ae-6e37f2458635.jpg";
const SAUNA_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/0a1c57eb-b496-4ac6-adce-6797dfdbf55a.jpg";
const ROOM_IMG  = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/3018d43a-d9a1-442c-9c9e-f0db063f00f0.jpg";
const BANYA_ICON = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/6c6c783a-d08a-4e13-a7c0-6a1f9703c728.png";

/* ── Контакты ── */
const PHONE1 = "+7 (912) 805-22-42";
const PHONE2 = "+7 (904) 808-25-12";
const EMAIL  = "reception@nabannom.ru";
const ADDRESS = "Респ. Башкортостан, Абзелиловский р-н, д. Зелёная Поляна, ул. Курортная, 15/1";

/* ── Навигация ── */
const NAV_LEFT  = ["О комплексе", "Проживание", "Трактир", "Прачечная"];
const NAV_RIGHT = ["Бронирование", "Спецпредложения", "Услуги", "Контакты"];
const NAV_MAP: Record<string, string> = {
  "О комплексе":   "#about",
  "Проживание":    "#prozhivanie",
  "Трактир":       "#traktir",
  "Прачечная":     "#prachechnaya",
  "Бронирование":  "#booking",
  "Спецпредложения":"#spets",
  "Услуги":        "#uslugi",
  "Контакты":      "#contacts",
};

/* ── Вспомогательные компоненты ── */
const C = {
  bg:   "#F5EDE0",
  bgDk: "#EDE1CC",
  brown:"#7B3320",
  amber:"#C17A2C",
  forest:"#4A5C3A",
  cream:"#FBF5E8",
  smoke:"#8C7E6E",
  bark: "#3D2212",
};

function Divider({ light = false }: { light?: boolean }) {
  const col = light ? "rgba(245,237,216,0.5)" : C.amber;
  return (
    <div className="flex items-center justify-center gap-2 my-4">
      <svg width="40" height="12" viewBox="0 0 40 12"><path d="M0 6 Q10 0 20 6 Q30 12 40 6" stroke={col} strokeWidth="1.5" fill="none"/></svg>
      <span style={{ color: col, fontSize: 16 }}>✦</span>
      <svg width="40" height="12" viewBox="0 0 40 12"><path d="M0 6 Q10 12 20 6 Q30 0 40 6" stroke={col} strokeWidth="1.5" fill="none"/></svg>
    </div>
  );
}

function SectionTitle({ children, light = false, center = true }: { children: React.ReactNode; light?: boolean; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="font-serif text-4xl md:text-5xl mb-1" style={{ color: light ? C.cream : C.brown, fontWeight: 400 }}>
        {children}
      </h2>
      <Divider light={light} />
    </div>
  );
}

function BookingBtn({ label = "Забронировать домик", href = "#booking" }: { label?: string; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-lg font-medium transition-all duration-200 hover:opacity-90"
      style={{ background: C.amber, color: "#fff", fontFamily: "'Golos Text', sans-serif", fontSize: 15 }}
    >
      {label}
      <span style={{ fontSize: 20, letterSpacing: -4 }}>»→</span>
    </a>
  );
}

function InfoBlock() {
  return (
    <section className="py-16 px-4 text-center" style={{ background: C.bg }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: C.brown }}>
          Нет времени на телефонные звонки?
        </h2>
        <p className="text-base mb-8" style={{ color: C.smoke, fontFamily: "'Golos Text', sans-serif", lineHeight: 1.7 }}>
          Хотите заказать номер максимально быстро и с уверенностью в том, что он точно будет готов для Вас
          в назначенное время? Воспользуйтесь формой онлайн-бронирования на официальном сайте отеля «Емеля»
          и получайте самые актуальные цены!
        </p>
        <BookingBtn />
      </div>
    </section>
  );
}

function PikeFooter() {
  return (
    <footer style={{ background: C.forest }} className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 relative z-10">
        <div>
          <h3 className="font-serif text-4xl mb-2" style={{ color: C.amber, fontWeight: 400 }}>
            Есть вопросы?
          </h3>
          <h3 className="font-serif text-4xl mb-8" style={{ color: C.amber, fontWeight: 400 }}>
            Свяжитесь с нами
          </h3>
          <div className="space-y-3">
            <a href={`tel:${PHONE1.replace(/\D/g,"")}`} className="block text-lg hover:underline" style={{ color: C.amber, fontFamily: "'Golos Text', sans-serif" }}>{PHONE1}</a>
            <a href={`tel:${PHONE2.replace(/\D/g,"")}`} className="block text-lg hover:underline" style={{ color: C.amber, fontFamily: "'Golos Text', sans-serif" }}>{PHONE2}</a>
            <a href={`mailto:${EMAIL}`} className="block text-lg hover:underline" style={{ color: C.amber, fontFamily: "'Golos Text', sans-serif" }}>{EMAIL}</a>
            <p className="text-base mt-4" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Golos Text', sans-serif" }}>{ADDRESS}</p>
          </div>
        </div>
        <div className="flex items-end justify-end">
          <img
            src="https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/0a1c57eb-b496-4ac6-adce-6797dfdbf55a.jpg"
            alt=""
            className="w-64 h-48 object-cover rounded-lg opacity-30"
            style={{ display: "none" }}
          />
          {/* щука-декорация SVG-placeholder */}
          <div className="text-right">
            <div className="font-serif text-6xl" style={{ color: "rgba(255,255,255,0.08)" }}>🐟</div>
            <p className="text-xs mt-6" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Golos Text', sans-serif" }}>
              © 2024 Гостинично-банный комплекс «Емеля»
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════ */
export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookDates, setBookDates] = useState({ from: "", to: "" });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Ваша заявка принята. Свяжемся с вами в ближайшее время.");
  };

  return (
    <div style={{ background: C.bg, fontFamily: "'Golos Text', sans-serif" }}>

      {/* ══ ШАПКА ══ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(245,237,224,0.97)" : "rgba(245,237,224,0.92)",
          backdropFilter: "blur(8px)",
          boxShadow: scrolled ? "0 2px 20px rgba(61,34,18,0.1)" : "none",
          borderBottom: `1px solid rgba(193,122,44,0.2)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          {/* левые ссылки */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LEFT.map(l => (
              <a key={l} href={NAV_MAP[l]} className="text-sm font-medium hover:underline transition-colors"
                style={{ color: C.bark, fontFamily: "'Golos Text', sans-serif" }}>
                {l}
              </a>
            ))}
          </nav>

          {/* Логотип по центру */}
          <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
            <img src={BANYA_ICON} alt="Баня" className="w-12 h-12 object-contain" />
            <span className="font-serif text-2xl" style={{ color: C.brown }}>Емеля</span>
          </a>

          {/* правые ссылки */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_RIGHT.map(l => (
              <a key={l} href={NAV_MAP[l]} className="text-sm font-medium hover:underline transition-colors"
                style={{ color: C.brown, fontFamily: "'Golos Text', sans-serif", fontWeight: 600 }}>
                {l}
              </a>
            ))}
          </nav>

          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} style={{ color: C.bark }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-4 pb-4 space-y-1" style={{ background: "rgba(245,237,224,0.98)" }}>
            {[...NAV_LEFT, ...NAV_RIGHT].map(l => (
              <a key={l} href={NAV_MAP[l]} className="block py-2 text-sm border-b"
                style={{ color: C.bark, borderColor: "rgba(193,122,44,0.15)" }}
                onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ══ ГЕРОЙ ══ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: 64 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(61,34,18,0.75) 0%, rgba(61,34,18,0.35) 60%, rgba(61,34,18,0.1) 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-20">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl mb-4 leading-tight" style={{ color: "#FBF5E8" }}>
              Гостевые дома для прекрасного отдыха
            </h1>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(251,245,232,0.8)" }}>
              Идеальное место, чтобы отдохнуть: с семьёй, с друзьями или наедине с собой.
              Здесь вы сможете расслабиться, восстановить силы и насладиться природой.
            </p>

            {/* Мини-форма дат */}
            <form onSubmit={handleBook} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg" style={{ background: C.amber }}>
                <Icon name="Calendar" size={16} style={{ color: "#fff", flexShrink: 0 }} />
                <input
                  type="date"
                  value={bookDates.from}
                  onChange={e => setBookDates({ ...bookDates, from: e.target.value })}
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder-white"
                  style={{ colorScheme: "dark", fontFamily: "'Golos Text', sans-serif" }}
                  placeholder="Дата заезда"
                />
                <span style={{ color: "rgba(255,255,255,0.6)" }}>–</span>
                <input
                  type="date"
                  value={bookDates.to}
                  onChange={e => setBookDates({ ...bookDates, to: e.target.value })}
                  className="flex-1 bg-transparent text-white text-sm outline-none"
                  style={{ colorScheme: "dark", fontFamily: "'Golos Text', sans-serif" }}
                />
                <span style={{ color: "#fff", fontSize: 18, letterSpacing: -4 }}>»→</span>
              </div>
            </form>
          </div>
        </div>

        {/* Иконки преимуществ */}
        <div className="absolute bottom-0 left-0 right-0 py-6" style={{ background: "rgba(245,237,224,0.92)", backdropFilter: "blur(4px)" }}>
          <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8">
            {[
              { icon: "Home", label: "Трёхкомнатные домики до 6 чел." },
              { icon: "Wifi", label: "Бесплатный Wi-Fi" },
              { icon: "BellRing", label: "Круглосуточная стойка регистрации" },
              { icon: "Trees", label: "Детская площадка" },
            ].map(f => (
              <div key={f.label} className="flex flex-col items-center gap-1.5 text-center max-w-28">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(193,122,44,0.12)" }}>
                  <Icon name={f.icon} size={20} style={{ color: C.amber }} />
                </div>
                <span className="text-xs leading-tight" style={{ color: C.bark }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ О КОМПЛЕКСЕ ══ */}
      <section id="about" className="py-20 px-4" style={{ background: C.cream }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle center={false}>О комплексе</SectionTitle>
            <p className="text-base leading-relaxed mt-4 mb-8" style={{ color: C.smoke }}>
              Наш комплекс находится в живописной Башкирии, всего в 40 км западнее Магнитогорска,
              на берегу кристально чистого озера Банное (Якты-Куль). Рядом расположены санаторий «Юбилейный»
              и дом отдыха «Берёзки», а до горнолыжного центра «Металлург-Магнитогорск» — всего 800 метров.
            </p>
            <BookingBtn />
          </div>
          <div className="relative">
            <img src={HERO_IMG} alt="Комплекс Емеля" className="w-full h-72 object-cover rounded-lg shadow-lg" />
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-lg -z-10" style={{ border: "2px solid rgba(193,122,44,0.3)" }} />
          </div>
        </div>

        {/* Фото */}
        <div className="max-w-6xl mx-auto mt-16">
          <SectionTitle>✦ Фото ✦</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
            {[HERO_IMG, ROOM_IMG, SAUNA_IMG, ROOM_IMG, HERO_IMG, SAUNA_IMG].map((img, i) => (
              <img key={i} src={img} alt="" className="w-full h-48 object-cover rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      <InfoBlock />

      {/* ══ ПРОЖИВАНИЕ ══ */}
      <section id="prozhivanie" className="py-20 px-4" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <SectionTitle center={false}>Проживание</SectionTitle>
            <p className="text-base leading-relaxed mt-4 mb-6" style={{ color: C.smoke }}>
              В вашем распоряжении — уютные трёхкомнатные коттеджи, рассчитанные на 6 человек и оснащённые
              всем необходимым для комфортного отдыха.
            </p>
            <BookingBtn />
          </div>
          <div>
            <img src={ROOM_IMG} alt="Проживание" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>

        {/* Инфраструктура */}
        <div className="max-w-5xl mx-auto">
          <SectionTitle>✦ Инфраструктура ✦</SectionTitle>
          <div className="flex flex-wrap justify-center gap-10 mt-8">
            {[
              { icon: "Home", label: "Трёхкомнатные домики до 6 чел." },
              { icon: "Flame", label: "Зона барбекю с принадлежностями" },
              { icon: "Wifi", label: "Бесплатный Wi-Fi" },
              { icon: "BellRing", label: "Круглосуточная стойка регистрации" },
              { icon: "Trees", label: "Детская площадка" },
            ].map(f => (
              <div key={f.label} className="flex flex-col items-center gap-2 text-center max-w-28">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(193,122,44,0.12)" }}>
                  <Icon name={f.icon} size={22} style={{ color: C.amber }} />
                </div>
                <span className="text-xs leading-tight" style={{ color: C.bark }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Цены */}
        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="font-serif text-3xl mb-2" style={{ color: C.brown }}>Цены</h3>
          <p className="text-sm mb-8" style={{ color: C.smoke }}>За сутки аренды с проживанием до 6 человек</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Будние дни", price: "6 000 руб.", img: ROOM_IMG },
              { label: "С пятницы по субботу", price: "8 300 руб.", img: SAUNA_IMG },
              { label: "С субботы по воскресенье", price: "9 500 руб.", img: HERO_IMG },
            ].map(p => (
              <div key={p.label} className="rounded-lg overflow-hidden shadow-md" style={{ background: C.cream }}>
                <img src={p.img} alt={p.label} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <p className="text-sm mb-1" style={{ color: C.smoke }}>{p.label}</p>
                  <p className="font-serif text-2xl" style={{ color: C.brown }}>{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Почему мы */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="font-serif text-3xl mb-4" style={{ color: C.brown }}>Почему стоит выбрать нас?</h3>
          <p className="text-base leading-relaxed" style={{ color: C.smoke }}>
            Отдых в «Емеле» — это комфорт, природа и гостеприимство по доступной цене.
            Подарите себе и близким незабываемые впечатления у озера Банного!
          </p>
        </div>
      </section>

      <InfoBlock />

      {/* ══ ТРАКТИР ══ */}
      <section id="traktir" className="py-20 px-4" style={{ background: C.cream }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <SectionTitle center={false}>Трактир с домашней русской кухней</SectionTitle>
              <p className="text-base leading-relaxed mt-4" style={{ color: C.smoke }}>
                В нашем уютном трактире вас ждут аутентичные блюда русской кухни и напитки по домашним рецептам.
                Мы используем только свежие фермерские продукты. Наши фирменные блюда позволяют полностью отвлечься
                от искусственных добавок, вернуть вкус и аромат «Емели».
              </p>
            </div>
            <img src={SAUNA_IMG} alt="Трактир" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>

          <SectionTitle>✦ Меню ✦</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Завтраки */}
            <div className="p-6 rounded-lg" style={{ background: C.bg }}>
              <h4 className="font-serif text-xl mb-4" style={{ color: C.brown }}>Завтраки</h4>
              {[
                { name: "Молочная каша", w: "300 г", price: "200 р" },
                { name: "Яичница", w: "150 г", price: "160 р" },
                { name: "Ленивые вареники", w: "200 г", price: "215 р" },
                { name: "Омлет", w: "150 г", price: "165 р" },
                { name: "Блинчики со сметаной", w: "180 г", price: "165 р" },
                { name: "Пельмени", w: "300 г / 150 г", price: "240 / 120 р" },
                { name: "Лапша домашняя", w: "—", price: "" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b" style={{ borderColor: "rgba(193,122,44,0.15)" }}>
                  <span className="text-sm" style={{ color: C.bark }}>{i.name} {i.w && <span style={{ color: C.smoke, fontSize: 11 }}>{i.w}</span>}</span>
                  <span className="text-sm font-medium ml-3" style={{ color: C.brown }}>{i.price}</span>
                </div>
              ))}
            </div>

            {/* Блины */}
            <div className="p-6 rounded-lg" style={{ background: C.bg }}>
              <h4 className="font-serif text-xl mb-4" style={{ color: C.brown }}>Блины</h4>
              {[
                { name: "Блины со сгущёнкой и орехами", w: "447 г", price: "380 р" },
                { name: "Блины с вареньем", w: "374 г", price: "250 р" },
                { name: "Блины со сметаной", w: "350 г", price: "140 р" },
                { name: "Блины с мёдом", w: "350 г", price: "190 р" },
                { name: "Блины с творогом", w: "350 г", price: "180 р" },
                { name: "Блины с ягодами", w: "350 г", price: "280 р" },
                { name: "Блины с грибами и картофелем", w: "350 г", price: "195 р" },
                { name: "Блины с мясом и картофелем", w: "350 г", price: "195 р" },
                { name: "Блины с семгой", w: "350 г", price: "390 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b" style={{ borderColor: "rgba(193,122,44,0.15)" }}>
                  <span className="text-sm" style={{ color: C.bark }}>{i.name} <span style={{ color: C.smoke, fontSize: 11 }}>{i.w}</span></span>
                  <span className="text-sm font-medium ml-3" style={{ color: C.brown }}>{i.price}</span>
                </div>
              ))}
            </div>

            {/* Салаты */}
            <div className="p-6 rounded-lg" style={{ background: C.bg }}>
              <h4 className="font-serif text-xl mb-4" style={{ color: C.brown }}>Салаты</h4>
              {[
                { name: "Оливье", w: "180 г", price: "200 р" },
                { name: "Сталт «Емеля»", w: "160 г", price: "180 р" },
                { name: "Сталт «Пикник»", w: "160 г", price: "280 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b" style={{ borderColor: "rgba(193,122,44,0.15)" }}>
                  <span className="text-sm" style={{ color: C.bark }}>{i.name} <span style={{ color: C.smoke, fontSize: 11 }}>{i.w}</span></span>
                  <span className="text-sm font-medium ml-3" style={{ color: C.brown }}>{i.price}</span>
                </div>
              ))}
            </div>

            {/* Горячие блюда */}
            <div className="p-6 rounded-lg" style={{ background: C.bg }}>
              <h4 className="font-serif text-xl mb-4" style={{ color: C.brown }}>Горячие блюда</h4>
              {[
                { name: "Чебуреки домашние", w: "200 г", price: "320 р" },
                { name: "Шашлык из свинины", w: "300 г", price: "410 р" },
                { name: "Шашлык из курицы", w: "300 г", price: "390 р" },
                { name: "Шашлык «Тандыр»", w: "300 г", price: "480 р" },
                { name: "Пельмени «Уральские»", w: "300 г", price: "320 р" },
                { name: "Пельмени «Емелины»", w: "300 г", price: "395 р" },
                { name: "Вареники с картофелем", w: "300 г", price: "260 р" },
                { name: "Вареники «Тройные»", w: "300 г", price: "340 р" },
                { name: "Картошка с мясом и грибами в чугунке", w: "400 г", price: "480 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b" style={{ borderColor: "rgba(193,122,44,0.15)" }}>
                  <span className="text-sm" style={{ color: C.bark }}>{i.name} <span style={{ color: C.smoke, fontSize: 11 }}>{i.w}</span></span>
                  <span className="text-sm font-medium ml-3" style={{ color: C.brown }}>{i.price}</span>
                </div>
              ))}
            </div>

            {/* Супы */}
            <div className="p-6 rounded-lg" style={{ background: C.bg }}>
              <h4 className="font-serif text-xl mb-4" style={{ color: C.brown }}>Супы</h4>
              {[
                { name: "Щи", w: "300 г", price: "180 р" },
                { name: "Борщ", w: "300 г", price: "200 р" },
                { name: "Уха «Рыбацкая»", w: "300 г", price: "250 р" },
                { name: "Суп грибной", w: "300 г", price: "280 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b" style={{ borderColor: "rgba(193,122,44,0.15)" }}>
                  <span className="text-sm" style={{ color: C.bark }}>{i.name} <span style={{ color: C.smoke, fontSize: 11 }}>{i.w}</span></span>
                  <span className="text-sm font-medium ml-3" style={{ color: C.brown }}>{i.price}</span>
                </div>
              ))}
            </div>

            {/* Напитки */}
            <div className="p-6 rounded-lg" style={{ background: C.bg }}>
              <h4 className="font-serif text-xl mb-4" style={{ color: C.brown }}>Горячие напитки</h4>
              {[
                { name: "Чай травяной / зелёный / чёрный", price: "80 р" },
                { name: "Кофе натуральный «Американо»", price: "120 р" },
                { name: "Кофе", price: "100 р" },
                { name: "Горячий чай «Емелин»", price: "200 р" },
                { name: "Чай облепиховый", price: "120 р" },
                { name: "Чай смородиновый", price: "90 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b" style={{ borderColor: "rgba(193,122,44,0.15)" }}>
                  <span className="text-sm" style={{ color: C.bark }}>{i.name}</span>
                  <span className="text-sm font-medium ml-3" style={{ color: C.brown }}>{i.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Фото трактира */}
          <div className="mt-12">
            <SectionTitle>✦ Фото ✦</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              {[SAUNA_IMG, ROOM_IMG, HERO_IMG].map((img, i) => (
                <img key={i} src={img} alt="" className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <InfoBlock />

      {/* ══ ПРАЧЕЧНАЯ ══ */}
      <section id="prachechnaya" className="py-20 px-4" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle center={false}>Прачечная</SectionTitle>
            <p className="text-base leading-relaxed mt-4" style={{ color: C.smoke }}>
              Для наших гостей и соседей предоставляем услуги по стирке и глажке постельного белья
              на профессиональном прачечном оборудовании.
            </p>
          </div>
          <img src={SAUNA_IMG} alt="Прачечная" className="w-full h-72 object-cover rounded-lg shadow-md" />
        </div>
      </section>

      <InfoBlock />

      {/* ══ БРОНИРОВАНИЕ ══ */}
      <section id="booking" className="py-20 px-4" style={{ background: C.cream }}>
        <div className="max-w-2xl mx-auto">
          <SectionTitle>Бронирование</SectionTitle>
          <Divider />

          <p className="text-sm text-center mb-8 leading-relaxed" style={{ color: C.smoke }}>
            Для предварительного бронирования номера выберите даты заезда и выезда, затем количество гостей.
            Перед вами появятся все доступные варианты свободных номеров с актуальными ценами.
          </p>
          <p className="text-sm text-center mb-4 leading-relaxed" style={{ color: C.smoke }}>
            Для завершения бронирования необходимо внести предоплату 30% стоимости проживания
            (номер после предварительного бронирования без предоплаты держится 24 часа).
          </p>
          <p className="text-sm text-center mb-4 leading-relaxed" style={{ color: C.smoke }}>
            В ближайшее время, после предварительного бронирования, с вами свяжется дежурный администратор
            для уточнения брони и удобного способа внесения предоплаты.
          </p>
          <p className="text-center text-sm mb-10" style={{ color: C.smoke }}>
            Забронировать номер также можно, позвонив по телефону{" "}
            <a href={`tel:+79128052242`} className="font-semibold" style={{ color: C.brown }}>{PHONE1}</a>
          </p>

          <form onSubmit={handleBook} className="space-y-4 p-8 rounded-xl shadow-md" style={{ background: C.bg }}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1 uppercase tracking-wider" style={{ color: C.amber }}>Дата заезда</label>
                <input type="date" required className="w-full px-3 py-3 rounded-lg text-sm outline-none"
                  style={{ background: C.cream, border: `1px solid rgba(193,122,44,0.3)`, color: C.bark }} />
              </div>
              <div>
                <label className="block text-xs mb-1 uppercase tracking-wider" style={{ color: C.amber }}>Дата выезда</label>
                <input type="date" required className="w-full px-3 py-3 rounded-lg text-sm outline-none"
                  style={{ background: C.cream, border: `1px solid rgba(193,122,44,0.3)`, color: C.bark }} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1 uppercase tracking-wider" style={{ color: C.amber }}>Имя</label>
                <input type="text" required placeholder="Иван" className="w-full px-3 py-3 rounded-lg text-sm outline-none"
                  style={{ background: C.cream, border: `1px solid rgba(193,122,44,0.3)`, color: C.bark }} />
              </div>
              <div>
                <label className="block text-xs mb-1 uppercase tracking-wider" style={{ color: C.amber }}>Телефон</label>
                <input type="tel" required placeholder="+7 (912) ..." className="w-full px-3 py-3 rounded-lg text-sm outline-none"
                  style={{ background: C.cream, border: `1px solid rgba(193,122,44,0.3)`, color: C.bark }} />
              </div>
            </div>
            <div>
              <label className="block text-xs mb-1 uppercase tracking-wider" style={{ color: C.amber }}>Гостей</label>
              <select className="w-full px-3 py-3 rounded-lg text-sm outline-none"
                style={{ background: C.cream, border: `1px solid rgba(193,122,44,0.3)`, color: C.bark }}>
                {["1","2","3","4","5","6"].map(n => <option key={n}>{n} {n === "1" ? "гость" : "гостей"}</option>)}
              </select>
            </div>
            <button type="submit" className="w-full py-4 rounded-lg font-semibold text-white transition hover:opacity-90"
              style={{ background: C.amber }}>
              Забронировать домик »→
            </button>
          </form>

          {/* Фото домиков */}
          <div className="mt-14">
            <SectionTitle>✦ Фото домиков ✦</SectionTitle>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[ROOM_IMG, HERO_IMG, SAUNA_IMG, ROOM_IMG].map((img, i) => (
                <img key={i} src={img} alt="" className="w-full h-40 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ СПЕЦПРЕДЛОЖЕНИЯ ══ */}
      <section id="spets" className="py-20 px-4" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle center={false}>Спецпредложения</SectionTitle>
            <div className="mt-6 space-y-6">
              <div className="p-5 rounded-lg" style={{ background: C.cream, border: `1px solid rgba(193,122,44,0.2)` }}>
                <h4 className="font-serif text-lg mb-2" style={{ color: C.brown }}>Акции</h4>
                <p className="font-medium text-sm mb-1" style={{ color: C.bark }}>Длительное проживание от 7 ночей!</p>
                <p className="text-sm" style={{ color: C.smoke }}>
                  При проживании от 7 ночей стоимость проживания рассчитывается по цене будних дней!
                </p>
              </div>
              <div className="p-5 rounded-lg" style={{ background: C.cream, border: `1px solid rgba(193,122,44,0.2)` }}>
                <p className="font-medium text-sm mb-1" style={{ color: C.bark }}>Счастливые выходные!</p>
                <p className="text-sm" style={{ color: C.smoke }}>
                  При проживании с пятницы по воскресенье стоимость проживания с субботы на воскресенье
                  рассчитывается по цене проживания с пятницы на субботу.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "Пакет выходного дня", discount: "−15%", color: "#C17A2C" },
                  { label: "Романтический уикенд", discount: "−20%", color: "#A63D2F" },
                  { label: "Групповой отдых", discount: "−25%", color: "#2D4A2D" },
                ].map(p => (
                  <div key={p.label} className="text-center p-3 rounded-lg text-white" style={{ background: p.color }}>
                    <div className="text-xl font-bold mb-1">{p.discount}</div>
                    <div className="text-xs leading-tight opacity-90">{p.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img src={ROOM_IMG} alt="Спецпредложения" className="w-full h-72 object-cover rounded-lg shadow-md" />
        </div>
      </section>

      <InfoBlock />

      {/* ══ УСЛУГИ ══ */}
      <section id="uslugi" className="py-20 px-4" style={{ background: C.cream }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle center={false}>Услуги</SectionTitle>
            <div className="mt-6 space-y-6">
              {[
                {
                  title: "Гибкий график заезда",
                  desc: "Хотите заехать раньше или выехать позже? Мы постараемся учесть вашу просьбу (при наличии возможности). Доплата составит всего 25% от суточной стоимости за каждые 3 часа.",
                },
                {
                  title: "Начните день с русского завтрака",
                  desc: "С 8:00 до 11:00 в нашем трактире вас ждёт сытный завтрак (300 руб./чел.). Пожалуйста, заказывайте питание заранее — до вечера предыдущего дня.",
                },
                {
                  title: "Полное трёхразовое питание",
                  desc: "За 1100 руб. в сутки вы можете наслаждаться комплексным питанием (завтрак+обед+ужин). Наш повар составит для вас индивидуальное меню — просто обсудите детали с администратором при бронировании.",
                },
              ].map(s => (
                <div key={s.title} className="p-5 rounded-lg" style={{ background: C.bg, border: `1px solid rgba(193,122,44,0.2)` }}>
                  <h4 className="font-serif text-lg mb-2" style={{ color: C.brown }}>{s.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.smoke }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={SAUNA_IMG} alt="Услуги" className="w-full h-80 object-cover rounded-lg shadow-md" />
        </div>
      </section>

      <InfoBlock />

      {/* ══ КОНТАКТЫ ══ */}
      <section id="contacts" className="py-20 px-4" style={{ background: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Контакты</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <div>
              <p className="text-base mb-6 text-center" style={{ color: C.smoke }}>
                Республика Башкортостан, Абзелиловский район,<br />
                д. Зелёная Поляна, ул. Курортная, 15/1.
              </p>
              <div className="space-y-2 text-center">
                <a href={`tel:+79128052242`} className="block text-xl font-semibold hover:underline" style={{ color: C.brown }}>{PHONE1}</a>
                <a href={`tel:+79048082512`} className="block text-xl font-semibold hover:underline" style={{ color: C.brown }}>{PHONE2}</a>
                <a href={`mailto:${EMAIL}`} className="block text-base hover:underline mt-3" style={{ color: C.brown }}>
                  Email: <span className="font-medium">{EMAIL}</span>
                </a>
              </div>
            </div>
            <div
              className="rounded-lg overflow-hidden flex items-center justify-center"
              style={{ height: 280, background: "#DDD3BC", border: `2px solid rgba(193,122,44,0.2)` }}
            >
              <div className="text-center p-6">
                <Icon name="MapPin" size={36} style={{ color: C.amber, margin: "0 auto 8px" }} />
                <p className="text-sm font-medium mb-1" style={{ color: C.brown }}>Гостиничный комплекс Емеля</p>
                <p className="text-xs" style={{ color: C.smoke }}>д. Зелёная Поляна, ул. Курортная, 15/1</p>
                <a
                  href="https://yandex.ru/maps/?text=Гостиничный+комплекс+Емеля+озеро+Банное"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 rounded text-xs font-medium"
                  style={{ background: C.amber, color: "#fff" }}
                >
                  Открыть в Яндекс Картах
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PikeFooter />
    </div>
  );
}
