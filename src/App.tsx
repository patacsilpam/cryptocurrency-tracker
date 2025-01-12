import { navItems } from "./data/globals";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar navItems={navItems} />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
