/* ==========================================
   OPENING PAGE
   FLOATING ORANGE HEARTS
========================================== */

const orangeHearts =
    document.getElementById("orangeHearts");


if (orangeHearts) {

    const orangeHeartEmojis = [
        "🧡",
        "🧡",
        "🧡",
        "🧡",
        "🧡",
        "🧡"
    ];


    function createOrangeHeart() {

        const heart =
            document.createElement("div");


        heart.className =
            "orange-heart";


        heart.textContent =
            orangeHeartEmojis[
                Math.floor(
                    Math.random() *
                    orangeHeartEmojis.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            (20 + Math.random() * 45) + "px";


        heart.style.animationDuration =
            (6 + Math.random() * 7) + "s";


        heart.style.animationDelay =
            Math.random() + "s";


        orangeHearts.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 15000);

    }


    /* Continuously create orange hearts */

    setInterval(
        createOrangeHeart,
        450
    );


    /* Initial hearts */

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        setTimeout(
            createOrangeHeart,
            i * 180
        );

    }

}


/* ==========================================
   OPEN BIRTHDAY PAGE
========================================== */

const openBirthday =
    document.getElementById(
        "openBirthday"
    );


if (openBirthday) {

    openBirthday.addEventListener(
        "click",
        function () {

            /*
             * Go to the second page
             */

            window.location.href =
                "birthday.html";

        }
    );

}


/* ==========================================
   BIRTHDAY PAGE
   FLOATING HEARTS
========================================== */

const birthdayHearts =
    document.getElementById(
        "birthdayHearts"
    );


if (birthdayHearts) {

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "💝"
    ];


    function createBirthdayHeart() {

        const heart =
            document.createElement("div");


        heart.className =
            "birthday-heart";


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            (18 + Math.random() * 30) + "px";


        heart.style.animationDuration =
            (7 + Math.random() * 7) + "s";


        birthdayHearts.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 15000);

    }


    setInterval(
        createBirthdayHeart,
        600
    );


    for (
        let i = 0;
        i < 15;
        i++
    ) {

        setTimeout(
            createBirthdayHeart,
            i * 250
        );

    }

}


/* ==========================================
   BALLOONS
========================================== */

const birthdayBalloons =
    document.getElementById(
        "birthdayBalloons"
    );


if (birthdayBalloons) {

    const balloons = [
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "💖"
    ];


    function createBalloon() {

        const balloon =
            document.createElement("div");


        balloon.className =
            "birthday-heart";


        balloon.textContent =
            balloons[
                Math.floor(
                    Math.random() *
                    balloons.length
                )
            ];


        balloon.style.left =
            Math.random() * 100 + "vw";


        balloon.style.fontSize =
            (30 + Math.random() * 30) + "px";


        balloon.style.animationDuration =
            (8 + Math.random() * 8) + "s";


        birthdayBalloons.appendChild(
            balloon
        );


        setTimeout(() => {

            balloon.remove();

        }, 17000);

    }


    setInterval(
        createBalloon,
        1800
    );

}


/* ==========================================
   CONFETTI
========================================== */

const birthdayConfetti =
    document.getElementById(
        "birthdayConfetti"
    );


if (birthdayConfetti) {

    const confettiEmojis = [

        "🎉",
        "🎊",
        "✨",
        "💖",
        "🥳",
        "⭐",
        "🌸",
        "🎈",
        "💐",
        "❤️",
        "🎂",
        "🎁"

    ];


    function createConfetti() {

        for (
            let i = 0;
            i < 120;
            i++
        ) {

            const piece =
                document.createElement("div");


            piece.className =
                "confetti-piece";


            piece.textContent =
                confettiEmojis[
                    Math.floor(
                        Math.random() *
                        confettiEmojis.length
                    )
                ];


            piece.style.left =
                Math.random() * 100 + "vw";


            piece.style.fontSize =
                (10 + Math.random() * 20) + "px";


            piece.style.setProperty(
                "--moveX",
                (Math.random() * 500 - 250) + "px"
            );


            piece.style.animationDelay =
                Math.random() * 1.5 + "s";


            birthdayConfetti.appendChild(
                piece
            );


            setTimeout(() => {

                piece.remove();

            }, 5500);

        }

    }


    /* Celebration when birthday page opens */

    window.addEventListener(
        "load",
        function () {

            setTimeout(
                createConfetti,
                500
            );

        }
    );

}
