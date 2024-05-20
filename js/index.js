///--Modo osuro--///

const iconModo=document.querySelector(".iconSun");
iconModo.addEventListener("click",()=>{
    if(document.body.classList.toggle("light"))return(iconModo.textContent="🌑");
    iconModo.textContent="☀️"
})

//------///
btnOpen.onclick=function(){
    nave.classList.toggle('show-menu')
  }