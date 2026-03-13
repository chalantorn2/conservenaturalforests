import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import NetworkSection from "./components/home/NetworkSection";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Internship from "./pages/Internship";
import VisitUs from "./pages/VisitUs";
import Donate from "./pages/Donate";
import OurTeam from "./pages/OurTeam";
import ForestRestoration from "./pages/ForestRestoration";
import LocalLivelihoods from "./pages/LocalLivelihoods";
import WildlifeConservation from "./pages/WildlifeConservation";
import EcosystemServices from "./pages/EcosystemServices";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forest-restoration" element={<ForestRestoration />} />
          <Route path="/local-livelihoods" element={<LocalLivelihoods />} />
          <Route
            path="/wildlife-conservation"
            element={<WildlifeConservation />}
          />
          <Route path="/ecosystem-services" element={<EcosystemServices />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/visit-us" element={<VisitUs />} />
          <Route path="/apply-for-an-internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      {/* <NetworkSection /> */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
