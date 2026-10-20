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
      ["Still Water", "Pure and refreshing"],
      ["Coca Cola", "The classic, served ice cold", "/images/Cocacola.jpg"],
      ["Coca Cola Zero", "The same great taste, zero sugar", "/images/Cocacola.jpg"],
      ["Sprite", "Crisp lemon-lime fizz", "/images/sprite.jpg"],
      ["Fanta Orange", "Sparkling orange, bright and fruity", "/images/fanta-orange.jpg"],
      ["Fanta Tropical", "Sparkling tropical fruit flavors"],
      ["Schweppes", "Light, sparkling and refreshing"],
      ["Schweppes Tonic", "Crisp tonic with a slightly bitter edge"],
      ["Apple Juice", "Sweet and fruity, served cold"],
      ["Peach Juice", "Sweet and fruity, served cold"],
      ["Orange Juice", "Sweet and fruity, served cold"],
    ]},
    { name: "Home Made Drinks", sub: "Freshly prepared, every single day", icon: "🍹", tag: "Homemade", items: [
      ["Vanilla Milkshake", "Creamy, sweet and thick, with vanilla"],
      ["Chocolate Milkshake", "Rich chocolate, blended thick and cold"],
      ["Plazma Milkshake", "Our creamy house shake, thick and cold"],
      ["Slushy", "Icy, fruity and wonderfully cold"],
      ["Banana/Strawberry Smoothie", "Fresh banana and strawberry, blended smooth"],
      ["Banana/Raspberry Smoothie", "Fresh banana and raspberry, blended smooth"],
      ["Lemon Juice", "Fresh, tangy and refreshing"],
      ["Blueberry Juice", "Sweet and lightly tart, homemade"],
    ]},
  ],
};

export const DRINK_PRICES = {
  "Hot Chocolate": 100, "Salep": 90, "Hot Tea": 50,
  "Sparkling Water": 40, "Still Water": 40, "Coca Cola": 70, "Coca Cola Zero": 70, "Sprite": 70,
  "Fanta Orange": 70, "Fanta Tropical": 70, "Schweppes": 70, "Schweppes Tonic": 70,
  "Apple Juice": 70, "Peach Juice": 70, "Orange Juice": 70,
  "Vanilla Milkshake": 150, "Chocolate Milkshake": 150, "Plazma Milkshake": 160, "Slushy": 120,
  "Banana/Strawberry Smoothie": 170, "Banana/Raspberry Smoothie": 170, "Lemon Juice": 100, "Blueberry Juice": 120,
};

// Move a drink photo up or down inside its card (matched by the English name).
// A smaller number shows more of the TOP of the photo, a bigger number shows more of the BOTTOM.
export const DRINK_PHOTO_POSITION = {
  "Coca Cola": "center 10%",
    "Coca Cola Zero": "center 10%",
    "Sprite": "center 10%",
    "Fanta Orange": "center 10%",
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