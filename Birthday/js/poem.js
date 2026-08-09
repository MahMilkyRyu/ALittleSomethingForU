const container = document.getElementById("poemContainer");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const beginButton = document.getElementById("beginPoems");

const poemCounter = document.getElementById("poemCounter");

const poems = document.querySelectorAll(".poem");


/* Current position
   0 = Cover
   1 = Poem 1
   2 = Poem 2
   3 = Poem 3
   4 = Poem 4
*/


let currentPage = 0;

let inactivityTimer;


/* =========================================================
   SHOW CONTROLS
   ========================================================= */

function showControls() {

    /* Show page counter */

    if (poemCounter) {
        poemCounter.classList.remove("controls-hidden");
    }


    /* Show previous arrow */

    if (previousButton) {
        previousButton.classList.remove("controls-hidden");
    }


    /* Show next arrow */

    if (nextButton) {
        nextButton.classList.remove("controls-hidden");
    }


    /* Show scrollbar */

    if (container) {
        container.classList.remove("controls-hidden");
    }


    /* Reset inactivity timer */

    clearTimeout(inactivityTimer);


    inactivityTimer = setTimeout(function () {

        hideControls();

    }, 3000);

}


/* =========================================================
   HIDE CONTROLS
   ========================================================= */

function hideControls() {

    /* Hide page counter */

    if (poemCounter) {
        poemCounter.classList.add("controls-hidden");
    }


    /* Hide previous arrow */

    if (previousButton) {
        previousButton.classList.add("controls-hidden");
    }


    /* Hide next arrow */

    if (nextButton) {
        nextButton.classList.add("controls-hidden");
    }


    /* Hide scrollbar */

    if (container) {
        container.classList.add("controls-hidden");
    }

}


/* =========================================================
   UPDATE COUNTER
   ========================================================= */

function updateCounter() {

    if (currentPage === 0) {

        poemCounter.textContent = "Introduction";

    } else {

        poemCounter.textContent =
            `${currentPage} / ${poems.length}`;

    }

}


/* =========================================================
   MOVE TO A PAGE
   ========================================================= */

function goToPage(page) {

    /* Prevent going before the cover */

    if (page < 0) {
        page = 0;
    }


    /* Prevent going past the final poem */

    if (page > poems.length) {
        page = poems.length;
    }


    currentPage = page;


    /* Each page is exactly 100% of the container width */

    container.scrollTo({

        left: currentPage * container.clientWidth,

        behavior: "smooth"

    });


    updateCounter();


    /* Keep controls visible after navigation */

    showControls();

}


/* =========================================================
   NEXT BUTTON
   ========================================================= */

nextButton.addEventListener("click", function () {

    goToPage(currentPage + 1);

});


/* =========================================================
   PREVIOUS BUTTON
   ========================================================= */

previousButton.addEventListener("click", function () {

    goToPage(currentPage - 1);

});


/* =========================================================
   BEGIN BUTTON
   ========================================================= */

beginButton.addEventListener("click", function () {

    beginButton.addEventListener("click", function () {

    const music = document.getElementById("backgroundMusic");

    if (music) {

        music.volume = 0.15;

        music.play().catch(function(error) {

            console.log("Music could not start:", error);

        });

    }

    goToPage(1);

});

    /* Move from the cover to Poem 1 */

    goToPage(1);

});


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener("keydown", function(event) {

    /* Show controls whenever a key is pressed */

    showControls();


    /* D or Right Arrow = Next */

    if (
        event.key === "d" ||
        event.key === "D" ||
        event.key === "ArrowRight"
    ) {

        goToPage(currentPage + 1);

    }


    /* A or Left Arrow = Previous */

    if (
        event.key === "a" ||
        event.key === "A" ||
        event.key === "ArrowLeft"
    ) {

        goToPage(currentPage - 1);

    }

});


/* =========================================================
   MOUSE ACTIVITY
   ========================================================= */

document.addEventListener("mousemove", function() {

    showControls();

});


/* =========================================================
   SCROLL ACTIVITY
   ========================================================= */

container.addEventListener("scroll", function() {

    showControls();

});


/* =========================================================
   MOUSE WHEEL ACTIVITY
   ========================================================= */

container.addEventListener("wheel", function() {

    showControls();

});


/* =========================================================
   INITIALIZE
   ========================================================= */

updateCounter();

showControls();