class rectangulo{
    constructor(ancho, alto){
        this.alto = alto
        this.ancho = ancho
    }

    area(){
        return this.alto * this.ancho
    }
    perimetro(){
        return (this.alto+this.ancho+this.alto+this.ancho)
    }
}

rectangulo = new rectangulo(3,2)
console.log(rectangulo.area())
console.log(rectangulo.perimetro())
