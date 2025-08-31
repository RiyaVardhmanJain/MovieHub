import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Favourites from "./Pages/Favourites.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";
import LandingPage from "./Pages/LandingPage.jsx";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/favourites"
            element={
              <>
                <Navbar />
                <Favourites />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
