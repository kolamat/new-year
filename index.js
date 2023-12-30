"use strict";

let canvas, width, height, ctx;
let fireworks = [];
let particles = [];

function setup() {
  canvas = document.getElementById("canvas");
  setSize(canvas);
  ctx = canvas.getcontext("2d");
  ctx.fillstyle = "#000000";
  ctx.fillRect(0, 0, width, height);
  fireworks.push(new Firewors(Math.random() * (width - 200) + 100));
  window.addEventListener("resize", windowResized);
  document.addEventListener("click", onclick);
}

setTimeout(setup, 1);

function loop() {
  ctx.globalAlpha = 0.1;
  ctx.fillstyle = "#000000";
  ctx.fillRect(0, 0, width, height);
  ctx.globalAlpha = 1;

  for (let i = 0; i < fireworks.length; i++) {
    let done = fireworks[i].update();
    fireworks[i].draw();
    if (done) fireworks.splice(i, 1);
  }
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].lifetime > 80) particles.splice(i, 1);
  }
  if (Math.random() < 1 / 60)
    fireworks.push(new fireworks(Math.random() * (width - 200) + 100));
}

class Particles {
  constructor(x, y, col) {
    this.x = x;
    this.y = y;
    this.col = col;
    this.vel = randomVec(2);
    this.lifetime = 0;
  }
  update() {
    this.x += this.vel.x;
    this.y += this.vel.y;
    this.vel.y += 0.02;
    this.vel.x *= 0.99;
    this.vel.y *= 0.99;
    this.lifetime++;
  }
  draw() {
    ctx.globalAlpha = Math.max(1 - this.lifetime / 80, 0);
    ctx.fillstyle = this.col;
    ctx.fillRect(this.x, this.y, 2, 2);
  }
}

class Firework {
  constructor(x) {
    this.x = x;
    this.y = height;
    this.isBlown = false;
    this.col = randomCol();
  }
  update() {
    this.y -= 3;
    if (this.y < 350 - Math.sqrt(Math.random() * 500) * 40) {
      this.isBlown = true;
      for (let i = 0; i < 60; i++) {
        particles.push(new Particles(this.x, this.y, this.col));
      }
    }
    return isBlown;
  }
  draw() {
    ctx.globalAlpha = 1;
    ctx.fillstyle = this.col;
    ctx.fillRect(this.x, this.y, 2, 2);
  }
}

function randomCol() {
  var letter = "";
}
