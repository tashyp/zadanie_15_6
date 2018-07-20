/*

//Eksportowanie
//------ math.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'math';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// Import wszystkich cześci modułu
import * as math from 'math';
console.log(math.square(11)); // 121
console.log(math.diag(4, 3)); // 5

//Eksportdomyślny
//------ log.js ------
export default function () {} // no semicolon!

//------ main1.js ------
import log from 'log';
log();

//łączenie różnych spososów importowania modułow
import math, { diag as diagonal } from 'src/math';

//klasy
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}
//używanie klas w ES6
var p = new Point(1,2);
p.toString(); // “1, 2"

//metody statyczne klas
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
    static print(text) {
        console.log(text);
    }
}
Point.print('Hello world!');

// Pobieranie i ustawianie właściwości za pomocą gettera i settera
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    get x() {
        console.log(this.x);
        return this.x;
    }
    set x(value) {
        console.log('setting x', value);
    }
}

//Subklasy
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color; // (B)
    }
}

*/

// Zadanie 15.6
/*
class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }
}
*/

class Stopwatch {
    constructor(display) {
        this.running = false;
        this.display = display;
        this.reset();
        this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    print() {
        this.display.innerText = this.format(this.times);
    }

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) return;
            this.calculate();
            this.print();
    }

    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

const stopwatch = new Stopwatch(
document.querySelector('.stopwatch'));

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());