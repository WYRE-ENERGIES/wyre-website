import { EmsFeaturesCarousel } from '../components/ems-features-carousel'

const EmsFeat = () => {
  return (
    <section id="ems" className="relative min-h-[900px] pt-24 lg:pt-22 pb-14">
      <div className="relative w-full">
        <div className="max-2xl:px-6 max-w-[95rem] mx-auto">
          <article className="w-full text-black">
            <header className="space-y-8 pt-6 mb-16 text-center">
              <p className="text-gray-400 max-sm:text-sm mb-4">
                Energy Management System
              </p>
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-heading">
                Powerful Features for <br /> Smart Energy Management
              </h1>
            </header>

            <EmsFeaturesCarousel />
          </article>
        </div>
      </div>
    </section>
  )
}

export default EmsFeat
