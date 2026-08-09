/* =========================================================
   SECRET PAGE DIALOGUE
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const secretImage =
    document.getElementById("secretImage");

const dialogueIndicator =
    document.getElementById("dialogueIndicator");

const dialogueTitle =
    document.getElementById("dialogueTitle");

const dialogueText =
    document.getElementById("dialogueText");

const dialogueButton =
    document.getElementById("dialogueButton");

const dialogueChoices =
    document.getElementById("dialogueChoices");

const fade =
    document.querySelector(".page-fade");


/* =========================================================
   AUDIO
========================================================= */

const underwaterAudio =
    document.getElementById("underwaterAudio");

const specialsongAudio =
    document.getElementById("specialAudio");


/* =========================================================
   AUDIO SETTINGS
========================================================= */

let musicStarted = false;

let specialSongStarted = false;


/*
    Change this number when you decide which dialogue
    should trigger the special song.

    -1 = disabled for now
*/

const specialSongCheckpoint = 14;


/* Starting volumes */

if (underwaterAudio) {

    underwaterAudio.volume = 0.25;

}


if (specialAudio) {

    specialAudio.volume = 0.40;

}


/* =========================================================
   PAGE FADE IN
========================================================= */

window.addEventListener("load", function () {

    if (fade) {

        fade.classList.add("fade-in");

    }

});


/* =========================================================
   DIALOGUE
========================================================= */

const dialogues = [

    /*page 0*/
    {
        title: "???",

        text: [
            "The water washes over you, drowning you in its torrents..."
        ],

        button:
            "Wait!"
    },

    /*page 1*/
    {
        title: "???",

        text: [
            "You plead for it to wait, as if the elements of water would listen to your pleas...",

            "But no matter how much you plead for it to spare you..",

            "You only find yourself sinking deeper and deeper.",

            "Until your lungs are emptied of breath and your vision disappears."
        ],

        button:
            "No- hrghhkk...!"
    },

    /*page 2*/
    {
        type: "choice",

        choices: [

            {
                text:
                    "I can't die...yet..",

                next:
                    3
            },

            {
                text:
                    "I still have so many things I want to do..",

                next:
                    3
            }

        ]
    },

    /*page 3*/
    {
        title: "???",

        text: [
            "Your vision fades to black.",

            "Time seems to stop, and you feel yourself sinking deeper and deeper and deeper..",

            "Until you feel the soft sand across your back and the weight of a thousand worlds over your entire body."
        ],

        button:
            "Wake up"
    },

    /*page 4*/
    {
        title: "???",

        text: [
            "You open your eyes, expecting to see the sky.",

            "Instead, you are greeted with the sight of something unusual but not unfamiliar to you.",

            "You have heard many a tale of this realm from the one who wanders it. And so it did not take you long to figure out exactly where you are."
        ],

        button:
            "..."
    },

    /*page 5*/
    {
        type: "choice",

        choices: [

            {
                text:
                    "Am I...in The Depths?",

                next:
                    6
            },

            {
                text:
                    "Wait...where am I?",

                next:
                    7
            }

        ]
    },


    /*page 6*/
    {
        title: "A Familiar Voice?",

        text: [

            "'Yep, welcome to my domain, eepyhead'",

            "'How was your sleep? Got any fun dreams to tell me on your way down?'"
        ],

        button:
            "Wait... that voice!",

        /*
            Clicking this button will SKIP dialogue 7
            and go directly to dialogue 8.
        */

        next:
            8
    },


    /*page 7*/
    {
        title: "A Familiar Voice?",

        text: [

            "'You're in The Depths, girlie'",

            "'I'd question how you even got here in the first place but lets save that for later...'",

            "'How was the trip down? I hope the waters didn't treat you too roughly?'"
        ],

        button:
            "Alex?! Is that you??"

    },


    /*page 8*/
    {
        title: "...",

        text: [

            "You swivel your head around just as you sit up in search of the source of 'their' voice",

            "Your eyes then land upon a single lantern set upon the ground just beneath your feet and beyond that, a shadowy figure with the rough shape of a person who you are very familiar with."
        ],

        button:
            "'A-Alex?'"
    },


    /*page 9*/
    {
        title: "ALEX?",

        text: [

            "'Yep! The one of the two El Stupidas at your service!'",

            "'Okay, seriously though... What are you doing here?'",

            "'There's really not much here yet yknow?'"

        ],

        button:
            "I-"

    },


    /*page 10*/
    {
        type: "choice",

        choices: [

            {
                text:
                    "'I don't even know how I got here.'",

                next:
                    11
            },

            {
                text:
                    "'I came to look for you yknow?'",

                next:
                    12
            },

            {
                text:
                    "'I kinda just pressed a button and fell down here.'",
                
                next:
                    13
            }

        ]
    },


    /*page 11*/
    {
        title: "ALEX?",

        text: [

            "'Hmm... Well how you got here doesn't really matter right now.'",

            "'I know this is your first time here, but you can't stay for long down here.'",

            "'But you can't stay here Reyen... at least not now and not for long.'",

        ],

        button:
            "What...why?",

        next: 14

    },


    /*page 12*/
    {
        title: "ALEX?",

        text: [

            "'Really? And you coincidentally found yourself here?'",

            "'Girl, thats craazzyy... and very sweet of you but..'",

            "'You can't be here right now...Reyen'",

            "'Not for long either.'",

        ],

        button:
            "'I came all this way and now I have to go back immediately? girl thats fucked.'",
        
        next: 14
    },



    /*page 13*/
    {
        title: "ALEX",

        text: [

            "'Well as interesting as that button was, there really isn't much of interest here for now.'",

            "'In fact, I can even confidently say that this place is still not completed yet so..'",

            "'Yeah... I can't exactly let you stay for very long.'"

        ],

        button: "'Eh? why though? and I just got here too?'"

    },


    /*page 14*/
    {
        title: "ALEX?",

        text: [

            "'Well the simplest explanation I can give you is that this place is still incomplete'",

            "'I wanted to add more here but I think my body is already failing irl as of making this section'",

            "'So for my own safety, I'm going to finish this area up next time when I get the chance'",

            "I know.... I'm sorry for cutting corners, but I really bit off more than I can chew this time, HAHAHA'",


        ],

        button: "..."
    },

    /*page 15*/
    {
        title: "ALEX?",

        text: [

            "'Before I forcefully send you back up there though...'"

        ],

        button: "'Ye?'"
    },

    /*page 16*/
    {
        title: "ALEX?",

        text: [

            "'Happy 22nd Birthday, Reyen'",

            "'I know, I've already said this plenty of times, and I have conveyed many of the things I have already felt and wanted to say via the poems but...'",
        ],

        button: "..."
    },


    /*page 17*/
    {
        title: "ALEX",

        text: [

            "Just as you were the light to my darkness.",

            "I will always be willing to be a light in yours too.",

            "So don't forget, Reyen...",
        ],

        button: "I won't"
    },

    /*page 18*/
    {
        title: "-ALEXANDRIA ASTER-",

        text: [

            "See ya later then, alligator!",
        ],

        button: "return-home"
    },


];
/* =========================================================
   DIALOGUE STATE
========================================================= */

