import { Personaje } from "./personaje.js";

/**
 * Clase que representa a un Orco, que es un tipo de personaje.
 * @extends Personaje
 */
export class Orco extends Personaje {
  /**
   * Atributo privado que representa la fealdad del Orco.
   * @type {number}
   */
  #fealdad = null;

  /**
   * Constructor de la clase Orco.
   * @param {string} nombre - El nombre del Orco.
   * @param {string|null} clase - La clase del Orco (opcional).
   * @param {Array} inventario - El inventario del Orco.
   * @param {number} fealdad - La fealdad del Orco.
   */
  constructor(nombre, clase = null, inventario, fealdad) {
    super(nombre, clase, inventario);
    this.#fealdad = fealdad;
  }
}
