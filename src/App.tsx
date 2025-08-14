import { Route, Routes } from "react-router-dom";

import LandingPage from "@/pages/landing";
import AboutPage from "@/pages/about";
import Home from "@/pages/home";
import Faq from "@/pages/faq";
import ContactUs from "@/pages/contact";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Faq />} path="/FAQ" />
      <Route element={<ContactUs />} path="/contact" />
      <Route element={<LandingPage />} path="/landing" />
    </Routes>
  );
}

export default App;
