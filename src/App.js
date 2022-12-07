import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
// Pages
import { Contact, Home, Login, Register, Reset } from "./pages/index";
// Component
import { Footer, Header } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
