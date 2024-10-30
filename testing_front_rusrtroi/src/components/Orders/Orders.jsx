import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";

export default function Orders() {
  const BASE_URL = "http://localhost:7000";
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const fetchProducts = async () => {
    const response = await fetch(BASE_URL + "/get_products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOrderClick = (productId) => {
    console.log("productId in handleOrderClick:", productId, typeof productId);
    setSelectedProductId(Number(productId));
  };

  useEffect(() => {
    if (selectedProductId !== null) {
      setShowModal(true);
    }
  }, [selectedProductId]);

  // const openModal = (productId) => {
  //   setSelectedProductId(productId);
  //   setShowModal(true);
  // };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <section className="get_orders_text">
        <div className="container_info">
          <div className="horisontal_rectangle"></div>
          <div className="get_orders_words">
            <p className="get_order_word">Оформите товары на заказ</p>
          </div>
        </div>
      </section>
      <section className="order_application">
        <div className="container_info">
          <div className="order_applications_many">
            {products.map((product) => (
              <div className="order_application_content" key={product.id}>
                <div className="order_title_and_btn_left">
                  <p className="order_title">{product.product_name}</p>
                  <div
                    className="order_btn"
                    onClick={() => handleOrderClick(product.id)}
                  >
                    <p className="text_get_order">Заказать</p>
                  </div>
                </div>
                <div className="order_description">
                  <div className="order_description_text">
                    {product.description}
                  </div>
                  <div className="order_price">
                    <p className="price_word">Цена:</p>
                    <a className="price">{product.price}</a>
                    <p className="price_word">рублей</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal
        show={showModal}
        onClose={closeModal}
        productId={selectedProductId}
      />
    </div>
  );
}
