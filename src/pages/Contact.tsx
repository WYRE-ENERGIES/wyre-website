import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import OtherNavbar from '../components/navbar/OtherNavbar';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';
import FAQsFour from "../sections/faq";
import { ContactForm } from '../components/ContactForm';

const Contact = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [initialFormData, setInitialFormData] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  }>({});

  useEffect(() => {
    // Check if user came from product catalog
    const productData = localStorage.getItem('selectedProduct');
    if (productData) {
      const product = JSON.parse(productData);
      setSelectedProduct(product);
      const priceText = product.price !== null && product.price !== undefined
        ? `₦${product.price.toLocaleString()}`
        : 'Price on Request';
      setInitialFormData({
        subject: 'Solar Purchase',
        message: `I'm interested in purchasing: ${product.name} (${priceText})\n\nPlease provide more information about this product and availability.`
      });
      // Clear the stored product data
      localStorage.removeItem('selectedProduct');
    }

    // Handle scrolling to FAQ section if hash is present
    if (window.location.hash === '#faq') {
      setTimeout(() => {
        const faqElement = document.getElementById('faq');
        if (faqElement) {
          faqElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);


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
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our solar energy experts. We're here to help you find the perfect solar solution for your needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Selected Product Display */}
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card className="border-none shadow-sm bg-brandColor/5">
              <CardContent className="px-6">
                <div className="max-md:flex-col flex items-center gap-4">
                  <div className="max-md:mb-4 md:w-20 md:h-20 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-heading mb-1">
                      Interested in: {selectedProduct.name}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Category: {selectedProduct.category}
                    </p>
                    <div className="flex items-center gap-2">
                      {selectedProduct.price !== null && selectedProduct.price !== undefined ? (
                        <span className="text-2xl font-bold text-brandColor">
                          ₦{selectedProduct.price.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-lg font-semibold text-brandColor">
                          Price on Request
                        </span>
                      )}
                      <Badge variant="secondary" className="bg-brandColor/10 text-brandColor">
                        Solar Purchase
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-heading text-2xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brandColor/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-brandColor" />
                    </div>
                    <div>
                      <h3 className="text-heading font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@wyreng.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brandColor/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-brandColor" />
                    </div>
                    <div>
                      <h3 className="text-heading font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+234 806 270 1039</p>
                      <p className="text-muted-foreground">+234 704 807 3419</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brandColor/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-brandColor" />
                    </div>
                    <div>
                      <h3 className="text-heading font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">10A Merret Road, Yaba Lagos, Nigeria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-none shadow-sm">
                <CardHeader>
                  <CardTitle className="text-heading text-xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle className="text-heading text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm
                  initialData={initialFormData}
                  showTitle={false}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24">
        <div className="mx-auto container px-4 md:px-6">
          <FAQsFour />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
