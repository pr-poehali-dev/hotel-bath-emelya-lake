import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/a57116e0-c395-42a3-8468-b8c55591b8ca.jpg";
const SAUNA_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/0a1c57eb-b496-4ac6-adce-6797dfdbf55a.jpg";
const ROOM_IMG = "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/files/3018d43a-d9a1-442c-9c9e-f0db063f00f0.jpg";

const NAV_LINKS = [
  { label: "О комплексе", href: "#about" },
  { label: "Номера", href: "#rooms" },
  { label: "Трактир", href: "#traktir" },
  { label: "Бронирование", href: "#booking" },
  { label: "Контакты", href: "#contacts" },
];

const COTTAGE1_PHOTOS = [
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/b0d34819-788a-4a6c-a7cc-18bb7e8ce63a.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/495a58cd-b3b1-4dfd-bbad-e8fca96ae2e9.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/a39c6eda-f39a-41f4-83e3-3ccfd739ec20.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/e7b87657-1056-42ef-b7f6-9520ecd4dce4.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/aba23bd8-6455-459e-98d9-e044d8612401.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/3baf53a5-1c44-49b4-b18d-64bf85f10f09.jpg",
];

const COTTAGE2_PHOTOS = [
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/b2c74da1-4150-4523-bd82-67a78166ab67.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/1a210674-408c-4caf-97be-a134ebeb33bf.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/cb5d7f47-68d8-4559-814d-d67809119dd8.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/2fdbf18b-64b1-42d7-9464-3cade5a65c49.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/8017cdea-6442-4533-b28b-62312fe0985c.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/c2eaef13-661e-4d2c-9473-8c665c7f580b.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/0e6a91fd-5660-473f-91b3-be961090492e.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/17d0eb7b-eb8a-4892-b333-cb91f249273d.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/64b22f52-cb4f-4449-a02a-a32b1acacb6a.jpg",
];

const COTTAGE3_PHOTOS = [
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/cd89e43c-26c8-40ce-bc83-d43304b6480e.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/41104ea8-3ffa-430c-a19b-cc00eea6d615.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/7ecc8db9-348c-435d-86a9-933915d2ec11.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/e3d73532-a8a8-41ec-849d-ea57c000ce35.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/b43b0d45-39a9-48c5-8d17-9190b19fee07.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/fc38c8a5-d56c-4305-b217-f1733b37fa25.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/d2215e33-5f82-4f96-9e28-91d2a78b7050.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/79981fe5-f5cf-4d81-8d24-ee830e968452.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/90458c06-e1f9-4ccc-9f0e-0de42b8e6a6a.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/7fc3cc54-3f7f-4a19-b308-6b2e1b3e8ec2.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/d0979888-3ff8-4264-9234-cc5f4dc348a6.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/6d948db4-4fa9-4acd-b869-923c21e85228.jpg",
];

