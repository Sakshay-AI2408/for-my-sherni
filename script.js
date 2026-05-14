const envelope = document.getElementById("envelope");
const btnOpen = document.getElementById("open");
const btnReset = document.getElementById("reset");

const typingText = document.getElementById("typing-text");

const music = document.getElementById("bg-music");

const message = `
I know things have not been easy lately,
and I know I made mistakes that hurt you.

I am truly sorry for everything that caused you pain.

But more than anything,
I want you to remember who you are.

You are my Sherni -
strong, fearless, beautiful,
and capable of surviving every difficult phase.

Even when life becomes heavy,
please don't stop believing in yourself.

I believe in you endlessly.

And no matter how imperfect I am,
one thing will always remain true...
`;

let index = 0;
let typingStarted = false;

envelope.addEventListener("click", openLetter);
btnOpen.addEventListener("click", openLetter);
btnReset.addEventListener("click", closeLetter);

function openLetter() {

  envelope.classList.add("open");
  envelope.classList.remove("close");

  // Music play
  music.volume = 0.5;

  music.play().catch(() => {
    console.log("Autoplay blocked until interaction.");
  });

  // Start typing
  if (!typingStarted) {
    typingStarted = true;
    typeText();
  }
}

function closeLetter() {

  envelope.classList.add("close");
  envelope.classList.remove("open");

  typingText.innerHTML = "";

  index = 0;
  typingStarted = false;

  music.pause();
  music.currentTime = 0;
}

function typeText() {

  if (index < message.length) {

    typingText.innerHTML += message.charAt(index);

    // AUTO SCROLL FIX
    typingText.scrollTop = typingText.scrollHeight;

    index++;

    setTimeout(typeText, 40);
  }
}
