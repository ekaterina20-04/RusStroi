import React from "react";
import AdminHeeader from "../Admin_header/AdminHeeader";
import { useState, useEffect } from "react";
import ModalDelApplication from "./ModalDelApplication";

export default function AdminApplications() {
  const BASE_URL = "http://localhost:7000";
  const [applications, setApplications] = useState([]);
  const fetchApplications = async () => {
    const response = await fetch(BASE_URL + "/admin_applications");
    const data = await response.json();
    setApplications(data);
    console.log(data);
  };
  useEffect(() => {
    fetchApplications();
  }, []);
  const [showDelModal, setshowDelModal] = useState(false);
  const [selectedApplicationId, setselectedApplicationId] = useState(null);

  const handleApplicationId = (applicationId) => {
    console.log("айди заявки ", applicationId);
    setselectedApplicationId(Number(applicationId));
  };

  useEffect(() => {
    if (selectedApplicationId !== null) {
      setshowDelModal(true);
    }
  }, [selectedApplicationId]);

  // const opendelModal = () => {
  //   setshowDelModal(true);
  // };
  const closeDelModal = () => {
    setshowDelModal(false);
  };
  return (
    <div>
      <AdminHeeader />
      <section className="get_orders_text_add">
        <div className="container_info_add">
          <div className="no_add_btn">
            <div className="horisontal_rectangle"></div>
            <div className="get_orders_words_add">
              <p className="get_order_word">Заявки</p>
            </div>
          </div>
        </div>
      </section>
      <section className="looking_applocations">
        <div className="container_info">
          <div className="rectangle_application">
            {applications.map((application) => (
              <div className="rectangle_in_applications">
                <div className="objects_in_applications">
                  <div className="naming_applications">
                    <p className="words_in_naming_applications">ID заявки</p>
                    <p className="words_in_naming_applications">ID товара</p>
                    <p className="words_in_naming_applications">
                      Имя заказчика
                    </p>
                    <p className="words_in_naming_applications">
                      Фамилия заказчика
                    </p>
                    <p className="words_in_naming_applications">Адресс</p>
                    <p className="words_in_naming_applications">Телефон</p>
                    <p className="words_in_naming_applications">Почта</p>
                    <p className="words_in_naming_applications">Дата</p>
                    <p className="words_in_naming_applications">
                      Дополнительная информация
                    </p>
                  </div>
                  <div className="objects_of_applications">
                    {/* <p className="words_in_ibjects" id="id">{application.id}</p> */}
                    <p className="words_in_ibjects">{application.product_id}</p>
                    <p className="words_in_ibjects">
                      {application.user_firstname}
                    </p>
                    <p className="words_in_ibjects">
                      {application.user_surname}
                    </p>
                    <p className="words_in_ibjects">{application.address}</p>
                    <p className="words_in_ibjects">{application.phone}</p>
                    <p className="words_in_ibjects">{application.email}</p>
                    <p className="words_in_ibjects">{application.datatime}</p>
                    <p className="words_in_ibjects">
                      {application.additional_information}
                    </p>
                  </div>
                </div>
                <div
                  id="close_btn"
                  className="close_btn"
                  onClick={() => handleApplicationId(application.id)}
                >
                  <img src="img/close.png" />
                </div>
                <ModalDelApplication
                  show={showDelModal}
                  onClose={closeDelModal}
                  applicationId={selectedApplicationId}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
