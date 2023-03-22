import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Packages from "./components/Packages";
import Amenities from "./components/Amenities";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
// import TestContact from "./components/TestContact";
// import SampleContact from "./components/SampleContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Packages />
      <Amenities />
      <Gallery />
      <FAQ />
      <Contact />
      <Map />

      <Footer />

      <a
        href="https://wa.me/7678055899"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
