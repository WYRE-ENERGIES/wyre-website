import { Button } from '../components/ui/button'
import { Star, Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import OtherNavbar from "../components/navbar/OtherNavbar"
import Footer from "../sections/Footer"
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern"
import { cn } from '../lib/utils'
import { Link } from 'react-router-dom'
import { featuredProjects } from '../data/projects'

const projects = featuredProjects

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      {/* Header */}
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-heading">
              Wyre Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful energy management and solar solutions delivered to leading enterprises across Africa.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Projects Grid - Staggered Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={cn(
                "group",

              )}
            >
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="overflow-hidden">
                  {/* Square Project Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brandColor/10 to-purple-500/10 rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/img/project-placeholder.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-xl"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-brandColor text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      {(project.location || project.completionDate) && (
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          {project.location && (
                            <>
                              <MapPin className="h-4 w-4" />
                              <span>{project.location}</span>
                            </>
                          )}
                          {project.location && project.completionDate && (
                            <span className="mx-2">•</span>
                          )}
                          {project.completionDate && (
                            <>
                              <Calendar className="h-4 w-4" />
                              <span>{project.completionDate}</span>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="mt-4 space-y-4">
                    {/* Client Info */}
                    {project.client && (
                      <div className="flex items-center gap-4">
                        {project.clientLogo && (
                          <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                            <img
                              src={project.clientLogo}
                              alt={project.client}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-muted-foreground">Client</p>
                          <p className="font-semibold text-heading">{project.client}</p>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Stats */}
                    {project.stats && project.stats.length > 0 && (
                      <div className="flex flex-wrap xl:gap-12 gap-8 max-md:grid max-md:grid-cols-2 md:justify-between px-4 pt-4 border-t border-gray-200">
                        {project.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-2xl font-bold text-brandColor">{stat.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Customer Review */}
                    {project.review && (
                      <div className="pt-4 border-t border-gray-200 bg-gray-50/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {renderStars(project.review.rating)}
                        </div>
                        <p className="text-sm text-gray-700 italic mb-3">
                          "{project.review.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-heading text-sm">{project.review.name}</p>
                            <p className="text-xs text-muted-foreground">{project.review.role}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">{project.review.company}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative pb-24 my-12 lg:pb-32 flex h-[500px] container mx-auto w-full items-center justify-center overflow-hidden rounded-lg lg:rounded-xl border-border border bg-background p-20"
        >
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
          <div className="text-center">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-7xl font-semibold leading-none text-transparent">
              Ready to Start Your Project?
            </span>
            <p className="mt-4 text-gray-500">
              Let's discuss how Wyre can transform your energy management operations.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button
                className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
                asChild
                size="lg">
                <a href="/contact">
                  <span>Get Started</span>
                </a>
              </Button>

              <Button
                className="z-10 border border-border"
                asChild
                size="lg"
                variant="secondary">
                <a href="/contact">
                  <span>Book Demo</span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
