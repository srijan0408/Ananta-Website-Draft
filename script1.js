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