console.log('connecté'); 
// récupérer le bouton
// récupérer la bannière
// ajouter un événement sur le bouton
// cache la banniere 
// créer un localstorage banniere avec la valeur 'oui'
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);
const cookies = document.querySelector('.cookies');
console.log(cookies);
// on vérifie si localStorage.getItem('banniere');
const stockage = localStorage.getItem('banniere');
console.log(stockage);
if (stockage === 'oui') {
  // retirer la bannière cookies
  cookies.remove();
}
btnSuccess.addEventListener('click', function () {
  console.log('btn success cliqué');
  cookies.style.display = 'none';
  // enregistrer ses préférences
  localStorage.setItem('banniere', 'oui');
});