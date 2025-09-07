const countryList = {
  AED: "AE", // UAE Dirham
  AFN: "AF", // Afghanistan Afghani
  ALL: "AL", // Albania Lek
  AMD: "AM", // Armenia Dram
  ANG: "CW", // Netherlands Antillean Guilder (Curacao)
  AOA: "AO", // Angola Kwanza
  ARS: "AR", // Argentina Peso
  AUD: "AU", // Australia Dollar
  AWG: "AW", // Aruba Guilder
  AZN: "AZ", // Azerbaijan Manat
  BAM: "BA", // Bosnia Mark
  BBD: "BB", // Barbados Dollar
  BDT: "BD", // Bangladesh Taka
  BGN: "BG", // Bulgaria Lev
  BHD: "BH", // Bahrain Dinar
  BIF: "BI", // Burundi Franc
  BMD: "BM", // Bermuda Dollar
  BND: "BN", // Brunei Dollar
  BOB: "BO", // Bolivia Boliviano
  BRL: "BR", // Brazil Real
  BSD: "BS", // Bahamas Dollar
  BTN: "BT", // Bhutan Ngultrum
  BWP: "BW", // Botswana Pula
  BYN: "BY", // Belarus Ruble
  BZD: "BZ", // Belize Dollar
  CAD: "CA", // Canada Dollar
  CDF: "CD", // Congo Franc
  CHF: "CH", // Switzerland Franc
  CLP: "CL", // Chile Peso
  CNY: "CN", // China Yuan
  COP: "CO", // Colombia Peso
  CRC: "CR", // Costa Rica Colon
  CUP: "CU", // Cuba Peso
  CVE: "CV", // Cape Verde Escudo
  CZK: "CZ", // Czech Koruna
  DJF: "DJ", // Djibouti Franc
  DKK: "DK", // Denmark Krone
  DOP: "DO", // Dominican Peso
  DZD: "DZ", // Algeria Dinar
  EGP: "EG", // Egypt Pound
  ERN: "ER", // Eritrea Nakfa
  ETB: "ET", // Ethiopia Birr
  EUR: "EU", // Euro
  FJD: "FJ", // Fiji Dollar
  FKP: "FK", // Falkland Pound
  GBP: "GB", // British Pound
  GEL: "GE", // Georgia Lari
  GHS: "GH", // Ghana Cedi
  GIP: "GI", // Gibraltar Pound
  GMD: "GM", // Gambia Dalasi
  GNF: "GN", // Guinea Franc
  GTQ: "GT", // Guatemala Quetzal
  GYD: "GY", // Guyana Dollar
  HKD: "HK", // Hong Kong Dollar
  HNL: "HN", // Honduras Lempira
  HRK: "HR", // Croatia Kuna
  HTG: "HT", // Haiti Gourde
  HUF: "HU", // Hungary Forint
  IDR: "ID", // Indonesia Rupiah
  ILS: "IL", // Israel Shekel
  INR: "IN", // India Rupee
  IQD: "IQ", // Iraq Dinar
  IRR: "IR", // Iran Rial
  ISK: "IS", // Iceland Krona
  JMD: "JM", // Jamaica Dollar
  JOD: "JO", // Jordan Dinar
  JPY: "JP", // Japan Yen
  KES: "KE", // Kenya Shilling
  KGS: "KG", // Kyrgyzstan Som
  KHR: "KH", // Cambodia Riel
  KMF: "KM", // Comoros Franc
  KRW: "KR", // Korea (South) Won
  KWD: "KW", // Kuwait Dinar
  KYD: "KY", // Cayman Islands Dollar
  KZT: "KZ", // Kazakhstan Tenge
  LAK: "LA", // Laos Kip
  LBP: "LB", // Lebanon Pound
  LKR: "LK", // Sri Lanka Rupee
  LRD: "LR", // Liberia Dollar
  LSL: "LS", // Lesotho Loti
  LYD: "LY", // Libya Dinar
  MAD: "MA", // Morocco Dirham
  MDL: "MD", // Moldova Leu
  MGA: "MG", // Madagascar Ariary
  MKD: "MK", // North Macedonia Denar
  MMK: "MM", // Myanmar Kyat
  MNT: "MN", // Mongolia Tugrik
  MOP: "MO", // Macau Pataca
  MRU: "MR", // Mauritania Ouguiya
  MUR: "MU", // Mauritius Rupee
  MVR: "MV", // Maldives Rufiyaa
  MWK: "MW", // Malawi Kwacha
  MXN: "MX", // Mexico Peso
  MYR: "MY", // Malaysia Ringgit
  MZN: "MZ", // Mozambique Metical
  NAD: "NA", // Namibia Dollar
  NGN: "NG", // Nigeria Naira
  NIO: "NI", // Nicaragua Cordoba
  NOK: "NO", // Norway Krone
  NPR: "NP", // Nepal Rupee
  NZD: "NZ", // New Zealand Dollar
  OMR: "OM", // Oman Rial
  PAB: "PA", // Panama Balboa
  PEN: "PE", // Peru Sol
  PGK: "PG", // Papua New Guinea Kina
  PHP: "PH", // Philippines Peso
  PKR: "PK", // Pakistan Rupee
  PLN: "PL", // Poland Zloty
  PYG: "PY", // Paraguay Guarani
  QAR: "QA", // Qatar Riyal
  RON: "RO", // Romania Leu
  RSD: "RS", // Serbia Dinar
  RUB: "RU", // Russia Ruble
  RWF: "RW", // Rwanda Franc
  SAR: "SA", // Saudi Arabia Riyal
  SBD: "SB", // Solomon Islands Dollar
  SCR: "SC", // Seychelles Rupee
  SDG: "SD", // Sudan Pound
  SEK: "SE", // Sweden Krona
  SGD: "SG", // Singapore Dollar
  SHP: "SH", // Saint Helena Pound
  SLL: "SL", // Sierra Leone Leone
  SOS: "SO", // Somalia Shilling
  SRD: "SR", // Suriname Dollar
  STN: "ST", // Sao Tome Dobra
  SYP: "SY", // Syria Pound
  SZL: "SZ", // Swaziland Lilangeni
  THB: "TH", // Thailand Baht
  TJS: "TJ", // Tajikistan Somoni
  TMT: "TM", // Turkmenistan Manat
  TND: "TN", // Tunisia Dinar
  TOP: "TO", // Tonga Paʻanga
  TRY: "TR", // Turkey Lira
  TTD: "TT", // Trinidad Dollar
  TWD: "TW", // Taiwan Dollar
  TZS: "TZ", // Tanzania Shilling
  UAH: "UA", // Ukraine Hryvnia
  UGX: "UG", // Uganda Shilling
  USD: "US", // US Dollar
  UYU: "UY", // Uruguay Peso
  UZS: "UZ", // Uzbekistan Som
  VES: "VE", // Venezuela Bolivar
  VND: "VN", // Vietnam Dong
  VUV: "VU", // Vanuatu Vatu
  WST: "WS", // Samoa Tala
  XAF: "CM", // Central Africa Franc
  XCD: "AG", // East Caribbean Dollar
  XOF: "SN", // West African Franc
  XPF: "PF", // Pacific Franc
  YER: "YE", // Yemen Rial
  ZAR: "ZA", // South Africa Rand
  ZMW: "ZM", // Zambia Kwacha
  ZWL: "ZW"  // Zimbabwe Dollar
};


