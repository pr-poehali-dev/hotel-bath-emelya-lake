import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

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
];

const HOUSES = [
  {
    id: 2,
    title: "Гостевой дом Стандарт",
    subtitle: "Баня с обливным ведром",
    photos: COTTAGE2_PHOTOS,
    capacity: "до 6 человек",
    area: "80 м²",
    prices: { weekday: "6 000 р/сут", weekend: "7 500 р/сут", sunMon: "8 000 р/сут" },
    features: ["2 спальни", "Полностью оборудованная кухня", "Баня с обливным ведром", "Мангал и беседка", "Бесплатный Wi-Fi", "Парковка", "Смена белья"],
    description: "Уютный двухэтажный домик для отдыха в Башкирии. Внутри вас ждут две уютные спальни, гостиная и кухня с необходимой бытовой техникой и посудой для приготовления пищи. Собственная баня с обливным ведром — идеально для любителей контрастных процедур.",
  },
  {
    id: 3,
    title: "Гостевой дом Комфорт",
    subtitle: "Баня с чаном",
    photos: COTTAGE3_PHOTOS,
    capacity: "до 6 человек",
    area: "90 м²",
    prices: { weekday: "8 000 р/сут", weekend: "9 000 р/сут", sunMon: "10 000 р/сут" },
    features: ["2 спальни", "Полностью оборудованная кухня", "Баня с большим чаном", "Открытая веранда", "Мангал и беседка", "Бесплатный Wi-Fi", "Парковка"],
    description: "Просторный домик с собственной баней и большим деревянным чаном под открытым небом. Лежать в горячем чане, глядя на звёзды Башкирии — незабываемые ощущения. Уютная терраса, гостиная и кухня с необходимой бытовой техникой и посудой для приготовления пищи.",
  },
];

function Gallery({ photos, name }: { photos: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const total = photos.length;
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <img src={photos[current]} alt={`${name} — фото ${current + 1}`} className="w-full h-full object-contain transition-opacity duration-300" />
      <button onClick={() => setCurrent((current - 1 + total) % total)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition"
        style={{ background: "rgba(0,0,0,0.5)" }}>
        <Icon name="ChevronLeft" size={18} style={{ color: "#fff" }} />
      </button>
      <button onClick={() => setCurrent((current + 1) % total)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition"
        style={{ background: "rgba(0,0,0,0.5)" }}>
        <Icon name="ChevronRight" size={18} style={{ color: "#fff" }} />
      </button>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {photos.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className="w-2 h-2 rounded-full transition-all"
            style={{ background: i === current ? "#fff" : "rgba(255,255,255,0.45)" }} />
        ))}
      </div>
      <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs text-white" style={{ background: "rgba(0,0,0,0.45)" }}>
        {current + 1} / {total}
      </div>
    </div>
  );
}

