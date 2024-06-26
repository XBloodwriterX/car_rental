import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClientsPage from "./pages/ClientsPage";
import LoginPage from "./pages/LoginPage";
import CarFormPage from "./pages/CarFormPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<HomePage />}></Route>
                <Route path="login" element={<LoginPage />}></Route>
                <Route path="clients" element={<ClientsPage />}></Route>
                <Route path="cars" element={<CarFormPage />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);