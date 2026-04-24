import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Calendar, MapPin, CheckCircle, TrendingUp } from 'lucide-react'
import OtherNavbar from "../components/navbar/OtherNavbar"
import Footer from "../sections/Footer"
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { projectsData } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const project = projectsData[Number(id) as keyof typeof projectsData]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
        <OtherNavbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-heading mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      <div className="relative h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/1600x800/f3f4f6/6b7280?text=Project+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <Link to="/projects">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link> <br />
            <Badge className="bg-brandColor text-white mb-4">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{project.completionDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6 border-none shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center p-3">
                  {project.clientLogo ? (
                    <img
                      src={project.clientLogo}
                      alt={project.client || 'Client logo'}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/1600x800/f3f4f6/6b7280?text=Project+Image";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-2xl font-bold text-heading">{project.client?.charAt(0) || '?'}</p>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="text-2xl font-bold text-heading">{project.client || 'N/A'}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-none shadow-sm">
              <h2 className="text-2xl font-bold text-heading mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.fullDescription || project.description}
              </p>
            </Card>

            {project.gallery && project.gallery.length > 0 && (
              <Card className="p-6 border-none shadow-sm">
                <h2 className="text-2xl font-bold text-heading mb-4">Project Gallery</h2>
                <div className="columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:_balance]">
                  {project.gallery.map((src, index) => (
                    <motion.a
                      key={`${src}-${index}`}
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group relative mb-3 md:mb-4 block overflow-hidden rounded-xl bg-gray-100 break-inside-avoid"
                    >
                      <img
                        src={src}
                        alt={`${project.title} image ${index + 1}`}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/800x800/f3f4f6/6b7280?text=Project+Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  ))}
                </div>
              </Card>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {project.solutions && project.solutions.length > 0 && (
                  <Card className="p-6 border-none shadow-sm">
                    <h3 className="text-xl font-bold text-heading mb-4">Our Solutions</h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {project.results && project.results.length > 0 && (
                  <Card className="p-6 border-none shadow-sm bg-gradient-to-br from-brandColor/5 to-purple-500/5">
                    <h3 className="text-xl font-bold text-heading mb-4">Key Results</h3>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <TrendingUp className="h-6 w-6 text-brandColor flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            {project.stats && project.stats.length > 0 && (
              <Card className="p-6 border-none shadow-sm">
                <h3 className="text-xl font-bold text-heading mb-6">Project Stats</h3>
                <div className="space-y-4">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      {stat.icon && (
                        <div className="w-12 h-12 bg-brandColor/10 rounded-lg flex items-center justify-center">
                          <stat.icon className="h-6 w-6 text-brandColor" />
                        </div>
                      )}
                      <div>
                        <p className="text-2xl font-bold text-heading">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <Card className="p-6 border-none shadow-sm">
                <h3 className="text-xl font-bold text-heading mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-brandColor/10 text-brandColor">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            )}

            {/* Customer Review */}
            {project.review && (
              <Card className="p-6 border-none shadow-sm bg-gray-50/50">
                <h3 className="text-xl font-bold text-heading mb-4">Client Testimonial</h3>
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(project.review.rating)}
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "{project.review.text}"
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-heading">{project.review.name}</p>
                  <p className="text-sm text-muted-foreground">{project.review.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">{project.review.company}</p>
                </div>
              </Card>
            )}

            {/* CTA */}
            <Card className="p-6 border-none shadow-sm bg-gradient-to-br from-brandColor to-purple-500 text-white">
              <h3 className="text-xl font-bold mb-4">Start Your Project</h3>
              <p className="text-white/90 mb-6">
                Ready to transform your energy management? Let's discuss your project.
              </p>
              <Button asChild className="w-full bg-white text-brandColor hover:bg-gray-100">
                <Link to="/get-started">Get Started</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetail
