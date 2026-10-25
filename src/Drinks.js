// The Drinks tab: three sections (Hot, Cold, Home Made) plus their prices in denars (ден.).
// Same format as menuData.js: [name, description, photo?]. Photos default to /images/<name-with-dashes>.jpg
// e.g. "Hot Chocolate" -> /images/hot-chocolate.jpg   (if the photo is missing, the icon is shown)
export const DRINKS = {
  id: "drinks", tab: "Drinks", title: "Our Drinks", sub: "Hot, cold and homemade, something for every mood",
  groups: [
    { name: "Hot Drinks", sub: "For chilly days and quiet moments", icon: "🍵", tag: "Hot", items: [
      ["Hot Chocolate", "Thick, creamy and warming"],
      ["Salep", "A traditional warm, creamy drink with cinnamon on top"],
      ["Hot Tea", "A soothing cup, served hot"],
    ]},
    { name: "Cold Drinks", sub: "Refreshing, still or sparkling", icon: "🥤", tag: "Cold", items: [
      ["Sparkling Water", "Crisp and fresh, with bubbles"],
      ["Still Water", "Pure and refreshing", " /images/water.jpg"],
      ["Coca Cola", "The classic, served ice cold", "/images/Cocacola.jpg"],
      ["Coca Cola Zero", "The same great taste, zero sugar", "/images/Cocacola.jpg"],
      ["Sprite", "Crisp lemon-lime fizz", "/images/sprite.jpg"],
      ["Fanta Orange", "Sparkling orange, bright and fruity", "/images/fanta-orange.jpg"],
      ["Fanta Tropical", "Sparkling tropical fruit flavors", "/images/fanta-tropical.jpg"],
      ["Schweppes Lemon", "Light, sparkling lemon refreshment", "/images/schweppes.jpg"],
      ["Schweppes Tonic", "Crisp tonic with a slightly bitter edge", "/images/shweppes-tonic.jpg"],
      ["Apple Juice", "Sweet and fruity, served cold", "/images/apple-juice.jpg"],
      ["Peach Juice", "Sweet and fruity, served cold", "/images/peach-juice.jpg"],
      ["Orange Juice", "Sweet and fruity, served cold", "/images/orange-juice.jpg"],
      ["Iced Tea", "Cool, refreshing and lightly sweet", "/images/iced-tea.jpg"],
      ["Red Bull", "The energy drink, served ice cold", "/images/redbull.jpg"],
    ]},
    { name: "Home Made Drinks", sub: "Freshly prepared, every single day", icon: "🍹", tag: "Homemade", items: [
      ["Vanilla Milkshake", "Creamy, sweet and thick, with vanilla" , "/images/vanilla-milkshake.jpg"],
      ["Chocolate Milkshake", "Rich chocolate, blended thick and cold", "/images/chocolate-milkshake.jpg"],
      ["Plazma Milkshake", "Our creamy house shake, thick and cold", "/images/plazma-milkshake.jpg"],
      ["Slushy", "Icy, fruity and wonderfully cold", "/images/slushy.jpg"],
      ["Banana/Strawberry Smoothie", "Fresh banana and strawberry, blended smooth", "/images/banana-strawberry.jpg"],
      ["Banana/Raspberry Smoothie", "Fresh banana and raspberry, blended smooth", "/images/banana-raspberry.jpg"],
      ["Lemon Juice", "Fresh, tangy and refreshing", "/images/lemon.jpg"],
      ["Blueberry Juice", "Sweet and lightly tart, homemade", "/images/blueberry.jpg"],
      ["Orange Juice 100%", "100% pure orange juice, bright and refreshing", "/images/orange-juice-100.jpg"],
    ]},
  ],
};

// Move a drink photo up or down inside its card (matched by the English name).
// A smaller number shows more of the TOP of the photo, a bigger number shows more of the BOTTOM.
export const DRINK_PHOTO_POSITION = {
  "Coca Cola": "center 10%",
  "Coca Cola Zero": "center 10%",
  "Sprite": "center 10%",
  "Fanta Orange": "center 10%",
  "Fanta Tropical": "center 10%",
  "Schweppes Lemon": "center 10%",
  "Schweppes Tonic": "center 10%",
};

// Push a drink photo LOWER inside its card (matched by the English name).
// The number is how much, in percent. 10 is a small push, 20 is a big push.
// (The photo is enlarged very slightly from its top edge, so no empty gap appears.)
export const DRINK_PHOTO_LOWER = {
  "Coca Cola": 10,
  "Coca Cola Zero": 10,
  "Sprite": 10,
  "Fanta Orange": 10,
};