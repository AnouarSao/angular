// vérifier
// console.log('connecté');

// sélectionner et stocker le bouton
const  btn = document.getElementById('btn'); 

// vérifier
// console.log(btn, 'bouton');

// sélectionner et stocker la balise vide
const content = document.getElementById('content'); 

// vérifier
// console.log(content, 'content');

// Ajouter le addEVentListener sur le btn
btn.addEventListener('click', function(){
    // console.log('cliqué');
    onDisplay();
})

// fonction onDisplay()
async function onDisplay(){
    // console.log('depuis ondisplay');

    const responseJSON = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
    //const responseJSON = await fetch('bdd.json'); 
    console.log(responseJSON);

    // on traduit en JS
    const responseJS = await responseJSON.json();
    console.log(responseJS);
    
    // afficher le titre de l'objet dans l'HTML
    content.innerText = responseJS.title;
}

// stocker le résultat et l'afficher