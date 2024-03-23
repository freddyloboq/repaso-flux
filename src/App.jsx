import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import injectContext from "./store/appContext.jsx";
import Home from "./views/home";
import List from './views/list'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
        />

      <BrowserRouter>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/list"> List </Link>
        </nav>

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/list"} element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);