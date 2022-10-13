const btnOtra=document.getElementById('menu');
btnOtra.addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('custom-navbar');
        ocultarContenido.style.display='none';
        let mostrarContenido=document.getElementById('pagina');
        mostrarContenido.style.display='flex';



})
const btnClose=document.getElementById('closeMenu');
btnClose.addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('pagina');
        ocultarContenido.style.display='none';
        let mostrarContenido=document.getElementById('custom-navbar');
        mostrarContenido.style.display='flex';



})
