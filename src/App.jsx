import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import Home from "./pages/Home";
import  {About} from "./pages/About";
import  Volunteer from "./pages/Volunteer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;