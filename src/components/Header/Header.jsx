import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Logo from "../Header/images/logo.png";
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };


  const navItems = [
    { id: "home", label: t("header.home"), path: "/" },
    { id: "about", label: t("header.services"), path: "/about" },
    { id: "products", label: t("header.products"), path: "/products" },
    { id: "watches", label: t("header.watches"), path: "/watches" },
    { id: "sale", label: t("header.sale"), path: "/sale" }
  ];


  const dropdownItems = [
    { id: "cart", label: t("header.cart"), path: "/card" },
    { id: "shops", label: t("header.shops"), path: "/shops" },
    { id: "single", label: t("header.silgle"), path: "/post/1" },
    { id: "singleProduct", label: t("header.silgleProduct"), path: "/product/1" },
    { id: "contact", label: t("header.contact"), path: "/contact" },
    { id: "check", label: t("header.check"), path: "/check" },
    { id: "account", label: t("header.accaunt"), path: "/account" },
    { id: "blog", label: t("header.blog"), path: "/blog" }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">

          <Link to="/" className="header__logo">
            <img src={Logo} alt="logo" />
          </Link>

          <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
            <ul className="header__list">
              {navItems.map((item) => (
                <li key={item.id} className="header__item">
                  <Link 
                    to={item.path} 
                    className="nav__link" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li
                className="header__item dropdown"
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className="nav__link dropdown__toggle">
                  {t("header.blog")} <FaChevronDown className="dropdown__arrow" />
                </span>
                <div className={`dropdown__menu ${dropdownOpen ? "active" : ""}`}>
                  {dropdownItems.map((item) => (
                    <div 
                      key={item.id}
                      className={`dropdown__item ${activeDropdown === item.id ? "active" : ""}`}
                      onMouseEnter={() => setActiveDropdown(item.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link 
                        to={item.path} 
                        className="dropdown__link"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </nav>

          <div className="header__icons">
            {/* Search Input */}
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder={t("header.headerSearch")}
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearch}
              />
            </div>

            {/* Account */}
            <div className="icon-wrapper">
              <Link to="/account">
                <FaUser className="icon" />
                <span className="icon-tooltip">{t("header.accaunt")}</span>
              </Link>
            </div>

            {/* Cart */}
            <div className="icon-wrapper cart-icon">
              <Link to="/card">
                <FaShoppingCart className="icon" />
                <span className="icon-tooltip">{t("header.cart")}</span>
              </Link>
            </div>

            {/* Language Selector */}
            <div className="lang-selector">
              <select className="lang-select" onChange={changeLanguage} defaultValue={i18n.language}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>

      
            <div className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>
      
      {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;