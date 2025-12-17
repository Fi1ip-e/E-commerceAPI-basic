import {starRate} from "../services/star_rate.js";

export function productDetailPage(product, parcela) {
    let avaliacao = product.rating ? `<p class="text-sm text-gray-500"">(${product.rating.count} avaliações)</p>` : '';
    return `<figure class="flex justify-center">
        <img src="${product.image}" alt="${product.title}" class="max-h-80 object-contain"/>
        </figure>
        <section class='space-y-3'>
        <h1  class="text-xl font-semibold">${product.title}</h1>
        <hr>
        <p class="text-gray-600 text-sm">${product.description}</p>
        <p class="text-2xl font-bold" >Preço: R$ ${product.price.toFixed(2)}</p>
        <p class="text-green-600">${parcela.installment}x R$${parcela.value} sem juros</p>
         <div class="flex items-center gap-2">
        <span class="flex">${starRate(product.rating.rate)}</span>
        ${avaliacao}
      </div>
        </section>
            <aside class='border border-stone-400 rounded-lg p-4 space-y-4'>
            <p class="font-semibold text-green-700">Estoque disponivel</p>
            <div class="text-sm text-gray-600" >
            <p class="text-footer-last" ><strong>Compra Garantida.</strong> Receba o produto que está esperando ou devolvemos o dinheiro.</p>
            </div>
            </aside>`;
}