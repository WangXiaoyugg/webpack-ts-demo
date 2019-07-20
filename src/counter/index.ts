import "./style.scss"

const $counter: HTMLElement = document.querySelector('.counter');
const $addCountBtn: HTMLButtonElement = document.querySelector("#addCountBtn");
const $lowerCountBtn: HTMLButtonElement = document.querySelector("#lowerCountBtn");

class Counter {
    public count: number;

    constructor(count: number) {
        this.count = count;
    }

    public increment(): void {
        this.count++;
    }

    public decrement(): void {
        this.count--;
    }

    public toString(): string {
        return this.count.toString();
    }
}

const counter = new Counter(0);

function setCounterColor(value: number): void {
    switch (true) {
        case value === 0:
            $counter.classList.remove("green", "red");
            $counter.classList.add('white');
            break;
        case value > 0:
            $counter.classList.remove("white", "red");
            $counter.classList.add('green');
            break;
        case value < 0:
            $counter.classList.remove("white", "green");
            $counter.classList.add('red');
            break;
        default:
    }
}

function setCounterAnimation(): void {
    $counter.animate([
        {opacity: '0.2',},
        {opacity: '1.0',}
    ], {
        duration: 100,
        fill: "forwards"
    })
}

function setCounterText(): void {
    $counter.textContent = counter.toString();

}

function increment(): void {
    counter.increment();
    setCounterText();
    setCounterColor(counter.count);
    setCounterAnimation();
}

function decrement(): void {
    counter.decrement();
    setCounterText();
    setCounterColor(counter.count);
    setCounterAnimation()
}

$addCountBtn.addEventListener('click', increment, false);
$lowerCountBtn.addEventListener("click", decrement, false);
