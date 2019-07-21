import "./style.scss"




interface IAttribute {
    name: string,
    value: string,
}

class Counter {
    private number: number;

    constructor(initValue: number) {
        this.number = initValue;
    }

    public  add ():void {
        this.number += 1;
    }

    public  minus ():void {
        this.number -= 1;
    }

    public get(): number {
        return this.number;
    }

    public set (value: number):void {
        this.number = value;
    }

}


const counter: Counter = new Counter(0);

const $next: HTMLButtonElement = document.querySelector('.next');
const $prev: HTMLButtonElement = document.querySelector('.prev');
const $container: HTMLElement = document.querySelector('.images');
const colors: string[] = ['yellow', 'green', 'red', 'cyan', 'blue'];



$next.addEventListener('click', nextSlide, false);
$prev.addEventListener('click', prevSlide, false);




function setAnimate($el: HTMLElement, frames: Array<Keyframe>, options: KeyframeAnimationOptions): void {
    $el.animate(frames, options);
}

function setElStyle($el: HTMLElement, attributes: Array<IAttribute>):void {
    // @ts-ignore
    for(let attribute of attributes) {
        const {name, value} = attribute;
        if(value && (name)) {
            $el.style[(name as any)] = value;

        }
    }
}

function nextSlide(): void {

    setAnimate($container, [
        {opacity: '0.1'},
        {opacity: '1.0'}
    ], {
        duration: 1000,
        fill: "forwards",
    });

    if (counter.get() === colors.length) {
        counter.set(0);
    }

    counter.add();

    setElStyle($container, [{ name: 'background', value: colors[counter.get()]}]);
    $container.style.background = colors[counter.get()];
}

function prevSlide(): void {
    setAnimate($container, [
        {opacity: '0.1'},
        {opacity: '1.0'}
    ], {
        duration: 1000,
        fill: "forwards",
    });

    if (counter.get() === 0) {
        counter.set(colors.length);
    }

    counter.minus();

    setElStyle($container, [{ name: 'background', value: colors[counter.get()]}]);
}
