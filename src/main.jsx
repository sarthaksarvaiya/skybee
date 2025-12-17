import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Layout from "./Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 🔔 Toast Container (GLOBAL) */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "13px",
          },
        }}
      />

      <Routes>
        {/* All routes inside Layout (Navbar + Footer apply automatically) */}
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />

        <Route
          path="/privacy"
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />

        <Route
          path="/terms"
          element={
            <Layout>
              <Terms />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
