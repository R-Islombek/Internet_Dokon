import React from 'react';
import blooth from "../Latests/images/blooth.jpg";
import dend from "../Latests/images/dend.jpg";
import sambufer from "../Latests/images/sambufer.jpg";
import "./LatestStyle.css";
import { useTranslation } from "react-i18next";

const Latests = () => {
    const { t } = useTranslation();
    return (
        <div className='Latest'>
            <div className='container'>
                <div className='latest__content'>
                    <h4 className='latest__heading'>{t("latest.heading")}</h4>
                    <ul className='latest__list'>
                        <li className='latest__item'>
                            <img src={blooth} alt="Blooth" />
                            <h4 className='latest__title'>{t("latest.title")}</h4>
                            <p className='latest__text'>{t("latest.text")}</p>
                        </li>
                        <li>
                            <img src={dend} alt="Dend" />
                            <h4 className='latest__title'>{t("latest.title1")}</h4>
                            <p className='latest__text'>{t("latest.text1")}</p>
                        </li>
                        <li>
                            <img src={sambufer} alt="Sambufer" />
                            <h4 className='latest__title'>{t("latest.title2")}</h4>
                            <p className='latest__text'>{t("latest.text2")}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Latests