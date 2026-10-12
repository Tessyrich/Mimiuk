export const site = {
  name: "Shanky's",
  fullName: "Shanky's Restaurant, Bar & Lounge",
  tagline: "Nigerian food, late nights, Failsworth.",
  address: { line1: "476-478 Oldham Road", town: "Failsworth, Manchester", postcode: "M35 0FH" },
  phoneDisplay: "07831 148 970",
  phoneIntl: "447831148970",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shanky%27s+Restaurant+Bar+%26+Lounge+476+Oldham+Road+Failsworth+M35+0FH",
  rating: { score: 4.6, count: 41 },
  hygiene: 5,
  order: {
    uberEats: "https://www.ubereats.com/gb/store/shankys-restaurant-bar-and-lounge/YtRrhXSbQCuiDOE7g6OEgA",
    justEat: "https://www.just-eat.co.uk/restaurants-shankys-resturant-bar-and-lounge-manchester/menu",
  },
  hours: [
    { days: "Sunday to Thursday", open: "4:00 pm", close: "12:00 am" },
    { days: "Friday and Saturday", open: "4:00 pm", close: "2:30 am" },
  ],
};

export const menu = [
  {
    title: "Shanky's Specials",
    note: "Pepper soups, the dish regulars keep coming back for.",
    items: [
      { name: "Turkey Pepper Soup", price: 13, desc: "Slow-simmered turkey in a hot, aromatic broth." },
      { name: "Goat Meat Pepper Soup", price: 16, desc: "Tender goat, spiced broth, warming heat." },
      { name: "Assorted Meat Pepper Soup", price: 11, desc: "Mixed cuts in a rich peppered broth." },
    ],
  },
  {
    title: "Rice",
    note: "Served with your choice of chicken or beef, plus plantain.",
    items: [
      { name: "Jollof Rice", price: 17, desc: "Smoky party-style jollof with chicken or beef and fried plantain." },
      { name: "Ofada Rice with Ayamase", price: 18, desc: "Local ofada rice with green pepper ayamase stew and assorted meat." },
    ],
  },
  {
    title: "Soups & Swallow",
    note: "Served with amala, poundo, eba or semolina.",
    items: [
      { name: "Efo Riro", price: 17, desc: "Spinach stew with chicken, beef or assorted meat." },
      { name: "Bitter Leaf Soup", price: 18, desc: "Deep, savoury and traditional." },
      { name: "Seafood Okro", price: 25, desc: "Okro loaded with prawns and fish." },
    ],
  },
  {
    title: "Small Plates & Sides",
    note: "To share at the table or at the bar.",
    items: [
      { name: "Shanky's Wings", price: 5, desc: "Peppered chicken wings." },
      { name: "Gizdodo", price: 10, desc: "Gizzard and plantain in a spicy pepper sauce." },
      { name: "Peppered Gizzard", price: 10, desc: "Hot, sticky, moreish." },
      { name: "Fried Yam", price: 5, desc: "Crisp outside, soft inside." },
      { name: "Jollof Rice (side)", price: 5, desc: "A smaller portion to go with anything." },
      { name: "Puff Puff", price: 2, desc: "Per piece. Sweet fried dough." },
    ],
  },
];

export const reviews = [
  { quote: "Such a good vibe, food phenomenal, service beyond excellent, drinks delish.", name: "Mulaht", when: "September 2026", source: "Google" },
  { quote: "If you're ever in Manchester you should definitely go to this place. Everything under one roof, good music, nice and clean. Delicious food and very pleasant people. I will be coming back!", name: "Tracy O.", when: "March 2026", source: "Google" },
  { quote: "I had a great time at Shanky's with my friends for Valentine's. The atmosphere, food and music were brilliant. Would highly recommend for a good time.", name: "Judith A.", when: "March 2026", source: "Google" },
];
