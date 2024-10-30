import React from "react";
import car from "../../img/roller_car.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import navigate from "navigate";


export default function Main() {
  const navigate = useNavigate();
  const services = [
    { id: 1, imgSrc: require("../../img/1.png"), title: "Покладка асфальта" },
    {
      id: 2,
      imgSrc: require("../../img/2.png"),
      title: "Продажа асфальтной крошки",
    },
    {
      id: 3,
      imgSrc: require("../../img/3.png"),
      title: "Вызов бригады работников",
    },
    {
      id: 4,
      imgSrc: require("../../img/4.png"),
      title: "Продажа холодного асфальта",
    },
    {
      id: 5,
      imgSrc: require("../../img/5.png"),
      title: "Продажа асфальта-цемента",
    },
    { id: 6, imgSrc: require("../../img/6.png"), title: "Починка асфальта" },
    {
      id: 7,
      imgSrc: require("../../img/7.png"),
      title: "Продажа асфальтных рулонов",
    },
    {
      id: 8,
      imgSrc: require("../../img/8.png"),
      title: "Доставка всех видов товаров",
    },
  ];

  const ordersClick = () => {
    navigate = ("/orders");
  };



  return (
    <div>
      <Header />
      <section>
        <div className="picture_header">
          <div className="container_info">
            <div className="border_main_words">
              <div className="main_words">
                <h1 className="title_main_words">Асфальтные работы</h1>
                <h4 className="description_main_words">
                  Мы предлагаем высококачественные услуги по укладке асфальта в
                  Москве и Московской области. Наша команда профессионалов
                  гарантирует долговечность и прочность дорожного покрытия.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_us">
        <div className="about_information">
          <div className="worksInMoskow_and_btn">
            <div className="horisontal_rectangle"></div>
            <div className="works_in_moskow">
              <h2>Сделайте заказ</h2>
            </div>
            <div className="works_in_moskow_else">
              <h4>
                Вы можете приобрести у нас как отдельный вид асфальта, так и
                заказать "Асфальт под ключ".
              </h4>
            </div>
            <div className="about_btn">
              <div className="go">
                <a onClick={ordersClick}>
                  <h4>Перейти</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="picture_roller_car">
            <img src={car} alt="" className="roller_car"></img>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="container_info">
          <div className="services-item">
            <div className="horisontal_rectangle"></div>
            <div className="word_services">
              <h2>Услуги</h2>
            </div>
            <div className="all_services_item">
              {services.map((service) => (
                <div key={service.id} className="one_service_item">
                  <img
                    className="img_service"
                    src={service.imgSrc}
                    alt={service.title}
                  />
                  <h4 className="text_one_service">{service.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="about_company" id="about_company_id" >
        <div className="container_info">
          <div className="about">
            <div className="about_words">
              <div className="horisontal_rectangle"></div>
              <h2 className="big_about_words">О компании</h2>
              <p className="little_about_words">
                Укладка асфальта — сложный и ответственный процесс, который
                требует наличия специализированного оборудования и досконального
                знания технологий проведения работ. Мы работаем в этой сфере,
                начиная с 2003 года. За эти годы накоплен колоссальный опыт
                асфальтирования автомагистралей разной сложности и
                протяженности. Сегодня оказывается полный комплекс услуг по
                благоустройству не только дорог, но и дворов, городских улиц,
                поселков, районов с новой и старой застройкой.
              </p>
            </div>

            <div className="about_pictures_item">
              <div className="one_about_item">
                <h1 className="about_number">22</h1>
                <h3 className="about_text">высококлассных</h3>
                <h4 className="about_clarification">работника</h4>
              </div>
              <div className="one_about_item">
                <h1 className="about_number">1</h1>
                <h3 className="about_text">главный</h3>
                <h4 className="about_clarification">офис</h4>
              </div>
              <div className="one_about_item_img"></div>
              <div className="one_about_item">
                <h1 className="about_number">8</h1>
                <h3 className="about_text">видов асфальта</h3>
                <h4 className="about_clarification">на продажу</h4>
              </div>
              <div className="one_about_item_img"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="maps">
        <div className="maps"></div>
      </section>
      <Footer />
    </div>
  );
}
