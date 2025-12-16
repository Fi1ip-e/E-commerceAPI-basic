//Arquivo de chamada de categoria dos produtos bem como construção do
// dropdown para se trabalhar com filtros.

import { handleCategorieClick } from "../main.js";

async function categories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const categorie = await response.json();
    list_Categories(categorie);
}
categories();

export function selectCategorie(e) {
    let categorie = e.target.textContent;
    return categorie;
}

function list_Categories(categories) {
    let ul = document.getElementById('dropdown-content');
    ul.innerHTML = '';
    let liDefault = document.createElement('li');
    liDefault.textContent = 'Todas';
    liDefault.addEventListener('click', handleCategorieClick);
    ul.appendChild(liDefault);
    
    for (let categorie of categories) {
        let li = document.createElement('li');
        li.textContent = categorie;
        li.addEventListener('click', handleCategorieClick);
        ul.appendChild(li);
    }

}