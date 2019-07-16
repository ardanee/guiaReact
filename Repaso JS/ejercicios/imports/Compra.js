import Tarea from './Tarea.js';
export default class Compra extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    super(nombre, prioridad);
    this.cantidad = cantidad;
  }

  mostrar() {
    let mensaje = `${super.mostrar()} cantidad: ${this.cantidad}`;
    return mensaje;
  }
}
