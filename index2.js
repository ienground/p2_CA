/**
 * Project 2 of Creative Algorithms
 * By IENGROUND (Hyunwoo Rhee 20201131)
 * on github.com/ienground
 *
 * L-System
 * Symbol : F, +, -, *
 * F : Forward
 * + : Turn right by 45 degrees
 * - : Turn left by 45 degrees
 * * : Turn right by 90 degrees
 * Initial String : F
 * Rules : F+F*F-
 */

let n = 1;
let step = 1;
let length = 200;
let minLength = 10;
let maxN = 0;

let lastX = 0, lastY = 0;

function preload() {
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    angleMode(DEGREES);

    lastX = width / 2;
    lastY = height / 2;

    let calculatedLength = length;
    while (calculatedLength >= minLength) {
        maxN++;
        calculatedLength /= 3.4142;
    }
    print(maxN);
}

function draw() {
    background(255);


    drawWindmill(width / 2 + length, height / 2 + length, length, 0, 1);

}

function drawWindmill(x, y, l, r, n) {
    push();
    translate(x, y);
    rotate(r);

    fill(0);
    // noStroke();
    // text(l, 0, 0);
    // strokeWeight(length / 3.4142);
    strokeWeight(l / 4);
    // strokeWeight(length / 50);
    noFill();
    // stroke(color(255, 0, 0));
    // circle(0, 0, 10);

    // stroke(color(map(l^0.2, 0, length^0.2, 100, 150), map(l^0.2, 0, length^0.2, 230, 100), 230));

    let colors = [color('#FF4081'), color('#7C4DFF'), color('#03A9F4'), color('#3F51B5')];

    if (l > minLength) {
        for (let i = 0; i < 4; i++) {
            if (n === 1) {
                stroke(colors[i]);
            } else {
                stroke(lerpColor(colors[i], color(255), n / (maxN + 1)));
            }
            rotate(45);
            line(0, 0, 0, l);
            drawWindmill(0, 0, l / 3.4142, 225, n + 1);
            translate(0, l);
            rotate(90);
            line(0, 0, 0, l);
            drawWindmill(0, 0, l / 3.4142, 225, n + 1);
            translate(0, l);
            rotate(-45);
            line(0, 0, 0, l);
            drawWindmill(0, 0, l / 3.4142, 225, n + 1);
            translate(0, l);
        }
    } else {
        for (let i = 0; i < 4; i++) {
            // stroke(colors[i]);
            // strokeWeight(1);
            stroke(lerpColor(colors[i], color(255), n / (maxN + 1)));
            rotate(45);
            line(0, 0, 0, l);
            translate(0, l);
            rotate(90);
            line(0, 0, 0, l);
            translate(0, l);
            rotate(-45);
            line(0, 0, 0, l);
            translate(0, l);
        }
    }
    pop();
}