function CottageGallery({ photos, name }: { photos: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const total = photos.length;
  return (
    <div className="relative w-full h-52 bg-black overflow-hidden">
      <img
        src={photos[current]}
        alt={`${name} — фото ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      <button
        onClick={() => setCurrent((current - 1 + total) % total)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition"
        style={{ background: "rgba(0,0,0,0.45)" }}
      >
        <Icon name="ChevronLeft" size={18} style={{ color: "#fff" }} />
      </button>
      <button
        onClick={() => setCurrent((current + 1) % total)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition"
        style={{ background: "rgba(0,0,0,0.45)" }}
      >
        <Icon name="ChevronRight" size={18} style={{ color: "#fff" }} />
      </button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-1.5 h-1.5 rounded-full transition-all"
            style={{ background: i === current ? "#fff" : "rgba(255,255,255,0.45)" }}
          />
        ))}
      </div>
      <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs text-white" style={{ background: "rgba(0,0,0,0.4)" }}>
        {current + 1} / {total}
      </div>
    </div>
  );
}

function Cottage2Gallery() {
  return <CottageGallery photos={COTTAGE2_PHOTOS} name="Домик 2" />;
}

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
            Гостевой комплекс Емеля на берегу озера Банное в Башкирии
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
            {/* Домик 1 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-[#FBF5E8]">
              <CottageGallery photos={COTTAGE1_PHOTOS} name="Домик 1" />
              <div className="p-5">
                <h3 className="font-serif text-xl text-[#7B3320] mb-2">Домик 1</h3>
                <p className="text-sm text-[#8C7E6E] mb-3 leading-relaxed">Уютный коттедж с собственной баней, крытым бассейном и душем-обливанием. Есть беседка с лавками для отдыха на свежем воздухе и открытая веранда.</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Баня", "Бассейн", "Беседка", "Душ-обливание", "До 6 человек"].map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(193,122,44,0.12)", color: "#7B3320" }}>{tag}</span>
                  ))}
                </div>
                <a href="#booking" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-medium transition hover:opacity-90"
                  style={{ background: "#C17A2C" }}>
                  Забронировать
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>

            {/* Домик 2 — с галереей */}
            <div className="rounded-xl overflow-hidden shadow-md bg-[#FBF5E8]">
              <Cottage2Gallery />
              <div className="p-5">
                <h3 className="font-serif text-xl text-[#7B3320] mb-2">Домик 2</h3>
                <p className="text-sm text-[#8C7E6E] mb-3 leading-relaxed">Просторный двухэтажный сруб с баней, открытой мангальной зоной и уютной верандой. На первом этаже — гостиная с кожаным диваном и кухня, на втором — две спальни.</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Баня", "Мангал", "2 спальни", "Кухня", "Веранда", "До 6 человек"].map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(193,122,44,0.12)", color: "#7B3320" }}>{tag}</span>
                  ))}
                </div>
                <a href="#booking" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-medium transition hover:opacity-90"
                  style={{ background: "#C17A2C" }}>
                  Забронировать
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>

            {/* Домик 3 */}
            <div className="rounded-xl overflow-hidden shadow-md bg-[#FBF5E8]">
              <CottageGallery photos={COTTAGE3_PHOTOS} name="Домик 3" />
              <div className="p-5">
                <h3 className="font-serif text-xl text-[#7B3320] mb-2">Домик 3</h3>
                <p className="text-sm text-[#8C7E6E] mb-3 leading-relaxed">Стильный двухэтажный коттедж в зелёных тонах с баней, купелью и крытой беседкой. Две уютные спальни, гостиная с бирюзовым диваном и кухня с антикварным буфетом.</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["Баня", "Купель", "Беседка", "2 спальни", "Кухня", "До 6 человек"].map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(193,122,44,0.12)", color: "#7B3320" }}>{tag}</span>
                  ))}
                </div>
                <a href="#booking" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-medium transition hover:opacity-90"
                  style={{ background: "#C17A2C" }}>
                  Забронировать
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>
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
        <div className="max-w-6xl mx-auto">

          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-[#7B3320] mb-3">Трактир «Емеля»</h2>
            <p className="text-[#8C7E6E] max-w-xl mx-auto leading-relaxed">
              Уютный трактир с домашней русской кухней. Свежие фермерские продукты, собственные рецепты и летняя веранда под берёзами.
            </p>
          </div>

          {/* Фото — мозаика */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3 mb-16" style={{ height: 500 }}>
            {/* Большое фото слева — фасад с вывеской */}
            <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/a57116e0-c395-42a3-8468-b8c55591b8ca.jpg"
                alt="Трактир Емеля" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Летняя веранда под берёзами — большое сверху справа */}
            <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/d893cb4e-ee87-47cf-bdbc-96d12123c518.jpg"
                alt="Летняя веранда" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Интерьер — снизу справа */}
            <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/f3ba18fe-6d6f-4d6e-b3fc-b36dcd098b0e.jpg"
                alt="Интерьер трактира" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Меню */}
          <h3 className="font-serif text-3xl text-[#7B3320] text-center mb-10">Меню</h3>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Завтраки */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Завтраки</h4>
              {[
                { name: "Молочная каша", w: "250 гр", price: "230 р" },
                { name: "Тыковник", w: "250 гр", price: "280 р" },
                { name: "Сырники", w: "120 гр", price: "300 р" },
                { name: "Яичница глазунья (из 2-х яиц)", w: "", price: "120 р" },
                { name: "Яичница с ветчиной (из 2-х яиц)", w: "", price: "180 р" },
                { name: "Сосиски с зел. горошком", w: "100/50 гр", price: "180 р" },
                { name: "Омлет (из 2-х яиц)", w: "", price: "160 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b border-[#C17A2C]/10">
                  <span className="text-sm text-[#3D2212]">{i.name} {i.w && <span className="text-[#8C7E6E] text-xs">{i.w}</span>}</span>
                  <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                </div>
              ))}
            </div>

            {/* Блины */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Блины</h4>
              {[
                { name: "Блины с курицей и грибами", w: "200 гр", price: "300 р" },
                { name: "Блины с ветчиной и сыром", w: "200 гр", price: "300 р" },
                { name: "Блины с мясом (свинина, говядина)", w: "200 гр", price: "300 р" },
                { name: "Блины со сметаной", w: "165 гр", price: "160 р" },
                { name: "Блины с маслом", w: "120 гр", price: "130 р" },
                { name: "Блины с сёмгой", w: "175 гр", price: "350 р" },
                { name: "Блины с творогом", w: "180 гр", price: "230 р" },
                { name: "Блины со сгущёнкой", w: "165 гр", price: "190 р" },
                { name: "Блины с варёнкой", w: "165 гр", price: "190 р" },
                { name: "Блины с мёдом", w: "150 гр", price: "190 р" },
                { name: "Блины с шоколадом", w: "165 гр", price: "190 р" },
                { name: "Блины с вареньем", w: "165 гр", price: "190 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b border-[#C17A2C]/10">
                  <span className="text-sm text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs">{i.w}</span></span>
                  <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                </div>
              ))}
            </div>

            {/* Салаты */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Салаты</h4>
              {[
                { name: "Деревенский", desc: "Свежие огурцы, помидоры и зелень", w: "200 гр", price: "280 р" },
                { name: "Салат из свежей капусты", desc: "С зелёным горошком", w: "170 гр", price: "230 р" },
                { name: "Салат «Оливье»", desc: "Классический с куриной грудкой", w: "200 гр", price: "300 р" },
                { name: "Винегрет", desc: "", w: "200 гр", price: "250 р" },
              ].map(i => (
                <div key={i.name} className="py-1.5 border-b border-[#C17A2C]/10">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-medium text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs font-normal">{i.w}</span></span>
                    <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                  </div>
                  {i.desc && <p className="text-xs text-[#8C7E6E]">{i.desc}</p>}
                </div>
              ))}
            </div>

            {/* Холодные закуски */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Холодные закуски</h4>
              {[
                { name: "Домашний разносол", desc: "Квашеная капуста, солёные огурчики и помидорчики", w: "325 гр", price: "250 р" },
                { name: "Солёные груздочки", desc: "С лучком и сметаной", w: "100/50/30 гр", price: "380 р" },
                { name: "Селёдочка", desc: "С картошечкой и лучком", w: "70/100/30 гр", price: "280 р" },
                { name: "Сальцо домашнее", desc: "С гренками и горчицей", w: "50/40/20 гр", price: "350 р" },
              ].map(i => (
                <div key={i.name} className="py-1.5 border-b border-[#C17A2C]/10">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-medium text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs font-normal">{i.w}</span></span>
                    <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                  </div>
                  {i.desc && <p className="text-xs text-[#8C7E6E]">{i.desc}</p>}
                </div>
              ))}
            </div>

            {/* Супы */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Супы</h4>
              {[
                { name: "Солянка", w: "300 гр", price: "320 р" },
                { name: "Борщ", w: "300 гр", price: "280 р" },
                { name: "Лапша", w: "300 гр", price: "250 р" },
                { name: "Уха из сёмги", w: "300 гр", price: "350 р" },
                { name: "Суп грибной", w: "300 гр", price: "280 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b border-[#C17A2C]/10">
                  <span className="text-sm text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs">{i.w}</span></span>
                  <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                </div>
              ))}
            </div>

            {/* Горячие блюда */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Горячие блюда</h4>
              {[
                { name: "Чебуреки из печки", w: "200 гр", price: "350 р" },
                { name: "Свиная рулька из духовки", w: "400 гр", price: "650 р" },
                { name: "Голубцы со сметаной", w: "250/30 гр", price: "380 р" },
                { name: "Жаркое в горшочках", w: "250 гр", price: "400 р" },
                { name: "Котлета щучья", w: "100 гр", price: "250 р" },
                { name: "Куриная котлета «Ряба»", w: "100 гр", price: "220 р" },
                { name: "Пельмени «Домашние»", desc: "Свинина, говядина", w: "200 гр", price: "300 р" },
                { name: "Пельмени «Восточные»", desc: "Баранина, говядина", w: "200 гр", price: "320 р" },
                { name: "Пельмени «Емеля»", desc: "С мясом щуки", w: "200 гр", price: "350 р" },
                { name: "Пельмени «Гуси-лебеди»", desc: "С мясом гуся", w: "200 гр", price: "360 р" },
                { name: "Пельмени «Нежные»", desc: "Курица, лук, специи", w: "200 гр", price: "280 р" },
                { name: "Вареники с варёным картофелем", w: "200 гр", price: "200 р" },
                { name: "Вареники с картофелем и лесными грибами", w: "200 гр", price: "250 р" },
                { name: "Вареники с картофелем и салом", w: "200 гр", price: "250 р" },
                { name: "Вареники с капустой", w: "200 гр", price: "200 р" },
                { name: "Вареники с лесной клубникой", w: "200 гр", price: "450 р" },
                { name: "Вареники с вишней", w: "200 гр", price: "350 р" },
              ].map(i => (
                <div key={i.name} className="py-1.5 border-b border-[#C17A2C]/10">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-medium text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs font-normal">{i.w}</span></span>
                    <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                  </div>
                  {"desc" in i && (i as {name:string;w:string;price:string;desc:string}).desc && <p className="text-xs text-[#8C7E6E]">{(i as {name:string;w:string;price:string;desc:string}).desc}</p>}
                </div>
              ))}
            </div>

            {/* Гриль */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Гриль</h4>
              {[
                { name: "Шашлык из свинины", w: "170 гр", price: "390 р" },
                { name: "Куриные крылышки гриль", w: "250 гр", price: "380 р" },
                { name: "Колбаски «Емеля» (свинина+говядина)", w: "250 гр", price: "600 р" },
                { name: "Колбаски «Емеля» (баранина+курица)", w: "250 гр", price: "650 р" },
                { name: "Стейк из сёмги", w: "150 гр", price: "690 р" },
                { name: "«Золотая рыбка» скумбрия на углях", w: "300 гр", price: "500 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b border-[#C17A2C]/10">
                  <span className="text-sm text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs">{i.w}</span></span>
                  <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                </div>
              ))}
            </div>

            {/* Гарниры и соусы */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Гарниры</h4>
              {[
                { name: "Картофель по-деревенски", desc: "Обжаренные ломтики со специями", w: "150 гр", price: "280 р" },
                { name: "Картофель фри", w: "150 гр", price: "280 р" },
                { name: "Картофель по-русски", desc: "Отварной с жареным луком", w: "200 гр", price: "250 р" },
                { name: "Овощи гриль", desc: "Перец болгарский, баклажан, кабачок", w: "200 гр", price: "350 р" },
                { name: "Каша гречневая с лесными грибами", w: "250 гр", price: "230 р" },
              ].map(i => (
                <div key={i.name} className="py-1.5 border-b border-[#C17A2C]/10">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-medium text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs font-normal">{i.w}</span></span>
                    <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                  </div>
                  {"desc" in i && (i as {name:string;w:string;price:string;desc:string}).desc && <p className="text-xs text-[#8C7E6E]">{(i as {name:string;w:string;price:string;desc:string}).desc}</p>}
                </div>
              ))}
              <h4 className="font-serif text-xl text-[#7B3320] mt-6 mb-4 pb-2 border-b border-[#C17A2C]/20">Соусы</h4>
              {[
                { name: "Соус «Сацебели»", w: "50 гр", price: "50 р" },
                { name: "Соус «Огонёк»", w: "50 гр", price: "50 р" },
                { name: "Горчица", w: "50 гр", price: "50 р" },
                { name: "Майонез", w: "50 гр", price: "50 р" },
                { name: "Сметана", w: "50 гр", price: "50 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b border-[#C17A2C]/10">
                  <span className="text-sm text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs">{i.w}</span></span>
                  <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                </div>
              ))}
            </div>

            {/* Напитки */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Горячие напитки</h4>
              {[
                { name: "Кофе растворимый чёрный", price: "80 р" },
                { name: "Кофе натуральный «американо»", price: "200 р" },
                { name: "Кофе натуральный «капучино»", price: "280 р" },
                { name: "Чёрный чай", price: "50 р" },
                { name: "Зелёный чай", price: "50 р" },
                { name: "Чай Башкирский в чайнике", price: "350 р" },
                { name: "Чай облепиховый", desc: "Облепиха + мёд + бадьян + корица", price: "390 р" },
                { name: "Чай имбирный", desc: "Имбирь + мёд + лимон", price: "390 р" },
                { name: "Чай клюквенный", desc: "Клюква + мёд + апельсин", price: "390 р" },
              ].map(i => (
                <div key={i.name} className="py-1.5 border-b border-[#C17A2C]/10">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-[#3D2212]">{i.name}</span>
                    <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                  </div>
                  {"desc" in i && (i as {name:string;price:string;desc:string}).desc && <p className="text-xs text-[#8C7E6E]">{(i as {name:string;price:string;desc:string}).desc}</p>}
                </div>
              ))}

              <h4 className="font-serif text-xl text-[#7B3320] mt-6 mb-4 pb-2 border-b border-[#C17A2C]/20">Напитки от Емели</h4>
              {[
                { name: "Медовуха «Емеля»", v: "0,2 л / 0,5 л", price: "80 / 440 р" },
                { name: "Квас «Емеля»", v: "0,2 л / 1,5 л", price: "60 / 200 р" },
                { name: "Морс «Емеля»", desc: "Клюква, облепиха, кр. смородина", v: "0,2 л / 1,5 л", price: "70 / 350 р" },
                { name: "Глинтвейн б/алк", v: "0,2 л", price: "200 р" },
              ].map(i => (
                <div key={i.name} className="py-1.5 border-b border-[#C17A2C]/10">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs">{i.v}</span></span>
                    <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                  </div>
                  {"desc" in i && (i as {name:string;v:string;price:string;desc:string}).desc && <p className="text-xs text-[#8C7E6E]">{(i as {name:string;v:string;price:string;desc:string}).desc}</p>}
                </div>
              ))}

              <h4 className="font-serif text-xl text-[#7B3320] mt-6 mb-4 pb-2 border-b border-[#C17A2C]/20">Пиво</h4>
              {[
                { name: "Жигулёвское", v: "0,45 л", price: "120 р" },
                { name: "Искусство варить", v: "0,45 л", price: "140 р" },
                { name: "Нефильтрованное", v: "0,45 л", price: "140 р" },
                { name: "Импортное", v: "0,5 л", price: "250 р" },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-baseline py-1.5 border-b border-[#C17A2C]/10">
                  <span className="text-sm text-[#3D2212]">{i.name} <span className="text-[#8C7E6E] text-xs">{i.v}</span></span>
                  <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{i.price}</span>
                </div>
              ))}
            </div>

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