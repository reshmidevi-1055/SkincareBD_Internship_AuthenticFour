const products = [
 {id:1,slug:"supergoop-glowscreen-spf40-pa-50ml",brand:"SUPERGOOP!",name:"Glowscreen SPF40 PA+++ 50ml",category:"Sunscreen",price:3200,old:3800,section:"new",badge:"NEW IN"},
 {id:2,slug:"numbuzin-no-5-glutathione-vitamin-concentrated-serum-50ml",brand:"NUMBUZIN",name:"No.5 Glutathione Vitamin Concentrated Serum 50ml",category:"Serum",price:1650,old:null,section:"new",badge:"NEW IN"},
 {id:3,slug:"innsaei-1-hyaluronic-acid-serum-30ml",brand:"INNSAEI",name:"1% Hyaluronic Acid Serum 30ml",category:"Serum",price:1200,old:null,section:"new",badge:"NEW IN"},
 {id:4,slug:"pacifica-glow-baby-booster-serum-29ml",brand:"PACIFICA",name:"Glow Baby Booster Serum 29ml",category:"Serum",price:1900,old:null,section:"new",badge:"NEW IN"},
 {id:5,slug:"simple-moisturising-facial-wash-150ml",brand:"SIMPLE",name:"Moisturising Facial Wash 150ml",category:"Cleanser",price:650,old:800,section:"best",badge:""},
 {id:6,slug:"simple-10-niacinamide-booster-serum-30ml",brand:"SIMPLE",name:"10% Niacinamide Booster Serum 30ml",category:"Serum",price:1450,old:1800,section:"best",badge:""},
 {id:7,slug:"nature-beauty-sunscreen-gentle-cream-spf50-pa-50ml",brand:"NATURE BEAUTY",name:"Sunscreen Gentle Cream SPF50 PA+++ 50ml",category:"Sunscreen",price:550,old:700,section:"best",badge:""},
 {id:8,slug:"mamaearth-vitamin-c-face-scrub-100g",brand:"MAMAEARTH",name:"Vitamin C Face Scrub 100g",category:"Treatment",price:850,old:1000,section:"best",badge:""},
 {id:9,slug:"zayn-myza-brightening-vitamin-c-face-serum",brand:"ZAYN & MYZA",name:"Brightening Vitamin C Face Serum",category:"Serum",price:1400,old:1900,section:"sale",badge:""},
 {id:10,slug:"garnier-skinactive-moisture-bomb-sheet-mask-28g",brand:"GARNIER",name:"SkinActive Moisture Bomb Sheet Mask 28g",category:"Treatment",price:180,old:250,section:"sale",badge:""},
 {id:11,slug:"the-ordinary-100-plant-derived-squalane-30ml",brand:"THE ORDINARY",name:"100% Plant-Derived Squalane 30ml",category:"Moisturizer",price:1500,old:1900,section:"sale",badge:""},
 {id:12,slug:"drunk-elephant-virgin-marula-luxury-facial-oil-15ml",brand:"DRUNK ELEPHANT",name:"Virgin Marula Luxury Facial Oil 15ml",category:"Moisturizer",price:3400,old:4500,section:"sale",badge:""},
 {id:13,slug:"glow-recipe-strawberry-bha-aha-salicylic-serum-blur-drops-40ml",brand:"GLOW RECIPE",name:"Strawberry BHA + AHA Salicylic Serum Blur Drops 40ml",category:"Serum",price:3100,old:3600,section:"",badge:""},
 {id:14,slug:"simple-clear-pore-scrub-150ml",brand:"SIMPLE",name:"Clear Pore Scrub 150ml",category:"Cleanser",price:700,old:850,section:"",badge:""},
 {id:15,slug:"mcaffeine-guava-tini-de-tan-face-scrub-100g",brand:"MCAFFEINE",name:"Guava Tini De-Tan Face Scrub 100g",category:"Treatment",price:750,old:null,section:"",badge:""},
 {id:16,slug:"aarong-earth-honey-walnut-face-wash-scrub",brand:"AARONG EARTH",name:"Honey & Walnut Face Wash & Scrub",category:"Cleanser",price:450,old:null,section:"",badge:""},
 {id:17,slug:"face-facts-revitalising-peach-facial-scrub",brand:"FACE FACTS",name:"Revitalising Peach Facial Scrub",category:"Treatment",price:600,old:750,section:"",badge:""},
 {id:18,slug:"summer-fridays-jet-lag-mask-64g",brand:"SUMMER FRIDAYS",name:"Jet Lag Mask 64g",category:"Treatment",price:4200,old:null,section:"",badge:""},
 {id:19,slug:"oriflame-optimals-purifying-clay-face-mask-75ml",brand:"ORIFLAME",name:"Optimals Purifying Clay Face Mask 75ml",category:"Treatment",price:1100,old:1400,section:"",badge:""},
 {id:20,slug:"laikou-sleeping-face-mask-set-4-x-3g",brand:"LAIKOU",name:"Sleeping Face Mask Set (4 x 3g)",category:"Treatment",price:350,old:null,section:"",badge:""}
];

