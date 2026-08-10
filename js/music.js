/* =========================================================
   BACKGROUND MUSIC
========================================================= */

const music = document.getElementById("backgroundMusic");


/* =========================================================
   MUSIC SETTINGS
========================================================= */

if (music) {

    // Keep the music quiet
    music.volume = 0.15;

}


/* =========================================================
   START MUSIC AFTER USER INTERACTION
========================================================= */

function startMusic() {

    if (!music) {
        return;
    }

    music.play().catch(function(error) {

        console.log("Music could not start:", error);

    });


    // We only need the first interaction
    document.removeEventListener("click", startMusic);
    document.removeEventListener("keydown", startMusic);
    document.removeEventListener("touchstart", startMusic);

}


/* =========================================================
   LISTEN FOR USER INTERACTION
========================================================= */

document.addEventListener("click", startMusic);

document.addEventListener("keydown", startMusic);

document.addEventListener("touchstart", startMusic);