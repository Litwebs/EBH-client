import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Bouquets from "./Components/Pages/Bouquets/Bouquets";
import Configurator from "./Components/Pages/Config/Config";
import Balloons from "./Components/Pages/Balloons/Balloons";
import About from "./Components/Pages/About/About";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Cart from "./Components/Cart";
import BloomAndBubbles from "./Components/Pages/BloomAndBubbles/BloomAndBubbles";
import HB from "./Components/Pages/HB/HB";
import ScrollTop from "./ScrollTop";
import Alert from "./Components/Alert/Alert";
import Funeral from "./Components/Pages/Funeral/Funral";
import CookieConsent from "./Components/CookieConsent/CookieConsent";
import Success from "./Components/Pages/Success/Success";
import Cancelled from "./Components/Pages/Cancelled/Cancelled";
import Error from "./Components/Pages/Error"; // <- adjust path
import FleureExperience from "./Components/Pages/FleureExperience/FleureExperience";
import Menu from "./Components/Pages/Menu/Menu";
import { useEffect, useState } from "react";
import axios from "axios";

async function checkStatus() {
  try {
    const res = await axios.post(
      "https://admin.litwebs.co.uk/api/websites/status",
      { url: "https://fleure.co.uk" }, // <- change this
    );
    return res.data?.data?.status === "live";
  } catch (e) {
    return false; // or true if you want fail-open
  }
}

const App = () => {
  const [isLive, setIsLive] = useState(true);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const live = await checkStatus();
      if (mounted) {
        setIsLive(live);
        setChecking(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Router>
      <ScrollTop />

      {/* while checking, render nothing or a loader */}
      {checking ? null : !isLive ? (
        <Error />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bouquets" element={<Bouquets />} />
            <Route path="/config" element={<Configurator />} />
            <Route path="/balloons" element={<Balloons />} />
            <Route path="/bloomandboxes" element={<BloomAndBubbles />} />
            <Route path="/funeral" element={<Funeral />} />
            <Route path="/hatboxes" element={<HB />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<FleureExperience />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancelled />} />
          </Routes>

          <CookieConsent />
          <Cart />
          <Alert />
        </>
      )}
    </Router>
  );
};

export default App;
