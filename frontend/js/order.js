

const modal = document.getElementById('modal');
const form = document.getElementById('your_form_id');
const sendModelButton = document.getElementById('send_form_button');
const closeModalButton = document.getElementById('close_modal');

// Функция для открытия модального окна с установкой ID продукта
function openModal(productId) {
    document.getElementById('product_id').value = productId;
    modal.style.display = 'block';
}

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal || event.target === closeModalButton || event.target === sendModelButton) {
    modal.style.display = 'none';
  }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const productId = parseInt(document.getElementById('id').value);
    console.log(`Product ID (as int): ${productId}`);
    console.log(`Type of Product ID: ${typeof productId}`);

    const data = {
        product_id: productId,
        user_firstname: document.getElementById('user_firstname').value,
        user_surname: document.getElementById('user_surname').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        additional_information: document.getElementById('additional_information').value, 
      };
    
      // Создаем объект без поля `additional_information`
    const requiredFields = { ...data };
    delete requiredFields.additional_information;

    // Проверяем, заполнены ли обязательные поля
    if (!Object.keys(requiredFields).every(key => requiredFields[key] !== '')) {
        alert('Пожалуйста, заполните все обязательные поля!');
        return;
    }

    
    fetch('http://127.0.0.1:7000/submit_order', {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Ошибка при отправке заявки');
        }
    })
    .then((data) => {
        console.log(data);
        alert('Заявка успешно отправлена!');
    })
    .catch((error) => {
        console.error(error);
        alert('Не удалось отправить заявку.');
    });
});