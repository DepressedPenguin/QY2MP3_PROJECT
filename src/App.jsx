import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input";
import Guide from "./Components/Guide";
import Footer from "./Components/Footer";

import Loading from "./Components/Loading";
import Faq from "./Components/FAQ";
import Contact from "./Components/Contact";
import Changelog from "./Components/Changelog";
import Donation from "./Components/Donation";
import Copyright from "./Components/CopyrightClaims";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Tou from "./Components/Tou";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Changelog"
          element={
            <>
              <Changelog />
              <Guide />
            </>
          }
        />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/Copyright" element={<Copyright />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Tou" element={<Tou />} />
        {/* <Footer /> */}

        {/* MIX FOOTER ROUES */}
        {/* <Route path="/Tou/PrivacyPolicy" element={<PrivacyPolicy />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
