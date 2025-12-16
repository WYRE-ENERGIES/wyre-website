
import Navbar from "../components/navbar/Navbar"
import Hero from "../sections/Hero"
import Background from "../components/background/Background"
import Feature from "../sections/Feature"
import Scale from "../sections/Scale"
// import Testimonials from "../sections/Testimonials"
// import FAQsFour from "../sections/faq"
import Footer from "../sections/Footer"
import { CTA } from "../sections/cta"
import BlogSection from "../sections/BlogSection"
import EmsFeat from "../sections/EmsFeat"
import SolarFeat from "../sections/SolarFeat"
import About from "../sections/About"
import Statistics from "../sections/Statistics"
import ProjectsSection from "../sections/ProjectsSection"


function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Background />
      <Hero />
      <Statistics />
      {/* <Advance /> */}
      <About />
      <EmsFeat />
      <SolarFeat />
      <Feature />
      <ProjectsSection />
      {/* <Testimonials /> */}
      <BlogSection />
      <Scale />
      {/* <FAQsFour /> */}
      <CTA />
      <Footer />
    </main >
  )
}

export default App