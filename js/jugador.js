class Jugador{
    nombre = "";
    color = "";
    posicion = 0;
    constructor(nombre) {
        this.nombre = nombre;
    }
    get nombre() {
        return this.nombre;
    }
    set color(color) {
        this.color = color;
    }
    get color() {
        return this.color;
    }
    set posicion(posicion) {
        this.posicion = posicion;
    }
    get posicion() {
        return this.posicion;
    }
}
export default Jugador;