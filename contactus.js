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

//Js For Animation

const observer =  new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add('show1');
      }
      else{
          entry.target.classList.remove('show1')
      }
  });
});

const hiddenElement = document.querySelectorAll('.hidden1');
hiddenElement.forEach((el) => observer.observe(el));

const observer2 =  new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add('show');
      }
      else{
          entry.target.classList.remove('show')
      }
  });
});

const hiddenElement2 = document.querySelectorAll('.hidden');
hiddenElement2.forEach((el) => observer2.observe(el));

const observer3 =  new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
      console.log(entry);
      if(entry.isIntersecting){
          entry.target.classList.add('show2');
      }
      else{
          entry.target.classList.remove('show2')
      }
  });
});

const hiddenElement3 = document.querySelectorAll('.hidden2');
hiddenElement3.forEach((el) => observer3.observe(el));

const observer4 =  new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show3');
        }
        else{
            entry.target.classList.remove('show3')
        }
    });
  });
  
  const hiddenElement4 = document.querySelectorAll('.hidden3');
  hiddenElement4.forEach((el) => observer4.observe(el));



