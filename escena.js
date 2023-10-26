/**
 * Clase para gestionar las escenas en una aplicación o juego.
 */
export class Escena {

    /**
     * Crea una instancia de la clase Escena.
     * @param {string | null} localizacion - La localización de la escena.
     * @param {string | null} dialogo - El diálogo de la escena.
     * @param {string | null} fondo - La imagen de fondo de la escena.
     */
    constructor(localizacion = null, dialogo = null, fondo = null) {
        /**
         * La localización de la escena.
         * @type {string | null}
         */
        this.localizacion = localizacion;

        /**
         * El diálogo de la escena.
         * @type {string | null}
         */
        this.dialogo = dialogo;

        /**
         * La imagen de fondo de la escena.
         * @type {string | null}
         */
        this.fondo = fondo;
    }

    /**
     * Inicia la escena estableciendo la imagen de fondo y el texto del diálogo.
     */
    iniciarEscena() {
        document.body.style.backgroundImage = `url(${this.fondo})`;
        document.getElementById("dialog-text").innerHTML = this.dialogo;
    }
}
