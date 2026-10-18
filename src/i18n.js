// Languages: English (en), Albanian (sq), Macedonian (mk).
// Items, sections and groups are matched by their ENGLISH name from menuData.js.
// If you add a new product to menuData.js, add its translations here too.

export const LANGS = [
  { code: "en", label: "EN", name: "English" },
  { code: "sq", label: "SQ", name: "Shqip" },
  { code: "mk", label: "МК", name: "Македонски" },
];

export const detectLang = () => {
  const l = ((typeof navigator !== "undefined" && navigator.language) || "en").slice(0, 2).toLowerCase();
  return l === "sq" || l === "mk" ? l : "en";
};

// ---------- Interface texts ----------
export const UI = {
  en: {
    est: "Caffè & Dolci", tagline: "Where every cup feels like home", thanks: "Thank you for sitting with us",
    language: "Language", menuCategories: "Menu categories", currency: "den.", denars: "denars", flavors: "flavors",
    tags: { Hot: "Hot", Iced: "Iced", Sweet: "Sweet", Dessert: "Dessert", Frozen: "Frozen" },
    flavorNames: {},
  },
  sq: {
    est: "Kafe & Ëmbëlsira", tagline: "Ku çdo filxhan ndihet si në shtëpi", thanks: "Faleminderit që u ulët me ne",
    language: "Gjuha", menuCategories: "Kategoritë e menysë", currency: "den.", denars: "denarë", flavors: "shijet",
    tags: { Hot: "E nxehtë", Iced: "Me akull", Sweet: "E ëmbël", Dessert: "Ëmbëlsirë", Frozen: "E ngrirë" },
    flavorNames: { Caramel: "Karamel", Chocolate: "Çokollatë" },
  },
  mk: {
    est: "Кафе и десерти", tagline: "Каде секоја шолја се чувствува како дома", thanks: "Ви благодариме што седевте со нас",
    language: "Јазик", menuCategories: "Категории на менито", currency: "ден.", denars: "денари", flavors: "вкусови",
    tags: { Hot: "Топло", Iced: "Ладно", Sweet: "Слатко", Dessert: "Десерт", Frozen: "Замрзнато" },
    flavorNames: { Caramel: "Карамел", Chocolate: "Чоколадо" },
  },
};

// ---------- Tabs (matched by section id) ----------
export const SECTIONS = {
  sq: {
    coffee: { tab: "Kafe", title: "Kafet Tona", sub: "Espreso, qumësht dhe akull, të gjitha në një vend" },
    cakes: { tab: "Torta", title: "Ëmbëlsirat e Shtëpisë", sub: "Torta dhe ëmbëlsira, të përkryera pranë kafesë tënde" },
    gelato: { tab: "Akullore", title: "Këndi i Akullores", sub: "Të servirura të freskëta, sipas dëshirës" },
  },
  mk: {
    coffee: { tab: "Кафе", title: "Нашето кафе", sub: "Еспресо, млеко и мраз, сè на едно место" },
    cakes: { tab: "Торти", title: "Домашни десерти", sub: "Торти и слатки, совршени покрај вашето кафе" },
    gelato: { tab: "Сладолед", title: "Катче за сладолед", sub: "Свежо сервирано, како што сакате" },
  },
};

// ---------- Sections inside the Coffee tab (matched by English group name) ----------
export const GROUPS = {
  sq: {
    "The Espresso Bar": { name: "Bari i Espresos", sub: "I fortë, i shkurtër dhe pa kompromis italian" },
    "Milk & Foam": { name: "Qumësht & Shkumë", sub: "Kremoz, i butë dhe për t’u shijuar ngadalë" },
    "Cool & Iced": { name: "Të Freskëta & Me Akull", sub: "Të preferuarat e freskëta për pasditet me diell" },
  },
  mk: {
    "The Espresso Bar": { name: "Еспресо бар", sub: "Силно, кратко и безкомпромисно италијанско" },
    "Milk & Foam": { name: "Млеко и пена", sub: "Кремасто, свилено и создадено за бавно уживање" },
    "Cool & Iced": { name: "Ладно и со мраз", sub: "Разладени фаворити за сончеви попладниња" },
  },
};

