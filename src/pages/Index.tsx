import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/d6c804f2-e95a-4710-b6ae-6e37f2458635.jpg";
const SAUNA_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/0a1c57eb-b496-4ac6-adce-6797dfdbf55a.jpg";
const ROOM_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/3018d43a-d9a1-442c-9c9e-f0db063f00f0.jpg";

const NAV_LINKS = [
  { label: "О комплексе", href: "#about" },
  { label: "Номера", href: "#rooms" },
  { label: "Баня", href: "#banya" },
  { label: "Услуги", href: "#services" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const ROOMS = [
  {
    name: "Стандартный номер",
    desc: "Уютный номер с видом на лес, деревянная отделка, все удобства",
    price: "от 3 500 ₽/ночь",
    persons: "2 чел.",
    img: ROOM_IMG,
    badge: "",
  },
  {
    name: "Люкс с видом на озеро",
    desc: "Панорамное окно с видом на озеро Банное, камин, джакузи",
    price: "от 7 200 ₽/ночь",
    persons: "2 чел.",
    img: HERO_IMG,
    badge: "Хит",
  },
  {
    name: "Семейный коттедж",
    desc: "Отдельный сруб для всей семьи, просторная гостиная, терраса",
    price: "от 12 000 ₽/ночь",
    persons: "6 чел.",
    img: ROOM_IMG,
    badge: "",
  },
];

const SERVICES = [
  { icon: "Flame", title: "Русская баня", desc: "Топим по-чёрному и по-белому. Дровяная печь, берёзовые веники, купель с ледяной водой" },
  { icon: "Fish", title: "Рыбалка", desc: "Снасти напрокат, лодка, опытный гид. Щука, окунь, карп — всё своё!" },
  { icon: "Utensils", title: "Русская кухня", desc: "Щи, пельмени, шашлык на мангале. Всё из местных продуктов, рецепты передаются из поколения в поколение" },
  { icon: "TreePine", title: "Прогулки по лесу", desc: "Экотропы вдоль берега озера, сбор грибов и ягод, зимой — лыжи и снегоходы" },
  { icon: "Waves", title: "Купание в озере", desc: "Собственный пляж на озере Банном, лодки и байдарки напрокат" },
  { icon: "Music", title: "Банкеты и торжества", desc: "Свадьбы, юбилеи, корпоративы — сделаем праздник незабываемым" },
];

const PACKAGES = [
  {
    title: "Пакет выходного дня",
    subtitle: "Пт–Вс",
    price: "от 9 900 ₽",
    features: ["2 ночи в номере", "Баня 3 часа", "Завтраки", "Прокат лодки"],
    highlight: false,
    discount: "-15%",
  },
  {
    title: "Романтический уикенд",
    subtitle: "Для двоих",
    price: "от 14 500 ₽",
    features: ["2 ночи в люксе", "Баня с вениками", "Ужин при свечах", "Шампанское"],
    highlight: true,
    discount: "-20%",
  },
  {
    title: "Групповой отдых",
    subtitle: "от 6 человек",
    price: "от 6 000 ₽/чел.",
    features: ["Коттедж целиком", "Баня на всю группу", "Мангал и беседка", "Скидка 25%"],
    highlight: false,
    discount: "-25%",
  },
];

const GALLERY_IMGS = [HERO_IMG, SAUNA_IMG, ROOM_IMG, HERO_IMG, SAUNA_IMG, ROOM_IMG];

function OrnamentLine() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, transparent, var(--color-amber))" }} />
      <span style={{ color: "var(--color-amber)", fontSize: "18px" }}>✦</span>
      <span style={{ color: "var(--color-amber-dark)", fontSize: "12px" }}>❧</span>
      <span style={{ color: "var(--color-amber)", fontSize: "18px" }}>✦</span>
      <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, var(--color-amber), transparent)" }} />
    </div>
  );
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="text-center mb-10">
      <h2
        className="font-serif text-4xl md:text-5xl font-light mb-3"
        style={{ color: light ? "var(--color-birch)" : "var(--color-bark)" }}
      >
        {children}
      </h2>
      <OrnamentLine />
    </div>
  );
}

