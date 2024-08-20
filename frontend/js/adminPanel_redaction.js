const modal = document.getElementById('modal');
const openModalButton = document.getElementById('open_modal');
const closeModalButton = document.getElementById('close_modal');
const form = document.getElementById('your_form_id');
const sendModelButton = document.getElementById('send_form_button');


openModalButton.addEventListener('click', () => {
	modal.style.display = 'block';
});
//если тапаем на закрыть, отправить или рядом на экран, то модальное окно закрывается
modal.addEventListener('click', (event) => {
  if (event.target === modal || event.target === closeModalButton || event.target === sendModelButton) {
    modal.style.display = 'none';
  }
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      product_name: document.getElementById('product_name').value,
      price: parseFloat(document.getElementById('price').value),
      description: document.getElementById('description').value,
    };
    fetch('http://127.0.0.1:7000/create_product', {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {window.location.reload();})
    .catch((error) => console.error(error));
});

/*показ новых прродуктов*/
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
    const container = document.querySelector('.order_applications_many'); // предполагается, что у вас есть контейнер для товаров

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('order_application_content');

        productDiv.innerHTML = `
            <div class="order_title_and_btn_left">
                <p class="order_title">${product.product_name}</p>
                <div id="open_modal" class="order_btn">
                    <p class="text_get_order">Заказать</p>
                </div>
            </div>
            <div class="order_description">
                <div class="order_description_text">${product.description}</div> 
                <div class="order_price">
                    <p class="price_word">Цена:</p><a class="price">${product.price}</a class> <p class="price_word">рублей</p>
                </div>
            </div>
            <input type="hidden" id="id" class="id" value="${product.id}"> 
            <div id="close_btn" class="close_btn"><img src="img/close.png"></div>
            
        `;
        const closeModalButton = productDiv.querySelector('.close_btn');
        closeModalButton.addEventListener('click', () => {
            console.log(`Product ID: ${product.id}`);
            document.getElementById('id').value = product.id;
            modalDel.style.display = 'block';
        });

        container.appendChild(productDiv);

    });
}

// Вызов функции для отображения товаров при загрузке страницы
document.addEventListener('DOMContentLoaded', displayProducts);


