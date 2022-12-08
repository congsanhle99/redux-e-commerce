import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
//
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Pages
import { Contact, Home, Login, Register, Reset, Admin } from "./pages/index";
// Component
import { Footer, Header } from "./components/index";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
