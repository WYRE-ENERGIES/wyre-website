
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from "./pages/Blog"
import SingleBlogPost from "./pages/SingleBlogPost"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import Pricing from "./pages/Pricing"
// import Team from "./pages/Team"
import Solutions from "./pages/Solutions"
import Segments from "./pages/Segments"
import WhatWeDo from "./pages/WhatWeDo"
import Contact from "./pages/Contact"
import SingleProduct from "./pages/SingleProduct"
import SignIn from "./pages/SignIn"
import GetStarted from "./pages/GetStarted"
import SolarPricing from "./pages/SolarPricing"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<SingleBlogPost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/solar-pricing" element={<SolarPricing />} />
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/segments" element={<Segments />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App