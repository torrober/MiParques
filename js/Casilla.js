class Casilla {
    posx = 0;
    posy = 0;
    size = 0;
    constructor(posx, posy, size){
        this.posx = posx;
        this.posy = posy;
        this.size = size;
    }
    show() {
        fill(240);
        square(this.posx, this.posy, this.size);
    }
}
export default Casilla;