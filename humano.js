import { Personaje } from "./personaje.js";

/**
 * Clase que representa a un Humano, que es un tipo de personaje.
 * @extends Personaje
 */
export class Humano extends Personaje {
  /**
   * Atributo privado que almacena el rango del Humano.
   * @type {string|null}
   */
  #rango = null;

  /**
   * Constructor de la clase Humano.
   * @param {string} nombre - El nombre del Humano.
   * @param {string|null} clase - La clase del Humano (opcional).
   * @param {Array} inventario - El inventario del Humano.
   * @param {string|null} rango - El rango del Humano (opcional).
   */
  constructor(nombre, clase = null, inventario, rango = null) {
    super(nombre, clase, inventario);
    this.#rango = rango;
  }
}
