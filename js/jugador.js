class Jugador{
    nombre = "";
    color = "";
    posicion = 0;
    isPreso = false;
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
    get isPreso() {
        return this.isPreso;
    }
    set isPreso(boolean) {
        this.isPreso = new Boolean(boolean);
    }
}
export default Jugador;