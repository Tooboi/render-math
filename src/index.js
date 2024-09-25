import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Remaining from "./pages/Remaining";
import Bpm from "./pages/Bpm";
import Duration from "./pages/Duration";
import NoPage from "./pages/NoPage";

import 'flowbite';

export default function App() {
  return (
    <div className='sm:ml-64 ml-0 bg-stone-900'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="remaining" element={<Remaining />} />
            <Route path="bpm" element={<Bpm />} />
            <Route path="duration" element={<Duration />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