/* -----------------------------
   Config & DOM refs
   ----------------------------- */
const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
const fromSelect = document.getElementById("fromSelect");
const toSelect = document.getElementById("toSelect");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const msg = document.getElementById("msg");
const amountInput = document.getElementById("amountInput");
const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");
const favList = document.getElementById("favList");
const histList = document.getElementById("histList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const tickerContent = document.getElementById("tickerContent");
const themeToggle = document.getElementById("themeToggle");

const tickerPairs = [
  ["USD","INR"], ["EUR","USD"], ["USD","HRK"], ["GBP","USD"], ["USD","JPY"]
];

/* -----------------------------
   Helpers
   ----------------------------- */
function populateSelects(){
  const codes = Object.keys(countryList).sort();
  for(const code of codes){
    const opt1 = document.createElement("option");
    opt1.value = code; opt1.text = code;
    fromSelect.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = code; opt2.text = code;
    toSelect.appendChild(opt2);
  }
  fromSelect.value = "USD";
  toSelect.value = "INR";
  updateFlag(fromSelect);
  updateFlag(toSelect);
}

function updateFlag(selectElement){
  const curr = selectElement.value;
  const country = countryList[curr] || "UN";
  const img = selectElement.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${country}/flat/64.png`;
}

function fmt(n){
  if(isNaN(n)) return n;
  return Number(n).toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits:2});
}

async function fetchRates(base){
  const url = `${BASE_URL}/${base.toLowerCase()}.json`;
  const res = await fetch(url, {cache: "no-store"});
  if(!res.ok) throw new Error("Network response not ok");
  const data = await res.json();
  return data[base.toLowerCase()] || data;
}

/* -----------------------------
   Conversion
   ----------------------------- */
async function convertAndShow(saveToHistory = true){
  const amtRaw = amountInput.value;
  const amount = (amtRaw === "" || Number(amtRaw) <= 0) ? 1 : Number(amtRaw);
  const from = fromSelect.value;
  const to = toSelect.value;

  msg.textContent = "⏳ Fetching latest exchange rate...";
  convertBtn.disabled = true;
  convertBtn.textContent = "Loading...";

  try {
    const rates = await fetchRates(from);
    const rate = rates[to.toLowerCase()];
    if(!rate) throw new Error("Rate not found");

    const converted = (amount * rate);
    msg.textContent = `${fmt(amount)} ${from} = ${fmt(converted)} ${to}`;

    if(saveToHistory) {
      addHistory({time: Date.now(), from, to, amount, result: converted});
    }

    showFavPrompt(from, to);
  } catch(err){
    console.error(err);
    msg.textContent = "⚠️ Error fetching rate. Try again.";
  } finally{
    convertBtn.disabled = false;
    convertBtn.textContent = "Get Exchange Rate";
  }
}

/* -----------------------------
   Swap
   ----------------------------- */
swapBtn.addEventListener("click", () => {
  swapBtn.classList.add("swap-anim");
  setTimeout(()=> swapBtn.classList.remove("swap-anim"), 420);

  const a = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = a;
  updateFlag(fromSelect);
  updateFlag(toSelect);

  convertAndShow();
});

/* -----------------------------
   Copy & Share
   ----------------------------- */
copyBtn.addEventListener("click", async () => {
  const text = msg.textContent.trim();
  if(!text || text.startsWith("⚠️") || text.startsWith("—")) {
    alert("Nothing to copy!");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "✅";
    setTimeout(()=> copyBtn.textContent = "📋", 1300);
  } catch(e){
    alert("Copy failed — permission denied?");
    console.error(e);
  }
});

// shareBtn.addEventListener("click", () => {
//   const text = msg.textContent.trim();
//   if(!text || text.startsWith("⚠️") || text.startsWith("—")) {
//     alert("Do a conversion first!");
//     return;
//   }
//   const encoded = encodeURIComponent(text + " — via Colorful Converter");
//   const whatsapp = `https://wa.me/?text=${encoded}`;
//   window.open(whatsapp, "_blank");
// });

// --- Share --- shareBtn.addEventListener("click", () => { if (navigator.share) { navigator.share({ title: "Currency Conversion", text: msg.innerText }); } else { alert("Sharing not supported on this browser."); } });
/* -----------------------------
   History (localStorage)
   ----------------------------- */
const HIST_KEY = "cc_history_v1";
function addHistory(item){
  const list = JSON.parse(localStorage.getItem(HIST_KEY) || "[]");
  list.unshift(item);
  if(list.length > 30) list.pop();
  localStorage.setItem(HIST_KEY, JSON.stringify(list));
  renderHistory();
}
function renderHistory(){
  const list = JSON.parse(localStorage.getItem(HIST_KEY) || "[]");
  histList.innerHTML = "";
  if(list.length === 0){
    const empty = document.createElement("div");
    empty.className = "hist-item";
    empty.textContent = "No conversions yet";
    histList.appendChild(empty);
    return;
  }
  list.forEach(it => {
    const el = document.createElement("div");
    el.className = "hist-item";
    const left = document.createElement("div");
    left.textContent = `${fmt(it.amount)} ${it.from} → ${fmt(it.result)} ${it.to}`;
    const right = document.createElement("div");
    right.style.display="flex"; right.style.gap="8px";
    const goBtn = document.createElement("button");
    goBtn.textContent = "⤴";
    goBtn.title = "Repeat this conversion";
    goBtn.addEventListener("click", () => {
      fromSelect.value = it.from; toSelect.value = it.to;
      amountInput.value = it.amount;
      updateFlag(fromSelect); updateFlag(toSelect);
      convertAndShow();
    });
    right.appendChild(goBtn);
    el.appendChild(left);
    el.appendChild(right);
    histList.appendChild(el);
  });
}
clearHistoryBtn.addEventListener("click", () => {
  if(confirm("Clear conversion history?")){
    localStorage.removeItem(HIST_KEY);
    renderHistory();
  }
});

/* -----------------------------
   Favourites (localStorage)
   ----------------------------- */
const FAV_KEY = "cc_favs_v1";
function getFavs(){ return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); }
function saveFavs(list){ localStorage.setItem(FAV_KEY, JSON.stringify(list)); }
function addFav(from, to){
  const pair = `${from}-${to}`;
  const favs = getFavs();
  if(!favs.includes(pair)){
    favs.unshift(pair);
    saveFavs(favs.slice(0,20));
    renderFavs();
    alert(`${from} → ${to} saved to favourites`);
  } else {
    alert("Already in favourites");
  }
}
function removeFav(pair){
  let favs = getFavs().filter(p=>p!==pair);
  saveFavs(favs);
  renderFavs();
}
function renderFavs(){
  const favs = getFavs();
  favList.innerHTML = "";
  if(favs.length === 0){
    const el = document.createElement("div");
    el.className = "fav-item";
    el.textContent = "No favourites yet";
    favList.appendChild(el);
    return;
  }
  favs.forEach(pair=>{
    const [from,to] = pair.split("-");
    const el = document.createElement("div");
    el.className = "fav-item";
    const left = document.createElement("div");
    left.textContent = `${from} → ${to}`;
    const right = document.createElement("div");
    right.style.display="flex"; right.style.gap="6px";

    const goBtn = document.createElement("button");
    goBtn.textContent = "▶";
    goBtn.title = "Use this pair";
    goBtn.addEventListener("click", () => {
      fromSelect.value = from; toSelect.value = to;
      updateFlag(fromSelect); updateFlag(toSelect);
      convertAndShow();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "✖";
    delBtn.className = "remove";
    delBtn.title = "Remove from favourites";
    delBtn.addEventListener("click", () => {
      if(confirm(`Remove ${from} → ${to} from favourites?`)) removeFav(pair);
    });

    right.appendChild(goBtn);
    right.appendChild(delBtn);
    el.appendChild(left);
    el.appendChild(right);
    favList.appendChild(el);
  });
}

/* small helper prompt in msg to save fav */
let favPromptTimeout = null;
function showFavPrompt(from, to){
  const id = "favPromptBtn";
  if(document.getElementById(id)) return;
  const btn = document.createElement("button");
  btn.id = id;
  btn.textContent = "⭐ Save Pair";
  btn.style.marginLeft = "10px";
  btn.style.padding = "6px 10px";
  btn.style.borderRadius = "8px";
  btn.style.background = "rgba(255,255,255,0.06)";
  btn.style.color = "#fff";
  btn.style.border = "1px solid rgba(255,255,255,0.05)";
  btn.style.cursor = "pointer";
  btn.addEventListener("click", () => addFav(from,to));
  msg.appendChild(btn);
  if(favPromptTimeout) clearTimeout(favPromptTimeout);
  favPromptTimeout = setTimeout(()=> {
    const el = document.getElementById(id);
    if(el) el.remove();
  }, 6000);
}

/* -----------------------------
   Ticker
   ----------------------------- */
async function updateTicker(){
  try{
    const pieces = [];
    for(const [a,b] of tickerPairs){
      try{
        const rates = await fetchRates(a);
        const r = rates[b.toLowerCase()];
        if(r) pieces.push(`1 ${a} = ${fmt(r)} ${b}`);
      }catch(e){ /* skip */ }
    }
    if(pieces.length === 0) tickerContent.textContent = "Live rates unavailable";
    else tickerContent.innerHTML = `<span class="marquee">${pieces.join("  |  ")}</span>`;
  }catch(e){
    tickerContent.textContent = "Unable to load ticker";
  }
}

/* -----------------------------
   Theme toggle
   ----------------------------- */
const body = document.body;
function loadTheme(){
  const t = localStorage.getItem("cc_theme") || "light";
  if(t === "dark") body.classList.add("dark");
  else body.classList.remove("dark");
}
themeToggle.addEventListener("click", ()=>{
  body.classList.toggle("dark");
  localStorage.setItem("cc_theme", body.classList.contains("dark") ? "dark":"light");
});

/* -----------------------------
   Init
   ----------------------------- */
(function init(){
  populateSelects();
  renderFavs();
  renderHistory();
  loadTheme();
  convertBtn.addEventListener("click", (e)=>{ e.preventDefault(); convertAndShow(); });
  updateTicker();
  setInterval(updateTicker, 60_000);
})();



// listen for dropdown change to update flags
[fromSelect, toSelect].forEach(select => {
  select.addEventListener("change", (e) => {
    updateFlag(e.target);      // flag update
  });
});




