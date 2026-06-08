import Layout from "@/components/Layout";

function MenuItem({ name, w, price, desc }: { name: string; w?: string; price: string; desc?: string }) {
  return (
    <div className="py-1.5 border-b border-[#C17A2C]/10">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-[#3D2212]">
          {name} {w && <span className="text-[#8C7E6E] text-xs font-normal">{w}</span>}
        </span>
        <span className="text-sm font-semibold text-[#7B3320] ml-3 shrink-0">{price}</span>
      </div>
      {desc && <p className="text-xs text-[#8C7E6E]">{desc}</p>}
    </div>
  );
}

function MenuBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">{title}</h4>
      {children}
    </div>
  );
}

export default function Traktir() {
  return (
    <Layout>
      {/* Шапка */}
      <section className="py-16 px-4 bg-[#FBF5E8]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-[#7B3320] mb-4">Трактир «Емеля»</h1>
          <p className="text-[#8C7E6E] max-w-xl mx-auto leading-relaxed">
            Уютный трактир с домашней русской кухней. Свежие фермерские продукты, собственные рецепты и летняя веранда под берёзами.
          </p>
        </div>
      </section>

      {/* Фото мозаика */}
      <section className="px-4 pt-8 pb-4" style={{ background: "#F5EDE0" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-3 grid-rows-2 gap-3" style={{ height: 500 }}>
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-lg">
            <img src="https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/a57116e0-c395-42a3-8468-b8c55591b8ca.jpg"
              alt="Трактир Емеля" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
            <img src="https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/d893cb4e-ee87-47cf-bdbc-96d12123c518.jpg"
              alt="Летняя веранда" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
            <img src="https://cdn.poehali.dev/projects/3774030f-afe0-41fc-93b3-45b1a765fe14/bucket/479b7396-0609-4842-a64a-fadfcc27c23a.jpg"
              alt="Интерьер трактира" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Меню */}
      <section className="py-12 px-4" style={{ background: "#F5EDE0" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-[#7B3320] text-center mb-10">Меню</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <MenuBlock title="Завтраки">
              {[
                { name: "Молочная каша", w: "250 гр", price: "230 р" },
                { name: "Тыковник", w: "250 гр", price: "280 р" },
                { name: "Сырники", w: "120 гр", price: "300 р" },
                { name: "Яичница глазунья (из 2-х яиц)", price: "120 р" },
                { name: "Яичница с ветчиной (из 2-х яиц)", price: "180 р" },
                { name: "Сосиски с зел. горошком", w: "100/50 гр", price: "180 р" },
                { name: "Омлет (из 2-х яиц)", price: "160 р" },
              ].map(i => <MenuItem key={i.name} {...i} />)}
            </MenuBlock>

            <MenuBlock title="Блины">
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
              ].map(i => <MenuItem key={i.name} {...i} />)}
            </MenuBlock>

            <MenuBlock title="Салаты">
              {[
                { name: "Деревенский", desc: "Свежие огурцы, помидоры и зелень", w: "200 гр", price: "280 р" },
                { name: "Салат из свежей капусты", desc: "С зелёным горошком", w: "170 гр", price: "230 р" },
                { name: "Салат «Оливье»", desc: "Классический с куриной грудкой", w: "200 гр", price: "300 р" },
                { name: "Винегрет", w: "200 гр", price: "250 р" },
              ].map(i => <MenuItem key={i.name} {...i} />)}
            </MenuBlock>

            <MenuBlock title="Холодные закуски">
              {[
                { name: "Домашний разносол", desc: "Квашеная капуста, солёные огурчики и помидорчики", w: "325 гр", price: "250 р" },
                { name: "Солёные груздочки", desc: "С лучком и сметаной", w: "100/50/30 гр", price: "380 р" },
                { name: "Селёдочка", desc: "С картошечкой и лучком", w: "70/100/30 гр", price: "280 р" },
                { name: "Сальцо домашнее", desc: "С гренками и горчицей", w: "50/40/20 гр", price: "350 р" },
              ].map(i => <MenuItem key={i.name} {...i} />)}
            </MenuBlock>

            <MenuBlock title="Супы">
              {[
                { name: "Солянка", w: "300 гр", price: "320 р" },
                { name: "Борщ", w: "300 гр", price: "280 р" },
                { name: "Лапша", w: "300 гр", price: "250 р" },
                { name: "Уха из сёмги", w: "300 гр", price: "350 р" },
                { name: "Суп грибной", w: "300 гр", price: "280 р" },
              ].map(i => <MenuItem key={i.name} {...i} />)}
            </MenuBlock>

            <MenuBlock title="Горячие блюда">
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
              ].map(i => <MenuItem key={i.name} {...i} />)}
            </MenuBlock>

            <MenuBlock title="Гриль">
              {[
                { name: "Шашлык из свинины", w: "170 гр", price: "390 р" },
                { name: "Куриные крылышки гриль", w: "250 гр", price: "380 р" },
                { name: "Колбаски «Емеля» (свинина+говядина)", w: "250 гр", price: "600 р" },
                { name: "Колбаски «Емеля» (баранина+курица)", w: "250 гр", price: "650 р" },
                { name: "Стейк из сёмги", w: "150 гр", price: "690 р" },
                { name: "«Золотая рыбка» скумбрия на углях", w: "300 гр", price: "500 р" },
              ].map(i => <MenuItem key={i.name} {...i} />)}
            </MenuBlock>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-serif text-xl text-[#7B3320] mb-4 pb-2 border-b border-[#C17A2C]/20">Гарниры</h4>
              {[
                { name: "Картофель по-деревенски", desc: "Обжаренные ломтики со специями", w: "150 гр", price: "280 р" },
                { name: "Картофель фри", w: "150 гр", price: "280 р" },
                { name: "Картофель по-русски", desc: "Отварной с жареным луком", w: "200 гр", price: "250 р" },
                { name: "Овощи гриль", desc: "Перец болгарский, баклажан, кабачок", w: "200 гр", price: "350 р" },
                { name: "Каша гречневая с лесными грибами", w: "250 гр", price: "230 р" },
              ].map(i => <MenuItem key={i.name} {...i} />)}
              <h4 className="font-serif text-xl text-[#7B3320] mt-6 mb-4 pb-2 border-b border-[#C17A2C]/20">Соусы</h4>
              {[
                { name: "Соус «Сацебели»", w: "50 гр", price: "50 р" },
                { name: "Соус «Огонёк»", w: "50 гр", price: "50 р" },
                { name: "Горчица", w: "50 гр", price: "50 р" },
                { name: "Майонез", w: "50 гр", price: "50 р" },
                { name: "Сметана", w: "50 гр", price: "50 р" },
              ].map(i => <MenuItem key={i.name} {...i} />)}
            </div>

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
              ].map(i => <MenuItem key={i.name} {...i} />)}
              <h4 className="font-serif text-xl text-[#7B3320] mt-6 mb-4 pb-2 border-b border-[#C17A2C]/20">Напитки от Емели</h4>
              {[
                { name: "Медовуха «Емеля»", w: "0,2 л / 0,5 л", price: "80 / 440 р" },
                { name: "Квас «Емеля»", w: "0,2 л / 1,5 л", price: "60 / 200 р" },
                { name: "Морс «Емеля»", desc: "Клюква, облепиха, кр. смородина", w: "0,2 л / 1,5 л", price: "70 / 350 р" },
                { name: "Глинтвейн б/алк", w: "0,2 л", price: "200 р" },
              ].map(i => <MenuItem key={i.name} {...i} />)}
              <h4 className="font-serif text-xl text-[#7B3320] mt-6 mb-4 pb-2 border-b border-[#C17A2C]/20">Пиво</h4>
              {[
                { name: "Жигулёвское", w: "0,45 л", price: "120 р" },
                { name: "Искусство варить", w: "0,45 л", price: "140 р" },
                { name: "Нефильтрованное", w: "0,45 л", price: "140 р" },
                { name: "Импортное", w: "0,5 л", price: "250 р" },
              ].map(i => <MenuItem key={i.name} {...i} />)}
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
