import { Hobbit } from "./hobbit.js";
import { fondos } from "./content.js";

/**
 * Clase que representa al protagonista, que es un tipo de Hobbit.
 * @extends Hobbit
 */
export class Protagonista extends Hobbit {
  /**
   * Vida inicial del protagonista.
   * @type {number}
   */
  static vida = 8;

  /**
   * Constructor de la clase Protagonista.
   * @param {string} nombre - El nombre del protagonista.
   * @param {string} clase - La clase del protagonista.
   * @param {Array} inventario - El inventario del protagonista.
   * @param {string} pelo - El tipo de pelo del protagonista.
   */
  constructor(nombre, clase, inventario, pelo) {
    super(nombre, clase, inventario, pelo);
  }

  /**
   * Actualiza la vida del protagonista en función del daño recibido.
   * @param {number} danio - El daño recibido, puede ser positivo (curación) o negativo (daño).
   */
  static conteoVidas(danio) {
    if (danio === -1) {
      Protagonista.vida -= 1;
      document.getElementById("dialog-text").innerHTML +=
        "<br><b style='color:red'>Has sufrido " +
        danio +
        " de daño</b> <i>Vida actual de Bilbo: " +
        Protagonista.vida +
        "</i><br>";
    } else if (danio === 1) {
      Protagonista.vida += 1;
      document.getElementById("dialog-text").innerHTML +=
        "<br><b style='color:green'>Has ganado " +
        danio +
        " de vida</b> <i>Vida actual de Bilbo: " +
        Protagonista.vida +
        "</i><br>";
    } else {
      Protagonista.vida -= danio;
      document.getElementById("dialog-text").innerHTML +=
        "<br><b style='color:red'>Has sufrido " +
        danio +
        " de daño</b> <i>Vida actual de Bilbo: " +
        Protagonista.vida +
        "</i><br>";
    }
  }

  /**
   * Comprueba si el protagonista ha perdido todas sus vidas y actualiza la interfaz en consecuencia.
   * @param {HTMLElement} botonDerecha - Botón derecho de la interfaz.
   * @param {HTMLElement} botonIzquierda - Botón izquierdo de la interfaz.
   * @param {HTMLElement} botonReset - Botón de reinicio de la interfaz.
   */
  comprobarDerrota(botonDerecha, botonIzquierda, botonReset) {
    if (Protagonista.vida < 1) {
      document.body.style.backgroundImage = `url(${fondos.fondo9})`;
      document.getElementById("dialog-text").innerHTML =
        "Has perdido demasiadas vidas. Aquí acaba tu aventura.";
      botonDerecha.style.display = 'none';
      botonIzquierda.style.display = 'none';
      botonReset.style.display = 'block';
    }
  }
}
