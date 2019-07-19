import "./style.scss"

const $color: HTMLSpanElement = document.querySelector(".color");
const $btn: HTMLButtonElement = document.querySelector("#btn");
const $body: HTMLBodyElement = document.querySelector("body");
const hexDict: Array<number|string> = [0,1,2,3,4,6,7,8,9, 'A', 'B', 'C','D', 'E', 'F'];

setBodyBackground($color.textContent);

function createHexColor():string {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexDict.length);
        hexColor += hexDict[index];
    }
    return hexColor;
}

function setBodyBackground(color: string): void {
    $body.style.backgroundColor = color;
}

$btn.addEventListener('click', (e: MouseEvent): void => {
    const color: string = createHexColor();
    setBodyBackground(color);
    $color.textContent = color;
})
