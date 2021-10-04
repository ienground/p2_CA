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
let setN = 3;

// let lastX = 0, lastY = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    angleMode(DEGREES);

    let calculatedLength = length;
    while (calculatedLength >= minLength) {
        maxN++;
        calculatedLength /= 3.4142;
    }
    print(maxN);
}

function draw() {
    background(255);

    // drawWindmill(width / 2 + length, height / 2 + length, length, 0, 1);

    push();
    translate(width / 2 + length, height / 2 + length);
    for (let i = 0; i < 1; i++) {
        rotate(45);
        // line(0, 0, 0, length);
        drawWindmill(0, 0, length / 2.4142, 270, n + 1);
        translate(0, length);
        rotate(90);
        // line(0, 0, 0, length);
        drawWindmill(0, 0, length / 2.4142, 270, n + 1);
        translate(0, length);
        rotate(-45);
        // line(0, 0, 0, length);
        drawWindmill(0, 0, length / 2.4142, 270, n + 1);
        translate(0, length);
    }

    pop();
}

function drawWindmill(x, y, l, r, n) {
    push();
    translate(x, y);
    rotate(r);

    fill(0);
    strokeWeight(l / 4);
    noFill();

    let colors = [color('#FF4081'), color('#7C4DFF'), color('#03A9F4'), color('#3F51B5')];

    // if (false) {
    if (n < setN) {
    // if (l > minLength) {
        // if (n === 1) {
        //     stroke(colors[i]);
        // } else {
        //     stroke(lerpColor(colors[i], color(255), n / (maxN + 1)));
        // }
        rotate(45);
        line(0, 0, 0, l);
        drawWindmill(0, 0, l / 2.4142, 270, n + 1);
        translate(0, l);
        rotate(90);
        line(0, 0, 0, l);
        drawWindmill(0, 0, l / 2.4142, 270, n + 1);
        translate(0, l);
        rotate(-45);
        line(0, 0, 0, l);
        drawWindmill(0, 0, l / 2.4142, 270, n + 1);
        translate(0, l);
    } else {
        stroke(color(255, 0, 0));
        circle(0, 0, 10);
        line(0, 0, 0, l * 2.4142);
        // rotate(45);
        // stroke(color(255, 0, 0));
        // line(0, 0, 0, l);
        // translate(0, l);
        // rotate(90);
        // stroke(color(0, 255, 0));
        // line(0, 0, 0, l);
        // translate(0, l);
        // rotate(-45);
        // stroke(color(0, 0, 255));
        // line(0, 0, 0, l);
        // translate(0, l);

    }
    pop();
}