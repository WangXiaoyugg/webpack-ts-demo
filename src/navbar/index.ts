import "./style.scss"

const $navbarBtn: HTMLDivElement = document.querySelector(".navbar-btn")
const $navbarLinks: HTMLUListElement = document.querySelector(".navbar-links")

$navbarBtn.addEventListener("click", function () {
    const isCollapse: boolean = $navbarLinks.classList.contains('navbar-collapse');
    const classNames: string[] = ['navbar-collapse', 'change'];
    isCollapse && classNames.forEach(className => $navbarLinks.classList.remove(className));
    !isCollapse && classNames.forEach(className => $navbarLinks.classList.add(className));
})