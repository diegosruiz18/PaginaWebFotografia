const imagenes = document.querySelectorAll('.img-galeria')
const contenedorLight = document.querySelector('.imagen-light')
const imagenesLight = document.querySelector('.agregar-imagen')
const hamburguer1 = document.querySelector('.hamburguer');


//console.log(imagenes);
//console.log(imagenesLigth);
//console.log(contenedorLigth);

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        //alert("probando");
        //console.log(imagen.getAttribute('src')); //Muestra la direccion de la imagen cuando hacemos click en una de ellas. Ej: img/dos.jpg
        aparecerImagen(imagen.getAttribute('src'));
    })
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show') /*Con esto le agregamos o quitamos la clase show a imagen-light(revisar con inspeccion)*/
    imagenesLight.classList.toggle('showImage') /*Con esto le agregamos o quitamos la clase showImage a agregar-imagen(revisar con inspeccion)*/
    hamburguer1.style.opacity = '0' /*Ocultamos hamburguer1*/ 
}

/*Para cerrar la imagen*/ 
contenedorLight.addEventListener('click',(e)=>{
    //console.log(e.target); 
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})






