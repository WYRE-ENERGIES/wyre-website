import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { featuredProjects } from '../data/projects'

const ProjectsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brandColor uppercase tracking-wider mb-2">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped leading enterprises transform their energy management operations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="overflow-hidden">
                  {/* Square Project Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brandColor/10 to-purple-500/10 rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-bottom rounded-xl group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/600x600/f3f4f6/6b7280?text=Project+Image";
                      }}
                    />
                  </div>

                  {/* Description */}
                  <div className="mt-4">
                    <span className="inline-block bg-brandColor/10 text-brandColor px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-brandColor transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            variant="brand"
            size="lg"
            className=""
          >
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
