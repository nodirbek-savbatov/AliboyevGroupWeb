import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import Profile from "./pages/Profile";
import Main from "./pages/main";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/SignUp";
import { Flip, ToastContainer } from "react-toastify";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFoundPage";
import Stepper from "./pages/about";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginForm />} path="/login" />
        <Route element={<SignupForm />} path="/register" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Stepper />} path="/about" />
        <Route element={<Main />} path="/" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Profile />} path="/profile" />
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </BrowserRouter>
  );
}

export default App;
