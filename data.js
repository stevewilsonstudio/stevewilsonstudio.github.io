// data.js

window.PAINTINGS = [
  { file: "Beach-Entry.jpg", slug: "beach-entry", title: "Beach Entry", size: "9×11", medium: "acrylic on birch panel", status: "available", price: 297 },
  { file: "Breakers.jpg", slug: "breakers", title: "Breakers", size: "30×40", medium: "acrylic on canvas", status: "available", price: 3600 },
  { file: "Breckenridge.jpg", slug: "breckenridge", title: "Breckenridge", size: "16×20", medium: "oil on canvas", status: "available", price: 950 },
  { file: "Butterfly.jpg", slug: "butterfly", title: "Butterfly", size: "20×20", medium: "acrylic on canvas", status: "sold", price: null },
  { file: "Cashiers.jpg", slug: "old-iron-bridge", title: "Old Iron Bridge", size: "11×14", medium: "acrylic on cradled birch", status: "available", price: 462 },
  { file: "Colorado.jpg", slug: "colorado", title: "Colorado", size: "8×10", medium: "acrylic on birch panel", status: "sold", price: null },
  { file: "Cumberland.jpg", slug: "cumberland", title: "Cumberland", size: "24×36", medium: "oil on canvas", status: "available", price: 2600 },
  { file: "Dance.jpg", slug: "dia-de-los-muertos", title: "Día de Los Muertos", size: "22×28", medium: "acrylic on canvas", status: "available", price: 1848 },
  { file: "Golden-Hour-Creek.jpg", slug: "golden-hour", title: "Golden Hour", size: "24×30", medium: "acrylic, gold leaf & silver leaf on canvas", status: "available", price: 2160 },
  { file: "Homeplace.jpg", slug: "homeplace", title: "Homeplace", size: "10×16", medium: "oil on canvas", status: "sold", price: null },
  { file: "Keeneland-Bath.jpg", slug: "morning-bath", title: "Morning Bath", size: "24×30", medium: "acrylic on canvas", status: "sold", price: null },
  { file: "Keeneland.jpg", slug: "morning-workout", title: "Morning Workout", size: "16×20", medium: "acrylic on cradled birch", status: "available", price: 950 },
  { file: "Love.jpg", slug: "first-dance", title: "First Dance", size: "16×20", medium: "oil on canvas", status: "sold", price: null },
  { file: "Sailboat.jpg", slug: "southport", title: "Southport", size: "24×36", medium: "oil on canvas", status: "sold", price: null },
  { file: "Sailboats.jpg", slug: "docks-at-st-simons", title: "Docks at St. Simons", size: "16×20", medium: "acrylic on cradled birch", status: "available", price: 950 },
  { file: "Sedona.jpg", slug: "vortex", title: "Vortex", size: "30×40", medium: "oil on canvas", status: "available", price: 3600 },
  { file: "Southport-Docks-at-Dusk.jpg", slug: "southport-docks-at-dusk", title: "Southport Docks at Dusk", size: "8×10", medium: "acrylic on cradled birch", status: "available", price: 240 },
  { file: "The-Rock.jpg", slug: "the-rock", title: "The Rock", size: "8×10", medium: "acrylic on birch panel", status: "sold", price: null },
  { file: "Torii.jpg", slug: "torii-gate-at-birmingham-gardens", title: "Torii Gate at Birmingham Gardens", size: "9×11", medium: "acrylic on birch panel", status: "sold", price: null },
  { file: "Tulips.jpg", slug: "tulips-at-yew-dell", title: "Tulips at Yew Dell", size: "20×30", medium: "oil on canvas", status: "sold", price: null },
  { file: "Wailea.jpg", slug: "wailea", title: "Wailea", size: "30×40", medium: "acrylic on canvas", status: "available", price: 3600 },
  { file: "Winter.jpg", slug: "winter", title: "Winter", size: "30×40", medium: "acrylic on canvas", status: "available", price: 3600 },
  { file: "Bald-Head-Island.jpg", slug: "bald-head-island", title: "Bald Head Island", size: "16×20", medium: "acrylic on cradled birch", status: "available", price: 950 },
];

window.formatUSD = function formatUSD(n) {
  if (typeof n !== "number") return "";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
};
