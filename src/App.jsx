import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Header from "./components/Header.jsx";

function App() {

  return (
    <BrowserRouter>
        <Header />
        <h1 className="text-3xl text-black font-bold underline">
          Hello world!
        </h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