let currentDialogue = 0;

let typing = false;

let typingTimer;

let currentText = "";

let currentCharacter = 0;


/* =========================================================
   TYPEWRITER SETTINGS
========================================================= */

const typingSpeed = 35;


/*
    Preserve paragraph breaks.
*/

if (dialogueText) {

    dialogueText.style.whiteSpace =
        "pre-line";

}


/* =========================================================
   START UNDERWATER MUSIC
========================================================= */

function startUnderwaterMusic() {

    if (
        musicStarted ||
        !underwaterAudio
    ) {

        return;

    }


    underwaterAudio.volume = 0.25;


    underwaterAudio.play()
        .then(function () {

            musicStarted = true;

        })
        .catch(function (error) {

            console.log(
                "Underwater music could not start:",
                error
            );

        });

}


/* =========================================================
   FADE OUT AUDIO
========================================================= */

function fadeOutAudio(
    audio,
    duration = 2000
) {

    if (!audio) {

        return;

    }


    const startingVolume =
        audio.volume;

    const steps = 20;

    const intervalTime =
        duration / steps;

    let step = 0;


    const fadeTimer =
        setInterval(function () {

            step++;


            audio.volume =
                startingVolume *
                (1 - step / steps);


            if (step >= steps) {

                clearInterval(fadeTimer);


                audio.pause();

                audio.currentTime = 0;

                audio.volume =
                    startingVolume;

            }

        }, intervalTime);

}


/* =========================================================
   FADE IN AUDIO
========================================================= */

function fadeInAudio(
    audio,
    targetVolume = 0.8,
    duration = 2000
) {

    if (!audio) {

        return;

    }


    audio.volume = 0;


    audio.play()
        .catch(function (error) {

            console.log(
                "Audio could not start:",
                error
            );

        });


    const steps = 20;

    const intervalTime =
        duration / steps;

    let step = 0;


    const fadeTimer =
        setInterval(function () {

            step++;


            audio.volume =
                targetVolume *
                (step / steps);


            if (step >= steps) {

                clearInterval(fadeTimer);

                audio.volume =
                    targetVolume;

            }

        }, intervalTime);

}


/* =========================================================
   SPECIAL SONG CHECKPOINT
========================================================= */

function checkMusicCheckpoint() {

    if (
        currentDialogue ===
        specialSongCheckpoint &&
        !specialSongStarted
    ) {

        specialSongStarted = true;


        /*
            Fade out underwater ambience.
        */

        fadeOutAudio(
            underwaterAudio,
            2500
        );


        /*
            Start special song after
            the underwater music fades.
        */

        setTimeout(function () {

            fadeInAudio(
                specialAudio,
                0.8,
                2500
            );

        }, 2500);

    }

}


/* =========================================================
   GET CURRENT DIALOGUE TEXT
========================================================= */

function getDialogueText() {

    const dialogue =
        dialogues[currentDialogue];


    /*
        If text is an array,
        combine each paragraph with
        two line breaks.
    */

    if (Array.isArray(dialogue.text)) {

        return dialogue.text.join("\n\n");

    }


    /*
        Allows old-style
        single-string dialogue.
    */

    return dialogue.text;

}


