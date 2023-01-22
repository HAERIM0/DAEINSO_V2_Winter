import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signuppage from "./page/Signuppage/Signuppage";
import Mainpage from "./page/Mainpage/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="main" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
