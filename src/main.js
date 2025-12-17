import { calculateInstallment } from "./services/parcelamento.js";
import { selectCategorie } from "./api/api_categories.js";
import { starRate } from "./services/star_rate.js";
import { renderLoading } from "./components/renderLoading.js";

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
    const listContainer = document.getElementById('list-general');

    document.getElementById('dropdownMenuButton1').innerHTML = 'filtrar categoria ▾';
    if (categorie) {
        url += `/category/${categorie}`;
        document.getElementById('dropdownMenuButton1').innerHTML = categorie;
    }

    renderLoading(listContainer, 'Carregando produtos...');
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
    }
    else {
        return descricao;
    }
}

// Abrir/fechar dropdown de Filtro
const button = document.getElementById('dropdownMenuButton1');
const menu = document.getElementById('dropdown-content');

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


//Listagem de produtos
function listProducts(products) {
    let textHtml = '';
    const listProduct = document.getElementById('list-general');

    for (let product of products) {

        let avaliacao = product.rating ? `<p class="text-xs text-gray-500">(${product.rating.count} avaliações)</p>` : '';
        let tituloLimite = limitText(product.title, 50);
        let parcela = calculateInstallment(product.price);

        textHtml += `
        <a href="details.html?id=${product.id}" class="group block bg-white rounded-xl border border-gray-200 p-4 
         hover:shadow-lg hover:-translate-y-1 transition-all duration-200 w-full max-w-full" title="Ver detalhes de ${product.title}">
    
        <article class="flex flex-col h-full" >
            <h2 class="text-sm h-10 text-gray-700 mb-2 line-clamp-2" translate="yes" >${tituloLimite}</h2>
            <img class="h-48 w-full object-contain mb-4" src=${product.image} alt="imagem"/>
            <p class="text-xl font-semibold text-gray-900 mb-1">R$ ${product.price.toFixed(2)}</p>
            <div class="flex items-center gap-1 text-yellow-400">
            ${starRate(product.rating.rate)}
            </div>
            ${avaliacao}
             <p class="text-sm text-green-600 mt-auto">
            ${parcela.installment}x R$ ${parcela.value} sem juros
            </p>
            
        </article></a>`
    }
    listProduct.innerHTML = textHtml;
};