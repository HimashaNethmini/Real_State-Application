import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain = "dev-lliydg58sneo1uxx.us.auth0.com"
    clientId="LrceNye8ymXKx6aDRHRQSCROs7jgB2Iw"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
    audience = "http://localhost:8000"
    scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