function RussianBorder({ light = false }: { light?: boolean }) {
  const c = light ? "rgba(245,237,216,0.3)" : "rgba(193,122,44,0.4)";
  return (
    <div
      className="w-full h-3 my-0"
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${c} 0px, ${c} 8px, transparent 8px, transparent 16px)`,
      }}
    />
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookForm, setBookForm] = useState({ name: "", phone: "", date_in: "", date_out: "", guests: "2" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.");
    setBookForm({ name: "", phone: "", date_in: "", date_out: "", guests: "2" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--color-cream)", fontFamily: "'Golos Text', sans-serif" }}>

      {/* ═══ NAVBAR ═══ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(61,34,18,0.97)" : "rgba(61,34,18,0.75)",
          backdropFilter: "blur(8px)",
          borderBottom: scrolled ? "1px solid rgba(193,122,44,0.4)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-serif font-bold"
              style={{ background: "var(--color-amber)", color: "var(--color-bark)" }}
            >
              Е
            </div>
            <div>
              <div className="font-serif text-xl font-semibold leading-none" style={{ color: "var(--color-birch)" }}>
                Емеля
              </div>
              <div className="text-xs" style={{ color: "rgba(245,237,216,0.6)", fontFamily: "'Golos Text', sans-serif" }}>
                на озере Банном
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-sm font-medium"
                style={{ color: "rgba(245,237,216,0.85)", fontFamily: "'Golos Text', sans-serif" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#booking"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded transition-all duration-200"
            style={{ background: "var(--color-amber)", color: "var(--color-bark)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E8A84B")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-amber)")}
          >
            Забронировать
          </a>

          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--color-birch)" }}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2" style={{ background: "rgba(61,34,18,0.98)" }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-3 text-base border-b"
                style={{ color: "var(--color-birch)", borderColor: "rgba(193,122,44,0.2)" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="block mt-3 text-center py-3 rounded font-semibold"
              style={{ background: "var(--color-amber)", color: "var(--color-bark)" }}
              onClick={() => setMenuOpen(false)}
            >
              Забронировать
            </a>
          </div>
        )}
      </header>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(20,10,5,0.55) 0%, rgba(20,10,5,0.35) 40%, rgba(20,10,5,0.75) 100%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-2" style={{ background: "var(--color-amber)", opacity: 0.8 }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <div
            className="inline-block mb-6 px-5 py-1.5 text-xs font-medium tracking-widest uppercase border"
            style={{ borderColor: "rgba(193,122,44,0.6)", color: "#E8A84B", fontFamily: "'Golos Text', sans-serif" }}
          >
            ✦ Гостинично-банный комплекс ✦
          </div>

          <h1
            className="font-serif text-6xl md:text-8xl font-light mb-4 leading-none"
            style={{ color: "var(--color-birch)" }}
          >
            Емеля
          </h1>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ background: "var(--color-amber)" }} />
            <span style={{ color: "var(--color-amber)", fontSize: "20px" }}>❦</span>
            <div className="h-px w-16" style={{ background: "var(--color-amber)" }} />
          </div>

          <p className="text-lg md:text-2xl font-light mb-2" style={{ color: "rgba(245,237,216,0.9)", fontFamily: "'Golos Text', sans-serif" }}>
            На берегу озера Банного
          </p>
          <p className="text-base md:text-lg mb-10" style={{ color: "rgba(245,237,216,0.65)", fontFamily: "'Golos Text', sans-serif" }}>
            Русская баня · Уютные номера · Природа Урала
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="px-8 py-4 text-base font-semibold rounded transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--color-amber)", color: "var(--color-bark)", fontFamily: "'Golos Text', sans-serif" }}
            >
              Забронировать отдых
            </a>
            <a
              href="#about"
              className="px-8 py-4 text-base font-medium rounded border transition-all duration-200"
              style={{ borderColor: "rgba(245,237,216,0.4)", color: "var(--color-birch)", fontFamily: "'Golos Text', sans-serif" }}
            >
              Узнать больше
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { num: "15+", label: "лет на рынке" },
              { num: "20", label: "номеров" },
              { num: "5★", label: "рейтинг" },
            ].map((s) => (
              <div key={s.num} className="text-center">
                <div className="font-serif text-3xl font-medium" style={{ color: "var(--color-amber)" }}>{s.num}</div>
                <div className="text-xs mt-1" style={{ color: "rgba(245,237,216,0.6)", fontFamily: "'Golos Text', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <Icon name="ChevronDown" size={20} style={{ color: "rgba(245,237,216,0.5)" }} />
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-20 px-4" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>О комплексе</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-bark)", fontFamily: "'Golos Text', sans-serif" }}>
                Гостинично-банный комплекс <strong>«Емеля»</strong> расположен на живописном берегу озера Банного в Башкирии.
                Это место, где время замедляется, а душа отдыхает от городской суеты.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-smoke)", fontFamily: "'Golos Text', sans-serif" }}>
                Мы строили комплекс с любовью к русским традициям: настоящая баня по старинным рецептам,
                деревянные срубы с резными наличниками, домашняя кухня с блюдами уральской кулинарии.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-smoke)", fontFamily: "'Golos Text', sans-serif" }}>
                Горный воздух, хрустальная вода озера и запах берёзовых веников — лучшее лекарство от усталости.
                Приезжайте и почувствуйте настоящий русский отдых.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: "MapPin", text: "Озеро Банное, Башкирия" },
                  { icon: "Car", text: "2 часа от Магнитогорска" },
                  { icon: "Home", text: "Деревянные срубы" },
                  { icon: "Star", text: "Семейный отдых" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(193,122,44,0.15)" }}>
                      <Icon name={item.icon} size={16} style={{ color: "var(--color-amber)" }} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--color-bark)", fontFamily: "'Golos Text', sans-serif" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="Комплекс Емеля"
                className="w-full h-80 object-cover rounded-sm shadow-2xl"
                style={{ border: "4px solid var(--color-birch)" }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-sm -z-10"
                style={{ border: "2px solid var(--color-amber)", opacity: 0.4 }}
              />
              <div
                className="absolute -top-3 -left-3 px-4 py-2 font-serif text-sm"
                style={{ background: "var(--color-amber)", color: "var(--color-bark)" }}
              >
                С 2009 года
              </div>
            </div>
          </div>
        </div>
      </section>

      <RussianBorder />

      {/* ═══ ROOMS ═══ */}
      <section id="rooms" className="py-20 px-4" style={{ background: "#F0E8D5" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Наши номера</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {ROOMS.map((room) => (
              <div
                key={room.name}
                className="card-hover rounded-sm overflow-hidden shadow-lg"
                style={{ background: "var(--color-cream)", border: "1px solid rgba(193,122,44,0.2)" }}
              >
                <div className="relative overflow-hidden">
                  <img src={room.img} alt={room.name} className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105" />
                  {room.badge && (
                    <div
                      className="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-sm"
                      style={{ background: "var(--color-terracotta)", color: "#fff" }}
                    >
                      {room.badge}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl mb-2" style={{ color: "var(--color-bark)" }}>{room.name}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--color-smoke)", fontFamily: "'Golos Text', sans-serif" }}>{room.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-base" style={{ color: "var(--color-amber-dark)", fontFamily: "'Golos Text', sans-serif" }}>{room.price}</div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--color-smoke)", fontFamily: "'Golos Text', sans-serif" }}>{room.persons}</div>
                    </div>
                    <a
                      href="#booking"
                      className="px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 hover:opacity-90"
                      style={{ background: "var(--color-amber)", color: "var(--color-bark)", fontFamily: "'Golos Text', sans-serif" }}
                    >
                      Забронировать
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BANYA ═══ */}
      <section id="banya" className="py-20 px-4 relative overflow-hidden" style={{ background: "var(--color-bark)" }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${SAUNA_IMG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(2px)" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(61,34,18,0.82)" }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionTitle light>Русская баня</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={SAUNA_IMG}
                alt="Баня"
                className="w-full h-96 object-cover rounded-sm shadow-2xl"
                style={{ border: "3px solid rgba(193,122,44,0.5)" }}
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-birch)", fontFamily: "'Golos Text', sans-serif" }}>
                Наша баня — это целый ритуал. Мы топим печь с утра, подбираем дрова из берёзы и ольхи.
                Веники — только свежие, заготовленные в июне. Пар — лёгкий, «ядрёный».
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Flame", title: "Дровяная печь", desc: "Настоящий жар" },
                  { icon: "Droplets", title: "Купель", desc: "Ключевая вода" },
                  { icon: "Leaf", title: "Берёзовые веники", desc: "Свежие, сезонные" },
                  { icon: "Coffee", title: "Чай на травах", desc: "После бани" },
                ].map((f) => (
                  <div key={f.title} className="p-4 rounded-sm" style={{ background: "rgba(193,122,44,0.12)", border: "1px solid rgba(193,122,44,0.25)" }}>
                    <Icon name={f.icon} size={20} style={{ color: "var(--color-amber)" }} />
                    <div className="font-medium text-sm mt-2 mb-1" style={{ color: "var(--color-birch)", fontFamily: "'Golos Text', sans-serif" }}>{f.title}</div>
                    <div className="text-xs" style={{ color: "rgba(245,237,216,0.55)", fontFamily: "'Golos Text', sans-serif" }}>{f.desc}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div>
                  <div className="font-serif text-3xl" style={{ color: "var(--color-amber)" }}>от 2 500 ₽</div>
                  <div className="text-sm" style={{ color: "rgba(245,237,216,0.6)", fontFamily: "'Golos Text', sans-serif" }}>за 2 часа (до 4 чел.)</div>
                </div>
                <a
                  href="#booking"
                  className="px-6 py-3 font-semibold rounded-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: "var(--color-amber)", color: "var(--color-bark)", fontFamily: "'Golos Text', sans-serif" }}
                >
                  Забронировать баню
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PACKAGES ═══ */}
      <section className="py-20 px-4" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Специальные предложения</SectionTitle>
          <p className="text-center text-base mb-12" style={{ color: "var(--color-smoke)", fontFamily: "'Golos Text', sans-serif" }}>
            Сезонные скидки и готовые пакеты для отдыха мечты
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.title}
                className="relative rounded-sm p-6 card-hover"
                style={{
                  background: pkg.highlight ? "var(--color-bark)" : "var(--color-cream)",
                  border: `2px solid ${pkg.highlight ? "var(--color-amber)" : "rgba(193,122,44,0.25)"}`,
                  boxShadow: pkg.highlight ? "0 8px 40px rgba(193,122,44,0.2)" : "none",
                }}
              >
                {pkg.discount && (
                  <div className="absolute -top-3 right-4 px-3 py-1 text-xs font-bold rounded-sm" style={{ background: "var(--color-terracotta)", color: "#fff" }}>
                    {pkg.discount}
                  </div>
                )}
                <div className="font-serif text-2xl mb-1" style={{ color: pkg.highlight ? "var(--color-birch)" : "var(--color-bark)" }}>
                  {pkg.title}
                </div>
                <div className="text-xs mb-4 uppercase tracking-wider" style={{ color: "var(--color-amber)", fontFamily: "'Golos Text', sans-serif" }}>
                  {pkg.subtitle}
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: pkg.highlight ? "rgba(245,237,216,0.8)" : "var(--color-smoke)", fontFamily: "'Golos Text', sans-serif" }}>
                      <span style={{ color: "var(--color-amber)" }}>✦</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="font-serif text-2xl mb-4" style={{ color: "var(--color-amber)" }}>{pkg.price}</div>
                <a
                  href="#booking"
                  className="block text-center py-2.5 rounded-sm text-sm font-semibold transition-all duration-200"
                  style={{
                    background: pkg.highlight ? "var(--color-amber)" : "transparent",
                    color: pkg.highlight ? "var(--color-bark)" : "var(--color-amber)",
                    border: pkg.highlight ? "none" : "1px solid var(--color-amber)",
                    fontFamily: "'Golos Text', sans-serif",
                  }}
                >
                  Выбрать пакет
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RussianBorder />

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="py-20 px-4" style={{ background: "#EDE5D0" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Наши услуги</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-sm card-hover"
                style={{ background: "var(--color-cream)", border: "1px solid rgba(193,122,44,0.2)" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(193,122,44,0.12)" }}>
                  <Icon name={s.icon} size={22} style={{ color: "var(--color-amber)" }} />
                </div>
                <h3 className="font-serif text-xl mb-2" style={{ color: "var(--color-bark)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-smoke)", fontFamily: "'Golos Text', sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section id="gallery" className="py-20 px-4" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Галерея</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_IMGS.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-sm"
                style={{ height: i === 0 || i === 3 ? "280px" : "200px", border: "2px solid var(--color-birch)" }}
              >
                <img src={img} alt={`Фото ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(61,34,18,0.4)" }}
                >
                  <Icon name="ZoomIn" size={32} style={{ color: "var(--color-birch)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOOKING ═══ */}
      <section id="booking" className="py-20 px-4 relative" style={{ background: "var(--color-bark)" }}>
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <SectionTitle light>Забронировать</SectionTitle>
          <p className="text-center mb-8" style={{ color: "rgba(245,237,216,0.65)", fontFamily: "'Golos Text', sans-serif" }}>
            Оставьте заявку — мы свяжемся с вами в течение часа и подберём лучший вариант
          </p>
          <form
            onSubmit={handleBookSubmit}
            className="p-8 rounded-sm space-y-4"
            style={{ background: "rgba(245,237,216,0.06)", border: "1px solid rgba(193,122,44,0.3)" }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--color-amber)", fontFamily: "'Golos Text', sans-serif" }}>
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={bookForm.name}
                  onChange={(e) => setBookForm({ ...bookForm, name: e.target.value })}
                  placeholder="Иван"
                  required
                  className="w-full px-4 py-3 rounded-sm text-sm outline-none"
                  style={{ background: "rgba(245,237,216,0.08)", border: "1px solid rgba(193,122,44,0.35)", color: "var(--color-birch)", fontFamily: "'Golos Text', sans-serif" }}
                />
              </div>
              <div>
                <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--color-amber)", fontFamily: "'Golos Text', sans-serif" }}>
                  Телефон
                </label>
                <input
                  type="tel"
                  value={bookForm.phone}
                  onChange={(e) => setBookForm({ ...bookForm, phone: e.target.value })}
                  placeholder="+7 (999) 000-00-00"
                  required
                  className="w-full px-4 py-3 rounded-sm text-sm outline-none"
                  style={{ background: "rgba(245,237,216,0.08)", border: "1px solid rgba(193,122,44,0.35)", color: "var(--color-birch)", fontFamily: "'Golos Text', sans-serif" }}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--color-amber)", fontFamily: "'Golos Text', sans-serif" }}>
                  Заезд
                </label>
                <input
                  type="date"
                  value={bookForm.date_in}
                  onChange={(e) => setBookForm({ ...bookForm, date_in: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-sm text-sm outline-none"
                  style={{ background: "rgba(245,237,216,0.08)", border: "1px solid rgba(193,122,44,0.35)", color: "var(--color-birch)", fontFamily: "'Golos Text', sans-serif", colorScheme: "dark" }}
                />
              </div>
              <div>
                <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--color-amber)", fontFamily: "'Golos Text', sans-serif" }}>
                  Выезд
                </label>
                <input
                  type="date"
                  value={bookForm.date_out}
                  onChange={(e) => setBookForm({ ...bookForm, date_out: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-sm text-sm outline-none"
                  style={{ background: "rgba(245,237,216,0.08)", border: "1px solid rgba(193,122,44,0.35)", color: "var(--color-birch)", fontFamily: "'Golos Text', sans-serif", colorScheme: "dark" }}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs mb-1.5 uppercase tracking-wider" style={{ color: "var(--color-amber)", fontFamily: "'Golos Text', sans-serif" }}>
                Количество гостей
              </label>
              <select
                value={bookForm.guests}
                onChange={(e) => setBookForm({ ...bookForm, guests: e.target.value })}
                className="w-full px-4 py-3 rounded-sm text-sm outline-none"
                style={{ background: "rgba(61,34,18,0.9)", border: "1px solid rgba(193,122,44,0.35)", color: "var(--color-birch)", fontFamily: "'Golos Text', sans-serif" }}
              >
                {["1", "2", "3", "4", "5", "6+"].map((n) => (
                  <option key={n} value={n}>{n} {Number(n) === 1 ? "гость" : "гостей"}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-4 text-base font-semibold rounded-sm transition-all duration-200 mt-2 hover:opacity-90"
              style={{ background: "var(--color-amber)", color: "var(--color-bark)", fontFamily: "'Golos Text', sans-serif" }}
            >
              Отправить заявку
            </button>
            <p className="text-center text-xs" style={{ color: "rgba(245,237,216,0.4)", fontFamily: "'Golos Text', sans-serif" }}>
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </section>

      {/* ═══ CONTACTS ═══ */}
      <section id="contacts" className="py-20 px-4" style={{ background: "var(--color-cream)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Контакты</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "MapPin",
                title: "Адрес",
                lines: ["Республика Башкортостан,", "Абзелиловский район,", "озеро Банное"],
              },
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["+7 (347) 000-00-00", "+7 (900) 000-00-00"],
              },
              {
                icon: "Clock",
                title: "Режим работы",
                lines: ["Заезд с 14:00", "Выезд до 12:00", "Баня — круглосуточно"],
              },
            ].map((c) => (
              <div
                key={c.title}
                className="text-center p-6 rounded-sm"
                style={{ background: "#F0E8D5", border: "1px solid rgba(193,122,44,0.2)" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(193,122,44,0.15)" }}>
                  <Icon name={c.icon} size={22} style={{ color: "var(--color-amber)" }} />
                </div>
                <h3 className="font-serif text-lg mb-3" style={{ color: "var(--color-bark)" }}>{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-sm" style={{ color: "var(--color-smoke)", fontFamily: "'Golos Text', sans-serif" }}>{l}</p>
                ))}
              </div>
            ))}
          </div>
          <div
            className="rounded-sm overflow-hidden flex items-center justify-center"
            style={{ height: 260, background: "#DDD3BC", border: "2px solid rgba(193,122,44,0.2)" }}
          >
            <div className="text-center">
              <Icon name="Map" size={40} style={{ color: "var(--color-smoke)" }} />
              <p className="mt-2 text-sm" style={{ color: "var(--color-smoke)", fontFamily: "'Golos Text', sans-serif" }}>
                Карта — Озеро Банное, Башкирия
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-10 px-4" style={{ background: "var(--color-bark)", borderTop: "3px solid var(--color-amber)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-lg" style={{ background: "var(--color-amber)", color: "var(--color-bark)" }}>
                Е
              </div>
              <div>
                <div className="font-serif text-xl" style={{ color: "var(--color-birch)" }}>Емеля</div>
                <div className="text-xs" style={{ color: "rgba(245,237,216,0.5)", fontFamily: "'Golos Text', sans-serif" }}>Гостинично-банный комплекс</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs transition-colors duration-200 hover:opacity-100"
                  style={{ color: "rgba(245,237,216,0.55)", fontFamily: "'Golos Text', sans-serif" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              {[
                { icon: "Phone", href: "tel:+73470000000" },
                { icon: "MessageCircle", href: "#" },
                { icon: "Send", href: "#" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(193,122,44,0.2)", border: "1px solid rgba(193,122,44,0.3)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(193,122,44,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(193,122,44,0.2)")}
                >
                  <Icon name={s.icon} size={16} style={{ color: "var(--color-amber)" }} />
                </a>
              ))}
            </div>
          </div>
          <OrnamentLine />
          <p className="text-center text-xs mt-4" style={{ color: "rgba(245,237,216,0.35)", fontFamily: "'Golos Text', sans-serif" }}>
            © 2024 Гостинично-банный комплекс «Емеля» · Озеро Банное, Башкирия · Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}
