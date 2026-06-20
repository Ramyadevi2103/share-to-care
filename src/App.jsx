import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Donate from "./Pages/Donate";
import AvailableFood from "./Pages/AvailableFood";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MyDonations from "./Pages/MyDonations";
import NotFound from "./Pages/NotFound";

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