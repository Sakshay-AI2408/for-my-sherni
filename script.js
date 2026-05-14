const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

const typingText = document.getElementById("typing-text");

const music = document.getElementById("bgMusic");

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

let index = 0;
let started = false;

function startLetter(){

  envelope.classList.add("open");
  envelope.classList.remove("close");

  // MOBILE MUSIC FIX
  music.play().catch(() => {});

  if(!started){
    started = true;
    typeText();
  }
}

function closeLetter(){

  envelope.classList.add("close");
  envelope.classList.remove("open");

  typingText.innerHTML = "";

  index = 0;
  started = false;

  music.pause();
  music.currentTime = 0;
}

function typeText(){

  if(index < message.length){

    typingText.innerHTML += message.charAt(index);

    // AUTO SCROLL
    typingText.scrollTop = typingText.scrollHeight;

    index++;

    setTimeout(typeText,40);
  }
}

openBtn.addEventListener("click",startLetter);
closeBtn.addEventListener("click",closeLetter);
envelope.addEventListener("click",startLetter);
