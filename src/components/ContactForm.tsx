import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { socialsClient } from '../lib/api';

interface ContactFormProps {
  initialData?: {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  };
  onSubmitSuccess?: () => void;
  showTitle?: boolean;
  title?: string;
  className?: string;
  idPrefix?: string;
  showCancelButton?: boolean;
  onCancel?: () => void;
}

const subjects = [
  'EMS (Energy Management System)',
  'Solar Purchase',
  'Product Purchase',
  'Maintenance',
  'Operations',
  'General Inquiry'
];

export const ContactForm: React.FC<ContactFormProps> = ({
  initialData = {},
  onSubmitSuccess,
  showTitle = false,
  title = "Send us a Message",
  className = "",
  idPrefix = "",
  showCancelButton = false,
  onCancel
}) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
    subject: initialData.subject || '',
    message: initialData.message || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
    // Clear success message when user starts typing
    if (showSuccess) setShowSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setShowSuccess(false);
    setIsSubmitting(true);

    try {
      const payload = {
        full_name: formData.name.trim(),
        email: formData.email.trim(),
        phone_number: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const response = await socialsClient.post('contact-us/', payload);
      console.log('Success:', response.data);

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Call success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (err: unknown) {
      console.error('Error submitting form:', err);
      if (err && typeof err === 'object' && 'response' in err) {
        const axiosError = err as { response?: { data?: { message?: string }; status?: number } };
        const errorMessage = axiosError.response?.data?.message || `Server error: ${axiosError.response?.status || 'Unknown'}`;
        setError(errorMessage);
      } else {
        setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const nameId = idPrefix ? `${idPrefix}-name` : 'name';
  const emailId = idPrefix ? `${idPrefix}-email` : 'email';
  const phoneId = idPrefix ? `${idPrefix}-phone` : 'phone';
  const subjectId = idPrefix ? `${idPrefix}-subject` : 'subject';
  const messageId = idPrefix ? `${idPrefix}-message` : 'message';

  return (
    <div className={className}>
      {showTitle && (
        <h2 className="text-heading text-2xl mb-6">{title}</h2>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={nameId} className="block text-sm font-medium text-heading mb-2">
              Full Name *
            </label>
            <Input
              id={nameId}
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-background"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor={emailId} className="block text-sm font-medium text-heading mb-2">
              Email Address *
            </label>
            <Input
              id={emailId}
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-background"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={phoneId} className="block text-sm font-medium text-heading mb-2">
              Phone Number
            </label>
            <Input
              id={phoneId}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-background"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor={subjectId} className="block text-sm font-medium text-heading mb-2">
              Subject *
            </label>
            <select
              id={subjectId}
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-heading focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent"
            >
              <option value="">Select a subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor={messageId} className="block text-sm font-medium text-heading mb-2">
            Message *
          </label>
          <textarea
            id={messageId}
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-heading placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent resize-none"
            placeholder="Tell us about your solar energy needs..."
          />
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-700">Thank you! Your message has been sent successfully. We'll get back to you soon!</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <div className={showCancelButton ? "flex gap-3" : ""}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className={showCancelButton ? "flex-1 bg-brandColor hover:bg-brandColor/80 text-white disabled:opacity-50 disabled:cursor-not-allowed" : "w-full bg-brandColor hover:bg-brandColor/80 text-white disabled:opacity-50 disabled:cursor-not-allowed"}
          >
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {showCancelButton && onCancel && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1"
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

