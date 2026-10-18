// Each tab has "groups". Each item is [name, description, photo?, options?]
// Photo: put the image in /public/images and use "/images/name.jpg".
// Options: small flavor choices shown on the card, e.g. ["Caramel", "Chocolate"].
export const MENU = [
  {
    id: "coffee", tab: "Coffee", title: "Our Coffee", sub: "Espresso, milk & ice, all in one place",
    groups: [
      { name: "The Espresso Bar", sub: "Strong, short & unapologetically Italian", icon: "☕", tag: "Hot", items: [
        ["Espresso", "The classic shot, rich with a golden crema", "/images/espresso.jpg"],
        ["Organic Espresso", "Organically grown beans, smooth and clean", "/images/espresso.jpg"],
        ["Ristretto", "Our most concentrated shot, sweet and bold", "/images/espresso.jpg"],
        ["Americano", "Espresso softened with hot water", "/images/americano.jpg"],
        ["Decaffeinated Coffee", "All the comfort, none of the buzz", "/images/espresso.jpg"],
      ]},
      { name: "Milk & Foam", sub: "Creamy, velvety & made to linger over", icon: "🥛", tag: "Hot", items: [
        ["Macchiato — Small", "Espresso “stained” with a spoonful of foam", "/images/macchiato-medium.jpg"],
        ["Macchiato — Medium", "A little more milk for a gentler sip", "/images/macchiato-medium.jpg"],
        ["Cappuccino", "Espresso, steamed milk and a cloud of foam", "/images/cappuccino.jpg"],
        ["Latte", "Smooth espresso with plenty of silky milk", "/images/latte.jpg"],
        ["Mocha", "Espresso meets chocolate, a warm hug in a cup", "/images/mocha.jpg"],
      ]},
      { name: "Cool & Iced", sub: "Chilled favorites for sunny afternoons", icon: "🧊", tag: "Iced", items: [
        ["Iced Coffee", "Refreshing and smooth over ice", "/images/iced-coffee.jpg"],
        ["Iced Coffee — XXL", "The big one, for the long, lazy sit", "/images/iced-XXL.jpg", ["Caramel", "Chocolate"]],
        ["Iced Americano", "Crisp, clean and wonderfully bold", "/images/iced-americano.jpg"],
        ["Iced Latte", "Cold milk and espresso, beautifully layered", "/images/iced-coffee.jpg"],
        ["Iced Mocha", "Chocolate, espresso and ice, pure indulgence", "/images/iced-mocha.jpg"],
      ]},
    ],
  },
  {
    id: "cakes", tab: "Cakes", title: "Dolci della Casa", sub: "Cakes & sweets, perfect beside your coffee",
    groups: [{ icon: "🍰", tag: "Dessert", items: [
      ["Greek Cake (Grçka)", "A beloved local classic, sweet and syrupy"],
      ["Pistachio Cake", "Soft, nutty and gently green"],
      ["Full Chocolate Cake", "Chocolate in every single layer"],
      ["Kinder Cake", "Creamy milk and chocolate, a childhood favorite"],
      ["Panna Cotta", "Silky Italian cream, light as a whisper"],
      ["Trileçe", "Soaked in three milks, soft and caramel-topped"],
      ["Pistachio Mix", "A pistachio lover’s treat, creamy and crunchy"],
    ]}],
  },
  {
    id: "gelato", tab: "Ice Cream", title: "Gelato Corner", sub: "Freshly scooped, your way",
    groups: [{ icon: "🍨", tag: "Frozen", items: [
      ["Ice Cream (Cup)", "Scoops served in a cup, simple and sweet"],
      ["Ice Cream Cone", "Crisp cone, generous scoops"],
      ["Ice Cream Waffle Cone", "Warm, golden waffle cone, our favorite way"],
    ]}],
  },
];

export const PHOTO_POSITION = {
  "Iced Coffee": "center 30%",
  "Latte": "center 40%",
  "Iced Latte": "center 40%",
  "Iced Americano": "center 30%",
  "Iced Mocha": "center 35%",
  "Cappuccino": "center 40%",
  "Mocha": "center 40%",
};