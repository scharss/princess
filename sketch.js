let bubbles = [];

let flower;
let kittens = [];
let img;

function preload() {
    //carga la imagen de fondo
    img = loadImage('img/architecture.jpg');
    //carga a mickey
    flower = loadImage('kittens/mickey.png');
    for (let i = 0; i < 5; i++) {
        kittens[i] = loadImage(`kittens/kitten${i}.png`);
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(50, 150);
        // manda las princesas al array
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}


function draw() {
    background(img);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r, img) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.kitten = random(kittens);

    }

    clicked(px, py) {
        //permite dar clic a las imagenes
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
            this.kitten = flower;
        }
    }

    move() {
            this.x = this.x + random(-2, 2);
            this.y = this.y + random(-2, 2);
        }
        //muestra las princesas
    show() {
        image(this.kitten, this.x, this.y, this.r, this.r);

    }
}