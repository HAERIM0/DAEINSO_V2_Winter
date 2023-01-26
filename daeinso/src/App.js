import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signuppage from "./page/Signuppage/Signuppage";
import Mainpage from "./page/Mainpage/Mainpage";
import Inputpage from "./page/Inputpage/Inputpage";
import Projectlist from "./page/Projectlistpage/Projectlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/input" element={<Inputpage />} />
        <Route path="/project" element={<Projectlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
