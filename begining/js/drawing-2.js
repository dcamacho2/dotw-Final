// Drawing 2

var origin;
var timer = 0;
var galaxy = [];
var sizeA = 0;
var proportion = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background('#2A2A33');
}

function draw() {
    background('#2A2A33'); //clearing background for animation
    stroke(220);
    origin = createVector(width / 2, height / 2);

    // Distance between mouse and circle
    var distance = dist(mouseX, mouseY, width / 2, height / 2);

    // Determine if distance is less than circle radius
    if (distance < 50) {
        circleHover = true;
    } else {
        circleHover = false;
    }

    setTimeout(function() {
        if (timer <= 100) {
            // console.log(origin);

            var randomX = random(width);
            var randomY = random(height);

            // should go somewhere in canvas
            var location = createVector(randomX, randomY);
            var star = new Star(origin, location);

            galaxy.push(star);
            timer++;
            // console.log('demo');
        }
    }, 1000);

    for (var i = 0; i < galaxy.length; i++) {
        galaxy[i].update();
        galaxy[i].draw();
    }

    // creating the sun
    fill('#FEF076');
    noStroke();

    if (circleHover == true) {
        fill(243, 156, 18);
        cursor(HAND);
    } else {
        fill('#FEF076');
        cursor(ARROW);
    }

    ellipse(width / 2, height / 2, 60, 60);

    fill('#EEDBC3');
    noStroke();
    ellipseMode(CENTER);
    ellipse((width / 2) + 30, (height / 2) + 60, 10, 10);

    fill('#FFBA00');
    noStroke();
    ellipseMode(CENTER);
    ellipse((width / 2) + 20, (height / 2) - 140, 20, 20);

    fill('#32BBF5');
    noStroke();
    ellipseMode(CENTER);
    ellipse((width / 2) - 200, (height / 2) - 10, 25, 25);

    fill('#F95A2C');
    noStroke();
    ellipseMode(CENTER);
    ellipse((width / 2) + 200, (height / 2) + 120, 15, 15);

    fill('#FC9438');
    noStroke();
    ellipseMode(CENTER);
    ellipse((width / 2) - 150, (height / 2) + 270, 50, 50);

    fill('#FFEFAA');
    noStroke();
    ellipseMode(CENTER);
    ellipse((width / 2) + 250, (height / 2) - 200, 40, 40);

    fill('#84CDC7');
    noStroke();
    ellipseMode(CENTER);
    ellipse((width / 2) - 260, (height / 2) - 300, 27, 27);

    fill('#7497F2');
    noStroke();
    ellipseMode(CENTER);
    ellipse((width / 2) - 500, (height / 2) - 200, 26, 26);

    setTimeout(function() {
        // If the circle moves off the canvas
        if (sizeA <= 15) {
            sizeA += proportion;
        }
    }, 5000);
}

// Called once every time mouse is pressed
function mousePressed() {
    if (circleHover == true) {
        planet1 = color(random(255), random(255), random(255));
        planet2 = color(random(255), random(255), random(255));
        planet3 = color(random(255), random(255), random(255));
        planet4 = color(random(255), random(255), random(255));
    }
}

function Star(origin, location) {
    this.position = origin;
    this.location = location;
    this.diameter = random(1, 3);
}

// upadating location of stars
Star.prototype.update = function() {
    this.position = p5.Vector.lerp(
        this.position,
        this.location,
        0.1 // speed
    );
};

// drawing the stars for the galaxy
Star.prototype.draw = function() {
    fill(255);
    ellipse(
        this.position.x, this.position.y,
        this.diameter, this.diameter
    );
};
