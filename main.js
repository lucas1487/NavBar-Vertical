
const btnOtra=document.getElementById('menu');
btnOtra.addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('main');
        ocultarContenido.style.display='none';
        let ocultarContenido2=document.getElementById('primeraSeccion');
        ocultarContenido2.style.display='none';
        let ocultarContenido3=document.getElementById('segundaSeccion');
        ocultarContenido3.style.display='none';
        let ocultarContenido4=document.getElementById('terceraSeccion');
        ocultarContenido4.style.display='none';
        let ocultarContenido5=document.getElementById('footer');
        ocultarContenido5.style.display='none';
        
        let ocultarContenido6=document.getElementById('cuartaSeccion');
        ocultarContenido6.style.display='none';
        
        let mostrarContenido=document.getElementById('pagina');
        mostrarContenido.style.display='flex';



})
const btnClose=document.getElementById('closeMenu');
btnClose.addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('pagina');
        ocultarContenido.style.display='none';
        let mostrarContenido=document.getElementById('main');
        mostrarContenido.style.display='flex';
        let mostrarContenido2=document.getElementById('primeraSeccion');
        mostrarContenido2.style.display='block';


})


const btnProd=document.getElementById('productos');
btnProd.addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('pagina');
        ocultarContenido.style.display='none';
        let mostrarContenido=document.getElementById('primeraSeccion');
        mostrarContenido.style.display='block';
        let mostrarContenido2=document.getElementById('main');
        mostrarContenido2.style.display='flex';
        


})