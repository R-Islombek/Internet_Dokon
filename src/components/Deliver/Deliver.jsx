import React from 'react';
import { useTranslation } from "react-i18next";
import { FaTruck, FaCheckCircle, FaGift, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Deliver.css";

const Deliver = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: <FaTruck className="deliver__icon" />,
      title: t("deliver.title"),
      text: t("deliver.text")
    },
    {
      icon: <FaCheckCircle className="deliver__icon" />,
      title: t("deliver.title1"),
      text: t("deliver.text1")
    },
    {
      icon: <FaGift className="deliver__icon" />,
      title: t("deliver.title2"),
      text: t("deliver.text2")
    },
    {
      icon: <FaLock className="deliver__icon" />,
      title: t("deliver.title3"),
      text: t("deliver.text3")
    }
  ];

  return (
    <div className="deliver">
      <div className="container">
        <motion.ul
          className="deliver__list"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.li
              className="deliver__item"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="deliver__icon-box">{item.icon}</div>
              <div className="deliver__content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Deliver;
