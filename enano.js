import { Personaje } from "./personaje.js";

/**
 * Clase que representa a un personaje enano que extiende la clase Personaje.
 */
export class Enano extends Personaje {
    /**
     * Crea una instancia de la clase Enano.
     * @param {string} nombre - El nombre del enano.
     * @param {string} clase - La clase del enano.
     * @param {Array} inventario - El inventario del enano.
     * @param {string | null} colorBarba - El color de la barba del enano (opcional).
     */
    constructor(nombre, clase, inventario, colorBarba = null) {
        super(nombre, clase, inventario);
        
        /**
         * El color de la barba del enano.
         * @type {string | null}
         */
        this.colorBarba = colorBarba;
    }
}
