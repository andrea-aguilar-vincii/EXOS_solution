

console.log("Le script fonctionne");


const recipes = [
    {id: 1, title: 'Pâtes Carbonara', duration: 15},
    {id: 2, title: 'Risotto', duration : 30},
    {id: 3, title : 'Soupe Gratinée', duration: 45},
    {id:4, title : 'Pizza', duration: 30},
];

const container = document.querySelector('#recipes');
const card = document.querySelector('.recipe-card');
const count= document.querySelector('#count');

const titre = document.querySelector('h2');
const text= document.querySelector('p');


titre.textContent= 'Recette modifiée';


count.textContent = `${recipes.length} recettes trouves`;
  recipes.forEach(recipe => {
    const card = document.createElement('div');

    card.classList.add('recipe-card');
    if(recipe.duration<=20){
        card.classList.add("quick");
    }
    card.innerHTML = `
    <h2>${recipe.title}</h2>
    <p> Duration : ${recipe.duration} min</p>
    <button data-recippe-id= "${recipe.id}">Voir </button>
    `;
    
    container.appendChild(card);
} );