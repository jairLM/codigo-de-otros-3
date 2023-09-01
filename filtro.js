// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const btn = document.getElementById('btn');  //guarde el elemento del boton en la variable btn
btn.addEventListener('click', ()=>{

  const listaProductos = document.getElementById("lista-de-productos") //se cambio a getElementsById
  const input = document.querySelector('.input');
  
  for (let i = 0; i < productos.length; i++) {
    let div = document.createElement("div"); //se cambiaron el tipo de variables a let y se les cambio el nombre
    div.classList.add("producto");

    console.log(div);
  
    let parrafo = document.createElement("p") //se cambiaron el tipo de variables a let y se les cambio el nombre
    parrafo.classList.add("titulo")
    parrafo.textContent = productos[i].nombre

    console.log(parrafo);
    
    let imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    let div2 = document.createElement("div");//se cambiaron el tipo de variables a let y se les cambio el nombre
    div2.appendChild(parrafo)
    div2.appendChild(imagen)
    let li = document.createElement("div");
    li.appendChild(div2);

    //const botonDeFiltro = document.querySelector("button");
  
   // botonDeFiltro.onclick = function() {   
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }

  //}
  
   //displayProductos(productos)  se booro este codigo 
  
  
    const texto = input.value;
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto );
  
    for (let i = 0; i < productosFiltrados.length; i++) {
      let div = document.createElement("div") //se cambiaron el tipo de variables a let y se les cambio el nombre
      div.classList.add("producto")
    
      let parrafo = document.createElement("p") //se cambiaron el tipo de variables a let y se les cambio el nombre
      parrafo.classList.add("titulo")
      parrafo.textContent = productosFiltrados[i].nombre
      
      let imagen = document.createElement("img"); //se cambiaron el tipo de variables a let y se les cambio el nombre
      imagen.setAttribute('src', productosFiltrados[i].img);
    
      div.appendChild(parrafo)
      div.appendChild(imagen)
    
      listaProductos.appendChild(div)
      
    

    }
  }
  
  function filtrado (productos = [], texto) {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }  





});