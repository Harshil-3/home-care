import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./layout/Header";
import Find_care from "./Components/Find_care";
import Services from "./Components/Services";
import Footer from "./layout/Footer";
import { Layout } from "./layout/Layout";
import CaregiverDetailPage from "./page/CaregiverDetailPage";
import Bookingpage from "./page/user/Bookingpage";
import Loginpage from "./page/Loginpage";
import Register from "./page/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Find_care" element={<Find_care />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/caregiver/:id" element={<CaregiverDetailPage/>}></Route>
            <Route path="/Loginpage" element={<Loginpage />}></Route>
            <Route path="/Register" element={<Register/>}></Route>
          </Route>
          {/* Without Navbar and Footer Bellow */}
          <Route path="/Bookingpage" element={<Bookingpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
