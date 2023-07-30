import "./App.css";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Website />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
