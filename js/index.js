///--Modo osuro--///

/*const iconModo=document.querySelector(".iconSun");
iconModo.addEventListener("click",()=>{
    if(document.body.classList.toggle("light"))return(iconModo.textContent="🌑");
    iconModo.textContent="☀️"
})
*/
//------///
btnOpen.onclick=function(){
    nave.classList.toggle('show-menu')
  }

  const toggle= document.getElementById('container-dark');
  const body = document.querySelector('body');

  toggle.onclick= function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active')
  }