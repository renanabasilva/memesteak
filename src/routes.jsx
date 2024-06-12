import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Vaults from "./pages/Vaults";
import Steakpad from "./pages/Steakpad";
import Cookbook from "./pages/Cookbook";
import Community from "./pages/Community";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="vaults" element={<Vaults />} />
        <Route path="steakpad" element={<Steakpad />} />
        <Route path="cookbook" element={<Cookbook />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={404} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
