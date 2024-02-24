const canvas = document.getElementById("myCanvas");
canvas.width = 200;
canvas.height = window.innerHeight;

const car = new Car(100, 100, 30, 50);

const ctx = canvas.getContext("2d");

animate();

function animate() {
  car.draw(ctx);
  requestAnimationFrame(animate);
}
