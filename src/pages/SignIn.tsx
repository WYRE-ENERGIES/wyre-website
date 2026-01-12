import { motion } from 'framer-motion'
import { Building2, Users, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import OtherNavbar from '../components/navbar/OtherNavbar'
import Footer from '../sections/Footer'
import { AnimatedGridPattern } from '../components/magicui/animated-grid-pattern'
import { cn } from '../lib/utils'

const SignIn = () => {
  const handleSignIn = (type: 'branch' | 'client') => {
    if (type === 'branch') {
      window.location.href = 'https://dashboard.wyreng.com/'
    } else {
      window.location.href = 'https://clientadmin.wyreng.com/'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const signInOptions = [
    {
      type: 'branch' as const,
      title: 'Sign In as Branch',
      description: 'Access your branch dashboard to manage energy data, view analytics, and monitor multiple sites.',
      icon: Building2,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      type: 'client' as const,
      title: 'Sign In as Client',
      description: 'Access your client admin portal to manage your account, view reports, and configure settings.',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white">
      <OtherNavbar />

      {/* Main Content */}
      <div className="relative flex items-center justify-center min-h-[calc(100vh-160px)] px-6 py-16">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.05}
          duration={3}
          repeatDelay={1}
          className={cn(
            "opacity-50 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-0 h-full",
          )}
        />

        <div className="relative max-w-5xl w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
              Welcome Back
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your account type to continue to your dashboard
            </p>
          </motion.div>

          {/* Sign In Options */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {signInOptions.map((option) => {
              const Icon = option.icon
              return (
                <motion.div
                  key={option.type}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.5, ease: 'easeOut' }
                    }
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card
                    className={cn(
                      'h-full cursor-pointer transition-all duration-300',
                      'border-2 border-input hover:border-brandColor',
                      'hover:shadow-2xl',
                      'bg-white/80 backdrop-blur-sm'
                    )}
                    onClick={() => handleSignIn(option.type)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className={cn(
                        'w-20 h-20 mx-auto mb-6 rounded-2xl',
                        'bg-brandColor/10',
                        'flex items-center justify-center'
                      )}>
                        <Icon className="h-10 w-10 text-brandColor" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-heading mb-2">
                        {option.title}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground">
                        {option.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="brand"
                        className="w-full"
                        size="lg"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Need help? <a href="/contact" className="text-brandColor hover:underline">Contact Support</a>
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SignIn

