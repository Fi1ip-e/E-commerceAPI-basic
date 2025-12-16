import {starRate} from "../services/star_rate.js";

export function productDetailPage(product, parcela) {
    let avaliacao = product.rating ? `<p class="avaliacao">(${product.rating.count} avaliações)</p>` : '';
    return `<figure class="product-image">
        <img src="${product.image}" alt="${product.title}" />
        </figure>
        <div class='info-product'>
        <h1>${product.title}</h1>
        <hr>
        <p class="descricao-detail">${product.description}</p>
        <p class="preco-detail" >Preço: R$ ${product.price}</p>
        <h3 class="parcela-detail">${parcela.installment}x R$${parcela.value} sem juros</h3>
         ${avaliacao}
        <span>${starRate(product.rating.rate)}</span>
        </div>
            <aside class='grid-last-detail'>
            <p class="text-estoque" ><strong>Estoque disponivel</strong></p>
            <div class="footer-last-detail" >
            <p class="text-footer-last" ><strong>Compra Garantida.</strong> Receba o produto que está esperando ou devolvemos o dinheiro.</p>
            </div>
            </aside>`;
}