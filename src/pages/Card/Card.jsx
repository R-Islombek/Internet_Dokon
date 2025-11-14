import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './Card.css';

const Card = () => {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState([]);

  // LocalStorage dan savat ma'lumotlarini o'qish
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Mahsulot miqdorini oshirish
  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Mahsulot miqdorini kamaytirish
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Mahsulotni savatdan o'chirish
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Umumiy summani hisoblash
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  // Savat bo'sh bo'lsa
  if (cartItems.length === 0) {
    return (
      <div className="card-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart__icon">🛒</div>
            <h2 className="empty-cart__title">{t("cart.empty")}</h2>
            <p className="empty-cart__text">{t("cart.emptyText")}</p>
            <Link to="/" className="empty-cart__button">
              {t("cart.continueShopping")}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-page">
      <div className="container">
        <div className="card-page__header">
          <h1 className="card-page__title">{t("cart.title")}</h1>
          <p className="card-page__subtitle">
            {t("cart.itemsCount", { count: cartItems.length })}
          </p>
        </div>
        
        <div className="card-content">
          <div className="cart-section">
            <div className="cart-items">
              <div className="cart-items__header">
                <span className="cart-header__product">{t("cart.product")}</span>
                <span className="cart-header__quantity">{t("cart.quantity")}</span>
                <span className="cart-header__total">{t("cart.total")}</span>
                <span className="cart-header__action">{t("cart.action")}</span>
              </div>
              
              <div className="cart-items__list">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item__product">
                      <div className="cart-item__image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="cart-item__info">
                        <h3 className="cart-item__title">{item.title}</h3>
                        <div className="cart-item__prices">
                          <span className="cart-item__price">{item.price}</span>
                          {item.discount && (
                            <span className="cart-item__old-price">{item.discount}</span>
                          )}
                        </div>
                        {item.type && (
                          <span className="cart-item__type">{item.type}</span>
                        )}
                      </div>
                    </div>

                    <div className="cart-item__quantity">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn"
                          onClick={() => decreaseQuantity(item.id)}
                          disabled={item.quantity <= 1}
                          title={t("cart.decrease")}
                        >
                          −
                        </button>
                        <span className="quantity-number">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => increaseQuantity(item.id)}
                          title={t("cart.increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-item__total">
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </div>

                    <div className="cart-item__actions">
                      <button 
                        className="cart-item__remove"
                        onClick={() => removeFromCart(item.id)}
                        title={t("cart.remove")}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-summary">
            <div className="cart-summary">
              <h3 className="summary-title">{t("cart.orderSummary")}</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span className="summary-label">{t("cart.subtotal")}</span>
                  <span className="summary-value">${getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span className="summary-label">{t("cart.shipping")}</span>
                  <span className="summary-value free-shipping">{t("cart.free")}</span>
                </div>
                
                <div className="summary-row">
                  <span className="summary-label">{t("cart.discount")}</span>
                  <span className="summary-value discount">-$0.00</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-row summary-total">
                  <span className="summary-label">{t("cart.grandTotal")}</span>
                  <span className="summary-value total-price">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <button className="checkout-btn">
                <span className="checkout-icon">🔒</span>
                {t("cart.proceedToCheckout")}
              </button>

              <div className="summary-features">
                <div className="feature-item">
                  <span className="feature-icon">🚚</span>
                  <span className="feature-text">{t("cart.freeShipping")}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">↩️</span>
                  <span className="feature-text">{t("cart.returnPolicy")}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <span className="feature-text">{t("cart.securePayment")}</span>
                </div>
              </div>

              <Link to="/" className="continue-shopping">
                <span className="shopping-icon">←</span>
                {t("cart.continueShopping")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;