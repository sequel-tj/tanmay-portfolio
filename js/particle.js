particlesJS("particles-js", {
    particles: {
        number: { value: 250, density: { enable: true, value_area: 1000 } },
        color: { value: "#24d24f" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 2 },
            image: { src: "", width: 100, height: 100 },
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 10, opacity_min: 0.1, sync: false },
        },
        size: {
            value: 1.5,
            random: true,
            anim: { enable: true, speed: 80, size_min: 20, sync: false },
        },
        line_linked: {
            enable: true,
            distance: 0,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            grab: { distance: 170.0914444003467, line_linked: { opacity: 1 } },
            bubble: {
                distance: 200,
                size: 3,
                duration: 2,
                opacity: 1,
                speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
});

// var count_particles, stats, update;

// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";

// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");

// update = function () {
//     stats.begin();
//     stats.end();
//     if (
//         window.pJSDom[0].pJS.particles &&
//         window.pJSDom[0].pJS.particles.array
//     ) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);


// var Utils = new Utils();
$(window).on("load", particleAddFadeIn());

$(window).scroll(function () {
    particleAddFadeIn(true);
});

function particleAddFadeIn(repeat) {
    var classToFadeIn = ".particle-will-fadeIn";

    $(classToFadeIn).each(function (index) {
        var isElementInView = Utils.isElementInView($(this), false);
        if (isElementInView) {
            if (
                !$(this).hasClass("particle-fadeInRight") &&
                !$(this).hasClass("particle-fadeInLeft")
            ) {
                if (index % 2 == 0) $(this).addClass("particle-fadeInRight");
                else $(this).addClass("particle-fadeInLeft");
            }
        } else if (repeat) {
            $(this).removeClass("particle-fadeInRight");
            $(this).removeClass("particle-fadeInLeft");
        }
    });
}
