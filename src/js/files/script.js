// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const path = document.querySelector('#header path');
const pathMobile = document.querySelector('#header-mobile path');
let minus;

window.onload = function () {
    const containerWidth = 1680;
    let w = window.innerWidth;
    let divide = w / containerWidth;
    if (divide < 1 && w > 992) {
        path.style.transform = `scale(${divide})`;
    }
    else if (w < 992) {
        minus = (w - 370) / 2;
        pathMobile.style.transform = `translateX(${minus}px)`;
    }


}
window.onresize = function () {
    const containerWidth = 1680;
    const headerHight = 710;
    let w = window.innerWidth;
    let divide = w / containerWidth;
    if (divide < 1 && w > 992) {
        path.style.transform = `scale(${divide})`;
    }
    else if (w < 992) {
        minus = (w - 370) / 2;
        pathMobile.style.transform = `translateX(${minus}px)`;

    }
}


