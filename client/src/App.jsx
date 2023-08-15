import React, { Suspense } from "react";
import "./App.css";
import Website from "./pages/Website";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading.....</div>}>
        <Routes>
          <Route element = {<Layout />}>
            <Route path="/" element={<Website />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
