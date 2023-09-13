import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Auth0Provider
    domain="dev-fuvscyrwxskoj70z.us.auth0.com"
    clientId="Pcy9SRWn6T7lKeyJ2PS4NS5MSyYybCox"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);
