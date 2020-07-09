const sec = a => 1 + a;
const add = (a, b) => (b === 0) ? a : sec(add(a, b - 1));
const mpy = (a, b) => (b === 1) ? a : add(a, mpy(a, b - 1));


Out.log(mpy(11, 3)); // 33


let pwr = (a, b) => (b === 1) ? a : mpy(a, pwr(a, b - 1));
Out.log(pwr(2, 13)); // при значении 14- смерть
console.log(pwr.stack);