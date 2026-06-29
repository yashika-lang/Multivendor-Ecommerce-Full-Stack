import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import FreelancerProfile from "./pages/FreelancerProfile";
import GigDetail from "./pages/GigDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route
          path="/service/:serviceId/gig/:gigId"
          element={<GigDetail />}
        />

        <Route path="/freelancer/:id" element={<FreelancerProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;