import "./style.scss"

const $btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn");
const $screen: HTMLInputElement = document.querySelector('.screen');
const $equalBtn: HTMLButtonElement = document.querySelector('.btn-equal');
const $clearBtn: HTMLButtonElement = document.querySelector('.btn-clear');

$btns.forEach(($btn) => {
    $btn.addEventListener('click', function () {
        $screen.value += $btn.getAttribute('data-num');
    }, false);
});

$equalBtn.addEventListener('click', function () {
    if($screen.value === '') {
        alert('Input is empty')
    } else {
        // eval妙用
        $screen.value = eval($screen.value);
    }
}, false);

$clearBtn.addEventListener('click', function () {
    $screen.value = '';
}, false);
