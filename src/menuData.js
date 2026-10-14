// To add a photo, put the image in /public/images and add its path as the third item,
// e.g. ["Espresso", "The classic shot...", "/images/espresso.jpg"]
export const MENU = [
  { id: "espresso", tab: "Espresso Bar", icon: "☕", title: "The Espresso Bar", sub: "Strong, short & unapologetically Italian", tag: "Hot", items: [
    ["Espresso", "The classic shot, rich with a golden crema"],
    ["Organic Espresso", "Organically grown beans, smooth and clean"],
    ["Ristretto", "Our most concentrated shot, sweet and bold"],
    ["Americano", "Espresso softened with hot water"],
    ["Decaffeinated Coffee", "All the comfort, none of the buzz"],
  ]},
  { id: "milk", tab: "Milk & Foam", icon: "🥛", title: "Milk & Foam", sub: "Creamy, velvety & made to linger over", tag: "Hot", items: [
    ["Macchiato — Small", "Espresso “stained” with a spoonful of foam"],
    ["Macchiato — Medium", "A little more milk for a gentler sip"],
    ["Cappuccino", "Espresso, steamed milk and a cloud of foam"],
    ["Latte", "Smooth espresso with plenty of silky milk"],
    ["Mocha", "Espresso meets chocolate, a warm hug in a cup"],
  ]},
  { id: "iced", tab: "Iced", icon: "🧊", title: "Cool & Iced", sub: "Chilled favorites for sunny afternoons", tag: "Iced", items: [
    ["Iced Coffee", "Refreshing and smooth over ice"],
    ["Iced Coffee — XXL", "The big one, for the long, lazy sit"],
    ["Iced Americano", "Crisp, clean and wonderfully bold"],
    ["Iced Latte", "Cold milk and espresso, beautifully layered"],
    ["Iced Mocha", "Chocolate, espresso and ice, pure indulgence"],
  ]},
  { id: "sweet", tab: "Sweet Touches", icon: "🍫", title: "Sweet Touches", sub: "A little extra something", tag: "Sweet", items: [
    ["Caramel", "Buttery caramel, golden and comforting"],
    ["Chocolate", "Rich, velvety and deeply chocolatey"],
  ]},
  { id: "cakes", tab: "Cakes", icon: "🍰", title: "Dolci della Casa", sub: "Cakes & sweets, perfect beside your coffee", tag: "Dessert", items: [
    ["Greek Cake (Grçka)", "A beloved local classic, sweet and syrupy"],
    ["Pistachio Cake", "Soft, nutty and gently green"],
    ["Full Chocolate Cake", "Chocolate in every single layer"],
    ["Kinder Cake", "Creamy milk and chocolate, a childhood favorite"],
    ["Panna Cotta", "Silky Italian cream, light as a whisper"],
    ["Trileçe", "Soaked in three milks, soft and caramel-topped"],
    ["Pistachio Mix", "A pistachio lover’s treat, creamy and crunchy"],
  ]},
  { id: "gelato", tab: "Ice Cream", icon: "🍨", title: "Gelato Corner", sub: "Freshly scooped, your way", tag: "Frozen", items: [
    ["Ice Cream (Cup)", "Scoops served in a cup, simple and sweet"],
    ["Ice Cream Cone", "Crisp cone, generous scoops"],
    ["Ice Cream Waffle Cone", "Warm, golden waffle cone, our favorite way"],
  ]},
];
