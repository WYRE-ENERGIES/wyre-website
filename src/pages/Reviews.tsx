import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import OtherNavbar from "../components/navbar/OtherNavbar"
import Footer from "../sections/Footer"
import { AnimatedGridPattern } from "../components/magicui/animated-grid-pattern"
import { cn } from '../lib/utils'

const reviews = [
  {
    id: 1,
    name: "Seun Jimo",
    role: "Corporate Support",
    company: "Polaris Bank",
    companyLogo: "/img/polaris-logo.png",
    rating: 5,
    review: "Wyre has provided an incredible enterprise service which gives remote visibility to optimize our energy operations. The data has proven extremely useful and the team is very responsive."
  },
  {
    id: 2,
    name: "Yoloye Oyerinde",
    role: "Commercial/Projects Manager",
    company: "Viathan",
    companyLogo: "https://th.bing.com/th/id/R.44a6fa733e4c19ab6180c926b8cc0347?rik=fSDYHsu49S%2bSeA&riu=http%3a%2f%2fwww.viathan-ng.com%2fwp-content%2fuploads%2f2019%2f06%2fsticky-logo.png&ehk=sxUeLOl739FxmfNUbN%2fE5ucWaAbdb7MfuGqHTUL13UA%3d&risl=&pid=ImgRaw&r=0",
    rating: 5,
    review: "Wyre provides an invaluable solution of automated billing and network monitoring with real-time notifications for quick fault detection and action."
  },
  {
    id: 3,
    name: "Olabanjo Alimi",
    role: "Head: Renewables and Mobility",
    company: "Sterling",
    companyLogo: "https://th.bing.com/th/id/R.37af980f525dda8d7731cfb4e99fe6f6?rik=uAp%2bXNbpNoMhLg&pid=ImgRaw&r=0",
    rating: 5,
    review: "Successfully developed an energy analytic software for solar home systems."
  },
  {
    id: 4,
    name: "Olumide Dare",
    role: "Managing Director",
    company: "Sapio Utilities",
    companyLogo: "https://www.wyreng.com/images/sapio-utility-logo.png", // Fallback as domain is uncertain/logo specific
    rating: 5,
    review: "Deciding to use Wyre has improved our operational efficiency, reduced physical visitations to customer sites and associated costs by up to 90%."
  },
  {
    id: 5,
    name: "Feyi Shasanya",
    role: "Director",
    company: "The Good Beach",
    companyLogo: "https://www.wyreng.com/images/theGoodBeach-logo.png", // Fallback
    rating: 5,
    review: "Wyre delivered a bespoke solution to track all energy sources and loads. This helps to manage our consumption, verify eneregy bills and apportion tenant bills."
  },
  {
    id: 6,
    name: "Nosa Otoghile",
    role: "Asset Manager",
    company: "Lennox",
    companyLogo: "https://www.wyreng.com/images/Lennox.png",
    rating: 5,
    review: "Insights from Wyre has enabled us reduce our energy consumption and related carbon footprint by 29%. It pointed us to our HVAC and how to better schedule operations."
  }
]

const Reviews = () => {
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
              Customers
            </h1>
            <p className="text-sm text-brandColor font-medium">
              Customer reviews | Testimonials | Recommendations
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col p-8 bg-white rounded-2xl">
                {/* Logo Section */}
                <div className="mb-2 w-24 h-auto flex items-center">
                  <img
                    src={review.companyLogo}
                    alt={`${review.company} logo`}
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLImageElement).style.display = 'none';
                      ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block';
                    }}
                  />
                  <span className="hidden text-xl font-bold text-gray-700">{review.company}</span>
                </div>

                {/* Review Text */}
                <div className="flex-grow mb-2">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {review.review}
                  </p>
                </div>

                {/* Footer Section: Name/Role and Stars */}
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <h4 className="font-bold text-brandColor text-lg mb-1">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </Card>
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
            <span data-aos="fade-up"
              data-aos-delay="50" className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-900 to-gray-300 bg-clip-text text-center text-4xl md:text-6xl xl:text-7xl font-semibold leading-none text-transparent ">
              Ready to Join Our Happy Customers?
            </span>
            <p data-aos="fade-up"
              data-aos-delay="100" className="mt-4 text-gray-500">
              Start your energy transformation journey today and see why businesses across Africa trust Wyre.
            </p>

            <div data-aos="fade-up"
              data-aos-delay="150" className="mt-12 flex flex-wrap justify-center gap-4">
              <Button
                className="z-10 bg-brandColor hover:bg-brandColor hover:opacity-80"
                asChild
                size="lg">
                <a href="/get-started">
                  <span>Get Started</span>
                </a>
              </Button>

              <Button
                className="z-10 border border-border"
                asChild
                size="lg"
                variant="secondary">
                <a href="/get-started">
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

export default Reviews
