//Herencia
class Compra extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }
  //sobreescribe el método mostrar
  mostrar() {
    let mensaje = `${super.mostrar()} cantidad: ${this.cantidad}`;
    return mensaje;
  }
}
