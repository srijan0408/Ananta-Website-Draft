const btn = document.querySelector('.icons');
const menu =document.querySelector('.dropdown')
const icon = document.querySelector('.icons i');
let isOpen = false;

btn.addEventListener("click",() =>{
    // alert("Check")
    menu.classList.toggle('open')
    if (isOpen) {
        icon.classList.remove('rotate1');
        icon.classList.add('rotate2');
        icon.classList.replace('fa-xmark', 'fa-bars');
      } else {
        icon.classList.add('rotate1');
        icon.classList.remove('rotate2');
        icon.classList.replace('fa-bars', 'fa-xmark');
      }
      
      isOpen = !isOpen;
})
