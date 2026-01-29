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

function shrinkNo() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    if (!noBtn || !yesBtn) return;

    // Change No text
    noBtn.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Grow Yes
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

    // Shrink No
    const currentNoSize = parseFloat(getComputedStyle(noBtn).fontSize);
    if (currentNoSize > 8) {
        noBtn.style.fontSize = (currentNoSize - 2) + "px";
    }
}

function goToScene2() {
    const s1 = document.getElementById('scene1');
    const s2 = document.getElementById('scene2');

    if (s1 && s2) {
        s1.style.display = 'none';
        s2.style.display = 'flex';
        window.scrollTo(0, 0);
    }
}

function showGift() {
    const gift = document.getElementById('giftContent');
    const btn = document.getElementById('giftBtn');

    if (gift && btn) {
        gift.style.display = 'flex';
        btn.style.display = 'none';
    }
}

function goToScene3() {
    const s2 = document.getElementById('scene2');
    const s3 = document.getElementById('scene3');

    if (s2 && s3) {
        s2.style.display = 'none';
        s3.style.display = 'flex';
        window.scrollTo(0, 0);
    }
}
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

// Create petals continuously
setInterval(createPetal, 400);