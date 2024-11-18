import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import VanDetails from "./pages/VanDetails.jsx"

export default function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/home">#VANLIFE</Link>
        <nav>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : null}> About </NavLink>
          <NavLink to="/vans" className={({ isActive }) => isActive ? "active-link" : null}> Vans For Hire </NavLink>
        </nav>
      </header>
      <Routes> //container for a nested tree of route elements that renders the branch that best matshes the current location
        <Route path="/home" element={<Home />} /> //declares an element that should be rendered at a certain RL path
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
//BrowserRouter provides us with clean URLS, for use in search browsers