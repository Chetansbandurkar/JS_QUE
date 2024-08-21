const btn = document.querySelector(".inc_b");
const btn_p = document.querySelector(".inc_p");
const cnt = document.querySelector(".inc_c");


var presscnt = 0;
var trigcnt = 0;


const debounceevent = _.debounce(() => {
    cnt.innerHTML = trigcnt++;
}, 800)

const throttle = _.throttle(() => {
    cnt.innerHTML = trigcnt++;
}, 800)


btn.addEventListener('click', () => {
    btn_p.innerHTML = presscnt++;
    // debounceevent();/
    // throttle();

})

// loadash for the debouncing 

// polyfill
const debouncecnt = mydebounce(() => {
    trigcnt += 1;
    cnt.innerHTML = trigcnt;
}, 800);

const mydebounce = (cb, delay) => {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay)
    }
}
