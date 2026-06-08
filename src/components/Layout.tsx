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

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

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
          <Link to="/" className="font-serif text-2xl text-[#7B3320]">Емеля</Link>
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
      <footer className="py-8 px-4 text-center text-sm text-[#8C7E6E]" style={{ background: "#3D2212", color: "#C9A97A" }}>
        <p className="font-serif text-lg text-[#E8C98A] mb-1">Емеля</p>
        <p>Гостевой комплекс Емеля · Башкирия, озеро Банное</p>
        <p className="mt-1">+7 (351) 777-00-00</p>
      </footer>
    </div>
  );
}