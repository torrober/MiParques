import Jugador from './jugador.js';
import Colores from './Colores.js';
let currentDiv = 0;
const jugadores = [];
let comboboxValues = [];
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
    let errorMsg = "Faltan nombres de los jugadores";
    let inputs = document.querySelector(".table").getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
        if(inputs[index].type == "text") {
            if(inputs[index].value != "") {
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
    console.log(jugadores);
}
const putJugadorNombres = () => {
    let jugadorNombres = document.getElementsByTagName("h4");
    for (let index = 0; index < jugadores.length; index++) {
        const element = jugadores[index];
        jugadorNombres[index].innerText = element.nombre;
    }
}
const addColoresToSingleCombobox = (num) => {
    let option = null;
    let numColores = Object.keys(Colores).length;
    const combobox = document.getElementsByName("playerColor")[num];
    for (let index = 0; index < numColores; index++) {
        option = document.createElement("option");
        option.text = Object.keys(Colores)[index];
        option.value = Object.keys(Colores)[index];
        combobox.add(option);
    }
}
const addColoresToCombobox = () =>{
    const comboboxL = document.getElementsByName("playerColor").length;
    for (let index = 0; index < comboboxL; index++) {
        addColoresToSingleCombobox(index);
    }
}
const checkComboBoxValues = () => {
    const comboboxes = document.getElementsByName("playerColor");
    for (let index = 0; index < comboboxes.length; index++) {
        comboboxValues.push(comboboxes[index].value);  
    }
    const valores = ['AMARILLO', 'AZUL', 'ROJO'];
    let error = false;        
    let result = comboboxValues.filter((item,index)=>{
            return comboboxValues.indexOf(item) === index;
    });
    if(result.length != comboboxValues.length || result.includes("Seleccione")){
        error = true;
    }
    if(error == true){
        swal(
            'Error',
            'Verificar valores de los colores',
            'error'
        )
    }
    return error;
}
const assignColor = () => {
    for (let index = 0; index < jugadores.length; index++) {
        const element = jugadores[index];
        switch(comboboxValues[index]) {
            case 'AMARILLO':
                element.color = Colores.AMARILLO;
                break;
            case 'ROJO':
                element.color = Colores.ROJO;
                break;
            case 'AZUL':
                element.color = Colores.AZUL;
                break
        }   
    } 
}
const putData = () => {
    const jugadoresData = JSON.stringify(jugadores);
    localStorage.setItem("jugadoresData", jugadoresData);
    console.log(localStorage.getItem("jugadoresData"));
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
                putJugadorNombres();
                addColoresToCombobox();
            }
            break
        case 2:
            console.log("colores");
            if(checkComboBoxValues() == false){
                assignColor();
                window.location = "juego.html";
                putData();
            }
            break
    }
}
const btn = document.getElementsByName("next");
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click", slideController);
}