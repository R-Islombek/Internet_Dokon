import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './ComponentsCard.css'
import telephone1 from "../ComponentsCard/images/telephone1.png"
import telephone2 from "../ComponentsCard/images/telephone2.jpg"
import telephone3 from "../ComponentsCard/images/telephone3.webp"
import telephone4 from "../ComponentsCard/images/telephone4.jpg"
import watch1 from "../ComponentsCard/images/bir.webp"
import watch2 from "../ComponentsCard/images/ikki.jpg"
import watch3 from "../ComponentsCard/images/uch.webp"
import watch4 from "../ComponentsCard/images/tort.jpg"

const ComponentsCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);

  // Telefonlar ma'lumotlari
  const phones = [
    {
      id: 1,
      image: telephone1,
      title: t("phone.text1"),
      price: "$980",
      discount: "$1200",
      rating: 4.5
    },
    {
      id: 2,
      image: telephone2,
      title: t("phone.text2"),
      price: "$850",
      discount: "$999",
      rating: 4.3
    },
    {
      id: 3,
      image: telephone3,
      title: t("phone.text3"),
      price: "$1200",
      discount: "$1400",
      rating: 4.8
    },
    {
      id: 4,
      image: telephone4,
      title: t("phone.text4"),
      price: "$750",
      discount: "$899",
      rating: 4.2
    }
  ];

  // Soatlar ma'lumotlari
  const watches = [
    {
      id: 5,
      image: watch1,
      title: t("watch.text1"),
      price: "$299",
      discount: "$399",
      rating: 4.7,
      type: "Smart Watch"
    },
    {
      id: 6,
      image: watch2,
      title: t("watch.text2"),
      price: "$450",
      discount: "$550",
      rating: 4.9,
      type: "Luxury Watch"
    },
    {
      id: 7,
      image: watch3,
      title: t("watch.text3"),
      price: "$199",
      discount: "$249",
      rating: 4.4,
      type: "Sport Watch"
    },
    {
      id: 8,
      image: watch4,
      title: t("watch.text4"),
      price: "$350",
      discount: "$420",
      rating: 4.6,
      type: "Classic Watch"
    }
  ];

  // Yulduzchalarni chiqarish uchun funksiya
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  // Wishlist ga qo'shish
  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Savatga qo'shish
  const addToCart = (product) => {
    // Mavjud savatni o'qish
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // Mahsulot allaqachon savatda bormi?
    const existingItem = existingCart.find(item => item.id === product.id);
    
    let updatedCart;
    if (existingItem) {
      // Agar mavjud bo'lsa, miqdorni oshirish
      updatedCart = existingCart.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Yangi mahsulot qo'shish
      updatedCart = [...existingCart, {
        ...product,
        quantity: 1
      }];
    }
    
    // Yangilangan savatni saqlash
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Foydalanuvchiga xabar berish
    alert(`${product.title} savatga qo'shildi!`);
    
    // Savat sahifasiga o'tish
    navigate('/card');
  };

  // Mahsulotni ko'rish
  const viewProduct = (productId, type) => {
    navigate(`/product/${productId}`, { 
      state: { productType: type } 
    });
  };

  return (
    <div className='componentsCard'>
      <div className='container'>
        <div className='componentsCard__wrapper'>
          
          {/* Telefonlar bo'limi */}
          <h3 className='componentsCard__title'>{t("phone.title")}</h3>  
          <div className='wrapper__cards'>
            <div className='cards__grid cards__grid--four'>
              {phones.map(phone => (
                <div key={phone.id} className='product-card'>
                  <div className='card__image-container'>
                    <img src={phone.image} alt={phone.title} className='card__image' />
                    <div className='card__badge'>-20%</div>
                    <button 
                      className={`card__wishlist ${wishlist.includes(phone.id) ? 'active' : ''}`}
                      onClick={() => toggleWishlist(phone.id)}
                    >
                      {wishlist.includes(phone.id) ? '❤' : '🤍'}
                    </button>
                  </div>
                  <div className='card__content'>
                    <h3 className='card__title'>{phone.title}</h3>
                    <div className='card__rating'>
                      {renderStars(phone.rating)}
                      <span className='rating__text'>({phone.rating})</span>
                    </div>
                    <div className='card__prices'>
                      <span className='card__current-price'>{phone.price}</span>
                      <span className='card__old-price'>{phone.discount}</span>
                    </div>
                    <div className='card__actions'>
                      <button 
                        className='card__cart-btn'
                        onClick={() => addToCart(phone)}
                      >
                        <span>🛒</span>
                        {t("buttons.addToCart")}
                      </button>
                      <button 
                        className='card__view-btn'
                        onClick={() => viewProduct(phone.id, 'phone')}
                      >
                        {t("buttons.view")}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>   
          
          {/* Soatlar bo'limi */}
          <h3 className='componentsCard__title componentsCard__title--watches'>
            {t("phone.title1")}
          </h3>
          <div className='wrapper__cards'>
            <div className='cards__grid cards__grid--four'>
              {watches.map(watch => (
                <div key={watch.id} className='product-card watch-card'>
                  <div className='card__image-container'>
                    <img src={watch.image} alt={watch.title} className='card__image' />
                    <div className='card__badge watch-badge'>{watch.type}</div>
                    <button 
                      className={`card__wishlist ${wishlist.includes(watch.id) ? 'active' : ''}`}
                      onClick={() => toggleWishlist(watch.id)}
                    >
                      {wishlist.includes(watch.id) ? '❤' : '🤍'}
                    </button>
                  </div>
                  <div className='card__content'>
                    <h3 className='card__title'>{watch.title}</h3>
                    <div className='card__rating'>
                      {renderStars(watch.rating)}
                      <span className='rating__text'>({watch.rating})</span>
                    </div>
                    <div className='card__prices'>
                      <span className='card__current-price'>{watch.price}</span>
                      <span className='card__old-price'>{watch.discount}</span>
                    </div>
                    <div className='card__actions'>
                      <button 
                        className='card__cart-btn'
                        onClick={() => addToCart(watch)}
                      >
                        <span>🛒</span>
                        {t("buttons.addToCart")}
                      </button>
                      <button 
                        className='card__view-btn'
                        onClick={() => viewProduct(watch.id, 'watch')}
                      >
                        {t("buttons.view")}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default ComponentsCard