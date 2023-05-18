/* PROGRAMA
- landing
- reservar
- take away shop
    - clase prducto
    - arreglo menu
    - arreglo carrrito
    - agregar productos al menu
    - agregar producto al carrito
- Form contacto
- map
- about
*/

let menu = [];
let carrito = [];
let menuGallery = document.getElementById("menuGallery");
// menuGallery.innerHTML = "hola mundo";
let formAgregarMenu = document.getElementById("formAgregarMenu");
console.log();

class Productos {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
};

formAgregarMenu.addEventListener("submit", (e) => {
    e.preventDefault();

    let input = e.target.children;
    let producto = new Productos (input[0].value, input[1].value, input[2].value, input[3].value);
    menu.push(producto);
    console.log(`Usted ha ingresado el producto: ${producto.nombre}`);
});

let imprimir = document.getElementById("imprimirMenu");
imprimir.addEventListener("click", (e) => {
    function imprimirMenu() {
        for (i = 0 ; i < menu.length;  i++){
            console.log(menu[i].nombre);
        };
    };
})