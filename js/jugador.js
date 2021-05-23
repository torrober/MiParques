class Jugador {
    nombre = "";
    color = "";
    posicionX = 0;
    posicionY = 0;
    isPreso = false;
    isHidden = false;
    veces = 0;
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
    set posicionX(posicionX) {
        this.posicionX = posicionX;
    }
    set posicionY(posicionY) {
        this.posicionY = posicionY;
    }
    get posicionX() {
        return this.posicionX;
    }
    get posicionY() {
        return this.posicionY;
    }
    get isPreso() {
        return this.isPreso;
    }
    set isPreso(boolean) {
        this.isPreso = new Boolean(boolean);
    }
    get isHidden() {
        return this.isHidden;
    }
    set isHidden(boolean) {
        this.isHidden = new Boolean(boolean);
    }
    moverse(espacios) {
        for (let index = 0; index < espacios; index++) {
            if (this.posicionX > 0 && this.posicionY > 0) {
                if (this.posicionX >= 440 && this.posicionY > 440) {
                    this.veces = 1;
                }
                if (this.veces == 0) {
                    if ((this.posicionX + 80) <= 500) {
                        this.posicionX = this.posicionX + 80 + 1;
                    } else if ((this.posicionY + 80) <= 500) {
                        this.posicionY = this.posicionY + 80 + 1;
                    }
                } else {
                    if ((this.posicionX) < 500 && this.posicionX > 41) {
                        this.posicionX = this.posicionX - 80 - 1;
                    } else if ((this.posicionX) == 41) {
                        this.posicionY = this.posicionY - 80 - 1;
                    }
                }
            } else {
                this.veces = 0;
                this.posicionX = 41;
                this.posicionY = 38;
            }
        }
    }
}
export default Jugador;