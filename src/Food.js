// The Food tab. Same format as drinksMenu.js: [name, description, photo?]
// Photos default to /images/<name>.jpg  ->  /images/toast.jpg, /images/brioches.jpg, /images/petulla.jpg
export const FOOD = {
  id: "food", tab: "Food", title: "From the Kitchen", sub: "Warm, golden and made to order",
  groups: [
    { name: "Warm Bites", sub: "Perfect with a coffee", icon: "🥐", tag: "Fresh", items: [
      ["Toast", "Golden and crispy, hot off the grill"],
      ["Brioches", "Soft, buttery and gently sweet"],
      ["Petulla", "Warm, fluffy fried dough, a local favorite"],
    ]},
  ],
};