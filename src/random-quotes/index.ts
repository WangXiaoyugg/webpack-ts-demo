import "./style.scss"

interface IQuote {
    word: string;
    author: string;
}

const quotes: Array<IQuote> = [
    {
        word: 'Don’t ever make decisions based on fear. Make decisions based on hope and possibility. Make decisions based on what should happen, not what shouldn’t.',
        author: 'Michelle Obama',
    },
    {
        word: 'You go through the gate. If the gate’s closed you go over the fence. If the fence is too high, we’ll pole-vault. If that doesn’t work, we’ll parachute in.',
        author: 'Nancy Pelosi',
    },
    {
        word: 'Success at anything will always come down to this: Focus & Effort, and we control both.',
        author: 'Dwayne Johnson',
    },
    {
        word: 'As a body everyone is single, as a soul never.',
        author: 'Hermann Hesse',
    },
    {
        word: 'Try not to become a man of success, but rather try to become a man of value.',
        author: 'Albert Einstein',
    },
    {
        word: 'Earn with your mind, not your time.',
        author: 'Naval Ravikant',
    },
];

const $quote: HTMLElement = document.querySelector('#quote');
const $author: HTMLElement = document.querySelector("#author");
const $next: HTMLButtonElement = document.querySelector('#quote-btn');

setQuote(quotes.slice().shift());

function displayQuote(e: MouseEvent):void {
    setQuote(getQuotes());
}

function getQuotes(): IQuote {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function setQuote(quote: IQuote):void {
    $author.innerText = quote.author;
    $quote.innerText = quote.word;
}


$next.addEventListener('click', displayQuote, false);