const BRAND_COLORS={"SIMPLE":["#2e9e6b","#d8f3e6"],"SUPERGOOP!":["#e8b923","#fff3c4"],"NUMBUZIN":["#e8a317","#fdf0cf"],"INNSAEI":["#2e9e6b","#e3f6e8"],"PACIFICA":["#f08a7a","#ffe3dc"]};
// Real photo: save it as images/products/<slug>.jpg (see IMAGE_CHECKLIST.md). Until then a simple illustration is shown.
const imgSrc=p=>p.image||`images/products/${p.slug}.jpg`;
function art(id){
  const p=products.find(x=>x.id===Number(id)),[c,bg]=BRAND_COLORS[p.brand]||["#e8336d","#ffe3ec"];
  const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;"),short=p.name.replace(/\d+\s?(ml|g)\b.*$/i,"").replace(/\(.*\)/,"").trim();
  const lines=[];short.split(" ").forEach(w=>{const l=lines[lines.length-1];l&&(l+" "+w).length<=13?lines[lines.length-1]=l+" "+w:lines.push(w)});
  const shapes={Sunscreen:'<rect x="170" y="52" width="60" height="50" rx="8" fill="#222"/><rect x="150" y="98" width="100" height="240" rx="22" fill="C"/>',Cleanser:'<rect x="170" y="52" width="60" height="50" rx="8" fill="#222"/><rect x="150" y="98" width="100" height="240" rx="22" fill="C"/>',Serum:'<rect x="178" y="40" width="44" height="70" rx="20" fill="#222"/><rect x="186" y="104" width="28" height="44" fill="#999"/><rect x="140" y="146" width="120" height="196" rx="26" fill="C"/>',Toner:'<rect x="172" y="66" width="56" height="54" rx="8" fill="#222"/><rect x="135" y="116" width="130" height="226" rx="28" fill="C"/>',Moisturizer:'<rect x="88" y="150" width="224" height="52" rx="14" fill="#222"/><rect x="95" y="196" width="210" height="130" rx="24" fill="C"/>',Treatment:'<rect x="88" y="150" width="224" height="52" rx="14" fill="#222"/><rect x="95" y="196" width="210" height="130" rx="24" fill="C"/>'};
  const jar=["Moisturizer","Treatment"].includes(p.category),lx=jar?112:p.category==="Toner"?146:150,lw=jar?176:p.category==="Toner"?108:p.category==="Serum"?100:100,ly=jar?226:p.category==="Serum"?196:170,lh=jar?84:p.category==="Serum"?120:140;
  const txt=lines.slice(0,3).map((l,i)=>`<text x="${lx+lw/2}" y="${ly+46+i*15}" font-size="12" text-anchor="middle" fill="#222">${esc(l)}</text>`).join("");
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="${bg}"/><g transform="translate(200 215) scale(1.02) translate(-200 -215)"><ellipse cx="200" cy="350" rx="110" ry="12" fill="#0001"/>${shapes[p.category].replace(/"C"/g,'"'+c+'"')}<rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="6" fill="#fff"/><text x="${lx+lw/2}" y="${ly+22}" font-size="${p.brand.length>12?8:p.brand.length>9?10:13}" font-weight="700" text-anchor="middle" fill="${c}" font-family="Arial">${esc(p.brand)}</text>${txt}</g></svg>`;
  return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}
const $=s=>document.querySelector(s);
const taka=n=>"৳"+Number(n).toLocaleString("en-BD");
const getProduct=id=>products.find(p=>p.id===Number(id));
let cart=readStore("skincarebd-demo-cart",[]);
let wishlist=readStore("skincarebd-demo-wishlist",[]);
let filter="All", toastTimer;
function readStore(key,fallback){try{return JSON.parse(localStorage.getItem(key))||fallback}catch{return fallback}}
function persist(){try{localStorage.setItem("skincarebd-demo-cart",JSON.stringify(cart));localStorage.setItem("skincarebd-demo-wishlist",JSON.stringify(wishlist))}catch{}}
function badgeOf(p){const t=p.old?`-${Math.round((1-p.price/p.old)*100)}%`:p.badge;return t?`<span class="badge">${t}</span>`:""}
function card(p){return `<article class="product"><div class="product-photo"><img loading="lazy" src="${imgSrc(p)}" onerror="this.onerror=null;this.src=art(${p.id})" alt="${p.brand} ${p.name}">${badgeOf(p)}<button class="heart ${wishlist.includes(p.id)?"on":""}" data-wish="${p.id}" aria-label="Toggle wishlist">${wishlist.includes(p.id)?"♥":"♡"}</button></div><p class="product-name">${p.brand} ${p.name}</p><div class="price">${p.old?`<span class="old">${taka(p.old)}</span>`:""}<span class="now">${taka(p.price)}</span></div><div class="rating">★★★★★</div><button class="add" data-add="${p.id}">ADD TO BAG +</button></article>`}
function renderProducts(){const query=$("#search").value.trim().toLowerCase();const filtered=products.filter(p=>(filter==="All"||p.category===filter)&&(`${p.brand} ${p.name} ${p.category}`.toLowerCase().includes(query)));$("#shopGrid").innerHTML=filtered.map(card).join("")||'<div class="empty">No matches found. Try another search.</div>';["new","best","sale"].forEach(s=>{$("#"+s+"Grid").innerHTML=products.filter(p=>p.section===s).map(card).join("")});bindCards()}
function bindCards(){document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>add(+b.dataset.add));document.querySelectorAll("[data-wish]").forEach(b=>b.onclick=()=>toggleWish(+b.dataset.wish))}
function add(id){const item=cart.find(x=>x.id===id);item?item.qty++:cart.push({id,qty:1});persist();renderCounts();renderCart();notify("Added to your bag ✦")}
function toggleWish(id){wishlist.includes(id)?wishlist=wishlist.filter(x=>x!==id):wishlist.push(id);persist();renderCounts();renderProducts();renderWishlist();notify(wishlist.includes(id)?"Saved to favourites ♡":"Removed from favourites")}
function renderCounts(){const count=cart.reduce((n,x)=>n+x.qty,0);$("#cartCount").textContent=count;$("#wishlistCount").textContent=wishlist.length;$("#drawerCartCount").textContent=`(${count})`;$("#drawerWishCount").textContent=`(${wishlist.length})`}
function renderCart(){const body=$("#cartBody");if(!cart.length)body.innerHTML='<div class="empty">Your bag is empty for now.<br>Find a little something you love ✦</div>';else body.innerHTML=cart.map(x=>{const p=getProduct(x.id);return `<div class="bag-row"><img src="${imgSrc(p)}" onerror="this.onerror=null;this.src=art(${p.id})" alt="${p.name}"><div><h4>${p.brand} ${p.name}</h4><p>${taka(p.price)}</p><div class="qty"><button data-qty="${p.id}" data-step="-1">−</button><span>${x.qty}</span><button data-qty="${p.id}" data-step="1">+</button></div></div><button class="remove" data-remove="${p.id}" aria-label="Remove item">×</button></div>`}).join("");body.querySelectorAll("[data-qty]").forEach(b=>b.onclick=()=>quantity(+b.dataset.qty,+b.dataset.step));body.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{cart=cart.filter(x=>x.id!==+b.dataset.remove);persist();renderCounts();renderCart()});$("#subtotal").textContent=taka(cart.reduce((sum,x)=>sum+getProduct(x.id).price*x.qty,0))}
function quantity(id,step){const item=cart.find(x=>x.id===id);if(item)item.qty+=step;cart=cart.filter(x=>x.qty>0);persist();renderCounts();renderCart()}
function renderWishlist(){const body=$("#wishBody");body.innerHTML=wishlist.length?wishlist.map(id=>{const p=getProduct(id);return `<div class="bag-row"><img src="${imgSrc(p)}" onerror="this.onerror=null;this.src=art(${p.id})" alt="${p.name}"><div><h4>${p.brand} ${p.name}</h4><p>${taka(p.price)}</p><button class="underlink" style="margin-top:10px;background:white;cursor:pointer" data-move="${id}">ADD TO BAG</button></div><button class="remove" data-unwish="${id}">×</button></div>`}).join(""):'<div class="empty">Your saved favourites will appear here ♡</div>';body.querySelectorAll("[data-move]").forEach(b=>b.onclick=()=>add(+b.dataset.move));body.querySelectorAll("[data-unwish]").forEach(b=>b.onclick=()=>toggleWish(+b.dataset.unwish))}
function openDrawer(id){closeDrawers();$("#shade").classList.add("show");$(id).classList.add("open");$(id).setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeDrawers(){$("#shade").classList.remove("show");document.querySelectorAll(".drawer").forEach(d=>{d.classList.remove("open");d.setAttribute("aria-hidden","true")});document.body.style.overflow=""}
function notify(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2100)}
$("#search").addEventListener("input",()=>{renderProducts();if($("#search").value.trim())$("#shop").scrollIntoView({behavior:"smooth",block:"start"})});
$("#filters").querySelectorAll("button").forEach(b=>b.onclick=()=>{filter=b.dataset.filter;$("#filters").querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
document.querySelectorAll("[data-category]").forEach(b=>b.onclick=()=>{filter=b.dataset.category;$("#filters").querySelectorAll("button").forEach(x=>x.classList.toggle("active",x.dataset.filter===filter));renderProducts();$("#shop").scrollIntoView({behavior:"smooth"})});
$("#openCart").onclick=()=>{renderCart();openDrawer("#cartDrawer")};$("#openWishlist").onclick=()=>{renderWishlist();openDrawer("#wishDrawer")};$("#shade").onclick=closeDrawers;document.querySelectorAll("[data-close]").forEach(b=>b.onclick=closeDrawers);
$("#mobileToggle").onclick=()=>$("#nav").classList.toggle("open");$("#nav").querySelectorAll("a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));
$("#checkout").onclick=()=>notify("Demo only — payment is not connected.");
$("#newsletterForm").onsubmit=e=>{e.preventDefault();$("#newsletterResult").textContent="Thanks for joining our little community ✦";e.target.reset()};
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDrawers()});
renderProducts();renderCart();renderWishlist();renderCounts();
document.querySelectorAll("[data-art]").forEach(el=>{el.innerHTML=el.dataset.art.split(",").map(id=>{const p=products.find(x=>x.id===+id);return `<img src="${imgSrc(p)}" onerror="this.onerror=null;this.src=art(${id})" alt="${p.brand} ${p.name}">`}).join("")});
// Banner slider: changes automatically every 5 seconds
(function(){const slides=document.querySelectorAll(".slide"),dots=$("#dots");let cur=0,timer;
dots.innerHTML=[...slides].map((_,i)=>`<button data-i="${i}" aria-label="Go to banner ${i+1}"></button>`).join("");
function show(i){cur=(i+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle("active",k===cur));[...dots.children].forEach((d,k)=>d.classList.toggle("on",k===cur))}
function start(){clearInterval(timer);timer=setInterval(()=>show(cur+1),5000)}
dots.onclick=e=>{if(e.target.dataset.i){show(+e.target.dataset.i);start()}};
$("#prevSlide").onclick=()=>{show(cur-1);start()};$("#nextSlide").onclick=()=>{show(cur+1);start()};
const box=$("#slider");box.onmouseenter=()=>clearInterval(timer);box.onmouseleave=start;show(0);start()})();

// ---- Header LOGIN button: shows the user name after login (forms are in login.html and register.html) ----
(function(){
  const btn=$("#openAuth"),user=readStore("skincarebd-user",null);
  if(!user)return;
  btn.textContent="HI, "+user.name.split(" ")[0].toUpperCase()+" · LOGOUT";
  btn.href="#";
  btn.onclick=e=>{e.preventDefault();localStorage.removeItem("skincarebd-user");location.reload()};
})();
