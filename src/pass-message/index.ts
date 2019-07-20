import "./style.scss"

const $sendBtn: HTMLButtonElement = document.querySelector('#send');
const $message: HTMLInputElement = document.querySelector('#message');
const $messageOut: HTMLParagraphElement = document.querySelector('.message-out');

function sendMessage(): void {

    const message: string = escape($message.value);


    if (isEmpty(message)) {
        alert("Please Input A Message !!!")
    } else {
        $messageOut.textContent = message;
    }
}

function escape(str: string): string {
    return str.replace(/</g,'&lt;')
        .replace(/>/g, '&gt;')
        .replace(/&/g,'&amp;')
        .replace(/"/g,  '&quto;')
        .replace(/'/g, '&#39;')
        .replace(/`/g, '&#96;')
        .replace(/\//g,'&#x2F' );

}


function isEmpty(str: string): boolean {
    return str.trim().length === 0;
}

$message.addEventListener('keydown', (e: KeyboardEvent) => {
    e.key === 'Enter' && sendMessage();
}, false);
$sendBtn.addEventListener("click", sendMessage, false);
