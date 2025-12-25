const carSvg = document.getElementsByClassName("carEdu");
const arr = ['school10', 'school12', 'clg'];

let animationTimeouts = [];
let isAnimationRunning = false;

function svghover() {
    if (isAnimationRunning) return; // Prevent multiple clicks
    
    isAnimationRunning = true;
    
    // Clear any existing timeouts
    animationTimeouts.forEach(timeout => clearTimeout(timeout));
    animationTimeouts = [];
    
    // Reset all cards to hidden state
    for (let i = 0; i < 3; i++) {
        const temp = document.getElementsByClassName(arr[i]);
        temp[0].style.animation = "none";
        temp[0].style.opacity = "0";
        temp[0].style.transform = "translateY(20px)";
    }
    
    // Force reflow to ensure styles are applied
    void carSvg[0].offsetWidth;
    
    // Start car animation with the correct ID
    carSvg[0].id = "carEdu";
    carSvg[0].style.animation = "carMove 12s cubic-bezier(0.4, 0, 0.2, 1) forwards";
    
    // Schedule card reveals to match car animation
    // Car reaches first checkpoint around 4s
    animationTimeouts.push(setTimeout(() => {
        const card = document.querySelector('.school10');
        card.style.animation = "none";
        void card.offsetWidth; // Force reflow
        card.style.animation = "educardReveal 0.8s forwards";
    }, 2800));
    
    // Car reaches second checkpoint around 8s
    animationTimeouts.push(setTimeout(() => {
        const card = document.querySelector('.school12');
        card.style.animation = "none";
        void card.offsetWidth; // Force reflow
        card.style.animation = "educardReveal 0.8s forwards";
    }, 6800));
    
    // Car reaches third checkpoint around 12s
    animationTimeouts.push(setTimeout(() => {
        const card = document.querySelector('.clg');
        card.style.animation = "none";
        void card.offsetWidth; // Force reflow
        card.style.animation = "educardReveal 0.8s forwards";
        
        // Reset flag after animation completes
        setTimeout(() => { 
            isAnimationRunning = false; 
        }, 1000);
    }, 10800));
}

function svghoverrem() {
    // Clear all timeouts
    animationTimeouts.forEach(timeout => clearTimeout(timeout));
    animationTimeouts = [];
    
    // Stop car animation completely
    carSvg[0].style.animation = "none";
    carSvg[0].id = "";
    
    // Reset car position
    carSvg[0].style.offsetDistance = "0%";
    
    // Reset all cards immediately with a small delay to ensure CSS reset
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            const temp = document.getElementsByClassName(arr[i]);
            temp[0].style.animation = "none";
            temp[0].style.opacity = "0";
            temp[0].style.transform = "translateY(20px)";
            
            // Force reflow
            void temp[0].offsetWidth;
        }
        
        // Also reset through class selector for safety
        const cards = document.querySelectorAll('.education-card');
        cards.forEach(card => {
            card.style.animation = "none";
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            void card.offsetWidth;
        });
    }, 50);
    
    isAnimationRunning = false;
}

// Reset on page load
window.addEventListener('load', function() {
    svghoverrem(); // Ensure everything starts in reset state
});

// Keep your existing scroll functions...
$(window).on("load", educationAddFadeIn());
$(window).scroll(function () {
    educationAddFadeIn(true);
});

function educationAddFadeIn(repeat) {
    var classToFadeIn = ".education-will-fadeIn";
    
    $(classToFadeIn).each(function (index) {
        var isElementInView = Utils.isElementInView($(this), false);
        if (isElementInView) {
            if (
                !$(this).hasClass("education-fadeInRight") &&
                !$(this).hasClass("education-fadeInLeft")
                ) {
                    if (index % 2 == 0) $(this).addClass("education-fadeInRight");
                    else $(this).addClass("education-fadeInLeft");
                }
            } else if (repeat) {
                $(this).removeClass("education-fadeInRight");
                $(this).removeClass("education-fadeInLeft");
            }
        });
    }