function HouseModal({ house, onClose }: { house: typeof HOUSES[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose} style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}>
      <div className="bg-[#FBF5E8] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
        {/* Шапка */}
        <div className="flex items-center justify-between p-6 pb-0">
          <div>
            <h2 className="font-serif text-3xl text-[#7B3320]">{house.title}</h2>
            <p className="text-[#C17A2C] text-sm mt-1">{house.subtitle}</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#C17A2C]/10 transition">
            <Icon name="X" size={20} style={{ color: "#7B3320" }} />
          </button>
        </div>

        {/* Галерея */}
        <div className="mx-6 mt-4 rounded-xl overflow-hidden" style={{ height: 380 }}>
          <Gallery photos={house.photos} name={house.title} />
        </div>

        {/* Контент */}
        <div className="p-6 grid md:grid-cols-2 gap-6">
          {/* Описание */}
          <div>
            <h3 className="font-serif text-xl text-[#7B3320] mb-3">Описание</h3>
            <p className="text-[#8C7E6E] leading-relaxed text-sm mb-4">{house.description}</p>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-[#3D2212]">
                <Icon name="Users" size={15} style={{ color: "#C17A2C" }} /> {house.capacity}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#3D2212]">
                <Icon name="LayoutDashboard" size={15} style={{ color: "#C17A2C" }} /> {house.area}
              </div>
            </div>
            <h3 className="font-serif text-xl text-[#7B3320] mb-3">Удобства</h3>
            <div className="grid grid-cols-2 gap-y-2">
              {house.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-[#3D2212]">
                  <Icon name="Check" size={14} style={{ color: "#C17A2C" }} /> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Цены */}
          <div>
            <h3 className="font-serif text-xl text-[#7B3320] mb-3">Цены за сутки</h3>
            <div className="space-y-3">
              {[
                { label: "Будние дни (пн–чт)", price: house.prices.weekday },
                { label: "Пятница–суббота", price: house.prices.weekend },
                { label: "Суббота–воскресенье", price: house.prices.sunMon },
              ].map(p => (
                <div key={p.label} className="flex justify-between items-center p-4 rounded-xl bg-white shadow-sm">
                  <span className="text-sm text-[#8C7E6E]">{p.label}</span>
                  <span className="font-serif text-xl text-[#7B3320]">{p.price}</span>
                </div>
              ))}
              <p className="text-xs text-[#8C7E6E] mt-1">Цена указана за весь домик (до 6 чел.)</p>
            </div>
            <Link to="/contacts" onClick={onClose}
              className="flex items-center justify-center gap-2 w-full mt-6 px-6 py-4 rounded-xl text-white font-medium transition hover:opacity-90"
              style={{ background: "#C17A2C" }}>
              Забронировать
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Houses() {
  const [selected, setSelected] = useState<typeof HOUSES[0] | null>(null);

  return (
    <Layout>
      {/* Шапка страницы */}
      <section className="py-16 px-4 bg-[#FBF5E8]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-[#7B3320] mb-4">Гостевые дома</h1>
          <p className="text-[#8C7E6E] max-w-xl mx-auto leading-relaxed">
            Уютные деревянные домики на берегу озера Банное с собственными банями, каминами и беседками для отдыха.
          </p>
        </div>
      </section>

      {/* Карточки домиков */}
      <section className="py-12 px-4" style={{ background: "#F5EDE0" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {HOUSES.map(house => (
            <div key={house.id}
              className="bg-[#FBF5E8] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setSelected(house)}>
              {/* Превью галерея */}
              <div className="relative overflow-hidden" style={{ height: 280 }}>
                <img src={house.photos[0]} alt={house.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs text-white font-medium" style={{ background: "#C17A2C" }}>
                    {house.photos.length} фото
                  </span>
                </div>
              </div>

              {/* Инфо */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-serif text-2xl text-[#7B3320]">{house.title}</h3>
                    <p className="text-[#C17A2C] text-sm mt-0.5">{house.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-xl text-[#7B3320]">от 6 000 р</p>
                    <p className="text-xs text-[#8C7E6E]">за сутки</p>
                  </div>
                </div>

                <div className="flex gap-4 my-4">
                  <div className="flex items-center gap-1.5 text-sm text-[#8C7E6E]">
                    <Icon name="Users" size={14} style={{ color: "#C17A2C" }} /> {house.capacity}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-[#8C7E6E]">
                    <Icon name="LayoutDashboard" size={14} style={{ color: "#C17A2C" }} /> {house.area}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {house.features.slice(0, 4).map(f => (
                    <span key={f} className="px-2.5 py-1 rounded-full text-xs bg-[#C17A2C]/10 text-[#7B3320]">{f}</span>
                  ))}
                  {house.features.length > 4 && (
                    <span className="px-2.5 py-1 rounded-full text-xs bg-[#C17A2C]/10 text-[#7B3320]">+{house.features.length - 4} ещё</span>
                  )}
                </div>

                <button className="flex items-center gap-2 w-full justify-center py-3 rounded-xl font-medium transition hover:opacity-90 text-white"
                  style={{ background: "#C17A2C" }}>
                  Подробнее и цены
                  <Icon name="ArrowRight" size={16} style={{ color: "#fff" }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Модалка */}
      {selected && <HouseModal house={selected} onClose={() => setSelected(null)} />}
    </Layout>
  );
}