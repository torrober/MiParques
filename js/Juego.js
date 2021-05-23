import Jugador from "./jugador.js";
import Circular from './circular.js';
import Dado from './Dado.js';
let data = localStorage.getItem("jugadoresData");
data = JSON.parse(data);
localStorage.setItem("dados",0);
let jugadores = [];
let jugadorTemp = null;
let clicks = 0;
let width = 500;
let height = 500;
let size = 200;
let limitX = false;
let limitY = false;
let veces = 0;
var img;
var turno = 0;
for (let index = 0; index < data.length; index++) {
    jugadorTemp = new Jugador(data[index].nombre);
    jugadorTemp.color = data[index].color;
    jugadorTemp.posicionX = data[index].posicionX;
    jugadorTemp.posicionY = data[index].posicionY;
    jugadorTemp.isPreso = false;
    jugadores.push(jugadorTemp);
}
console.log(jugadores[1].color);
var dado = new Dado();
veces = 0;
var currentJugador = jugadores[0];
function setup() {
    createCanvas(500, 500);
    img = loadImage('img/board.png');
}
function fondo() {
    fill(jugadores[0].color);
    rect(0, 0, 500 / 2, 500 / 2);
    fill(jugadores[1].color);
    rect(500 / 2, 0, 500 / 2, 500 / 2);
    fill(jugadores[2].color);
    rect(0, 500 / 2, 500, 500);
    image(img, 0, 0, 500, 500);
}
function draw() {
    fondo()
    for (let index = 0; index < jugadores.length; index++) {
        if (jugadores[index].isHidden == false) {
            fill(jugadores[index].color);
            circle(jugadores[index].posicionX, jugadores[index].posicionY, 40);
        }
        if (jugadores[index].isPreso == true) {
            jugadores[index].posicionX = 41;
            jugadores[index].posicionY = 38;
        }
    }
    showTurno();
}
function showTurno() {
    textSize(30);
    fill("#000");
    if(jugadores[turno].isPreso){
        text("Turno de " + currentJugador.nombre+" PRESO", (width / 2) - 150, height / 2);
        fill("#fff");
        text("Turno de " + currentJugador.nombre+" PRESO", (width / 2) - 150, (height / 2) - 2);
    } else {
        text("Turno de " + currentJugador.nombre, (width / 2) - 100, height / 2);
        fill("#fff");
        text("Turno de " + currentJugador.nombre, (width / 2) - 100, (height / 2) - 2);
    }
}
function showDado() {
    var res = dado.tirar();
    document.getElementById("dado").src = "img/dado-" + res + ".png";
    document.getElementById("dado").width = "50";
    document.getElementById("dado").height = "50";
    localStorage.setItem("dados", res);
    return res;
}
function mousePressed() {
    showDado();
    manageTurno();
    if(jugadores[turno].isPreso == false){
        jugadores[turno].moverse(showDado());
    } else if (jugadores[turno].isPreso == true && showDado() == 6) {
        jugadores[turno].isPreso = false;
        jugadores[turno].moverse(showDado());
    }
}
function manageTurno() {
    currentJugador = jugadores[turno];
    if(localStorage.getItem("dados")!=6) {
        turno++;
    } else if(localStorage.getItem("dados")==6) {
        alert("enhorabuena, repetiste turno!");
    } else if(localStorage.getItem("dados")==6 && currentJugador.isPreso == true) {
        alert("enhorabuena, saliste de prision");
    }
    clicks++;
    if (turno == 3) {
        turno = 0;
    }
    if (clicks > 3) {
        checkTurno();
    }
}
function checkTurno() {
    for (let index = 0; index < jugadores.length; index++) {
        if(index>0) {
            if ((jugadores[index-1].posicionX == jugadores[index].posicionX) && (jugadores[index-1].posicionY == jugadores[index].posicionY)) {
                jugadores[index].isPreso = true;
            }
        } else  {
            if ((jugadores[2].posicionX == jugadores[2].posicionX) && (jugadores[index].posicionY == jugadores[index].posicionY)) {
                jugadores[index].isPreso = true;
            }
        }
    }
}
window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;