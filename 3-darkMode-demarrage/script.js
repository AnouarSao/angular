console.log('connecté'); 
let active = false;

const container = document.querySelector(".container");

const titre = document.querySelector(".banniere-titre");

const change = document.querySelector(".switch");

const fas = document.querySelector(".fas");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){

    active = !active;

    if(active){ 
        titre.innerHTML = `<h2>LIGHT MODE</h2>`;
        container.classList.toggle("container-change");
        btn.classList.toggle("btn-change");  
        fas.classList.toggle("icone-change");
        fas.classList.toggle("fa-sun");
    }
    else{
        titre.innerHTML = `<h2>DARK MODE</h2>`;
        container.classList.toggle("container-change");
        btn.classList.toggle("btn-change");  
        fas.classList.toggle("icone-change");
        fas.classList.toggle("fa-sun");
    }  
})


// // code de Sonia
// console.log('connecté'); 

// // Je sélectionne et je stocke
// // la DIV switch-box
// const switchBox = document.querySelector('.switch-box'); 
// console.log(switchBox); 
// // la DIV btn (le cercle)
// const btn = document.querySelector('.btn'); 
// console.log(btn)
// // l'icône
// const icone = document.querySelector('i'); 
// console.log(icone); 
// // la DIV container
// const container = document.querySelector('.container'); 
// console.log(container); 
// // le titre
// const titre = document.querySelector('h1'); 
// console.log(titre); 


// Je soumets la DIV switch à une action au clic
switchBox.addEventListener('click', function(){
    console.log('DIV cliquée !'); 

    // Je déplace le cercle
    //btn.style.left = "60px";


    // J'utilise .classList.toggle
    // classList.toggle() permet d'alterner une classe
    btn.classList.toggle('btn-change'); 
    // Je déplace l'icône
    icone.classList.toggle('icone-change'); 
    // Je change l'icône
    icone.classList.toggle('fa-sun'); 
    // La DIV switch change de couleur de fond
    switchBox.classList.toggle('switch-change');
    // La DIV container change de couleur de fond
    container.classList.toggle('container-change'); 

    // Je modifie le texte du titre
    if(titre.innerText === "DARK MODE"){
        titre.innerText = "LIGHT MODE"; 
    }else{
        titre.innerText = "DARK MODE"; 
    }

}); 