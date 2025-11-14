import React from 'react';
import "./Shops.css";
import { useTranslation } from "react-i18next";
import iphone from "../Shops/images/iphone.jpg";
import iphone1 from "../Shops/images/iphone1.webp";
import watch from "../Shops/images/watch.webp";
import watch1 from "../Shops/images/watch1.jpg";

const Shops = () => {
    const { t } = useTranslation();

    const data = [iphone, iphone1, watch, watch1];

    return (
        <div className="shops-container">
            {data.map((img, i) => (
                <div className="shop-card" key={i}>
                    <img src={img} alt="product" className="shop-img" />

                    <div className="overlay"></div>

                    <div className="hover-icon">
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Shops;
