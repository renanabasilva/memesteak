import ArrowNavigation from "./components/ArrowNavigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageLayout from "./components/PageLayout";
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
      <Header />
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route path="/" element={<ArrowNavigation />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<PageLayout />}>
            <Route path="vaults" element={<Vaults />} />
            <Route path="steakpad" element={<Steakpad />} />
            <Route path="cookbook" element={<Cookbook />} />
            <Route path="community" element={<Community />} />
          </Route>
        </Route>
        <Route path="*" element={"404 - Page not found"} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
