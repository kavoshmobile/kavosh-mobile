/* ===========================
   KAVOSH MOBILE - script.js
=========================== */

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



// Dark / Light Mode

const themeBtn = document.getElementById("themeToggle");

const body = document.body;

if(localStorage.getItem("theme") === "light"){

    body.classList.add("light-mode");

    if(themeBtn) themeBtn.innerHTML="☀️";

}

if(themeBtn){

themeBtn.onclick = ()=>{

body.classList.toggle("light-mode");

if(body.classList.contains("light-mode")){

themeBtn.innerHTML="☀️";

localStorage.setItem("theme","light");

}else{

themeBtn.innerHTML="🌙";

localStorage.setItem("theme","dark");

}

}

}



// Scroll To Top

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}



// Navbar Blur

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

navbar.classList.add("navbar-scroll");

}else{

navbar.classList.remove("navbar-scroll");

}

});



// Counter Animation

const counters=document.querySelectorAll("[data-count]");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const top=stats.offsetTop-350;

if(window.scrollY>top && !started){

started=true;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.count;

const count=+counter.innerText;

const speed=target/120;

if(count<target){

counter.innerText=Math.ceil(count+speed);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

});

}

});




// Reveal Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:.2});

document.querySelectorAll(".card,.stat,.location,.tracking,.hero-text,.hero-image").forEach(el=>{

observer.observe(el);

});




// Fake Tracking System

const trackBtn=document.querySelector(".tracking button");

if(trackBtn){

trackBtn.onclick=()=>{

const input=document.querySelector(".tracking input").value;

const result=document.querySelector(".tracking-result");

if(input===""){

result.innerHTML="⚠ لطفاً شماره یا کد رهگیری را وارد کنید.";

result.style.color="#ff5050";

return;

}

const status=[

"🟢 ثبت شده",

"🟡 در حال تعمیر",

"🔵 تست نهایی",

"✅ آماده تحویل"

];

const random=status[Math.floor(Math.random()*status.length)];

result.innerHTML=random;

result.style.color="#00c2ff";

}

}




// Ripple Effect

document.querySelectorAll("button,a").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.classList.add("ripple");

const rect=this.getBoundingClientRect();

circle.style.left=e.clientX-rect.left+"px";

circle.style.top=e.clientY-rect.top+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});




// Console

console.log("🚀 Kavosh Mobile Loaded Successfully");
