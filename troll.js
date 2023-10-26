import { Personaje } from "./personaje.js";

/**
 * Clase que representa un Troll, que es un tipo de personaje.
 * @extends Personaje
 */
export class Troll extends Personaje {
  /**
   * Constructor de la clase Troll.
   * @param {string} nombre - El nombre del Troll.
   * @param {string|null} clase - La clase del Troll (opcional).
   * @param {Array} inventario - El inventario del Troll.
   */
  constructor(nombre, clase = null, inventario) {
    super(nombre, clase, inventario);
  }

  /**
   * Realiza un ataque del Troll y devuelve el daño infligido.
   * @returns {number} - El daño causado por el ataque del Troll.
   */
  ataqueTroll() {
    const dañoMax = 5;
    return Math.floor(Math.random() * dañoMax);
  }
}
