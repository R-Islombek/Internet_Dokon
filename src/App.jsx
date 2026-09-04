import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Card from "./pages/Card/Card";
import Check from "./pages/Check/Check";
import Shops from "./pages/Shops/Shops";
import SinglePost from "./pages/SinglePost/SinglePost";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Account from "./pages/Account/Account";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/card" element={<Card />} />
          <Route path="/check" element={<Check />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
