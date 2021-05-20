import Jugador from './jugador.js';
let currentDiv = 0;
const jugadores = [];
window.onload = () => {
    const slidenum = document.getElementsByClassName("slide").length;
    for (let index = 1; index < slidenum; index++) {
        $(".slide").eq(index).hide();
    }
}
const goNext = () => {
    const curr = $('.slide').eq(currentDiv);
    $('.slide').eq(currentDiv + 1).attr("active");
    $('.slide').eq(currentDiv + 1).show();
    $('.slide').eq(currentDiv).hide();
    $('.slide').eq(currentDiv).removeAttr("active");
    $('.slide').eq(currentDiv).attr("inactive");
    currentDiv++;
}
const checkFields = () => {
    var correct = false;
    let errorMsg = "";
    if(currentDiv == 1){
        errorMsg = "Faltan nombres de los jugadores";
    } else {
        errorMsg = "Faltan colores de los jugadores";
    }
    let inputs = document.querySelector(".table").getElementsByTagName("input");
    console.log(inputs.length);
    for (let index = 0; index < inputs.length; index++) {
        if(inputs[index].type == "text") {
            if(inputs[index].value != "") {
                correct = true;
            } else {
                correct = false;
            }
        } else {
            if(inputs[index].value != "Seleccione") {
                correct = true;
            } else {
                correct = false;
            }
        }
    }
    if(correct == false) {
        swal(
            'Error',
            errorMsg,
            'error'
        )
    } 
    return correct;
}
const createJugadores = () => {
    let inputs = document.querySelector(".table").getElementsByTagName("input");
    let jugadorTemp = null;
    for (let index = 0; index < 3; index++) {
        jugadorTemp = new Jugador(inputs[index].value);
        console.log("Jugador "+(index+1)+":"+jugadorTemp.nombre);
        jugadores.push(jugadorTemp);
    }
}
const slideController = () => {
    switch (currentDiv) {
        case 0:
            goNext();
            break
        case 1:
            if (checkFields()){
                createJugadores();
                goNext();
            }
            break
        case 2:
            console.log("colores");
            goNext();
            break
    }
}
const btn = document.getElementsByName("next");
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click", slideController);
}