const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(hamburguer);

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread") /*Con esto le agregamos o quitamos la clase spread a menu-navegacion al hacer un click en hamburguer(revisar con inspeccion)*/
})

/*Pasamos el parametro e, esto se va ejecutar cada que le de click a cualquier parte de la pantalla*/ 
window.addEventListener('click', e=>{ /*console.log(e.target) muestra a que elemento le estoy dando click*/
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread")
    }
})
















