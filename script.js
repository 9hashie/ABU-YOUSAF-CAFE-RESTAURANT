const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
});


document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


/* MENU FILTER */

const categories = document.querySelectorAll(".category");
const products = document.querySelectorAll(".product");

categories.forEach(category => {

    category.addEventListener("click", () => {

        categories.forEach(item => {
            item.classList.remove("active");
        });

        category.classList.add("active");

        const selected = category.dataset.filter;

        products.forEach(product => {

            const productCategory =
                product.dataset.category;

            if (
                selected === "all" ||
                productCategory === selected
            ) {
                product.classList.remove("hidden");
            } else {
                product.classList.add("hidden");
            }

        });

    });

});


/* RESERVATION */

const form =
    document.getElementById("reservationForm");

const success =
    document.getElementById("success");

const toast =
    document.getElementById("toast");


form.addEventListener("submit", event => {

    event.preventDefault();

    success.style.display = "block";

    toast.classList.add("show");

    form.reset();

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);

});


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(
    ".product, .intro-heading, .intro-content, .reservation-left, .reservation-form, .location-info"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    revealObserver.observe(element);

});


/* NAVBAR SCROLL */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background =
            "rgba(8,9,8,.94)";

    } else {

        navbar.style.background =
            "rgba(8,9,8,.72)";

    }

});


/* CURSOR EFFECT */

const cursor =
    document.querySelector(".cursor");

if (window.innerWidth > 900) {

    document.addEventListener("mousemove", event => {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

    });

}