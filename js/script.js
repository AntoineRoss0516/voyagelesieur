const btPlus = document.querySelector('.plus');

const colTransport = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click', fouvreFerme);

function fouvreFerme(){
    colTransport.classList.toggle('conteneur-transport-invisible');
}