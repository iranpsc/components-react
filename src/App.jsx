import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import AccountSecurityModal from "./pages/AccountSecurityModal";
import AuthenticationModal from "./pages/AuthenticationModal";
import ShopModal from "./pages/ShopModal";
import { ToastContainer } from "react-toastify";
import VodModal from "./pages/VodModal";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 95.9vh !important;
  align-items: center;
  justify-content: start;
  @media (min-width: 998px) {
    height: 97vh;
    justify-content: center;
  }
`;
export const AlertContext = createContext();
function App() {
  const [alert, setAlert] = useState(false);
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      <Wrapper>
        <Routes>
          <Route path="/features" element={<VodModal />} />
          <Route path="/shop" element={<ShopModal />} />
          <Route path="/authentication" element={<AuthenticationModal />} />
          <Route path="/accountsecurity" element={<AccountSecurityModal />} />
        </Routes>
      </Wrapper>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </AlertContext.Provider>
  );
}

export default App;
