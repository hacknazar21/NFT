// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const path = document.querySelector('#header path');
const pathMobile = document.querySelector('#header-mobile path');
const svgTeam = document.querySelectorAll('.team__card');
const wrapper = document.querySelector('.wrapper');
const border_header = document.querySelector('#paint0_linear_28_83');
const border_header_mobile = document.querySelector('#paint0_linear_28_84');
const collection = document.querySelector('.collection');

let minus;

document.documentElement.classList.add('loading')
window.onscroll = function () {
    let scrollTopProcent = window.pageYOffset / document.documentElement.offsetHeight * 100;
    if (window.pageYOffset >= (collection.offsetTop - 120)) {
        collection.classList.add('_show');
    }
    else {
        collection.classList.remove('_show');
    }

    if (scrollTopProcent > 100) {
        scrollTopProcent = 100 - (scrollTopProcent - (Math.floor(scrollTopProcent / 100) * 100));
    }
    setParallaxItemsStyle(scrollTopProcent);


};
function setParallaxItemsStyle(scrollTopProcent) {
    wrapper.style.backgroundPosition = ` 0% ${scrollTopProcent}%`;
}
window.onload = function () {
    document.documentElement.classList.remove('loading');
    headerAnim();


    let i = 0;

    svgTeam.forEach(element => {
        i++;
        element.insertAdjacentHTML('afterbegin', `
        <svg style="position: absolute; z-index: -1;" width="100%" height="100%" viewBox="0 0 266 343"
                    fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="mask${i}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="266"
                        height="343">
                        <path
                            d="M1 313.5V14L9.10062 1H222.957L253.199 26V303.5L264 313.5L254.819 322H227.277L211.616 342H34.4825L1 313.5Z"
                            fill="#C4C4C4" stroke="#9102D4" stroke-width="2" />
                    </mask>
                    <g mask="url(#mask${i})">
                        <rect x="-5.48047" y="-3" width="264.62" height="318" fill="#C4C4C4"/>
                        <rect x="-5" y="2" width="260" height="310" fill="black"/>
                        <rect x="-5" y="2" width="260" height="310" fill="url(#pattern${i})"/>
                        <rect x="-5" y="2" width="260" height="310" fill="url(#paint0_linear_37_118)"/>
                        <path d="M198.955 -7.32324L216.212 -7.45067L261.87 30.0366L263.818 46.1151L198.955 -7.32324Z" fill="#111111"/>
                        <path d="M5.99997 39.9999L1 33.9999L1.00001 90.9999L6 80.9999L5.99997 39.9999Z" fill="#111111"/>
                        <path d="M19.3614 288H119.809L127.91 295.5H260.76L271.021 313L260.76 322.5L249.419 340L211.616 343H34.4826L-1.16016 315L19.3614 288Z" fill="#0F0F0F" stroke="#111111"/>
                        <path d="M1 313.5V14L9.10062 1H222.957L253.199 26V303.5L264 313.5L254.819 322H227.277L211.616 342H34.4825L1 313.5Z" stroke="#111111" stroke-width="2"/>
                    </g>
                    <defs>
                        <pattern id="pattern${i}" width="1" height="1">
                            <use xlink:href="#image${i}" />
                        </pattern>
                        <linearGradient id="paint0_linear_37_118" x1="125" y1="2" x2="125" y2="312" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00114D" stop-opacity="0"/>
                            <stop offset="0.785219" stop-color="#001254" stop-opacity="0.567708"/>
                            <stop offset="1" stop-color="#335EF8"/>
                        </linearGradient>
                        <image x="-30%" y="-9%"  width="150%" height="105%" id="image${i}" xlink:href="img/team/people/${i}.png" />
                    </defs>
                </svg>
        `)
    });

};



function headerAnim() {
    let i = 0;
    let flag = false;
    if (window.screen.width > 768.98)
        setInterval(() => {
            if (i > 2000) flag = true;
            else if (i < 0) { flag = false; i = 1 };
            border_header.setAttribute('y2', i);
            if (flag) i -= 10;
            else if (!flag) i += 10;
        }, 10)
    else
        setInterval(() => {
            if (i > 2000) flag = true;
            else if (i < 0) { flag = false; i = 1 };
            border_header_mobile.setAttribute('y2', i);
            if (flag) i -= 10;
            else if (!flag) i += 10;
        }, 10)


}