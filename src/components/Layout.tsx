import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О комплексе", href: "/" },
  { label: "Гостевые дома", href: "/houses" },
  { label: "Бани", href: "/baths" },
  { label: "Трактир", href: "/traktir" },
  { label: "Контакты", href: "/contacts" },
];

const PROMO_DELAY_1 = 15 * 1000;       // 15 секунд
const PROMO_DELAY_2 = 4 * 60 * 1000;  // ещё 4 минуты после закрытия

function PromoPopup({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("DARIM10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
      <div className="relative bg-[#FBF5E8] rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden">
        {/* Декоративная полоса сверху */}
        <div className="h-2 w-full" style={{ background: "#C17A2C" }} />

        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#C17A2C]/10 transition">
          <Icon name="X" size={18} style={{ color: "#7B3320" }} />
        </button>

        <div className="p-7 pt-5 text-center">
          <div className="text-4xl mb-3">🎁</div>
          <h2 className="font-serif text-2xl text-[#7B3320] mb-2">На сайте бронировать дешевле!</h2>
          <p className="text-sm text-[#8C7E6E] leading-relaxed mb-5">
            Бронируйте напрямую и получите <strong className="text-[#7B3320]">скидку 10%</strong>. Скопируйте промо ключ, впишите его в специальное окно при бронировании на сайте и получите новые цены на проживание.
          </p>

          {/* Промокод */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl mb-5 border-2 border-dashed" style={{ borderColor: "#C17A2C", background: "#fff" }}>
            <span className="font-mono font-bold text-lg tracking-widest text-[#7B3320]">DARIM10</span>
            <button onClick={copy} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-medium transition hover:opacity-90 shrink-0" style={{ background: "#C17A2C" }}>
              <Icon name={copied ? "Check" : "Copy"} size={13} style={{ color: "#fff" }} />
              {copied ? "Скопировано!" : "Скопировать"}
            </button>
          </div>

          <Link to="/contacts" onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-medium transition hover:opacity-90"
            style={{ background: "#C17A2C" }}>
            Забронировать
          </Link>
          <button onClick={onClose} className="mt-3 text-xs text-[#8C7E6E] hover:text-[#7B3320] transition">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const promoCountRef = useState(() => parseInt(sessionStorage.getItem("promo_count") || "0"))[0];
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const count = parseInt(sessionStorage.getItem("promo_count") || "0");
    if (count >= 2) return;
    const delay = count === 0 ? PROMO_DELAY_1 : PROMO_DELAY_2;
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [promoCountRef]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F5EDE0] font-sans">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
        style={{ background: "rgba(245,237,224,0.95)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/0606188c-899f-4c77-be89-1ffec7541ce8.jpg"
              alt="Емеля"
              className="h-10 w-auto"
              style={{ mixBlendMode: "multiply" }}
            />
            <span className="font-serif text-2xl text-[#7B3320]">Емеля</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.href}
                className={`text-sm transition-colors ${location.pathname === l.href ? "text-[#C17A2C] font-medium" : "text-[#3D2212] hover:text-[#C17A2C]"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2" style={{ background: "rgba(245,237,224,0.98)" }}>
            {NAV_LINKS.map(l => (
              <Link
                key={l.label}
                to={l.href}
                className={`block py-2 text-sm border-b border-[#C17A2C]/20 ${location.pathname === l.href ? "text-[#C17A2C] font-medium" : "text-[#3D2212]"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <div style={{ paddingTop: 56 }}>{children}</div>
      {showPromo && <PromoPopup onClose={() => {
        const count = parseInt(sessionStorage.getItem("promo_count") || "0");
        const next = count + 1;
        sessionStorage.setItem("promo_count", String(next));
        setShowPromo(false);
        if (next < 2) {
          setTimeout(() => setShowPromo(true), PROMO_DELAY_2);
        }
      }} />}
      <footer className="py-8 px-4 text-center text-sm text-[#8C7E6E]" style={{ background: "#3D2212", color: "#C9A97A" }}>
        <p className="font-serif text-lg text-[#E8C98A] mb-1">Емеля</p>
        <p>Гостевой комплекс Емеля · Башкирия, озеро Банное</p>
        <p className="mt-1">+7 (904) 808-25-12</p>
      </footer>
    </div>
  );
}