import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { Home, Contact } from "./pages/index";
// Component
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
