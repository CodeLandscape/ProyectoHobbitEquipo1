import { Personaje } from "./personaje.js";

/**
 * Clase que representa a un personaje elfo que extiende la clase Personaje.
 */
export class Elfo extends Personaje {
    /**
     * Crea una instancia de la clase Elfo.
     * @param {string} nombre - El nombre del elfo.
     * @param {string} clase - La clase del elfo.
     * @param {Array} inventario - El inventario del elfo.
     * @param {string | null} origen - El origen del elfo (opcional).
     */
    constructor(nombre, clase, inventario, origen = null) {
        super(nombre, clase, inventario);
        
        /**
         * El origen del elfo.
         * @type {string | null}
         */
        this.origen = origen;
    }
}
