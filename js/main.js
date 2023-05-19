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

let id = 1;
let menu = [];
let carrito = [];
let menuGallery = document.getElementById("menuGallery");
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
    let producto = new Productos (id, input[1].value, input[3].value, input[5].value);
    menu.push(producto);
    id = menu.length + 1;
    console.log(`Usted ha ingresado el producto: ${producto.id}, nombre: ${producto.nombre}, con precio: ${producto.precio}`);
});

let imprimir = document.getElementById("imprimir");
let areaImpresion = document.getElementById("areaImpresion");

imprimir.addEventListener("click", (e) => {

    menu.length === 0 ? alert("Aún no hay productos en el menú") : imprimirProducto();

    function imprimirProducto(){
        for (i = 0 ; i < menu.length;  i++){
            let div = document.createElement("div");
            div.innerHTML = `<p>Producto: ${menu[i].nombre}, Precio: ${menu[i].precio}</p>`;
            div.className = `col-3 producto`;
            areaImpresion.append(div);
        };
    };
});