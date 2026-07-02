// BOTÓN DE INICIO

document.getElementById("startBtn").onclick = () => {

    document.getElementById("hero").scrollIntoView({
        behavior:"smooth"
    });

};


// CREAR CORAZONES

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,300);


// MENSAJE DE LA LUNA

const moon=document.getElementById("moonSection");

const popup=document.getElementById("popup");

const close=document.getElementById("closePopup");

moon.onclick=()=>{

    popup.classList.remove("hidden");

}

close.onclick=()=>{

    popup.classList.add("hidden");

}// CONTADOR

function updateCounter(){

    const startDate = new Date("2026-01-01");

    const today = new Date();

    const diff = today - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    document.getElementById("counter").innerHTML =
        days + " days loving you ❤️";

}

updateCounter();// ==============================
// ANIMACIÓN AL HACER SCROLL
// ==============================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

})

});

sections.forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});

// ==============================
// BRILLO EN EL TÍTULO
// ==============================

const title=document.querySelector("#hero h1");

setInterval(()=>{

title.classList.toggle("glow");

},1500);// ==============================
// CREAR ESTRELLAS
// ==============================

const stars=document.getElementById("stars");

for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*2+"s";

    star.style.animationDuration=(1+Math.random()*3)+"s";

    stars.appendChild(star);

}//======================================
// PETALOS DE ROSA
//======================================

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(7+Math.random()*6)+"s";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,900);//======================================
// CINEMATIC MESSAGE
//======================================

const cinema=document.getElementById("cinema");

const cinemaText=document.getElementById("cinemaText");

const surpriseBtn=document.getElementById("surpriseBtn");

const messages=[

"Roger...",

"Thank you for coming into my life.",

"Who would've thought...",

"That one TikTok message...",

"Would become one of my favorite memories.",

"I'll keep waiting for you.",

"Te espero con ansias.",

"Every single day.",

"Until I can finally hug you.",

"Happy Birthday ❤️",

"Love,",

"Deysi"

];

let index=0;

surpriseBtn.onclick=()=>{

cinema.classList.remove("hidden");

showMessage();

}

function showMessage(){

if(index>=messages.length){

return;

}

cinemaText.innerHTML=messages[index];

index++;

setTimeout(showMessage,2500);

}//======================================
// BARRA DE PROGRESO
//======================================

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});//======================================
// EFECTO MÁQUINA DE ESCRIBIR
//======================================

const typingElement = document.getElementById("typingText");

const sentence =
"Every day brings me one step closer to finally meeting you. ❤️";

let charIndex = 0;

function typeWriter(){

    if(charIndex < sentence.length){

        typingElement.innerHTML += sentence.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter,60);

    }

}

window.addEventListener("load",typeWriter);//======================================
// BOTÓN VOLVER ARRIBA
//======================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backToTop.style.display="block";

    }else{

        backToTop.style.display="none";

    }

});

backToTop.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};//======================================
// RELOJ EN VIVO
//======================================

function updateClock(){

    const now=new Date();

    const options={
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    };

    document.getElementById("clock").innerHTML=
        now.toLocaleTimeString([],options);

}

setInterval(updateClock,1000);

updateClock();//======================================
// ESTRELLAS FUGACES
//======================================

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=(Math.random()*40)+"vh";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },3000);

}

setInterval(createShootingStar,8000);