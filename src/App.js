import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Login  from "./components/Login";
import  Register  from "./components/Register";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/messenger/Login" element={<Login />} />
          <Route path="/messenger/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
