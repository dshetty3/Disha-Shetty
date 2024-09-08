const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    
})();
    



function isItemInView(item){
    var rect = item.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
  

    //const  = document.getElementById('toggleDark');
     const btnTheme = document.querySelector('.theme-btn');
    let element = document.body;
    btnTheme.addEventListener('click', function() {
        element.classList.toggle('light-mode');
        var imageElement = document.getElementById('dlogo');
            if (imageElement.src.toLowerCase().endsWith('logo.jpeg')) {
            imageElement.src = 'img/logo1.jpeg';
        } else {
            imageElement.src = 'img/logo.jpeg';
        }
    });


    // Splash Screen
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1) * 50)
            })
        }, 2000)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })

    //Hello Change
    const languages = ["Hello.", "مرحبا.", "नमस्ते.", "你好.", "Holá."];

        let currentIndex = 0;

        function rotateText() {
            const rotatingTextElement = document.getElementById("rotating-text");
            rotatingTextElement.textContent = languages[currentIndex];
            currentIndex = (currentIndex + 1) % languages.length;
        }

        setInterval(rotateText, 400);

        
})



   
