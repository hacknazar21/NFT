// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const svgTeam = document.querySelectorAll('.team__card');


document.documentElement.classList.add('loading')



window.onload = () => {
    document.documentElement.classList.remove('loading');

    changeTV()
    let i = 0;

    svgTeam.forEach(element => {
        i++;

        element.insertAdjacentHTML('afterbegin', `
        <svg style="position: absolute; z-index: 0;" width="100%" height="100%" viewBox="0 0 266 343"
                    fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <mask id="mask${i * 100}" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="266"
                        height="343">
                        <path
                            d="M1 313.5V14L9.10062 1H222.957L253.199 26V303.5L264 313.5L254.819 322H227.277L211.616 342H34.4825L1 313.5Z"
                            fill="#C4C4C4" stroke="#9102D4" stroke-width="2" />
                    </mask>
                    <g mask="url(#mask${i * 100})">
                        <rect x="-5.48047" y="-3" width="264.62" height="318" fill="#C4C4C4"/>
                        <rect x="-5" y="2" width="260" height="310" fill="black"/>
                        <rect x="-5" y="2" width="260" height="310" fill="url(#pattern${i * 100})"/>
                        <rect x="-5" y="2" width="260" height="310" fill="url(#paint0_linear_37_118)"/>
                        <path d="M198.955 -7.32324L216.212 -7.45067L261.87 30.0366L263.818 46.1151L198.955 -7.32324Z" fill="#111111"/>
                        <path d="M5.99997 39.9999L1 33.9999L1.00001 90.9999L6 80.9999L5.99997 39.9999Z" fill="#111111"/>
                        <path d="M19.3614 288H119.809L127.91 295.5H260.76L271.021 313L260.76 322.5L249.419 340L211.616 343H34.4826L-1.16016 315L19.3614 288Z" fill="#0F0F0F" stroke="#111111"/>
                        <path d="M1 313.5V14L9.10062 1H222.957L253.199 26V303.5L264 313.5L254.819 322H227.277L211.616 342H34.4825L1 313.5Z" stroke="#111111" stroke-width="2"/>
                    </g>
                    <defs>
                        <pattern id="pattern${i * 100}" width="1" height="1">
                            <use xlink:href="#image${i * 100}" />
                        </pattern>
                        <linearGradient id="paint0_linear_37_118" x1="125" y1="2" x2="125" y2="312" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00114D" stop-opacity="0"/>
                            <stop offset="0.785219" stop-color="#001254" stop-opacity="0.567708"/>
                            <stop offset="1" stop-color="#335EF8"/>
                        </linearGradient>
                        <image x="-30%" y="-9%"  width="150%" height="105%" id="image${i * 100}" xlink:href="img/team/people/${element.dataset.name}.png" />
                    </defs>
                </svg>
        `)

        element.addEventListener('mouseover', () => {
            element.classList.add('hover');

        })
        element.addEventListener('mouseout', () => {
            element.classList.remove('hover');

        })
    });



};

