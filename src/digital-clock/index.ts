import "./style.scss"

interface IClock {
    el: HTMLElement;
    init(): void;
    showTime(): void;
    getDate(): string;
    padZero(value: number): string;
    convert(hour: number): string;
    checkTime(hour:number): number;
}

class Clock implements IClock {
    public el: HTMLElement;
   
    constructor(el: HTMLElement) {
        this.el = el;
    }

    public init(): void {
       setInterval(() => this.showTime(), 1000); 
    }

    public showTime(): void {
        this.el.innerText = this.getDate();
    }

    public getDate(): string {
        const date = new Date()
        const minutes = date.getMinutes();
        const seconds = date.getSeconds(); 
        let hours = date.getHours();

        const formatHours = this.convert(hours);
        hours = this.checkTime(hours);
        return `${this.padZero(hours)} : ${this.padZero(minutes)} : ${this.padZero(seconds)}  ${formatHours}`
    }
    

    public padZero(value: number): string {
        return value < 10 ? '0' + value : value.toString();
    }

    public convert(hour: number): string {
        return  hour < 12 ? 'AM' : "PM";
    }

    public checkTime(hour:number): number {
        if(hour > 12) {
            hour = hour - 12;
        }
        if(hour === 0) {
            hour = 12;
        }
        return hour
    }

}
const $clock: HTMLElement = document.querySelector('#clock');

const clock = new Clock($clock);
clock.init();