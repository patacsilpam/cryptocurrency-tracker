import { navItems } from "./data/globals";
import { Navbar } from "./components/layout/landing/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Hero } from "./components/layout/Hero";
function App() {
  return (
    <div className="relative flex flex-col justify-center  items-center overflow-hidden max-w-7xl w-full mx-auto px-10 bg-[#0F0E0E]">
      <Router>
        <Navbar navItems={navItems} />
        <Hero />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
