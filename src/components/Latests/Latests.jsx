import React from 'react';
import blooth from "../Latests/images/blooth.jpg";
import dend from "../Latests/images/dend.jpg";
import sambufer from "../Latests/images/sambufer.jpg";
import "./LatestStyle.css";
import { useTranslation } from "react-i18next";

const Latests = () => {
    const { t } = useTranslation();
    const data = [
        { img: blooth, title: t("latest.title"), text: t("latest.text") },
        { img: dend, title: t("latest.title1"), text: t("latest.text1") },
        { img: sambufer, title: t("latest.title2"), text: t("latest.text2") },
    ];

    return (
        <div className='Latest'>
            <div className='container'>
                <div className='latest__content'>
                    <h4 className='latest__heading'>{t("latest.heading")}</h4>
                    <ul className='latest__list'>
                        {data.map((item, index) => (
                            <li key={index} className='latest__item'>
                                <img src={item.img} alt={item.title} />
                                <h4 className='latest__title'>{item.title}</h4>
                                <p className='latest__text'>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Latests;
