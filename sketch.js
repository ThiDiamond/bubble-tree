let theta, a;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  frameRate(30);
  let a = (mouseX / width + mouseY / height) * 360;
  theta = radians(a);
  translate(mouseX, mouseY);
  translate(0);
  branch(120);
}

function branch(h) {
  h *= 0.66;
  if (h > 2) {
    push();
    rotate(theta);
    translate(0, -h);
    branch(h);
    pop();
    push();
    rotate(-theta);
    translate(0, -h);
    branch(h);
    pop();
    bubble(mouseX / width, mouseY, (-h * theta) / 4);
  }
}

function bubble(x, y, r, fillColor = 0, strokeColor = 0) {
  circle(x - mouseX / width, y - mouseY / theta, r);
  fill(fillColor);
  stroke(strokeColor);
}
