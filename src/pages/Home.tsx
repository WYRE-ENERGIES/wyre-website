import { Suspense, lazy } from "react"
import Navbar from "../components/navbar/Navbar"
import Hero from "../sections/Hero"
import Feature from "../sections/Feature"
import Scale from "../sections/Scale"
// import Testimonials from "../sections/Testimonials"
// import FAQsFour from "../sections/faq"
import Footer from "../sections/Footer"
import { CTA } from "../sections/cta"
// import BlogSection from "../sections/BlogSection"
import EmsFeat from "../sections/EmsFeat"
import SolarFeat from "../sections/SolarFeat"
import About from "../sections/About"
import Statistics from "../sections/Statistics"
import ProjectsSection from "../sections/ProjectsSection"

// Lazy load Background component (contains heavy Spline library)
const Background = lazy(() => import("../components/background/Background"))


function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <Hero />
      <Statistics />
      {/* <Advance /> */}
      <About />
      <EmsFeat />
      <SolarFeat />
      <Feature />
      <ProjectsSection />
      {/* <Testimonials /> */}
      {/* <BlogSection /> */}
      <Scale />
      {/* <FAQsFour /> */}
      <CTA />
      <Footer />
    </main >
  )
}

export default App