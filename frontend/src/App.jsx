import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Robot from "./pages/Robot";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Projects />
              <Skills />
              <AboutMe />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/robot" element={<Robot />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
