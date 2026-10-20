import { useCallback, useRef, useState } from 'react'
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
import LoadCalculator from '../components/LoadCalculator'
import { CheckCircle2 } from 'lucide-react'
import { socialsClient } from '../lib/api'
import {
  upsertEstimateInMessage,
  type CalculatorEstimate,
} from '../data/loadCalculator'

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    application: '',
    facilityType: '',
    averageCost: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const formSectionRef = useRef<HTMLDivElement>(null)

  const applications = [
    'Single Site',
    'Multi Site',
  ]

  const facilityTypes = [
    'Commercial',
    'Industrial',
    'Schools',
  ]

  const handleEstimateChange = useCallback((next: CalculatorEstimate | null) => {
    setFormData((current) => {
      const facilityType = next
        ? next.sector === 'industrial'
          ? 'Industrial'
          : next.sector === 'schools'
            ? 'Schools'
            : 'Commercial'
        : current.facilityType
      const message = upsertEstimateInMessage(current.message, next)
      if (current.facilityType === facilityType && current.message === message) {
        return current
      }
      return { ...current, facilityType, message }
    })
  }, [])

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    if (error) setError(null)
  }


  const handleAverageCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Remove all non-digit characters
    const numericValue = value.replace(/[^\d]/g, '')

    // Format with commas
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    setFormData({
      ...formData,
      averageCost: formattedValue
    })
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    setIsSubmitting(true)

    try {
      // Generate subject from application type
      const subject = formData.application
        ? `Inquiry about ${formData.application} ${formData.facilityType} Setup`
        : 'Inquiry about services'

      // Generate message from form details
      const messageParts = []
      if (formData.application) {
        messageParts.push(`Application Type: ${formData.application}`)
      }
      if (formData.facilityType) {
        messageParts.push(`Facility Type: ${formData.facilityType}`)
      }
      if (formData.location) {
        messageParts.push(`Location: ${formData.location}`)
      }

      if (formData.averageCost) {
        messageParts.push(`Average Monthly Cost: ₦${formData.averageCost.replace(/[₦,]/g, '')}`)
      }
      if (formData.message) {
        messageParts.push(`\nAdditional Information:\n${formData.message}`)
      }

      const message = messageParts.length > 0
        ? messageParts.join('\n')
        : 'I would like to know more about your services.'

      // Map form data to API payload structure
      const payload = {
        full_name: formData.name.trim(),
        email: formData.email.trim(),
        phone_number: formData.phone.trim(),
        subject: subject,
        message: message,
      }

      const response = await socialsClient.post('contact-us/', payload)
      console.log('Success:', response.data)

      // Store success message from API response
      const apiMessage = response.data?.message || "Thanks for reaching out! We're thrilled to hear from you. Our representative will get in touch with you."
      setSuccessMessage(apiMessage)

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
        averageCost: '',
        subject: '',
        message: ''
      })
    } catch (err: unknown) {
      console.error('Error submitting form:', err)
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosError = err as { response?: { data?: { message?: string; error?: string }; status?: number } }
        // Handle both 'message' and 'error' fields in response
        const errorMessage = axiosError.response?.data?.message || axiosError.response?.data?.error || `Server error: ${axiosError.response?.status || 'Unknown'}`
        setError(errorMessage)
      } else {
        setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle textarea changes
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError(null)
  }

  return (
    <div className="min-h-screen bg-white">
      <OtherNavbar />

      <div className="container mx-auto px-6 py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mb-10 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-3">
            Get Started
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Fill in the form and we will contact you within 24 hours to get you on the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)] gap-10 xl:gap-14 items-start">
          <motion.div
            id="load-calculator"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <LoadCalculator
              onEstimateChange={handleEstimateChange}
              onRequestQuote={scrollToForm}
            />
          </motion.div>

          <motion.div
            ref={formSectionRef}
            id="get-started-form"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="scroll-mt-24 xl:sticky xl:top-8"
          >
            <h2 className="text-2xl font-bold text-heading mb-2">
              Tell us about your site
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              If you used the load calculator, the estimate is filled into Additional Information so it is sent with this request.
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
                    onChange={handleAverageCostChange}
                    placeholder="Amount"
                    className="bg-gray-50 border-gray-200 rounded-l-none rounded-r-lg flex-1"
                    inputMode="numeric"
                  />
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <Label htmlFor="message" className="text-heading mb-2 block">
                  Additional Information (Optional)
                </Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleTextareaChange}
                  placeholder="Tell us more about your requirements..."
                  rows={10}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-heading focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent resize-y"
                />
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
          </motion.div>
        </div>
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
              {successMessage}
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

