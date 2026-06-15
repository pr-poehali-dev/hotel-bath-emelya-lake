import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const HERO_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/a57116e0-c395-42a3-8468-b8c55591b8ca.jpg";

export default function About() {
  return (
    <Layout>
      {/* Герой */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/25" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 leading-tight">Емеля</h1>
          <p className="text-xl text-white/80 mb-8 max-w-lg">
            Гостевой комплекс Емеля на берегу озера Банное в Башкирии
          </p>
          <Link to="/houses" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-medium transition hover:opacity-90" style={{ background: "#C17A2C" }}>
            Посмотреть домики
            <Icon name="ArrowRight" size={18} />
          </Link>
        </div>
      </section>

      {/* О комплексе */}
      <section className="py-20 px-4 bg-[#FBF5E8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl text-[#7B3320] mb-6">О комплексе</h2>
            <p className="text-[#8C7E6E] leading-relaxed mb-4">
              Наш комплекс находится в живописной Башкирии, всего в 40 км западнее Магнитогорска,
              на берегу кристально чистого озера Банное (Якты-Куль).
            </p>
            <p className="text-[#8C7E6E] leading-relaxed mb-6">
              Здесь вы найдёте уютные гостевые дома с банями, трактир с домашней русской кухней
              и потрясающую природу Южного Урала для полноценного отдыха.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Home", label: "2 гостевых дома" },
                { icon: "Waves", label: "На берегу озера" },
                { icon: "Flame", label: "Собственные бани" },
                { icon: "UtensilsCrossed", label: "Трактир «Емеля»" },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "#C17A2C" }}>
                    <Icon name={f.icon as "Home"} size={16} style={{ color: "#fff" }} />
                  </div>
                  <span className="text-sm text-[#3D2212]">{f.label}</span>
                </div>
              ))}
            </div>
            <Link to="/houses" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium mt-8 transition hover:opacity-90" style={{ background: "#C17A2C" }}>
              Забронировать
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          <img src={HERO_IMG} alt="Комплекс Емеля" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Быстрые ссылки */}
      <section className="py-16 px-4" style={{ background: "#F5EDE0" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-[#7B3320] text-center mb-10">Что у нас есть</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { to: "/houses", icon: "Home", title: "Гостевые дома", desc: "2 уютных гостевых дома с удобствами на берегу озера. Вместимость — до 6 человек." },
              { to: "/baths", icon: "Flame", title: "Бани", desc: "Баня с бассейном, баня с чаном и баня с обливным ведром — выбирайте под настроение." },
              { to: "/traktir", icon: "UtensilsCrossed", title: "Трактир", desc: "Домашняя русская кухня, фирменные пельмени, блины, шашлыки и напитки от Емели." },
            ].map(c => (
              <Link key={c.to} to={c.to} className="bg-[#FBF5E8] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#C17A2C" }}>
                  <Icon name={c.icon as "Home"} size={22} style={{ color: "#fff" }} />
                </div>
                <h3 className="font-serif text-xl text-[#7B3320] mb-2 group-hover:text-[#C17A2C] transition-colors">{c.title}</h3>
                <p className="text-sm text-[#8C7E6E] leading-relaxed">{c.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-[#C17A2C] text-sm font-medium">
                  Подробнее <Icon name="ArrowRight" size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}