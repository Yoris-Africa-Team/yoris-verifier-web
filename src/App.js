import "./App.css";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./screens/header/Header";
import Footer from "./screens/footer/Footer";
import Home from "./screens/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./screens/dashboard/Dashboard";
import { useContext, useEffect, useState } from "react";
import "./darkMode.css";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "./context/darkmode/DarkModeContext";
import AcceptedVerifier from "./screens/AcceptedVerifier/AcceptedVerifier";
import PendingVerifier from "./screens/PendingVerifier/PendingVerifier";
import VerifiedBusiness from "./screens/VerifiedBusiness/VerifiedBusiness";
import VerifierLocation from "./screens/VerifierLocation/VerifierLocation";
import AcceptOrRejectVerifier from "./screens/AcceptOrRejectVerifier/AcceptOrRejectVerifier";

function App() {
  //using darkmode context
  const { theme } = useContext(DarkModeContext);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} exact />
          <Route path="/Dashboard" element={<Dashboard />} exact />
          <Route
            path="/AcceptedVerifier"
            element={<AcceptedVerifier />}
            exact
          />
          <Route path="/PendingVerifier" element={<PendingVerifier />} exact />
          <Route
            path="/VerifiedBusiness"
            element={<VerifiedBusiness />}
            exact
          />
          <Route
            path="/VerifierLocation"
            element={<VerifierLocation />}
            exact
          />
          <Route
            path="/AcceptOrRejectVerifier"
            element={<AcceptOrRejectVerifier />}
            exact
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
