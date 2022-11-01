const navSlide = () =>{
    const lineline = document.querySelector('.lineline');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    lineline.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation="";
            }else{
            link.style.animation =` navLinkF 0.5s ease forward ${index /7+2}s`;
           }
           
        });
        lineline.classList.toggle('toggle');
    });

  
}

navSlide();