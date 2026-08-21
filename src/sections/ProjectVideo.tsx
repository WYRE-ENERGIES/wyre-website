import { motion } from 'framer-motion'

const ProjectVideo = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brandColor">
            Project Spotlight
          </p>
          <h2 className="mb-5 text-3xl font-bold text-heading md:text-5xl">
            Beach Resort by Schlepp Properties
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            See how Wyre's solar installation powers a premium beachfront property with reliable, sustainable energy by the sea.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-black shadow-2xl"
        >
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/1RbS8_QdnQw?si=ZMWoPxcf-Iqlna1I"
              title="Beach Resort by Schlepp Properties video"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectVideo
