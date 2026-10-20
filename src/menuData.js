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
        ["Ristretto", "Our most concentrated shot, sweet and bold", "/images/organic-espresso.jpg"],
        ["Americano", "Espresso softened with hot water", "/images/americano.jpg"],
        ["Decaffeinated Coffee", "All the comfort, none of the buzz", "/images/decaf.jpg"],
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
      ["Greek Cake (Grçka)", "A beloved local classic, sweet and syrupy", "/images/grqka.jpg"],
      ["Pistachio Cake", "Soft, nutty and gently green", "/images/pistachio.jpg"],
      ["Full Chocolate Cake", "Chocolate in every single layer", "/images/full-chocolate-cake.jpg"],
      ["Kinder Cake", "Creamy milk and chocolate, a childhood favorite", "/images/kinder-cake.jpg"],
      ["Panna Cotta", "Silky Italian cream, light as a whisper", "/images/pannacota.jpg"],
      ["Trileçe", "Soaked in three milks, soft and caramel-topped", "/images/trileqe.jpg"],
      ["Pistachio Mix", "A pistachio lover’s treat, creamy and crunchy", "/images/pistachio-mix.jpg"],
    ]}],
  },
  {
    id: "gelato", tab: "Ice Cream", title: "Gelato Corner", sub: "Freshly scooped, your way",
    groups: [{ icon: "🍨", tag: "Frozen", items: [
      ["Ice Cream (Cup)", "Scoops served in a cup, simple and sweet", "/images/akullore.jpg"],
      ["Ice Cream Cone", "Crisp cone, generous scoops", "/images/akullore-kornet.jpg"],
      ["Ice Cream Waffle Cone", "Warm, golden waffle cone, our favorite way", "/images/akullore-waffle.jpg"],
    ]}],
  },
];

// Move a photo inside its frame: "center 0%" shows more of the top (image sits lower),
// "center 100%" shows more of the bottom (image sits higher). Default is "center 50%".
export const PHOTO_POSITION = { "Iced Coffee": "center 30%", 
  "Latte": "center 30%", 
  "Iced Latte": "center 30%", 
  "Iced Americano": "center 30%" ,
   "Iced Mocha": "center 30% ",
   "Cappuccino": "center 10%", 
   "Mocha": "center 40%", 
   "Iced Coffee — XXL": "center 30%",
   "Pistachio Cake": "center 70%",
   "Full Chocolate Cake": "center 70%",
   "Kinder Cake": "center 70%",
   "Panna Cotta": "center 70%",
   "Trileçe": "center 30%",
   "Pistachio Mix": "center 30%",
   "Greek Cake (Grçka)": "center 70%",
   "Americano": "center 80%",
   "Espresso": "center 20%",
   "Ristretto": "center 30%",
   "Macchiato — Small": "center 20%",
   "Macchiato — Medium": "center 20%",
   "Organic Espresso": "center 20%",
   "Ice Cream (Cup)": "center 10%",
    "Ice Cream Cone": "center 0%",
    "Ice Cream Waffle Cone": "center 0%",
};

// Prices in Macedonian denars (ден.). Edit any number here, the cards update by themselves.
export const PRICES = {
  "Espresso": 50, "Organic Espresso": 70, "Ristretto": 50, "Americano": 60, "Decaffeinated Coffee": 60,
  "Macchiato — Small": 55, "Macchiato — Medium": 70, "Cappuccino": 80, "Latte": 90, "Mocha": 100,
  "Iced Coffee": 90, "Iced Coffee — XXL": 150, "Iced Americano": 80, "Iced Latte": 110, "Iced Mocha": 120,
  "Greek Cake (Grçka)": 120, "Pistachio Cake": 150, "Full Chocolate Cake": 140, "Kinder Cake": 140,
  "Panna Cotta": 130, "Trileçe": 120, "Pistachio Mix": 150,
  "Ice Cream (Cup)": 100, "Ice Cream Cone": 80, "Ice Cream Waffle Cone": 120,
};