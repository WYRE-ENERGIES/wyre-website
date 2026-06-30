import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

// Lazy load all routes for code splitting
const Home = lazy(() => import("./pages/Home"))
const Blog = lazy(() => import("./pages/Blog"))
const SingleBlogPost = lazy(() => import("./pages/SingleBlogPost"))
const Projects = lazy(() => import("./pages/Projects"))
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"))
const Pricing = lazy(() => import("./pages/Pricing"))
const Solutions = lazy(() => import("./pages/Solutions"))
const Segments = lazy(() => import("./pages/Segments"))
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"))
const Contact = lazy(() => import("./pages/Contact"))
const SignIn = lazy(() => import("./pages/SignIn"))
const GetStarted = lazy(() => import("./pages/GetStarted"))
const SolarPricing = lazy(() => import("./pages/SolarPricing"))
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"))
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brandColor"></div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App