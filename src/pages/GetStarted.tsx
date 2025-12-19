import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog'
import OtherNavbar from '../components/navbar/OtherNavbar'
import Footer from '../sections/Footer'
import { CheckCircle2 } from 'lucide-react'
import { socialsClient } from '../lib/api'

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    application: '',
    facilityType: '',
    sourcesCount: '',
    sourcesOfEnergy: '',
    averageCost: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const applications = [
    'Single Site',
    'Multi Site',
  ]

  const facilityTypes = [
    'Residential',
    'Commercial',
    'Industrial',
  ]

  const energySources = [
    'Solar',
    'Check Utility',
    'Generator 1-5',
    'Gas Generator',
    'IPP',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const mapUseCase = (application: string): string => {
    if (application === 'Single Site') return 'single_site'
    if (application === 'Multi Site') return 'multi_site'
    return application.toLowerCase().replace(' ', '_')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      // Map form data to API payload structure
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone_number: formData.phone.trim(),
        location: formData.location.trim(),
        use_case: mapUseCase(formData.application),
        facility_type: formData.facilityType,
        no_of_sources: formData.sourcesCount.trim() || "1",
        sources_of_energy: formData.sourcesOfEnergy,
        avg_energy_cost: formData.averageCost.replace(/[₦,]/g, '').trim(),
      }

      const response = await socialsClient.post('contact/', payload)
      console.log('Success:', response.data)

      // Show success dialog
      setShowSuccessDialog(true)

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        application: '',
        facilityType: '',
        sourcesCount: '',
        sourcesOfEnergy: '',
        averageCost: ''
      })
    } catch (err: unknown) {
      console.error('Error submitting form:', err)
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosError = err as { response?: { data?: { message?: string }; status?: number } }
        const errorMessage = axiosError.response?.data?.message || `Server error: ${axiosError.response?.status || 'Unknown'}`
        setError(errorMessage)
      } else {
        setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <OtherNavbar />

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-160px)]">

        {/* Right Column - Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-white p-8 md:p-12 lg:p-16 flex items-center justify-center"
        >
          <div className="w-full max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-4">
              Get Started
            </h2>
            <p className="text-muted-foreground mb-8 text-base">
              Please fill the form below and we will be sure to contact you in 24hrs to get you on the way!
            </p>

            <form onSubmit={handleSubmit} className="text-left space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-heading mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-heading mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>

              {/* Phone No. and Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-heading mb-2 block">
                    Phone No.
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="XXX-XXXX-XXXX"
                    className="bg-gray-50 border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="text-heading mb-2 block">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    className="bg-gray-50 border-gray-200 rounded-lg"
                  />
                </div>
              </div>

              {/* Application and Facility type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="application" className="text-heading mb-2 block">
                    Application
                  </Label>
                  <select
                    id="application"
                    name="application"
                    required
                    value={formData.application}
                    onChange={handleChange}
                    className="w-full px-3 py-2 h-9 bg-gray-50 border border-gray-200 rounded-lg text-heading focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent"
                  >
                    <option value="">Select one...</option>
                    {applications.map((app) => (
                      <option key={app} value={app}>
                        {app}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="facilityType" className="text-heading mb-2 block">
                    Facility type
                  </Label>
                  <select
                    id="facilityType"
                    name="facilityType"
                    required
                    value={formData.facilityType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 h-9 bg-gray-50 border border-gray-200 rounded-lg text-heading focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent"
                  >
                    <option value="">Select one...</option>
                    {facilityTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* How many Sources and Sources of energy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sourcesCount" className="text-heading mb-2 block">
                    How many Sources
                  </Label>
                  <Input
                    id="sourcesCount"
                    name="sourcesCount"
                    type="text"
                    required
                    value={formData.sourcesCount}
                    onChange={handleChange}
                    placeholder="e.g 1"
                    className="bg-gray-50 border-gray-200 rounded-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="sourcesOfEnergy" className="text-heading mb-2 block">
                    Sources of energy
                  </Label>
                  <select
                    id="sourcesOfEnergy"
                    name="sourcesOfEnergy"
                    required
                    value={formData.sourcesOfEnergy}
                    onChange={handleChange}
                    className="w-full px-3 py-2 h-9 bg-gray-50 border border-gray-200 rounded-lg text-heading focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent"
                  >
                    <option value="">Select one...</option>
                    {energySources.map((source) => (
                      <option key={source} value={source}>
                        {source}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Average Cost of energy or units consumed monthly */}
              <div>
                <Label htmlFor="averageCost" className="text-heading mb-2 block">
                  Average Cost of energy or units consumed monthly
                </Label>
                <div className="flex items-center">
                  <span className="px-3 h-9 flex items-center justify-center bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg text-heading font-medium">
                    ₦
                  </span>
                  <Input
                    id="averageCost"
                    name="averageCost"
                    type="text"
                    required
                    value={formData.averageCost}
                    onChange={handleChange}
                    placeholder="Amount"
                    className="bg-gray-50 border-gray-200 rounded-l-none rounded-r-lg flex-1"
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brandColor hover:bg-brandColor/90 text-white rounded-lg py-6 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-2xl text-center font-bold text-heading">
              Thank You
            </DialogTitle>
            <DialogDescription className="text-base text-gray-600 pt-2">
              Thanks for reaching out! We're thrilled to hear from you. Our representative will get in touch with you.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="w-full sm:w-auto bg-brandColor hover:bg-brandColor/90 text-white"
            >
              Okay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

export default GetStarted

