/**
 * Project 2 of Creative Algorithms
 * By IENGROUND (Hyunwoo Rhee 20201131)
 * on github.com/ienground
 *
 * L-System
 * Symbol :
 * F : Draw forward by 1 unit
 * + : Turn left by 45 degrees
 * * : Turn right by 90 degrees
 * Rules : [ F -> +F*F+F ]* 4 times
 */

let level = 1;
let length = 200;
let maxLevel = 2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    angleMode(DEGREES);
}

function draw() {
    background(0);

    let colors = [color('#FF4081'), color('#7C4DFF'), color('#03A9F4'), color('#3F51B5')];

    push();
    translate(width / 2 + length, height / 2 + length);
    for (let k = 1; k <= maxLevel; k++) {
        for (let i = 0; i < 4; i++) {
            rotate(90);
            drawWindmill(0, 0, length, 270, level + 1, k, colors[(i + 2) % 4], colors[(i + 3) % 4]);
            translate(0, length * 2.4142);
        }
    }

    pop();
}

function drawWindmill(x, y, l, r, step, max, c1, c2) {
    push();
    translate(x, y);
    rotate(r);

    fill(0);
    strokeWeight(50 / step);
    noFill();

    let color1 = lerpColor(c1, c2, 0);
    let color2 = lerpColor(c1, c2, 0.3333);
    let color3 = lerpColor(c1, c2, 0.6666);
    let color4 = lerpColor(c1, c2, 1);

    if (step < max) {
        rotate(45);
        drawWindmill(0, 0, l / 2.4142, 270, step + 1, max, color1, color2);
        translate(0, l);
        rotate(90);
        drawWindmill(0, 0, l / 2.4142, 270, step + 1, max, color2, color3);
        translate(0, l);
        rotate(-45);
        drawWindmill(0, 0, l / 2.4142, 270, step + 1, max, color3, color4);
        translate(0, l);
    } else {
        rotate(135);
        fill(c1);
        let s = l * 2.4142 / 1.4142;
        noStroke();
        triangle(0, 0, 0, s, s, s);
    }
    pop();
}

function mouseWheel(event) {
    if (event.delta > 0) {
        if (maxLevel < 8) {
            maxLevel++;
        }
    } else if (event.delta < 0) {
        if (maxLevel > 2) {
            maxLevel--;
        }
    }
    print(maxLevel);
}