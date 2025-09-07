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