// ---------- Products: English name -> [name, description] ----------
export const ITEMS = {
  sq: {
    "Espresso": ["Espreso", "Shoti klasik, i pasur me krem të artë"],
    "Organic Espresso": ["Espreso Organike", "Kokrra të rritura organikisht, të buta dhe të pastra"],
    "Ristretto": ["Ristreto", "Shoti ynë më i koncentruar, i ëmbël dhe i guximshëm"],
    "Americano": ["Amerikano", "Espreso e zbutur me ujë të nxehtë"],
    "Decaffeinated Coffee": ["Kafe pa kafeinë", "I gjithë rehatia, pa nxitjen e kafeinës"],
    "Macchiato — Small": ["Makiato — E vogël", "Espreso “e njollosur” me një lugë shkumë"],
    "Macchiato — Medium": ["Makiato — E mesme", "Pak më shumë qumësht për një gllënjkë më të butë"],
    "Cappuccino": ["Kapuçino", "Espreso, qumësht i avulluar dhe një re shkume"],
    "Latte": ["Late", "Espreso e butë me shumë qumësht të mëndafshtë"],
    "Mocha": ["Moka", "Espresoja takon çokollatën, një përqafim i ngrohtë në filxhan"],
    "Iced Coffee": ["Kafe me akull", "Freskuese dhe e butë mbi akull"],
    "Iced Coffee — XXL": ["Kafe me akull — XXL", "Ajo e madhja, për një ulje të gjatë e të qetë"],
    "Iced Americano": ["Amerikano me akull", "E freskët, e pastër dhe e guximshme"],
    "Iced Latte": ["Late me akull", "Qumësht i ftohtë dhe espreso, të shtresuara bukur"],
    "Iced Mocha": ["Moka me akull", "Çokollatë, espreso dhe akull, kënaqësi e pastër"],
    "Greek Cake (Grçka)": ["Torta Greke (Grçka)", "Një klasik i dashur vendas, e ëmbël me shurup"],
    "Pistachio Cake": ["Torta me Fëstëk", "E butë, me shije arrore dhe e gjelbër lehtë"],
    "Full Chocolate Cake": ["Torta e Plotë me Çokollatë", "Çokollatë në çdo shtresë"],
    "Kinder Cake": ["Torta Kinder", "Qumësht dhe çokollatë kremoze, e preferuara e fëmijërisë"],
    "Panna Cotta": ["Pana Kota", "Krem italian i mëndafshtë, i lehtë si një pëshpëritje"],
    "Trileçe": ["Trileçe", "E njomur në tre qumështra, e butë me karamel sipër"],
    "Pistachio Mix": ["Miks me Fëstëk", "Një kënaqësi për dashamirët e fëstëkut, kremoz dhe krokant"],
    "Ice Cream (Cup)": ["Akullore (Kupë)", "Topa akulloreje në kupë, të thjeshta dhe të ëmbla"],
    "Ice Cream Cone": ["Akullore në Kornet", "Kornet krokant, topa bujare"],
    "Ice Cream Waffle Cone": ["Akullore në Kornet me Vafël", "Kornet vafle i ngrohtë dhe i artë, mënyra jonë e preferuar"],
  },
  mk: {
    "Espresso": ["Еспресо", "Класичното кафе, богато со златна крема"],
    "Organic Espresso": ["Органско еспресо", "Органски одгледувани зрна, меко и чисто"],
    "Ristretto": ["Ристрето", "Нашето најконцентрирано кафе, слатко и храбро"],
    "Americano": ["Американо", "Еспресо омекнато со топла вода"],
    "Decaffeinated Coffee": ["Кафе без кофеин", "Целата удобност, без возбудата од кофеинот"],
    "Macchiato — Small": ["Макијато — мало", "Еспресо „извалкано“ со лажица пена"],
    "Macchiato — Medium": ["Макијато — средно", "Малку повеќе млеко за поблага голтка"],
    "Cappuccino": ["Капучино", "Еспресо, запарено млеко и облак од пена"],
    "Latte": ["Лате", "Благо еспресо со многу свилено млеко"],
    "Mocha": ["Мока", "Еспресото се среќава со чоколадото, топла прегратка во шолја"],
    "Iced Coffee": ["Ладно кафе", "Освежително и мазно врз мраз"],
    "Iced Coffee — XXL": ["Ладно кафе — XXL", "Големото, за долго и опуштено седење"],
    "Iced Americano": ["Ладно американо", "Свежо, чисто и прекрасно силно"],
    "Iced Latte": ["Ладно лате", "Студено млеко и еспресо, убаво наслоени"],
    "Iced Mocha": ["Ладна мока", "Чоколадо, еспресо и мраз, чисто уживање"],
    "Greek Cake (Grçka)": ["Грчка торта", "Омилен локален класик, сладок и сирупест"],
    "Pistachio Cake": ["Торта со фстак", "Мека, со вкус на ореви и нежно зелена"],
    "Full Chocolate Cake": ["Целосна чоколадна торта", "Чоколадо во секој слој"],
    "Kinder Cake": ["Киндер торта", "Кремасто млеко и чоколадо, омилена од детството"],
    "Panna Cotta": ["Пана кота", "Свилен италијански крем, лесен како шепот"],
    "Trileçe": ["Трилече", "Натопена во три млека, мека со карамел одозгора"],
    "Pistachio Mix": ["Микс од фстак", "Задоволство за љубителите на фстак, кремасто и крцкаво"],
    "Ice Cream (Cup)": ["Сладолед (чаша)", "Топки сладолед во чаша, едноставни и слатки"],
    "Ice Cream Cone": ["Сладолед во корнет", "Крцкав корнет, дарежливи топки"],
    "Ice Cream Waffle Cone": ["Сладолед во вафла корнет", "Топла, златна вафла, нашиот омилен начин"],
  },
};