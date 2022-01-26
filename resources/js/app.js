import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/my/styles/all.min.css';
import './assets/my/scripts/all.min.js';

import Layout from "./main";
import Home from  './components/vn/home/View';
import About from  './components/vn/about/View';
import Document from  './components/vn/document/View';
import Tracking from  './components/vn/document/Tracking';
import CreateOrder from  './components/vn/document/Create';
import DeleteOrder from  './components/vn/document/Delete';
import EditOrder from  './components/vn/document/Edit';
import Support from  './components/vn/support/View';
import NotFound from  './components/vn/404/View';
import City from  './components/vn/address/city';
import District from  './components/vn/address/district';
import Ward from  './components/vn/address/ward';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/thong-tin-co-ban" element={<Document />} />
          <Route path="/tracking-don-van" element={<Tracking />} />
          <Route path="/tao-don-hang" element={<CreateOrder />} />
          <Route path="/chinh-don-van" element={<EditOrder />} />
          <Route path="/xoa-don-van" element={<DeleteOrder />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tinh-thanh-pho" element={<City />} />
          <Route path="/quan-huyen" element={<District />} />
          <Route path="/xa-phuong" element={<Ward />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();