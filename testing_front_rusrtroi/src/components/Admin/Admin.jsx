import AdminHeeader from "../Admin_header/AdminHeeader";
import React, { useState, useEffect}  from "react";
import AdminModal from "./AdminModal";
import AdminDelProduct from "./AdminDelProduct";

export default function Admin() {
  const [showModal, setShowModal] = useState(false);
  const BASE_URL = "http://localhost:7000";
  const [products, setProducts] = useState([]);
  const [showDelModal, setshowDelModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const fetchProducts = async () => {
    const response = await fetch(BASE_URL + "/get_products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = () => {
    console.log("tap");
    setShowModal(true);
    console.log(showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const handleProductId = (productId) => {
    console.log("айди товара ", productId);
    setSelectedProductId(Number(productId));
  };
  useEffect(() => {
    if (selectedProductId != null) {
      setshowDelModal(true);
    }
  }, [selectedProductId]);
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
              <p className="get_order_word">Оформите товары на заказ</p>
            </div>
          </div>

          <div id="open_modal" className="add_btn" onClick={addProduct}>
            <p className="text_add_btn">Добавить товар</p>
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
                  <div id="open_modal" className="order_btn">
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
                <div
                  id="close_btn"
                  className="close_btn"
                  onClick={() => handleProductId(product.id)}
                >
                  <img src="img/close.png" />
                </div>
                <AdminDelProduct
                  show={showDelModal}
                  onClose={closeDelModal}
                  productId={selectedProductId}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <AdminModal show={showModal} onClose={closeModal} />
    </div>
  );
}
