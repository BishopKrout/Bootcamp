function randommRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = 0;
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
};

const letter = document.querySelectorAll('.letter');
const interValid = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRG();
    }
}, 1500);