import React from 'react';
import "./Form.css"
import { useTranslation } from "react-i18next";
const Form = () => {
   const { t } = useTranslation();
  return (
    <div className='form'>
            <div className='container'>
                  <div className="form__container">
                      <div className='left__box'>
                           <h4 className='form__title'>{t("form.title1")}</h4>
                           <p className='form__text'>{t("form.text1")}</p>
                      </div>
                      <span className='form__socials'>
                             <input className='form__input' type="text" placeholder='Inter your Email' />
                             <button className='form__btn'>{t("form.button")}</button>
                      </span>
                  </div>
            </div>
    </div>
  )
}

export default Form ;
