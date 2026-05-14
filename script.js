const envelope = document.getElementById("envelope");
const openBtn  = document.getElementById("open");
const closeBtn = document.getElementById("close");
const typingText = document.getElementById("typing-text");
const music    = document.getElementById("bgMusic");

const message = `
I know things have not been easy lately,
and I know I made mistakes that hurt you.

I am truly sorry for everything that caused you pain.

But more than anything,
I want you to remember who you are.

You are my Sherni —
strong, fearless, beautiful,
and capable of surviving every difficult phase.

Even when life feels heavy,
please don't stop believing in yourself.

I believe in you endlessly.

And no matter how imperfect I am,
one thing will always remain true...

I love you, Mrinali ❤️
Don't Give Up on me....
`;

let index   = 0;
let started = false;
let typingTimer = null;

function startLetter(){
  envelope.classList.add("open");
  envelope.classList.remove("close");

  // Android: audio needs a user-gesture — the click/tap IS that gesture.
  // We call play() inside the event handler so Chrome on Android allows it.
  music.play().catch(() => {
    // Autoplay blocked (common on Android first load) — silently ignore.
    // Music will still attempt on next interaction.
  });

  if(!started){
    started = true;
    typeText();
  }
}

function closeLetter(){
  envelope.classList.add("close");
  envelope.classList.remove("open");

  // Stop typing mid-animation if user closes early
  if(typingTimer) clearTimeout(typingTimer);

  typingText.innerHTML = "";
  index   = 0;
  started = false;

  music.pause();
  music.currentTime = 0;
}

function typeText(){
  if(index < message.length){
    typingText.innerHTML += message.charAt(index);

    // Auto-scroll as text appears
    typingText.scrollTop = typingText.scrollHeight;

    index++;
    typingTimer = setTimeout(typeText, 42);
  }
}

// Buttons
openBtn.addEventListener("click",  startLetter);
closeBtn.addEventListener("click", closeLetter);

// Tapping the envelope itself also opens it — works on Android touch
envelope.addEventListener("click", startLetter);
