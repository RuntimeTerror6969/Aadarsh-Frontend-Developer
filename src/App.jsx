import NavBar from "./Components/Header/NavBar/NavBar"; // Importing NavBar component
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing routing components
import Home from "./Pages/Home"; // Importing Home component
import Footer from "./Components/Footer/Footer"; // Importing Footer component
import { SkeletonTheme } from "react-loading-skeleton"; // Importing skeleton theme for loading animation

function App() {
  return (
    <div className="font-job">
      {" "}
      {/* Main container with custom font */}
      <SkeletonTheme baseColor="#c9c9c9" highlightColor="#a3a3a3">
        {" "}
        {/* Theme for skeleton loading animation */}
        <BrowserRouter>
          {" "}
          {/* BrowserRouter for handling routing */}
          <NavBar /> {/* Navigation bar component */}
          <Routes>
            {" "}
            {/* Routes for different pages */}
            <Route path="/" element={<Home />} /> {/* Route for Home page */}
            <Route path="/FoodGridModel/:id" element={<Home />} />{" "}
            {/* Route for FoodGridModel page */}
          </Routes>
          <Footer /> {/* Footer component */}
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
