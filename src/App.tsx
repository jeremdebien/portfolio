import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<Home />} />
                <Route path="/portfolio/projects" element={<Projects />} />
                <Route path="/portfolio/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