/* =========================================================
   TYPE DIALOGUE
========================================================= */

function typeDialogue() {

    typing = true;


    currentText =
        getDialogueText();


    currentCharacter = 0;


    dialogueText.textContent = "";


    /*
        While the dialogue is typing,
        show dots instead of the response.
    */

    dialogueButton.textContent =
        "...";


    /*
        Hide the indicator while typing.
    */

    dialogueIndicator.classList.remove(
        "visible"
    );


    typingTimer =
        setInterval(function () {


            dialogueText.textContent +=
                currentText[currentCharacter];


            currentCharacter++;


            /*
                Finished typing
            */

            if (
                currentCharacter >=
                currentText.length
            ) {

                clearInterval(
                    typingTimer
                );


                typing = false;


                setButtonText();


                /*
                    Check whether this dialogue
                    triggers the special music.
                */

                checkMusicCheckpoint();

            }


        }, typingSpeed);

}


/* =========================================================
   SET BUTTON TEXT
========================================================= */

function setButtonText() {

    /*
        Show the dialogue indicator
        once the text is ready.
    */

    dialogueIndicator.classList.add(
        "visible"
    );


    /*
        Final dialogue.
    */

    if (
        currentDialogue ===
        dialogues.length - 1
    ) {

        dialogueButton.textContent =
            "Return Home";


        /*
            Reveal the secret image.
        */

        if (secretImage) {

            secretImage.classList.add(
                "reveal"
            );

        }

    }


    /*
        Normal dialogue.
    */

    else {

        dialogueButton.textContent =
            dialogues[currentDialogue].button;

    }

}


/* =========================================================
   SHOW DIALOGUE
========================================================= */

function showDialogue() {

    const dialogue =
        dialogues[currentDialogue];


    /* Clear previous choices */

    dialogueChoices.innerHTML = "";


    /* =====================================================
       CHOICE DIALOGUE
    ===================================================== */

    if (dialogue.type === "choice") {

        dialogueTitle.style.display =
            "none";

        dialogueText.style.display =
            "none";

        dialogueIndicator.classList.remove(
            "visible"
        );

        dialogueButton.style.display =
            "none";


        dialogue.choices.forEach(
            function(choice) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.textContent =
                    choice.text;


                button.classList.add(
                    "dialogue-choice"
                );


                button.addEventListener(
                    "click",
                    function() {

                        /*
                            Jump to a specific
                            dialogue index.
                        */

                        if (
                            choice.next !==
                            undefined
                        ) {

                            currentDialogue =
                                choice.next;

                        }

                        /*
                            If no next value was
                            supplied, simply move
                            forward normally.
                        */

                        else {

                            currentDialogue++;

                        }


                        showDialogue();

                    }
                );


                dialogueChoices.appendChild(
                    button
                );

            }
        );


        return;
    }


    /* =====================================================
       NORMAL DIALOGUE
    ===================================================== */

    dialogueTitle.style.display =
        "";

    dialogueText.style.display =
        "";

    dialogueButton.style.display =
        "";


    dialogueTitle.textContent =
        dialogue.title;


    typeDialogue();

}


/* =========================================================
   FINISH CURRENT DIALOGUE
========================================================= */

function finishDialogue() {

    /*
        Stop the typewriter.
    */

    clearInterval(
        typingTimer
    );


    /*
        Immediately show the complete
        dialogue.
    */

    dialogueText.textContent =
        currentText;


    currentCharacter =
        currentText.length;


    typing = false;


    /*
        Show the actual dialogue response.
    */

    setButtonText();


    /*
        Check music checkpoint.
    */

    checkMusicCheckpoint();

}


/* =========================================================
   DIALOGUE BUTTON
========================================================= */

dialogueButton.addEventListener(
    "click",
    function() {


        /*
            Start underwater music.

            Browsers generally require the user
            to interact with the page before
            allowing audio playback.
        */

        startUnderwaterMusic();


        /*
            If the dialogue is still typing,
            clicking the button finishes it.
        */

        if (typing) {

            finishDialogue();

            return;

        }


        /*
            If this is the final dialogue,
            fade out and return home.
        */

        if (
            currentDialogue ===
            dialogues.length - 1
        ) {


            /*
                Stop the music.
            */

            fadeOutAudio(
                underwaterAudio,
                1500
            );


            fadeOutAudio(
                specialAudio,
                1500
            );


            /*
                Start page fade-out.
            */

            if (fade) {

                fade.classList.remove(
                    "fade-in"
                );

            }


            /*
                Wait for the fade,
                then return home.
            */

            setTimeout(function () {

                window.location.href =
                    "index.html";

            }, 2000);


            return;

        }


        /*
            Determine where the dialogue
            should go next.

            If "next" exists, use it.

            Otherwise, move to the
            following dialogue normally.
        */

        if (
            dialogues[currentDialogue].next !==
            undefined
        ) {

            currentDialogue =
                dialogues[currentDialogue].next;

        }

        else {

            currentDialogue++;

        }


        showDialogue();

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

showDialogue();