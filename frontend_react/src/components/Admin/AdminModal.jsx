import React, { useState, useEffect } from "react";

export default function AdminModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    product_name: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // if(!product_name || !price || !description) {
    //     alert('Пожалуйста, заполните все обязательные поля!');
    //     return;
    // }

    fetch("http://127.0.0.1:7000/create_product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw new Error("Ошипк");
      })
      .then((data) => {
        alert("Отправлено");
        onClose();
      })
      .catch((error) => {
        console.error("Errorr", error);
        alert(" Не удалось ");
      });
  };
  if (!show) return null;
  return (
    <div>
      <div id="modal" class="modal">
        <div class="modal_content">
          <form onSubmit={handleSubmit}>
            <h2 class="h2_model">Добавление товаров</h2>
            <div class="model_trim">
              <p class="p_modal">
                Введите название товара:
                <input
                  type="text"
                  id="product_name"
                  value={formData.product_name}
                  onChange={handleChange}
                />
              </p>
              <p class="p_modal">
                Введите цену:
                <input
                  type="text"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </p>
              <p class="p_modal">
                Введите описание:
                <input
                  type="text"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </p>
            </div>
            <div class="modal_div">
              <div class="close_modal_div">
                <a class="close_modal" id="close_modal" onClick={onClose}>
                  Закрыть
                </a>
              </div>
              <div class="send_modal_div">
                <button id="send_form_button">Сохранить</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
