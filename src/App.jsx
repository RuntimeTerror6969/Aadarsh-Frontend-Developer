import NavBar from "./Components/Header/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/Footer/Footer"
import { SkeletonTheme } from "react-loading-skeleton"
// import FoodGridModel from "./Components/FoodItems/FoodGridModel"

function App() {


  return (
    <div className="font-job">

      <SkeletonTheme baseColor= '#c9c9c9' highlightColor="#a3a3a3">
        <BrowserRouter>
          <NavBar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/FoodGridModel/:id" element={<Home />} />

          </Routes>

          <Footer />

        </BrowserRouter>
      </SkeletonTheme>

    </div>
  )
}

export default App
