import React from "react";
import logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";
import Main from "../Main/Main";

export default function Header() {
  const navigate = useNavigate();
  const ordersClick = () => {
    navigate("/orders");
  };
  const mainClick = () => {
    navigate("/");
  };
  const scrollToSection = () => {
    const section = document.getElementById('about_company');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Прокрутка с анимацией
    }
  };
  return (
    <div className="Header">
      <header className="header">
        <div className="container_info">
          <div className="header_title">
            <div className="language">
              <h4 className="p--top-line">РУС</h4>
              <h4 className="p--top-line ENG">ENG</h4>
              <h4 className="p--top-line FR">FR</h4>
            </div>
            <div className="phone_number">
              <p className="p--top-line">8 (800) 123-45-67</p>
            </div>
            <div className="mail_info">
              <p className="mail_info p--top-line">russtroi@mail.ru</p>
            </div>
          </div>
        </div>
      </header>
      <div className="container_info">
        <div className="logo_totle_and_action_btn">
          <div className="logo_title">
            <div className="logo_and_adress">
              <img src={logo} className="logo"></img>
              <div className="adress_logo">
                <h4 className="our_office" id="our_office_map">
                  {" "}
                  Наш офис
                </h4>
              </div>
            </div>
            <div className="action_butn">
              <div className="one_of_them" onClick={mainClick}>
                <h4>О компании</h4>
              </div>
              <div className="one_of_them" id="btn_contacts" onClick={scrollToSection}>
                <h4>Услуги</h4>
              </div>
              <div className="one_of_them" onClick={ordersClick}>
                <h4>Заказать</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
