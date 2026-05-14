$(document).ready(function () {

  const envelope = $("#envelope");
  const btnOpen = $("#open");
  const btnReset = $("#reset");

  const message = `
I know things have not been easy lately,
and I know I made mistakes that hurt you.

I am truly sorry for everything that caused you pain.

But more than anything,
I want you to remember who you are.

You are my Sherni —
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

  envelope.click(function () {
    openLetter();
  });

  btnOpen.click(function () {
    openLetter();
  });

  btnReset.click(function () {
    closeLetter();
  });

  function openLetter() {

    envelope.addClass("open").removeClass("close");

    if (!typingStarted) {
      typingStarted = true;
      typeText();
    }
  }

  function closeLetter() {

    envelope.addClass("close").removeClass("open");

    $("#typing-text").html("");
    index = 0;
    typingStarted = false;
  }

  function typeText() {

    if (index < message.length) {

      $("#typing-text").append(message.charAt(index));

      index++;

      setTimeout(typeText, 45);
    }
  }

});