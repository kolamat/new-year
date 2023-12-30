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
  fireworks.push(new Firewors(math.random() * (width - 200) + 100));
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
  if (math.random() < 1 / 60)
    fireworks.push(new fireworks(math.random() * (width - 200) + 100));
}
