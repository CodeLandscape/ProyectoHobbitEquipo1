import { Personaje } from "./personaje.js";

/**
 * Clase que representa a un Hobbit, que es un tipo de personaje.
 * @extends Personaje
 */
export class Hobbit extends Personaje {
  /**
   * Atributo privado que almacena el tipo de pelo del Hobbit.
   * @type {string|null}
   */
  #pelo = null;

  /**
   * Constructor de la clase Hobbit.
   * @param {string} nombre - El nombre del Hobbit.
   * @param {string} clase - La clase del Hobbit.
   * @param {Array} inventario - El inventario del Hobbit.
   * @param {string|null} pelo - El tipo de pelo del Hobbit (opcional).
   */
  constructor(nombre, clase, inventario, pelo = null) {
    super(nombre, clase, inventario);
    this.#pelo = pelo;
  }
}
