function Retangulo(x, y) {
    this.x = x;
    this.y = y;

    this.calcularArea = function () {
        return this.x * this.y;
    };
}

let meuRetangulo = new Retangulo(5, 10);

let area = meuRetangulo.calcularArea();

alert(`Area: ${meuRetangulo.calcularArea()}`)

