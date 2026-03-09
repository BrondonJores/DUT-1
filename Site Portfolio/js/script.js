
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = ( ) =>{
    sections.forEach(sec => {
        let top =  window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if( top >= offset && top < offset + height){
            // active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href="#'+ id +'"]').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('fixe', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".Education-content .content");

    function revealBoxes() {
        boxes.forEach(function(box, index) {
            setTimeout(function() {
                box.style.opacity = 1;
            }, index * 1000); // Décalage de 500 millisecondes entre chaque élément
        });
    }

    revealBoxes();
});