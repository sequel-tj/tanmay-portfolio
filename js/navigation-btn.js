var sections = ["home", "about", "myEducation", "skills", "projects", "contacts"];
var currentSectionIndex = 0;

function navigateToNextSection() {
    currentSectionIndex++;

    if (currentSectionIndex >= sections.length) {
        currentSectionIndex = 0;
    }

    var nextSection = document.getElementById(sections[currentSectionIndex]);
    nextSection.scrollIntoView({ behavior: "smooth" });
}

function navigateToPreviousSection() {
    currentSectionIndex--;

    if (currentSectionIndex < 0) {
        currentSectionIndex = sections.length - 1;
    }

    var previousSection = document.getElementById(sections[currentSectionIndex]);
    previousSection.scrollIntoView({ behavior: "smooth" });
}

// document.getElementById("navigationUpButton").addEventListener("click", navigateToPreviousSection);
// document.getElementById("navigationDownButton").addEventListener("click", navigateToNextSection);