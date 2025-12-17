//Arquivo de chamada de categoria dos produtos bem como construção do
// dropdown para se trabalhar com filtros.

import { handleCategorieClick } from "../main.js";

async function categories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const categorie = await response.json();
    listCategories(categorie);
}
categories();

export function selectCategorie(e) {
    let categorie = e.target.textContent;
    return categorie;
}

function listCategories(categories) {
    const ul = document.getElementById('dropdown-content');
    ul.innerHTML = '';

    function createItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        li.className = `
            px-4 py-2 text-sm text-gray-700
            hover:bg-gray-100 cursor-pointer
        `;
        li.addEventListener('click', handleCategorieClick);
        return li;
    }

    ul.appendChild(createItem('Todas'));

    for (let categorie of categories) {
        ul.appendChild(createItem(categorie));
    }

}