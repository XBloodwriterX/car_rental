import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import './styles/index.sass';
import ClientsPage from "./pages/ClientsPage";
// import './styles/LoginPage.scss';


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
            </Route>
        </Routes>
    </BrowserRouter>
);