import { calculateInstallment } from "./services/parcelamento.js";
import { selectCategorie } from "./api/api_categories.js";
import {starRate} from "./services/star_rate.js";

//função intermediaria que serve o click.
export function handleCategorieClick(event) {
    const selectedCategorie = selectCategorie(event);

    if (selectedCategorie && selectedCategorie != 'Todas') {
        product(selectedCategorie);
    }
    else {
        product();
    }
}

async function product(categorie) {
    let url = 'https://fakestoreapi.com/products';

    document.getElementById('dropdownMenuButton1').innerHTML = 'filtrar categoria';
    if (categorie) {
        url += `/category/${categorie}`;
        document.getElementById('dropdownMenuButton1').innerHTML = categorie;
    }

    try {
        const response = await fetch(url);
        const content = await response.json();
        listProducts(content);
    } catch (error) {
        console.log("Erro ao buscar produtos!");
        console.log(error)
    }

}
product()

//Limitar descrição
function limitText(descricao, limite) {
    if (descricao.length > limite) {
        return descricao.substring(0, limite) + '...';
    } else {
        return descricao;
    }
}

//Listagem de produtos
function listProducts(products) {
    let textHtml = '';

    for (let product of products) {
        
        let avaliacao = product.rating ? `<p class="avaliacao">(${product.rating.count} avaliações)</p>` : '';
        let tituloLimite = limitText(product.title, 50);
        let parcela = calculateInstallment(product.price);
        
        textHtml += `
        <a href="detalhes.html?id=${product.id}" class="card-link" title="Ver detalhes de ${product.title}">
    
        <article class="card-product" >
            <h2 class="title-product" translate="yes" >${tituloLimite}</h2>
            <img class="img-produtos" src=${product.image} alt="imagem"/>
            <p class="preco">R$ ${product.price}</p>
            <p class="parcela">${parcela.installment}x R$${parcela.value} sem juros</p>
            ${avaliacao}
            <span>${starRate(product.rating.rate)}</span>
            
        </article></a>`
    }

    document.getElementById('list-general').innerHTML = textHtml;
}