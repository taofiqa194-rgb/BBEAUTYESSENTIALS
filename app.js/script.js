const WHATSAPP = 'https://wa.me/2347073275369';
const products = [
 {id:1,name:'Gold Ball Necklace',category:'Jewelry',desc:'Double-layered ball chain, tarnish-resistant',image:'Ru.png',tag:'Bestseller'},
 {id:2,name:'Adjustable Lariat Necklace',category:'Jewelry',desc:'Elegant drop design, adjustable length',image:'tp.png',tag:'New In'},
 {id:3,name:'Clover Luxury Set',category:'Jewelry',desc:'Necklace + Earrings, black & gold clover',image:'zu.png',tag:'Set'},
 {id:4,name:'Stainless Steel Cross Chain',category:'Jewelry',desc:'Silver cross, durable everyday piece',image:'Dq.png',tag:'Unisex'},
 {id:5,name:'KALY Dessert Collection',category:'Perfumes',desc:'8 scents – warm, sweet, long-lasting',image:'xu.png',tag:'Perfume'},
 {id:6,name:'Tayiba & Rakaan Roll-on',category:'Perfumes',desc:'6ml arabian oils, pocket luxury',image:'ep.png',tag:'Mini'},
 {id:7,name:'Wave Body Mists Trio',category:'Body Mists',desc:'300ml each – fresh, fruity, floral',image:'wq.png',tag:'Trio'},
 {id:8,name:'Rimocoo Glitter Lip Gloss',category:'Lip Gloss',desc:'24pcs shimmer pack, non-sticky',image:'Iq.png',tag:'24 Pcs'},
 {id:9,name:'Casio Black Dial Wristwatch',category:'Wristwatches',desc:'Classic steel, for him & her',image:'lp.png',tag:'Watch'},
 {id:10,name:'Soft Headbands 3pcs',category:'Accessories',desc:'Knitted pastel set, comfy chic',image:'rp.png',tag:'Pack'}
];
const grid = document.querySelector('#product-grid');
const filters = [...document.querySelectorAll('.filter')];
function orderLink(product){return `${WHATSAPP}?text=${encodeURIComponent(`Hi Bbbeautyessentials, I want to order ${product.name} - ${product.category}`)}`;}
function renderProducts(filter='All'){
 const visible = products.filter(p => filter==='All' || (filter==='Perfumes & Body Mists' ? ['Perfumes','Body Mists'].includes(p.category) : p.category===filter));
 grid.innerHTML = visible.map(p=>`<article class="product-card"><div class="product-image"><img src="assets/${p.image}" alt="${p.name}" loading="lazy"><span class="pill category">${p.category}</span><span class="pill tag">${p.tag}</span></div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><span class="dm-price">DM for price</span><a class="order-product" href="${orderLink(p)}" target="_blank" rel="noopener">Order on WhatsApp</a></div></article>`).join('');
 filters.forEach(button=>{const active=button.dataset.filter===filter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}
filters.forEach(button=>button.addEventListener('click',()=>renderProducts(button.dataset.filter)));
document.querySelectorAll('.category-card').forEach(card=>card.addEventListener('click',()=>{const wanted=card.dataset.category;renderProducts(wanted);document.querySelector('#catalog').scrollIntoView({behavior:'smooth'});}));
const menuButton=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.mobile-nav');
menuButton.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
renderProducts();
