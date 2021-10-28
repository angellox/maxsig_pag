document.addEventListener('DOMContentLoaded', function() {
    eventListener();
});

function eventListener() {
    navegacionFija();
}

function navegacionFija(){
    const nav = document.querySelector('.contenedor-nav');
    const promo = document.querySelector('.info-promo');

    window.addEventListener('scroll', function() {
        if(promo.getBoundingClientRect().bottom < 0){
            nav.classList.add('fijo');
        } else {
            nav.classList.remove('fijo');
        }
    });
}