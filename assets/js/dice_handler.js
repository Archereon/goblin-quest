import DiceBox from "../../dist/dice-box.es.min.js";

let Box = new DiceBox({
  assetPath: "assets/",
  origin: "https://unpkg.com/@3d-dice/dice-box@1.1.4/dist/",
  theme: "default",
  themeColor: "#feea03",
  offscreen: true,
  scale: 6,
  container: '#dice-box'
});

Box.init().then(async (world) => {
  Box.roll(["4d6"], 200);
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
  Box.roll(["4d6"], 200, {
    themeColor: get_random(colors)
  });
});
