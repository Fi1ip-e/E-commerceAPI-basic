import { calculateInstallment } from "./parcelamento.js";
import { productDetailPage } from '../components/productDetailPage.js';

async function renderProductDetail(productId) {
    const url = `https://fakestoreapi.com/products/${productId}`;
    const content = document.getElementById('product-detail');


    if (!productId) {
        console.error('Erro de id')
        content.textContent = 'ID inválido';
        return;
    }

    try {
        const response = await fetch(url);
        const product = await response.json();
        let parcela = calculateInstallment(product.price);
        content.innerHTML = productDetailPage(product, parcela);
    }
    catch (error) {
        console.log(error);
        content.textContent = 'Erro ao carregar produto.';
    }
}


function initProductDetailPage() {
    // Captura o ID da URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        renderProductDetail(productId);
        console.log(productId);
    }
    else {
        document.getElementById('product-detail').innerHTML = 'Produto não encontrado';
    }
}

initProductDetailPage();