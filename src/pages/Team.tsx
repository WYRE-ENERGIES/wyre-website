
import { Card, CardContent } from '../components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import {
  Users,
  Award,
  Code,
  Briefcase,
  Target,
  Lightbulb,
  Palette,
  FileText
} from 'lucide-react'
import { motion } from 'framer-motion'
import OtherNavbar from "../components/navbar/OtherNavbar"
import Footer from "../sections/Footer"
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern"
import { cn } from '../lib/utils'

const teamMembers = [
  {
    id: 1,
    name: "Olaolu",
    role: "Founder",
    category: "Leadership",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHyRdqp1Y_sFQ/profile-displayphoto-shrink_400_400/B4DZjlYmG7GQAk-/0/1756195129115?e=1765411200&v=beta&t=JR3_yiCQuAUVrRJ257ud2aLeHplCOzHWxHaAT5ZGULo",
    description: "Visionary leader with extensive experience in energy management and business strategy.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    name: "Inyang",
    role: "Co-founder",
    category: "Leadership",
    avatar: "https://www.wyreng.com/images/Inyang.png",
    description: "Strategic co-founder bringing deep industry expertise and operational excellence.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    name: "Idris",
    role: "Software Developer",
    category: "Engineering",
    avatar: "	https://www.wyreng.com/images/Idris.png",
    description: "Full-stack developer passionate about building scalable energy management solutions.",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    name: "Adrian",
    role: "Graphic Designer",
    category: "Design",
    avatar: "	https://www.wyreng.com/images/Adrian.png",
    description: "Graphic Designer responsible for creating the visual identity and branding for our platform.",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 9,
    name: "Favour",
    role: "Social Media Manager",
    category: "Design",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQF2Zvu8v03DoQ/profile-displayphoto-scale_400_400/B4DZpOcRVPGwAg-/0/1762252627549?e=1765411200&v=beta&t=NM-DpItr2bX4Qc0QxOr9XrjFaTvqgrlhQvMpuaniFXE",
    description: "Social Media Manager responsible for creating and managing the social media presence for our platform.",
    color: "from-emerald-500 to-green-500"
  },
  {
    id: 6,
    name: "Ejeh",
    role: "Senior Frontend Engineer",
    category: "Engineering",
    avatar: "https://yzpituugbe.ufs.sh/f/HQLUrqR5QP01EjptWf4v0DNghKi8yL1eSuO2jT79aPrJXbkI",
    description: "Backend engineer with expertise in data processing and system architecture.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 7,
    name: "Kayode",
    role: "Frontend Engineer",
    category: "Engineering",
    avatar: "	https://www.wyreng.com/images/kayodeDev.png",
    description: "Frontend Engineer responsible for creating the user interface and experience for our platform.",
    color: "from-teal-500 to-blue-500"
  },
  {
    id: 8,
    name: "Ifeanyi",
    role: "Backend Engineer",
    category: "Engineering",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEAw7Q_fJsdMA/profile-displayphoto-scale_400_400/B4DZnNd8yYJMAg-/0/1760088807734?e=1765411200&v=beta&t=EwmN90RwZELULOPzpcPLZBI3M8a6xi80NiXXj1mBEA8",
    description: "Backend Engineer responsible for creating the server-side logic and database for our platform.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 4,
    name: "Kayode",
    role: "Operations",
    category: "Operations",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQE0zgSOv_KtoA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723824086918?e=1765411200&v=beta&t=3h1l6b7PU06I1o_0e0D35KoHXNphhUOQgrXx7NHE6-4",
    description: "Operations specialist managing day-to-day business processes and customer success.",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 10,
    name: "Abiodun",
    role: "Operations",
    category: "Operations",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGkFzY1eAEOPA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1672330006494?e=1765411200&v=beta&t=L10DnIzTVD-HIq5gzdKk69k7iNydzqJyvwVnWmXMR9w",
    description: "Operations specialist managing day-to-day business processes and customer success.",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 11,
    name: "Peter",
    role: "Operations",
    category: "Operations",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGGLKVwmnZmjQ/profile-displayphoto-scale_400_400/B4DZqBd2EfH0Ag-/0/1763108678314?e=1765411200&v=beta&t=6kBLKPS6TGpMg-D_EhafBuYq5dFOgffE9eG1hK95I-A",
    description: "Operations specialist managing day-to-day business processes and customer success.",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 12,
    name: "Bidemi",
    role: "Accountant",
    category: "Accounting",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQEaK6TPLDpGAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1576698840337?e=1765411200&v=beta&t=2bp5iuZz6JiWP5tzFCQrD5Z9VbWGVqkaz_uxdSlFca0",
    description: "Accountant responsible for managing the financial operations of our platform.",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 13,
    name: "Yomi",
    role: "Advisor",
    category: "Advisory",
    avatar: "https://www.wyreng.com/images/Yomi.png",
    description: "Business advisor offering strategic counsel on growth and market expansion.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 14,
    name: "Taiwo",
    role: "Advisor",
    category: "Advisory",
    avatar: "https://www.wyreng.com/images/Taiwo.png",
    description: "Business advisor offering strategic counsel on growth and market expansion.",
    color: "from-rose-500 to-pink-500"
  },
  {
    id: 15,
    name: "Tayo",
    role: "Advisor",
    category: "Advisory",
    avatar: "	https://www.wyreng.com/images/Tayo.png",
    description: "Business advisor offering strategic counsel on growth and market expansion.",
    color: "from-rose-500 to-pink-500"
  }
]



