import { Item } from "./item.js";

/**
 * Clase que representa a un personaje en el juego.
 */
export class Personaje {
  #nombre = null;
  #clase = null;
  #inventario = null;

  /**
   * Crea una instancia de la clase Personaje.
   * @param {string} nombre - El nombre del personaje.
   * @param {string|null} clase - La clase o tipo del personaje (opcional).
   */
  constructor(nombre, clase = null) {
    this.#nombre = nombre;
    this.#clase = clase;
    this.#inventario = new Set();
  }

  /**
   * Hace que el personaje hable y muestra el texto en la interfaz del juego.
   * @param {string} texto - El texto que el personaje va a decir.
   */
  hablar(texto) {
    let textoV2 = "<b><br>" + this.#nombre + "</b>: " + texto + "<br>";
    document.getElementById("dialog-text").innerHTML += textoV2;
  }

  /**
   * Agrega un elemento al inventario del personaje.
   * @param {Item|string} item - El elemento o nombre del elemento a agregar al inventario.
   */
  agregarAlInventario(item) {
    this.#inventario.add(item);
    let itemName = item instanceof Item ? item.getNombre() : item;
    let textoV2 = `<b><br>${this.#nombre} ha añadido el objeto ${itemName} a su inventario.</b><br>`;
    document.getElementById("dialog-text").innerHTML += textoV2;
  }
}
