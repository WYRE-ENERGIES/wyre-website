import { useState } from 'react'
import { Button } from '.././components/ui/button'
import { Label } from '.././components/ui/label'
import { Input } from '.././components/ui/input'
import { Linkedin, CheckCircle2 } from "lucide-react"
import Logo from "../components/Logo"
import { socialsClient } from "../lib/api"

const companyLinks = [
  { href: '/#about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/segments', label: 'Segments' },
]

const productLinks = [
  { href: '/solar-catalog', label: 'Products Catalog' },
  { href: '/pricing', label: 'EMS Pricing' },
  { href: '/solar-pricing', label: 'Solar Pricing' },
]

const QuickLinks = [
  { href: '/contact#faq', label: 'FAQ' },
  { href: '/blogs', label: 'News & Pubs' },
  { href: '/contact', label: 'Contact Us' },
]


const footerLinks = [
  {
    name: 'Company',
    links: companyLinks,
  },
  {
    name: 'Product',
    links: productLinks,
  },
  {
    name: 'Quick Links',
    links: QuickLinks,
  },
]

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError(null)
    // Clear success message when user starts typing
    if (showSuccess) setShowSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setShowSuccess(false)
    setIsSubmitting(true)

    try {
      const payload = {
        name: formData.name.trim(),
        phone_number: formData.phone.trim(),
        email: formData.email.trim(),
      }

      const response = await socialsClient.post('lets_talk/', payload)
      console.log('Success:', response.data)

      // Show success message
      setShowSuccess(true)

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: ''
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
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
    <footer className="m-1">
      <div className="mx-auto max-w-[83rem] space-y-16 px-5 pt-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-8">
          <a
            href="/"
            aria-label="go home">
            <Logo isDark />
          </a>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/wyre-energy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block">
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/wyre_energy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block">
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {footerLinks.map((linksGroup, index) => (
            <div key={index}>
              <span className="font-medium">{linksGroup.name}</span>
              <ul className="mt-4 list-inside space-y-4">
                {linksGroup.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-primary text-muted-foreground text-sm duration-150">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <form onSubmit={handleSubmit} className="w-full max-w-xs">
              <div className="space-y-2.5">
                <Label
                  className="block mb-4 font-medium"
                  htmlFor="name">
                  Let's Talk
                </Label>
                <Input
                  className="bg-[#F6F9FC] sz-md"
                  placeholder="Name"
                  type="text"
                  id="name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  className="bg-[#F6F9FC] sz-md"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  className="bg-[#F6F9FC] sz-md"
                  placeholder="Email Address"
                  type="email"
                  id="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm text-green-700">Thank you! Your message has been received!</p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-brandColor hover:bg-brandColor hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed">
                <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
              </Button>
            </form>
          </div>
        </div>
        <div className="bg-[#F6F9FC] mt-16 flex items-center justify-center rounded-md p-4 px-6 py-3">
          <span className="text-title">
            Copyright Wyre {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}