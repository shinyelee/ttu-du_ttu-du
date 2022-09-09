const quotes = [
  {
    quote: "I came here to drop some money, dropping all my money",
    author: "(LISA - MONEY)",
  },
  {
    quote: "Baby, get the megaphone, Put it on speaker",
    author: "(LISA - LALISA)",
  },
  {
    quote: "I went crazy over you",
    author: "(BLACKPINK - Crazy Over You)",
  },
  {
    quote: "Look at me, I'm never coming down",
    author: "(ROSE - On the Ground)",
  },
  {
    quote: "Everything I need is on the ground",
    author: "(ROSE - On the Ground)",
  },
  {
    quote: "I'ma do it on my own now",
    author: "(JENNIE - SOLO)",
  },
  {
    quote: "Kick in the door, Waving the coco",
    author: "(BLACKPINK - Pink Venom)",
  },
  {
    quote: "You wanna run with my love, I know you wanna",
    author: "(BLACKPINK - Bet You Wanna)",
  },
  {
    quote: "Coldest with this kiss, So he call me ice cream",
    author: "(BLACKPINK - Ice Cream)",
  },
  {
    quote:
      "I'm hard on the outside, But if you give me time, Then I could make time for your love",
    author: "(BLACKPINK - Sour Candy)",
  },
  {
    quote: "Yeah we were born to be alone, But why we still looking for love",
    author: "(BLACKPINK - Lovesick Girls)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
