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

let minus;

document.documentElement.classList.add('loading')
window.onscroll = function () {
    let scrollTopProcent = window.pageYOffset / document.documentElement.offsetHeight * 100;

    if (scrollTopProcent > 100) {
        scrollTopProcent = 100 - (scrollTopProcent - (Math.floor(scrollTopProcent / 100) * 100));
    }
    setParallaxItemsStyle(scrollTopProcent);
};
function setParallaxItemsStyle(scrollTopProcent) {
    wrapper.style.backgroundPosition = `${scrollTopProcent}%`;
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
                        <rect x="-5.4805" y="-3" width="264.62" height="318" fill="#C4C4C4" />
                        <path
                            d="M-80.0062 -4.00001C-80.0062 -12.8366 -72.8427 -20 -64.0062 -20H299.304C308.14 -20 315.304 -12.8366 315.304 -4V309H-80.0062V-4.00001Z"
                            fill="url(#pattern${i})" />
                        <path d="M198.955 -7.32325L216.212 -7.45068L261.87 30.0366L263.818 46.1151L198.955 -7.32325Z"
                            fill="black" />
                        <path d="M6 39.9999L1.00003 33.9999L1.00004 90.9999L6.00003 80.9999L6 39.9999Z" fill="black" />
                        <path
                            d="M19.3614 288H119.809L127.91 295.5H260.76L271.021 313L260.76 322.5L249.419 340L211.616 343H34.4826L-1.16016 315L19.3614 288Z"
                            fill="#0E0D0D" stroke="black" />
                        <path
                            d="M1 313.5V14L9.10062 1H222.957L253.199 26V303.5L264 313.5L254.819 322H227.277L211.616 342H34.4825L1 313.5Z"
                            stroke="black" stroke-width="2" />
                    </g>
                    <defs>
                        <pattern id="pattern${i}" width="1" height="1">
                            <use xlink:href="#image${i}" />
                        </pattern>
                        <image  width="155%" height="105%" id="image${i}" xlink:href="img/team/people/${i}.png" />
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