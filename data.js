// data.js

window.PAINTINGS = [
  { file: "Beach-Entry.jpg", slug: "beach-entry", title: "Beach Entry", size: "9×11", medium: "acrylic on birch panel", status: "available", price: 550 },
  { file: "Breakers.jpg", slug: "breakers", title: "Breakers", size: "30×40", medium: "acrylic on canvas", status: "available", price: 6750 },
  { file: "Breckenridge.jpg", slug: "breckenridge", title: "Breckenridge", size: "16×20", medium: "oil on canvas", status: "available", price: 1800 },
  { file: "Butterfly.jpg", slug: "butterfly", title: "Butterfly", size: "20×20", medium: "acrylic on canvas", status: "sold", price: null },
  { file: "Cashiers.jpg", slug: "old-iron-bridge", title: "Old Iron Bridge", size: "11×14", medium: "acrylic on cradled birch", status: "sold", price: null },
  { file: "Colorado.jpg", slug: "colorado", title: "Colorado", size: "8×10", medium: "acrylic on birch panel", status: "sold", price: null },
  { file: "Creek I.jpg", slug: "creek-i", title: "Creek I", size: "36×36", medium: "acrylic on canvas", status: "available", price: 7290 },
  { file: "Cumberland.jpg", slug: "cumberland", title: "Cumberland", size: "24×36", medium: "oil on canvas", status: "available", price: 4860 },
  { file: "Dance.jpg", slug: "dia-de-los-muertos", title: "Día de Los Muertos", size: "22×28", medium: "acrylic on canvas", status: "available", price: 3465 },
  { file: "Golden-Hour-Creek.jpg", slug: "golden-hour", title: "Golden Hour", size: "24×30", medium: "acrylic, gold leaf & silver leaf on canvas", status: "available", price: 4050 },
  { file: "Homeplace.jpg", slug: "homeplace", title: "Homeplace", size: "10×16", medium: "oil on canvas", status: "sold", price: null },
  { file: "Keeneland-Bath.jpg", slug: "morning-bath", title: "Morning Bath", size: "24×30", medium: "acrylic on canvas", status: "sold", price: null },
  { file: "Keeneland.jpg", slug: "morning-workout", title: "Morning Workout", size: "16×20", medium: "acrylic on cradled birch", status: "available", price: 1800 },
  { file: "Love.jpg", slug: "first-dance", title: "First Dance", size: "16×20", medium: "oil on canvas", status: "sold", price: null },
  { file: "Sailboat.jpg", slug: "southport", title: "Southport", size: "24×36", medium: "oil on canvas", status: "sold", price: null },
  { file: "Sailboats.jpg", slug: "docks-at-st-simons", title: "Docks at St. Simons", size: "16×20", medium: "acrylic on cradled birch", status: "sold", price: null },
  { file: "Sedona.jpg", slug: "vortex", title: "Vortex", size: "30×40", medium: "oil on canvas", status: "available", price: 6750 },
  { file: "Southport-Docks-at-Dusk.jpg", slug: "southport-docks-at-dusk", title: "Southport Docks at Dusk", size: "8×10", medium: "acrylic on cradled birch", status: "available", price: 450 },
  { file: "The-Rock.jpg", slug: "the-rock", title: "The Rock", size: "8×10", medium: "acrylic on birch panel", status: "sold", price: null },
  { file: "Torii.jpg", slug: "torii-gate-at-birmingham-gardens", title: "Torii Gate at Birmingham Gardens", size: "9×11", medium: "acrylic on birch panel", status: "sold", price: null },
  { file: "Tulips.jpg", slug: "tulips-at-yew-dell", title: "Tulips at Yew Dell", size: "20×30", medium: "oil on canvas", status: "sold", price: null },
  { file: "Wailea.jpg", slug: "wailea", title: "Wailea", size: "30×40", medium: "acrylic on canvas", status: "available", price: 6750 },
  { file: "Winter.jpg", slug: "winter", title: "Winter", size: "30×40", medium: "acrylic on canvas", status: "available", price: 6750 },
  { file: "Bald-Head-Island.jpg", slug: "bald-head-island", title: "Bald Head Island", size: "16×20", medium: "acrylic on cradled birch", status: "available", price: 1800 },

  { file: "Beach Sea Grass Entry.jpeg", slug: "beach-sea-grass-entry", title: "Beach Sea Grass Entry", size: "30×40", medium: "acrylic on canvas", status: "commission", price: null },
  { file: "Gate_at_Mount_Vernon.jpg", slug: "gate-at-mount-vernon", title: "Gate at Mount Vernon", size: "24×30", medium: "acrylic on canvas", status: "available", price: 4050 },
  { file: "Marsh_Stillness.jpg", slug: "marsh-stillness", title: "Marsh Stillness", size: "16×16", medium: "acrylic on canvas", status: "available", price: 1440 },
  { file: "Sunrise_over_East_Beach.jpg", slug: "sunrise-over-east-beach", title: "Sunrise Over East Beach", size: "36×36", medium: "acrylic on canvas", status: "available", price: 7290 },
  { file: "The_Watch_at_Frederica.jpg", slug: "the-watch-at-frederica", title: "The Watch at Frederica", size: "20×16", medium: "acrylic on cradled birch", status: "available", price: 1800 },
  { file: "Where_the_Light_Rests.jpg", slug: "where-the-light-rests", title: "Where the Light Rests", size: "16×20", medium: "acrylic on cradled birch", status: "available", price: 1800 },
  { file: "Between_Movements.jpg", slug: "between-movements", title: "Between Movements", size: "24×30", medium: "acrylic on canvas", status: "available", price: 5000 }
];

window.formatUSD = function formatUSD(n) {
  if (typeof n !== "number") return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(n);
};