function changeTV() {
    const noisesrc = 'img/collection/noise.gif';
    const tvboxes = document.querySelectorAll('.collection__item-tv img:nth-child(3), .collection__item-tv > img:nth-child(4),.collection__item-tv > img:nth-child(5),.collection__item-tv > img:nth-child(6)');
    const tvboxeswebp = document.querySelectorAll('.collection__item-tv source:nth-child(3), .collection__item-tv  source:nth-child(4),.collection__item-tv  source:nth-child(5),.collection__item-tv  source:nth-child(6)');
    const countGuys = document.querySelectorAll('.header__wrapper > div').length

    setInterval(() => {
        const randomTV = []
        const randomGuys = []


        while (randomTV.length != tvboxes.length) {
            const rand = getRandomBetween(0, tvboxes.length - 1)
            if (randomTV.indexOf(rand) == -1) {
                randomTV.push(rand)
            }
        }

        while (randomGuys.length != tvboxes.length) {
            const rand = getRandomBetween(1, countGuys)
            if (randomGuys.indexOf(rand) == -1) {
                randomGuys.push(rand)
            }
        }
        new Promise((resolve, reject) => {
            if (tvboxeswebp.length != 0) {
                tvboxeswebp[randomTV[0]].srcset = noisesrc;
            }
            tvboxes[randomTV[0]].src = noisesrc;
            setTimeout(() => {
                if (tvboxeswebp.length != 0) {
                    tvboxeswebp[randomTV[0]].srcset = `img/header/slider/${randomGuys[0]}.jpg`;
                }
                tvboxes[randomTV[0]].src = `img/header/slider/${randomGuys[0]}.jpg`;
                resolve()
            }, 1000)
        })
            .then(() => {
                new Promise((resolve, reject) => {
                    if (tvboxeswebp.length != 0) {
                        tvboxeswebp[randomTV[1]].srcset = noisesrc;
                    }
                    tvboxes[randomTV[1]].src = noisesrc;
                    setTimeout(() => {
                        if (tvboxeswebp.length != 0) {
                            tvboxeswebp[randomTV[0]].srcset = `img/header/slider/${randomGuys[1]}.jpg`;
                        }
                        tvboxes[randomTV[1]].src = `img/header/slider/${randomGuys[1]}.jpg`;
                        resolve()
                    }, 1000)
                })
                    .then(() => {
                        new Promise((resolve, reject) => {
                            if (tvboxeswebp.length != 0) {
                                tvboxeswebp[randomTV[2]].srcset = noisesrc;
                            }
                            tvboxes[randomTV[2]].src = noisesrc;
                            setTimeout(() => {
                                if (tvboxeswebp.length != 0) {
                                    tvboxeswebp[randomTV[0]].srcset = `img/header/slider/${randomGuys[2]}.jpg`;
                                }
                                tvboxes[randomTV[2]].src = `img/header/slider/${randomGuys[2]}.jpg`;
                                resolve()
                            }, 1000)
                        })
                            .then(() => {
                                if (tvboxeswebp.length != 0) {
                                    tvboxeswebp[randomTV[3]].srcset = noisesrc;
                                }
                                tvboxes[randomTV[3]].src = noisesrc;
                                setTimeout(() => {
                                    if (tvboxeswebp.length != 0) {
                                        tvboxeswebp[randomTV[0]].srcset = `img/header/slider/${randomGuys[3]}.jpg`;
                                    }
                                    tvboxes[randomTV[3]].src = `img/header/slider/${randomGuys[3]}.jpg`;
                                }, 1000)
                            })
                    })
            })

    }, 4050)
}

function getRandomBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

/* function slidesAnim() {

    let srcBuffer = '';
    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    setInterval(function () {
        let src = [];

        slides.forEach(slide => {
            src.push(slide.querySelector('img').getAttribute('src'));
        });
        const randomIndex = randomInteger(0, src.length - 1);
        let randomIndexVisible;
        if (window.innerWidth > 1565 || (window.innerWidth < 990 && window.innerWidth > 960))
            randomIndexVisible = randomInteger(0, 8);
        else if (window.innerWidth < 765 && window.innerWidth > 385)
            randomIndexVisible = randomInteger(0, 5);

        else if ((window.innerWidth < 1565 && window.innerWidth > 1035) || (window.innerWidth < 960 && window.innerWidth > 770))
            randomIndexVisible = randomInteger(0, 3);
        else if (window.innerWidth < 770 && window.innerWidth > 750)
            randomIndexVisible = randomInteger(0, 1);
        else if (window.innerWidth < 770 && window.innerWidth > 750)
            randomIndexVisible = randomInteger(0, 1);
        else
            randomIndexVisible = 0;

        if (randomIndexVisible == randomIndex) return;

        setTimeout(function () {
            slides[randomIndexVisible].classList.add('transition');

            let image = document.createElement('img');
            image.setAttribute('src', src[randomIndex]);
            image.setAttribute('style', 'position: absolute; top: 0; left: 0; width:100%; height:100%; z-index: 0; opacity: 1');
            slides[randomIndexVisible].insertAdjacentElement('afterbegin', image);
            setTimeout(function () {
                slides[randomIndexVisible].classList.remove('transition');
                slides[randomIndexVisible].removeChild(slides[randomIndexVisible].lastElementChild);
                slides[randomIndexVisible].firstElementChild.setAttribute('style', '');
            }, 500);

        }, 500);
        setTimeout(function () {
            srcBuffer = slides[randomIndexVisible].lastElementChild.getAttribute('src');

            slides[randomIndex].classList.add('transition');

            let image = document.createElement('img');
            image.setAttribute('src', srcBuffer);
            image.setAttribute('style', 'position: absolute; top: 0; left: 0; width:100%; height:100%; z-index: 0; opacity: 1');
            slides[randomIndex].insertAdjacentElement('afterbegin', image);

            setTimeout(function () {
                slides[randomIndex].classList.remove('transition');
                slides[randomIndex].removeChild(slides[randomIndex].lastElementChild);
                slides[randomIndex].firstElementChild.setAttribute('style', '');
            }, 500);
        }, 500);
    }, 1500);
} */
