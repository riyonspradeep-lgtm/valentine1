// Messages for No button teasing
const messages = [
    "Are you sure?",
    "Really sure??",
    "Think again! 🥺",
    "Last chance...",
    "Surely not?",
    "You might regret this!"
];

let messageIndex = 0;
let yesClickPower = 0;

// Scene 1: No button behavior
function shrinkNo() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    if (!noBtn || !yesBtn) return;

    // Change No text
    noBtn.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Grow Yes button
    yesClickPower++;
    if (yesClickPower < 5) {
        const currentSize = parseFloat(getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 12) + "px";
    } else {
        // FULL SCREEN TAKEOVER 💥
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.fontSize = "10vw";
        yesBtn.style.borderRadius = "0";
        yesBtn.innerText = "YES 💖";
        noBtn.style.display = "none";
    }

    // Shrink No button
    const currentNoSize = parseFloat(getComputedStyle(noBtn).fontSize);
    if (currentNoSize > 8) {
        noBtn.style.fontSize = (currentNoSize - 2) + "px";
    }
}

// Scene 1 → Scene 2
function goToScene2() {
    const s1 = document.getElementById('scene1');
    const s2 = document.getElementById('scene2');

    if (s1 && s2) {
        s1.style.display = 'none';
        s2.style.display = 'flex';
        window.scrollTo(0, 0);
    }
}

// Scene 2 → Scene 3 (Gift Scene)
function goToScene3() {
    const s2 = document.getElementById('scene2');
    const s3 = document.getElementById('scene3');

    if (s2 && s3) {
        s2.style.display = 'none';
        s3.style.display = 'flex';
        window.scrollTo(0, 0);
    }
}

// Optional: Add a wrapper function so your HTML button still works
function showGift() {
    goToScene3();
}

// Scene 3 → Scene 4
function goToScene4() {
    const s3 = document.getElementById('scene3');
    const s4 = document.getElementById('scene4');

    if (s3 && s4) {
        s3.style.display = 'none';
        s4.style.display = 'flex';
        window.scrollTo(0, 0);
    }
}

// Petals effect
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    petal.style.opacity = Math.random();

    document.getElementById("petals").appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

// Continuously create petals
setInterval(createPetal, 400);

function goToScene5() {
    const s4 = document.getElementById('scene4');
    const s5 = document.getElementById('scene5');

    if (s4 && s5) {
        s4.style.display = 'none';
        s5.style.display = 'flex';
        window.scrollTo(0, 0);
    }
}

// Play background music
function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {
        console.log("Music autoplay blocked. Will play on next user interaction.");
    });
}

// Call this when user clicks "Yes 💗"
document.getElementById("yesBtn").addEventListener("click", playMusic);