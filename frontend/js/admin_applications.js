

async function fetchApplications() {
    try {
        const response = await fetch('http://localhost:7000/admin_applications');
        const applications = await response.json();
        return applications;
    } catch (error) {
        console.error('Error fetching applications:', error);
    }
}

async function displayApplications() {
    const applications = await fetchApplications();
    const container = document.querySelector('.rectangle_application'); // предполагается, что у вас есть контейнер для товаров

    applications.forEach(applications => {
        const applicationDiv = document.createElement('div');
        applicationDiv.classList.add('rectangle_in_applications');

        applicationDiv.innerHTML = `

            <div class="objects_in_applications">
                <div class="naming_applications">
                    <p class="words_in_naming_applications">ID заявки</p>
                    <p class="words_in_naming_applications">ID товара</p>
                    <p class="words_in_naming_applications">Имя заказчика</p>
                    <p class="words_in_naming_applications">Фамилия заказчика</p>
                    <p class="words_in_naming_applications">Адресс</p>
                    <p class="words_in_naming_applications">Телефон</p>
                    <p class="words_in_naming_applications">Почта</p>
                    <p class="words_in_naming_applications">Дата</p>
                    <p class="words_in_naming_applications">Дополнительная информация</p>
                </div>
                <div class="objects_of_applications">
                    <p class="words_in_ibjects" id="id">${applications.id}</p>
                    <p class="words_in_ibjects">${applications.product_id }</p>
                    <p class="words_in_ibjects">${applications.user_firstname}</p>
                    <p class="words_in_ibjects">${applications.user_surname}</p>
                    <p class="words_in_ibjects">${applications.address}</p>
                    <p class="words_in_ibjects">${applications.phone}</p>
                    <p class="words_in_ibjects">${applications.email}</p>
                    <p class="words_in_ibjects">${applications.datatime}</p>
                    <p class="words_in_ibjects">${applications.additional_information}</p>
                    
                </div>
                
            </div>
            <div id="close_btn" class="close_btn"><img src="img/close.png"></div>
     
        `;
        const closeModalButton = applicationDiv.querySelector('.close_btn');
        closeModalButton.addEventListener('click', () => {
            console.log(`appl ID: ${applications.id}`);
            document.getElementById('id').value = applications.id;
            modalDel.style.display = 'block';
        });

        container.appendChild(applicationDiv);
    });
}

// Вызов функции для отображения товаров при загрузке страницы
document.addEventListener('DOMContentLoaded', displayApplications);