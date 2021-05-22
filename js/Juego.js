import Jugador from "./jugador.js";
import Circular from './circular.js';
const circular = new Circular();
circular.append('E');
circular.head; // => Node { value: 'E', next: [Circular] }
circular.last; // => Node { value: 'E', next: [Circular] }
console.log(circular.get(0)); // => E
let data = localStorage.getItem("jugadoresData");
data = JSON.parse(data);
let jugadores = [];
let jugadorTemp = null;
for (let index = 0; index < data.length; index++) {
    jugadorTemp = new Jugador(data[index].nombre);
    jugadorTemp.color = data[index].color;
    jugadorTemp.posicion = data[index].posicion;
    jugadores.push(jugadorTemp);
}
console.log(jugadores[1].color);
var img;
function setup() {
    createCanvas(500, 500);
    img = loadImage('img/board.png');
}

function draw() {
    background(220);
    fill(jugadores[0].color);
    rect(0, 0, 500 / 2, 500 / 2);
    fill(jugadores[1].color);
    rect(500 / 2, 0, 500 / 2, 500 / 2);
    fill(jugadores[2].color);
    rect(0, 500 / 2, 500, 500);
    noStroke();
    image(img, 0, 0, 500, 500);
} 
window.setup = setup;
window.draw = draw;
