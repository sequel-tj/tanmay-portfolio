const x = document.getElementsByClassName("svgCarEduHover");
const arr = ['school10', 'school12', 'clg'];
const seek = ['4', '8', '12'];

function svghover() {
    x[0].id = "svgCarEduHover";
    for (let i = 0; i < 3; i++) {
        const temp = document.getElementsByClassName(arr[i]);
        temp[0].style.animation = `educard ${seek[i]}s ease-out forwards`;
    }
}

function svghoverrem() {
    x[0].id = "";
    for (let i = 0; i < 3; i++) {
        const temp = document.getElementsByClassName(arr[i]);
        temp[0].style.animation = "";
        temp[0].style.opacity = "0";
    }
}


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
    
// function svgcarRestart() {
//     svghoverrem();
//     console.log("clicked");
// }