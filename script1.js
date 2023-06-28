// Js For Testimonial

let texts = document.getElementsByClassName("user-text");
let buttons = document.getElementsByClassName("empty-button");

function chnageReiew(){
    for(text of texts){
        text.classList.remove("active-text");
    }
    for(btns of buttons){
        btns.classList.remove("active-btn");
    }
    let i = Array.from(buttons).indexOf(event.target);
    buttons[i].classList.add("active-btn");
    texts[i].classList.add("active-text");
}


/*JS For Animmation */

const observer =  new IntersectionObserver((entries) =>{
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

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

const observer1 =  new IntersectionObserver((entries) =>{
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

const hiddenElement1 = document.querySelectorAll('.hidden1');
hiddenElement1.forEach((el) => observer1.observe(el));