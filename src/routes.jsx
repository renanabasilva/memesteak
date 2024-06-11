import LandingPage from "./pages/LandingPage";
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;