

// async function fetchProducts() {
//     try {
//         const response = await fetch('http://localhost:7000/get_products');
//         const products = await response.json();
//         return products;
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// }

// async function displayProducts() {
//     const products = await fetchProducts();
//     const container = document.querySelector('.order_applications_many'); // предполагается, что у вас есть контейнер для товаров

//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.classList.add('order_application_content');

//         productDiv.innerHTML = `
//             <div class="order_title_and_btn_left">
//                 <p class="order_title">${product.product_name}</p>
//                 <div id="open_modal" class="order_btn">
//                     <p class="text_get_order">Заказать</p>
//                 </div>
//             </div>
//             <div class="order_description">
//                 <div class="order_description_text">${product.description}</div> 
//                 <div class="order_price">
//                     <p class="price_word">Цена:</p><a class="price">${product.price}</a class> <p class="price_word">рублей</p>
//                 </div>
//             </div>
//         `;
//         // const openModalButton = productDiv.getElementById('open_modal');
//         // openModalButton.addEventListener('click', () => {
//         //     modal.style.display = 'block';
//         // });
//         container.appendChild(productDiv);
//     });
// }

// // Вызов функции для отображения товаров при загрузке страницы
// document.addEventListener('DOMContentLoaded', displayProducts);

async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:7000/get_products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

async function displayProducts() {
    const products = await fetchProducts();
    const container = document.querySelector('.order_applications_many'); // контейнер для товаров

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('order_application_content');

        productDiv.innerHTML = `
            <div class="order_title_and_btn_left">
                <p class="order_title">${product.product_name}</p>
                <div class="order_btn">
                    <p class="text_get_order">Заказать</p>
                </div>
            </div>
            <div class="order_description">
                <div class="order_description_text">${product.description}</div> 
                <div class="order_price">
                    <p class="price_word">Цена:</p><a class="price">${product.price}</a> <p class="price_word">рублей</p>
                </div>
            </div>
            <input type="hidden" class="id" value="${product.id}">        
            `;

        // Добавляем обработчик события на кнопку для открытия модального окна
        const openModalButton = productDiv.querySelector('.order_btn');
        openModalButton.addEventListener('click', () => {
            console.log(`Product ID: ${product.id}`);
            document.getElementById('id').value = product.id;
            modal.style.display = 'block';
        });

        container.appendChild(productDiv);
    });
}

// Вызов функции для отображения товаров при загрузке страницы
document.addEventListener('DOMContentLoaded', displayProducts);
