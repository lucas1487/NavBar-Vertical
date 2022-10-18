
const btnOtra=document.getElementById('menu');
btnOtra.addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('contenidoGral');
        ocultarContenido.style.display='none';
       
        
        let mostrarContenido=document.getElementById('pagina');
        mostrarContenido.style.display='flex';



})
const btnClose=document.getElementById('closeMenu');
btnClose.addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('pagina');
        ocultarContenido.style.display='none';
        let mostrarContenido=document.getElementById('contenidoGral');
        mostrarContenido.style.display='flex';
        


})


const btnProd=document.getElementById('productos');
btnProd.addEventListener('click', ()=>{
    let ocultarContenido=document.getElementById('pagina');
        ocultarContenido.style.display='none';
        let mostrarContenido=document.getElementById('contenidoGral');
        mostrarContenido.style.display='block';
    
        


})