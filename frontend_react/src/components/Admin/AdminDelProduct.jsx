import React, { useState, useEffect } from "react";

export default function AdminDelProduct({ show, onClose, productId }) {
  const [formData, setFormData] = useState({ id: productId });

  useEffect(() => {
    setFormData({ id: productId });
  }, [productId]);

const deleteProduct = (e) =>{
    e.preventDefault();
    console.log('фйди товара на удаление', formData.id);

    fetch("http://127.0.0.1:7000/delete_product",
        {
            method:"DELETE",
            headers:{"Contenr-Type": "application/json"},
            body:JSON.stringify(formData),
        }
    )
    .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw new Error("Ошибка");
      })
      .then((data)=>{
        alert('удаление прошло успешно');
        onClose();
      })
      .catch((error)=>{
        console.log(productId,formData);
        console.log('error',error);
        alert('Ошибка');
      });
};
  if (!show) return null;
  return (
    <div>
      <div id="modal_del" class="modal_del">
        <div class="modal_content">
          <form id="delete_modal" onSubmit={deleteProduct}>
            <h2 class="h2_model1">Вы хотите удалить товар?</h2>
            <div class="model_trim"></div>
            <div class="modal_div1">
              <div class="close_modal_div">
                <a class="close_modal" id="close_modal_del">
                  Закрыть
                </a>
              </div>
              <div class="del_modal_div">
                <button id="del_form_button">Удалить</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
