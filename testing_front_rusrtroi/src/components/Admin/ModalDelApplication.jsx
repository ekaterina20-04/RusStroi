import React, { useState, useEffect } from "react";

export default function ModalDelApplication({ show, onClose, applicationId }) {
  const [formData, setFormData] = useState({
    id: applicationId,
  });
  useEffect(() => {
    setFormData({ id: applicationId });
  }, [applicationId]);

  const DeleteAppplication = (e) => {
    e.preventDefault();
    console.log("ID заявки для удаления:", formData.id);

    fetch("http://127.0.0.1:7000/delete_applications", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw new Error("ошипк");
      })
      .then((data) => {
        alert("удаление прошло");
        onClose();
      })
      .catch((error) => {
        console.log(applicationId, formData);
        console.error("error", error);
        alert("не удалось");
      });
  };
  if (!show) return null;
  return (
    <div>
      <div id="modal_del" class="modal_del">
        <div class="modal_content">
          <form id="delete_modal" onSubmit={DeleteAppplication}>
            <h2 class="h2_model1">Вы хотите удалить заявку?</h2>
            <div class="model_trim"></div>
            <div class="modal_div1">
              <div class="close_modal_div">
                <a class="close_modal" id="close_modal" onClick={onClose}>
                  Закрыть
                </a>
              </div>
              <div class="del_modal_div">
                <button type="submit" id="del_form_button">
                  Удалить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
