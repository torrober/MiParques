class Dado {
    resultado = 1;
    a = 1;
    b = 7;
    constructor(){}
    tirar() {
        this.resultado = Math.round(Math.random()*(this.b-this.a))
        if(this.resultado == 0){
            this.resultado = 1;
        }
        return this.resultado;
    }
}
export default Dado;