import "./style.scss"

const colors: string[] = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
const $btn: HTMLButtonElement = document.querySelector("#btn");
const $body: HTMLBodyElement = document.querySelector('body');

$btn.addEventListener('click', (e: MouseEvent) => {
    const index = Math.floor(Math.random() * colors.length);
    $body.style.backgroundColor = colors[index]
});