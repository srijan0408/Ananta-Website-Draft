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

const observer2 =  new IntersectionObserver((entries) =>{
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

const hiddenElement2 = document.querySelectorAll('.hidden2');
hiddenElement2.forEach((el) => observer2.observe(el));

const extraDiv = document.querySelector('.content-container');
const options = {
  threshold: 0.5 // Intersection ratio needed to trigger the callback
};

const intersectionCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.5) {
      extraDiv.classList.remove('hidden1');
      extraDiv.classList.add('show1');
    } else {
      extraDiv.classList.remove('show1');
      extraDiv.classList.add('hidden1');
    }
  });
};

const observerIntersection = new IntersectionObserver(intersectionCallback, options);
observerIntersection.observe(extraDiv);

const imgDiv = document.querySelector('.img');
const options1 = {
  threshold: 0.5 // Intersection ratio needed to trigger the callback
};

const intersectionCallback1 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.5) {
      imgDiv.classList.remove('hidden3');
      imgDiv.classList.add('show3');
    } else {
      imgDiv.classList.remove('show3');
      imgDiv.classList.add('hidden3');
    }
  });
};

const observerImg = new IntersectionObserver(intersectionCallback1, options);
observerImg.observe(imgDiv);

