/**
 * Clase que representa un elemento (item) en el juego.
 */
export class Item {
  /**
   * Atributo privado que almacena el nombre del elemento.
   * @type {string}
   */
  #nombre = null;

  /**
   * Constructor de la clase Item.
   * @param {string} nombre - El nombre del elemento.
   */
  constructor(nombre) {
    this.#nombre = nombre;
  }

  /**
   * Obtiene el nombre del elemento.
   * @returns {string} - El nombre del elemento.
   */
  getNombre() {
    return this.#nombre;
  }
}
