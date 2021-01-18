var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;

// contact does not work
for (var i = 0; i < navMenuAnchorTags.length; i++) {
    if (i == 0 || i == 8 || i == 7 || i == 15) { // skipping resume pdf and contact
        continue;
    } else { 
        navMenuAnchorTags[i].addEventListener('click', function (event) {
            event.preventDefault();
            var targetSectionID = this.textContent.trim().toLowerCase();
            var targetSection = document.getElementById(targetSectionID);
            interval = setInterval(function () {
                scrollVertically(targetSection);
            }, 20);
        });
    }
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

//SKILL ANIMATION
// handle scroll event on window
// check if skill section is visible or not
// initialize skill level to 0
// start animation on all skills -> 0 to skill level
// store skill level -> HTML with data attribute

var progressBar = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initialiseBars(){
    for (let bar of progressBar) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();

function fillBars () {
    for (let bar of progressBar) {
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function() {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 20);
    }
}

function checkScroll () {
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars ();
    }

    if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}

