//random.js
//랜덤 배경이미지 + 영화대사 한줄 랜덤
const body = document.querySelector("body");
const quoteArea = document.querySelector("#movie-quotes-container");
const randomNum1 = Math.floor(Math.random() * 26);
const randomNum2 = Math.floor(Math.random() * 26);
const randomImage = [
  {
    idx: 0,
    path: 'random_background_01.jpg',
    quote: "We Live In A Twilight World. And There Are No Friends At Dusk."
  },
  {
    idx: 1,
    path: 'random_background_02.jpg',
    quote: "What's happened, happened, it's an expression of faith in the mechanics of the world, it's not an excuse for doing nothing."
  },
  {
    idx: 2,
    path: 'random_background_03.jpg',
    quote: "Don't Try To Understand It. Feel It."
  },
  {
    idx: 3,
    path: 'random_background_04.jpg',
    quote: "Fear is a tool. When that light hits the sky, it’s not just a call. It’s a warning. For them."
  },
  {
    idx: 4,
    path: 'random_background_05.jpg',
    quote: "I’m vengeance."
  },
  {
    idx: 5,
    path: 'random_background_06.jpg',
    quote: "If you are justice, please do not lie. What is the price for your blind eye?"
  },
  {
    idx: 6,
    path: 'random_background_07.jpg',
    quote: "It can be cruel, poetic or blind. But when it’s denied, its your violence you may find. "
  },
  {
    idx: 7,
    path: 'random_background_08.jpg',
    quote: "Once An Idea Has Taken Hold Of The Brain, It’s Almost Impossible To Eradicate."
  },
  {
    idx: 8,
    path: 'random_background_09.jpg',
    quote: "An idea is like a virus."
  },
  {
    idx: 9,
    path: 'random_background_10.jpg',
    quote: 'Denial is the most predictable of all human responses'
  },
  {
    idx: 10,
    path: 'random_background_11.jpg',
    quote: "Choice is an illusion created between those with power and those without."
  },
  {
    idx: 11,
    path: 'random_background_12.jpg',
    quote: 'Choice. The problem is choice'
  },
  {
    idx: 12,
    path: 'random_background_13.jpg',
    quote: 'Guns. Lots of guns'
  },
  {
    idx: 13,
    path: 'random_background_14.jpg',
    quote: "I don't like the idea that I’m not in control of my life"
  },
  {
    idx: 14,
    path: 'random_background_15.jpg',
    quote: 'The Matrix is everywhere. It is all around us. Even now in this very room'
  },
  {
    idx: 15,
    path: 'random_background_16.jpg',
    quote: 'Ignorance is bliss'
  },
  {
    idx: 16,
    path: 'random_background_17.jpg',
    quote: "What you know you can't explain, but you feel it. You've felt it your entire life"
  },
  {
    idx: 17,
    path: 'random_background_18.jpg',
    quote: "It's the question that drives us, Neo. It's the question that brought you here. You know the question, just as I did"
  },
  {
    idx: 18,
    path: 'random_background_19.jpg',
    quote: "They say we got to want it more, So I bang on every door"
  },
  {
    idx: 19,
    path: 'random_background_20.jpg',
    quote: 'There is no spoon.'
  },
  {
    idx: 20,
    path: 'random_background_21.jpg',
    quote: "I'm Letting Life Hit Me Until It Gets Tired."
  },
  {
    idx: 21,
    path: 'random_background_22.jpg',
    quote: "It's Conflict And It's Compromise, And It's Just... It's New Every Time. It's Brand New Every Night."
  },
  {
    idx: 22,
    path: 'random_background_23.jpg',
    quote: 'A Bit Of Madness Is Key To Give Us New Colors To See. Who Knows Where It Will Lead Us?'
  },
  {
    idx: 23,
    path: 'random_background_24.jpg',
    quote: 'Somewhere, There’s A Place Where I Find Who I’m Gonna Be. Somewhere, That’s Just Waiting To Be Found.'
  },
  {
    idx: 24,
    path: 'random_background_25.jpg',
    quote: 'Not quite my tempo.'
  },
  {
    idx: 25,
    path: 'random_background_26.jpg',
    quote: 'There are no two words in the English language more harmful than “good job”'
  },
];


function randomImageQuotesFunc() {
  body.style.backgroundImage = `url(image/${randomImage[randomNum1].path})`;
  quoteArea.innerText = `${randomImage[randomNum2].quote}`;
}

randomImageQuotesFunc();