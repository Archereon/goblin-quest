import DiceBox from "../../dist/dice-box.es.min.js";

let Box = new DiceBox({
  assetPath: "assets/",
  origin: "https://unpkg.com/@3d-dice/dice-box@1.1.4/dist/",
  theme: "default",
  themeColor: "#feea03",
  offscreen: true,
  scale: 3,
  container: '#dice-box',
  canvasWidth: 500,
  canvasHeight: 500
});

Box.init().then(async (world) => {
  Box.roll(["4d6"], {
    themeColor: get_random(colors)
  }, {a: 10000, b: 20000, c: 30000, d: 40000}, 16);
});

const button = document.getElementById("rollem");

const colors = [
  "#348888",
  "#22BABB",
  "#9EF8EE",
  "#FA7F08",
  "#F24405",
  "#F25EB0",
  "#B9BF04",
  "#F2B705",
  "#F27405",
  "#F23005"
];

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

button.addEventListener("click", (e) => {
  Box.roll(["4d6"], {
    themeColor: get_random(colors)
  }, {a: 10000, b: 20000, c: 30000, d: 40000}, 16);
});
