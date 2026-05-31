const quotes = [

    "Less is more. — Mies van der Rohe",

    "Form follows function. — Louis Sullivan",

    "God is in the details. — Mies van der Rohe",

    "Architecture is the learned game of forms. — Le Corbusier"

];

const quoteBtn =
document.getElementById("quoteBtn");

const quote =
document.getElementById("quote");

if(quoteBtn && quote){

    quoteBtn.addEventListener("click", () => {

        const random =
        Math.floor(Math.random() * quotes.length);

        quote.innerHTML =
        quotes[random];

    });

}
const themeBtn =
document.getElementById("themeBtn");

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            themeBtn.innerHTML = "Light Mode";

        }else{

            themeBtn.innerHTML = "Dark Mode";

        }

    });

}
const messages = [

"Architecture begins with an idea.",

"Every drawing tells a story.",

"Space shapes experience.",

"Design is thinking made visible.",

"Form follows function."

];

const greeting =
document.getElementById("greeting");

if(greeting){

    const random =
    Math.floor(Math.random() * messages.length);

    greeting.innerHTML =
    messages[random];

}
const counter =
document.getElementById("projectViews");

if(counter){

    let explorations =
    localStorage.getItem("explorations") || 0;

    explorations++;

    localStorage.setItem(
        "explorations",
        explorations
    );

    let current = 0;

    const interval =
    setInterval(() => {

        current++;

        counter.innerHTML = current;

        if(current >= explorations){

            clearInterval(interval);

        }

    }, 50);

}
const journeyBtn =
document.getElementById("journeyBtn");

const journeyContent =
document.getElementById("journeyContent");

if(journeyBtn){

    journeyBtn.addEventListener("click", () => {

        if(journeyContent.style.display === "block"){

            journeyContent.style.display = "none";

            journeyBtn.innerHTML =
            "View Journey";

        }

        else{

            journeyContent.style.display = "block";

            journeyBtn.innerHTML =
            "Hide Journey";

        }

    });

}
window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },2500);

});
const clock =
document.getElementById("clock");

const dateText =
document.getElementById("date");

if(clock && dateText){

    function updateStudioClock(){

        const now = new Date();

        const hours =
        String(now.getHours()).padStart(2,"0");

        const minutes =
        String(now.getMinutes()).padStart(2,"0");

        const seconds =
        String(now.getSeconds()).padStart(2,"0");

        clock.innerHTML =
        `${hours}:${minutes}:${seconds}`;

        const months = [

            "JANUARY",
            "FEBRUARY",
            "MARCH",
            "APRIL",
            "MAY",
            "JUNE",
            "JULY",
            "AUGUST",
            "SEPTEMBER",
            "OCTOBER",
            "NOVEMBER",
            "DECEMBER"

        ];

        dateText.innerHTML =

        `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    }

    updateStudioClock();

    setInterval(updateStudioClock,1000);

}
window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    if(!loader) return;

    if(sessionStorage.getItem("loaderShown")){

        loader.style.display = "none";

    }else{

        sessionStorage.setItem("loaderShown","true");

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },1000);

        },2500);

    }

});

const storyBtn =
document.getElementById("storyBtn");

const storyText =
document.getElementById("storyText");

if(storyBtn && storyText){

    storyBtn.addEventListener("click", () => {

        if(storyText.style.display === "block"){

            storyText.style.display = "none";

        }

        else{

            storyText.style.display = "block";

        }

    });

}

// LIGHTBOX

const paftaImages =
document.querySelectorAll(".pafta-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeBtn =
document.querySelector(".back-close");

if(paftaImages.length){

    paftaImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src = img.src;

        });

    });

}

if(closeBtn){

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}