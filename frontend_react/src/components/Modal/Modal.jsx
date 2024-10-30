import React, { useState, useEffect } from "react";

function Modal({ show, onClose, productId }) {
  const [formData, setFormData] = useState({
    id: productId,
    user_firstname: "",
    user_surname: "",
    address: "",
    phone: "",
    email: "",
    additional_information: "",
  });

  useEffect(() => {
    if (show && productId != null) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        product_id: Number(productId),
      }));
    }
  }, [show, productId]);

  const handleChange = (e) => {
    if (e.target.id === "id") {
      // Игнорируем изменения в поле 'id'
      return;
    }
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Тип formData.id:", typeof formData.id); // Должен быть 'number'
    const { product_id, user_firstname, user_surname, address, phone, email } =
      formData;

    if (!user_firstname || !user_surname || !address || !phone || !email) {
      alert("Пожалуйста, заполните все обязательные поля!");
      return;
    }

    fetch("http://127.0.0.1:7000/submit_order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Ошибка при отправке заявки");
      })
      .then((data) => {
        alert("Заявка успешно отправлена!");
        console.log(data);
        onClose();
      })
      .catch((error) => {
        console.error("Ошибка ", error);
        console.log(formData);
        console.log(
          typeof product_id,
          typeof user_firstname,
          typeof user_surname,
          typeof address,
          typeof phone,
          typeof email
        );

        alert("Не удалось отправить заявку.");
      });
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal_content">
        <form onSubmit={handleSubmit}>
          <h2 className="h2_model">Анкета</h2>
          <div className="model_trim">
            <p className="p_modal">
              Введите ваше имя:
              <input
                type="text"
                id="user_firstname"
                value={formData.user_firstname}
                onChange={handleChange}
              />
            </p>

            <p className="p_modal">
              Введите вашу фамилию:
              <input
                type="text"
                id="user_surname"
                value={formData.user_surname}
                onChange={handleChange}
              />
            </p>

            <p className="p_modal">
              Введите адрес:
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
              />
            </p>

            <p className="p_modal">
              Введите телефон:
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </p>

            <p className="p_modal">
              Введите почту:
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </p>

            <p className="p_modal">
              Дополнительная информация (если требуется):
              <input
                type="text"
                id="additional_information"
                value={formData.additional_information}
                onChange={handleChange}
              />
            </p>
          </div>

          <div className="modal_div">
            <button type="submit" id="send_form_button">
              Отправить форму
            </button>
            <button type="button" className="close_modal" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
