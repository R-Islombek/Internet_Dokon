import React from 'react'
import { useTranslation } from "react-i18next";
import "./Footer.css"
import Logos from "../Footer/images/logos.png";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='footer'>
             <div className='container'>
                  <div className="footer__container">
                         <ul className='footer__list'>
                             <li className='footer__item'>
                                  <img src={Logos} alt="" />
                                  <p className='footer__text'>{t("footer.text")}</p>
                             </li>
                             <li className='footer__item'>
                                  <h4 className='footer__title'>{t("footer.title")}</h4>
                                  <a className='footer__link' href="#">{t("footer.link")}</a>
                                  <a className='footer__link' href="#">{t("footer.link1")}</a>
                                  <a className='footer__link' href="#">{t("footer.link2")}</a>
                                  <a className='footer__link' href="#">{t("footer.link3")}</a>
                                  <a className='footer__link' href="#">{t("footer.link4")}</a>
                             </li>
                              <li className='footer__item'>
                                  <h4 className='footer__title'>{t("footer.title1")}</h4>
                                  <a className='footer__link' href="#">{t("footer.link5")}</a>
                                  <a className='footer__link' href="#">{t("footer.link6")}</a>
                                  <a className='footer__link' href="#">{t("footer.link7")}</a>
                                  <a className='footer__link' href="#">{t("footer.link8")}</a>
                                  <a className='footer__link' href="#">{t("footer.link9")}</a>
                             </li>
                             <li>
                                  <h4 className='footer__title'>{t("footer.title2")}</h4>
                                  <p className='footer__text'>{t("footer.text1")}</p>
                                  <a className='footer__link' href="#">{t("footer.link10")}</a>
                                  <p className='footer__text'>{t("footer.text2")}</p>
                                  <a className='footer__link' href="#">{t("footer.link11")}</a>
                             </li>
                         </ul>
                  </div>
             </div>
    </footer>
  )
}

export default Footer
