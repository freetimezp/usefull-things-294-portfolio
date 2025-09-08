//split text
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split(".home__profession-1", {
    chars: true,
});

const { chars: chars2 } = text.split(".home__profession-2", {
    chars: true,
});

animate(chars1, {
    y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
    duration: 1000,
    ease: "out(3)",
    delay: stagger(80),
    loop: true,
});

animate(chars2, {
    y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
    duration: 1100,
    ease: "out(3)",
    delay: stagger(90),
    loop: true,
});

//slider swiper
const swiperProjects = new Swiper(".projects__swiper", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,
    speed: 600,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

//work tabs
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const targetSelector = tab.dataset.target;
        const targetContent = document.querySelector(targetSelector);

        tabContents.forEach((content) => {
            content.classList.remove("work-active");
        });
        tabs.forEach((t) => t.classList.remove("work-active"));

        tab.classList.add("work-active");
        targetContent.classList.add("work-active");
    });
});

//servicves accordion
const servicesButtons = document.querySelectorAll(".services__button");

servicesButtons.forEach((button) => {
    const heightInfo = document.querySelector(".services__info");
    heightInfo.style.height = heightInfo.scrollHeight + "px";

    button.addEventListener("click", () => {
        const servicesCards = document.querySelectorAll(".services__card");
        const currentCard = button.parentNode;
        const currentInfo = currentCard.querySelector(".services__info");
        const isCardOpen = currentCard.classList.contains("services-open");

        servicesCards.forEach((card) => {
            card.classList.replace("services-open", "services-close");

            const info = card.querySelector(".services__info");
            info.style.height = "0";
        });

        if (!isCardOpen) {
            currentCard.classList.replace("services-close", "services-open");
            currentInfo.style.height = currentInfo.scrollHeight + "px";
        }
    });
});