const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      {/* Header */}
      <div className="max-w-[83rem] mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-heading">
            Meet Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team has strong local and international experiences with a track record of high execution.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="max-w-[83rem] mx-auto px-6 py-12">

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group"
            >
              <Card className="border-none shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] text-center">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Avatar className="h-28 w-28 border border-border mx-auto bg-brandColor/20">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-lg">
                        {member.name.split(' ').map((n: string) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-brandColor/10 flex items-center justify-center`}>
                      {member.category === 'Leadership' && <Award className="h-4 w-4 text-brandColor" />}
                      {member.category === 'Engineering' && <Code className="h-4 w-4 text-brandColor" />}
                      {member.category === 'Design' && <Palette className="h-4 w-4 text-brandColor" />}
                      {member.category === 'Accounting' && <FileText className="h-4 w-4 text-brandColor" />}
                      {member.category === 'Operations' && <Briefcase className="h-4 w-4 text-brandColor" />}
                      {member.category === 'Management' && <Target className="h-4 w-4 text-brandColor" />}
                      {member.category === 'Impact' && <Lightbulb className="h-4 w-4 text-brandColor" />}
                      {member.category === 'Advisory' && <Users className="h-4 w-4 text-brandColor" />}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-heading mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-brandColor mb-2">{member.role}</p>
                  <Badge variant="secondary" className="text-xs mb-3">
                    {member.category}
                  </Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative pb-24 my-12 lg:pb-32 flex h-[500px] max-w-[83rem] mx-auto w-full items-center justify-center overflow-hidden rounded-lg lg:rounded-xl border-border border bg-background p-20"
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
          <span data-aos="fade-up"
            data-aos-delay="50" className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-7xl font-semibold leading-none text-transparent ">
            Join Our Mission
          </span>
          <p data-aos="fade-up"
            data-aos-delay="100" className="mt-4 text-gray-500">
            Be part of the team transforming energy management across Africa.
          </p>

          <div data-aos="fade-up"
            data-aos-delay="150" className="mt-12 flex flex-wrap justify-center gap-4">
            <Button
              className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
              asChild
              size="lg">
              <a href="/">
                <span>View Open Positions</span>
              </a>
            </Button>

            <Button
              className="z-10 border border-border"
              asChild
              size="lg"
              variant="secondary">
              <a href="/">
                <span>Contact Us</span>
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}

export default Team
