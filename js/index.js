let memBank = ["<b>\u00231:</b> our first kiss",
  "<b>\u00233:</b> beach day at island view and having so many dog alerts",
  "<b>\u00234:</b> every time we absolutely crush a study session",
  "<b>\u00235:</b> the coffee concert, and you losing your mind at the clown crosswalks in brentwood",
  "<b>\u00236:</b> when we went to the fantastic pizza place",
  "<b>\u00237:</b> our first date (I still can't believe it was to a bookshop)",
  "<b>\u00238:</b> drunk scrabble",
  "<b>\u00239:</b> our first christmas",
  "<b>\u002310:</b> the unexpected surprise on valentine\u0027s day",
  "<b>\u002311:</b> the first time we cooked together, and every time after that",
  "<b>\u002312:</b> when you played piano for me and I absolutely lost it",
  "<b>\u002312:</b> seeing the children\u0027s hour",
  "<b>\u002313:</b> the first time you wrote me a letter and it really was an unexpected surprise",
  "<b>\u002314:</b> beach date, and finding a rock to match your impossibly colour-changing eyes",
  "<b>\u002315:</b> watching you play in gvyo",
  "<b>\u002316:</b> the first time we said 'I love you'",
  "<b>\u002317:</b> every time we get to be a power couple in class",
  "<b>\u002318:</b> our first movie night, and every movie night",
  "<b>\u002319:</b> every moment I get to spend with you, always & forever",
  "<b>\u00232:</b> when we geeked out about bats and cried because we were reading the same set of bat facts"];

let p = 500;

function memClick() {
  let i = Math.floor(Math.random() * memBank.length);
  if (i == p) {
    p = 500;
    memClick();
  } else {
    let randMem = memBank[i];
    p = i;
    $('#memorytxt').animate({'opacity': 0}, 1500, function () {
      $(this).html(randMem);
    }).animate({'opacity': 1}, 1500);
  }
}
