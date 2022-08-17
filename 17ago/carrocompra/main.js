const productos = [
  {
    nombre: "Mochila",
    precio: 10000
  },
  {
    nombre: "Peluche del zorro",
    precio: 5000
  },
  {
    nombre: "Mapa, soy el mapa",
    precio: 1000
  },
  {
    nombre: "Peluche Dora",
    precio: 10000
  }
]

let catalogoHtml = "";
for (let index = 0; index < productos.length; index++) {
  const producto = productos[index];
  catalogoHtml = catalogoHtml + `<p>${producto.nombre} - ${producto.precio}</p>`
}

const catalogoDiv = document.getElementById('catalogo')
catalogoDiv.innerHTML = catalogoHtml



