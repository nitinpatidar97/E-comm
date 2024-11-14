import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { AppProvider } from './app/Contaxt/ProductContext'
import { FilterContaxtProvider } from './app/Contaxt/FilterContaxt'
import { CartContextProvider } from './app/Contaxt/CartContext'
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Auth0Provider
            domain="dev-dhuec1rk.us.auth0.com"
            clientId="dlZ5KEj4Jpd5IJaFiqB3c74fGgiMv1PW"
            redirectUri={window.location.origin}>
            <AppProvider>
                <FilterContaxtProvider>
                    <CartContextProvider>
                        <App />
                    </CartContextProvider>
                </FilterContaxtProvider>
            </AppProvider>
        </Auth0Provider>
    </BrowserRouter>
);
