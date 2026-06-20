import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import AvailableFood from "./pages/AvailableFood";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyDonations from "./pages/MyDonations";
import NotFound from "./pages/NotFound";

// function App 
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/donate" element={<Donate />} />

          <Route
            path="/available-food"
            element={<AvailableFood />}
          />

          <Route
            path="/my-donations"
            element={<MyDonations />}
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;