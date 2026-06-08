import { useState } from "react";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

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
];

const COTTAGE3_PHOTOS = [
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/cd89e43c-26c8-40ce-bc83-d43304b6480e.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/41104ea8-3ffa-430c-a19b-cc00eea6d615.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/7ecc8db9-348c-435d-86a9-933915d2ec11.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/e3d73532-a8a8-41ec-849d-ea57c000ce35.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/b43b0d45-39a9-48c5-8d17-9190b19fee07.jpg",
  "https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/fc38c8a5-d56c-4305-b217-f1733b37fa25.jpg",
];

const BATHS = [
  {
    id: 1,
    title: "Баня с бассейном",
    icon: "Waves",
    photos: COTTAGE1_PHOTOS,
    shortDesc: "Настоящий русский пар и прохладный бассейн для полного расслабления.",
    description: "Просторная рубленая баня на дровах с большим чистым бассейном. Разогрейтесь до отказа в парной с берёзовым веником, а затем нырните в прохладную воду — это лучший способ восстановить силы после долгой дороги. Идеально для компании от 2 до 8 человек.",
    features: ["Дровяная печь", "Бассейн с чистой водой", "Купель с холодной водой", "Предбанник с зоной отдыха", "Веники в подарок", "Полотенца и халаты"],
    prices: { weekday: "3 000 р/час", weekend: "3 500 р/час", note: "Минимум 2 часа" },
  },
  {
    id: 2,
    title: "Баня с чаном",
    icon: "Circle",
    photos: COTTAGE3_PHOTOS,
    shortDesc: "Большой деревянный чан под открытым небом — особенная атмосфера.",
    description: "Уникальная баня с большим дубовым чаном, установленным прямо под открытым небом среди леса. Горячая вода в чане нагревается на дровах и пропитывается ароматами трав. Лежать в чане и смотреть на звёздное небо Башкирии — незабываемое ощущение.",
    features: ["Дровяная печь", "Большой дубовый чан", "Парная с берёзовым веником", "Открытая площадка", "Ароматные травяные сборы", "Полотенца и халаты"],
    prices: { weekday: "3 000 р/час", weekend: "3 500 р/час", note: "Минимум 2 часа" },
  },
  {
    id: 3,
    title: "Баня с обливным ведром",
    icon: "Droplets",
    photos: COTTAGE2_PHOTOS,
    shortDesc: "Традиционные контрастные процедуры с большим обливным ведром.",
    description: "Классическая русская баня с фирменным обливным ведром — мощный выброс холодной воды после жаркой парной. Это лучший способ укрепить иммунитет, взбодриться и получить заряд энергии на несколько дней вперёд. Идеально для тех, кто ценит традиционные банные ритуалы.",
    features: ["Дровяная печь", "Обливное ведро", "Парная с высоким жаром", "Предбанник с зоной отдыха", "Веники на выбор", "Полотенца и халаты"],
    prices: { weekday: "3 000 р/час", weekend: "3 500 р/час", note: "Минимум 2 часа" },
  },
];

function Gallery({ photos, name }: { photos: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const total = photos.length;
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <img src={photos[current]} alt={`${name} — фото ${current + 1}`} className="w-full h-full object-cover transition-opacity duration-300" />
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

function BathModal({ bath, onClose }: { bath: typeof BATHS[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose} style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}>
      <div className="bg-[#FBF5E8] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 pb-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#C17A2C" }}>
              <Icon name={bath.icon as "Waves"} size={20} style={{ color: "#fff" }} />
            </div>
            <h2 className="font-serif text-3xl text-[#7B3320]">{bath.title}</h2>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#C17A2C]/10 transition">
            <Icon name="X" size={20} style={{ color: "#7B3320" }} />
          </button>
        </div>

        <div className="mx-6 mt-4 rounded-xl overflow-hidden" style={{ height: 380 }}>
          <Gallery photos={bath.photos} name={bath.title} />
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-serif text-xl text-[#7B3320] mb-3">Описание</h3>
            <p className="text-[#8C7E6E] leading-relaxed text-sm mb-5">{bath.description}</p>
            <h3 className="font-serif text-xl text-[#7B3320] mb-3">Что включено</h3>
            <div className="grid grid-cols-1 gap-2">
              {bath.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-[#3D2212]">
                  <Icon name="Check" size={14} style={{ color: "#C17A2C" }} /> {f}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl text-[#7B3320] mb-3">Стоимость</h3>
            <div className="space-y-3">
              {[
                { label: "Будние дни (пн–пт)", price: bath.prices.weekday },
                { label: "Выходные (сб–вс)", price: bath.prices.weekend },
              ].map(p => (
                <div key={p.label} className="flex justify-between items-center p-4 rounded-xl bg-white shadow-sm">
                  <span className="text-sm text-[#8C7E6E]">{p.label}</span>
                  <span className="font-serif text-xl text-[#7B3320]">{p.price}</span>
                </div>
              ))}
              <p className="text-xs text-[#8C7E6E]">{bath.prices.note}</p>
            </div>
            <a href="tel:+73517770000"
              className="flex items-center justify-center gap-2 w-full mt-6 px-6 py-4 rounded-xl text-white font-medium transition hover:opacity-90"
              style={{ background: "#C17A2C" }}>
              <Icon name="Phone" size={16} style={{ color: "#fff" }} />
              Забронировать баню
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Baths() {
  const [selected, setSelected] = useState<typeof BATHS[0] | null>(null);

  return (
    <Layout>
      <section className="py-16 px-4 bg-[#FBF5E8]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-[#7B3320] mb-4">Бани</h1>
          <p className="text-[#8C7E6E] max-w-xl mx-auto leading-relaxed">
            Три разные бани на ваш выбор — с бассейном, с большим дубовым чаном или с традиционным обливным ведром.
          </p>
        </div>
      </section>

      <section className="py-12 px-4" style={{ background: "#F5EDE0" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {BATHS.map(bath => (
            <div key={bath.id}
              className="bg-[#FBF5E8] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setSelected(bath)}>
              <div className="relative overflow-hidden" style={{ height: 260 }}>
                <img src={bath.photos[0]} alt={bath.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#C17A2C" }}>
                    <Icon name={bath.icon as "Waves"} size={14} style={{ color: "#fff" }} />
                  </div>
                  <span className="text-white text-sm font-medium">{bath.photos.length} фото</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-[#7B3320] mb-2 group-hover:text-[#C17A2C] transition-colors">{bath.title}</h3>
                <p className="text-sm text-[#8C7E6E] leading-relaxed mb-4">{bath.shortDesc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {bath.features.slice(0, 3).map(f => (
                    <span key={f} className="px-2 py-0.5 rounded-full text-xs bg-[#C17A2C]/10 text-[#7B3320]">{f}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-lg text-[#7B3320]">от {bath.prices.weekday}</p>
                    <p className="text-xs text-[#8C7E6E]">{bath.prices.note}</p>
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-medium transition hover:opacity-90"
                    style={{ background: "#C17A2C" }}>
                    Подробнее
                    <Icon name="ArrowRight" size={14} style={{ color: "#fff" }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && <BathModal bath={selected} onClose={() => setSelected(null)} />}
    </Layout>
  );
}
