
export default function Scale() {
  return (
    <section className="relative min-h-screen bg-[#240A40] max-sm:pb-24 text-white overflow-hidden">
      {/* White diagonal background section */}
      <div className="absolute -mt-[1px] top-0 left-0 w-full h-[370px] bg-[#F8FAFC] [clip-path:polygon(0_0,100%_0,100%_50%,0_80%)] md:[clip-path:polygon(0_0,100%_0,100%_30%,0_100%)]"></div>

      {/* Globe positioned absolutely to overlap backgrounds */}
      {/* Note: The red and light blue lines on the globe in the image are not directly supported by the cobe library's configuration. */}
      {/* They would require custom SVG or canvas drawing overlays. This implementation focuses on the globe's base color, dots, and markers. */}
      <div className="absolute xl:z-20 -right-[25%] w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px]">
        <img src="/img/globe-img.png" alt="World Globe" className="w-full h-full object-contain" loading="lazy" />
      </div>

      {/* Content container */}
      <div className="relative px-6 max-w-[90rem] mx-auto mt-[300px] spy-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left content section */}
        <div className="text-white">
          <p className="text-yellow-400 text-sm font-semibold uppercase mb-2">Built for Scale</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Africa's infrastructure for smart energy operations</h1>
          <p className="text-lg mb-12 text-gray-300">
            Wyre makes energy monitoring as seamless and automated as digital data management. Our platform is designed for multi-site businesses, delivering real-time visibility, optimized performance, and cost-efficient operations across facilities of any size.
          </p>

          {/* Statistics grid */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold mb-1">5,000+</p>
              <p className="text-sm text-gray-400">
                Sites monitored remotely with live energy analytics
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">99.9%</p>
              <p className="text-sm text-gray-400">
                Platform reliability for uninterrupted tracking and reporting
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">10,000 MwH</p>
              <p className="text-sm text-gray-400">Solar power generation</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">3,000 Tonnes CO2</p>
              <p className="text-sm text-gray-400">Annual emissions saved</p>
            </div>
          </div>
        </div>

        {/* Right content section (Globe is positioned absolutely outside this flow) */}
        <div className="hidden md:block h-[500px] lg:h-[700px]">
          {/* This div acts as a placeholder to maintain grid structure on desktop */}
        </div>
      </div>
    </section>
  )
}
