import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClientFormPage from "./pages/ClientFormPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.sass'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<HomePage />}></Route>
                <Route path="login" element={<ClientFormPage />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);