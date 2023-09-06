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
    btnTheme.addEventListener('click', function(){
        
        //document.getElementById('toggleDark').style.visibility = none;
        element.classList.toggle('light-mode');
       
    })
   