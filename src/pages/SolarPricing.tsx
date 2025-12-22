import { useState } from 'react';
import { Search, Filter, Grid, List, SlidersHorizontal, Send, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import OtherNavbar from '../components/navbar/OtherNavbar';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog';

// Solar system packages data (shared with SolarCatalog)
const solarProducts = [
  {
    id: 7,
    name: "6Kva Inverter with 6kWh Lithium Battery",
    category: "Complete Systems",
    description: "Compact 6Kva hybrid inverter system with 6kWh lithium battery. Perfect for small residential applications, apartments, or single-room setups requiring reliable backup power and solar integration.",
    image: "/img/deye-solar-package.png",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 8,
    name: "10Kva Inverter with 10kWh Lithium Battery",
    category: "Complete Systems",
    description: "Efficient 10Kva hybrid inverter paired with 10kWh lithium battery. Ideal for small to medium residential homes seeking reliable solar power backup with moderate energy storage capacity.",
    image: "/img/deye-solar-package.png",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 1,
    name: "10Kva Inverter with 15kwh Lithium Battery",
    category: "Complete Systems",
    description: "Complete solar power system featuring a 10Kva hybrid inverter paired with a 15kwh lithium battery. Perfect for small to medium residential applications with reliable backup power.",
    image: "/img/deye-solar-package.png",
    inStock: true,
    price: null as number | null, // Price available on request
    originalPrice: null as number | null
  },
  {
    id: 2,
    name: "10Kva Inverter with 30kwh Battery",
    category: "Complete Systems",
    description: "Enhanced solar power system with 10Kva inverter and larger 30kwh lithium battery capacity. Ideal for medium-sized homes requiring extended backup power and energy independence.",
    image: "/img/deye-solar-package.png",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 3,
    name: "20kva with 60kwh Lithium Battery",
    category: "Complete Systems",
    description: "Powerful 20kva inverter system with 60kwh lithium battery storage. Designed for large residential or small commercial installations with high energy demands.",
    image: "/img/deye-solar-package.png",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 4,
    name: "40kva with 100kwh Lithium Battery",
    category: "Complete Systems",
    description: "Commercial-grade 40kva inverter system with 100kwh lithium battery bank. Perfect for large commercial buildings, offices, and industrial applications requiring substantial power capacity.",
    image: "/img/deye-solar-package.png",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 5,
    name: "80kva with 160kwh Battery",
    category: "Complete Systems",
    description: "High-capacity 80kva inverter system with 160kwh lithium battery storage. Engineered for large-scale commercial and industrial facilities with significant energy requirements.",
    image: "/img/deye-solar-package.png",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  },
  {
    id: 6,
    name: "80kva with 210kwh Battery",
    category: "Complete Systems",
    description: "Maximum capacity 80kva inverter system with 210kwh lithium battery bank. The ultimate solution for large industrial facilities, data centers, and operations requiring maximum energy storage and reliability.",
    image: "/img/deye-solar-package.png",
    inStock: true,
    price: null as number | null,
    originalPrice: null as number | null
  }
];

const categories = [
  { name: "Complete Systems", count: 8 }
];

// Helper function to extract KVA from product name
const extractKVA = (productName: string): string | null => {
  const match = productName.match(/(\d+)\s*[Kk][Vv][Aa]/);
  return match ? `${match[1]}KVA` : null;
};

// Get unique KVA values and their counts
const getKVAOptions = () => {
  const kvaMap = new Map<string, number>();
  solarProducts.forEach(product => {
    const kva = extractKVA(product.name);
    if (kva) {
      kvaMap.set(kva, (kvaMap.get(kva) || 0) + 1);
    }
  });
  return Array.from(kvaMap.entries())
    .map(([kva, count]) => ({ name: kva, count }))
    .sort((a, b) => parseInt(a.name) - parseInt(b.name));
};

const kvaOptions = getKVAOptions();

const SolarPricing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedKVA, setSelectedKVA] = useState<string[]>([]);
  const [priceRange] = useState([0, 5000000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<typeof solarProducts[0][]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const subjects = [
    'EMS (Energy Management System)',
    'Solar Purchase',
    'Product Purchase',
    'Maintenance',
    'Operations',
    'General Inquiry'
  ];

  const filteredProducts = solarProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    // Only filter by price if price exists
    const matchesPrice = product.price === null || (product.price !== null && product.price >= priceRange[0] && product.price <= priceRange[1]);
    const productKVA = extractKVA(product.name);
    const matchesKVA = selectedKVA.length === 0 || (productKVA && selectedKVA.includes(productKVA));

    return matchesSearch && matchesCategory && matchesPrice && matchesKVA;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => {
      const isSelected = prev.includes(category);
      if (isSelected) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const toggleKVA = (kva: string) => {
    setSelectedKVA(prev => {
      const isSelected = prev.includes(kva);
      if (isSelected) {
        return prev.filter(k => k !== kva);
      } else {
        return [...prev, kva];
      }
    });
  };

  const handleGetQuote = (product: typeof solarProducts[0]) => {
    // Check if product is already in selected products
    const isAlreadySelected = selectedProducts.some(p => p.id === product.id);
    if (!isAlreadySelected) {
      setSelectedProducts(prev => [...prev, product]);
    }

    // Pre-fill form with product information
    const priceText = product.price !== null && product.price !== undefined
      ? `₦${product.price.toLocaleString()}`
      : 'Price on Request';

    setFormData(prev => ({
      ...prev,
      subject: 'Solar Purchase',
      message: prev.message
        ? `${prev.message}\n\n${product.name} (${priceText})`
        : `I'm interested in purchasing: ${product.name} (${priceText})\n\nPlease provide more information about this product and availability.`
    }));

    setIsModalOpen(true);
  };

  const removeProductFromQuote = (productId: number) => {
    const product = selectedProducts.find(p => p.id === productId);
    setSelectedProducts(prev => prev.filter(p => p.id !== productId));
    // Update message to remove the product reference
    if (product) {
      setFormData(prev => ({
        ...prev,
        message: prev.message.replace(new RegExp(`.*${product.name}.*\\(.*\\).*`, 'g'), '').trim()
      }));
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    console.log('Selected products:', selectedProducts);
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Solar Purchase',
      message: ''
    });
    setSelectedProducts([]);
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Optionally reset form when closing
    // setFormData({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   subject: '',
    //   message: ''
    // });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
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
              Solar Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our complete solar power systems and contact us for personalized pricing based on your energy needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search solar products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background h-12"
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <div className="flex items-center px-2 border border-border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-brandColor text-white rounded-md' : ''}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-brandColor text-white rounded-md' : ''}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-80 flex-shrink-0`}>
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5 text-brandColor" />
                  <h3 className="text-lg font-semibold text-heading">Filters</h3>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-heading font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category.name}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleCategory(category.name);
                          }}
                          className="rounded border-border text-brandColor focus:ring-brandColor"
                        />
                        <span className="text-muted-foreground text-sm">
                          {category.name} ({category.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* KVA Filter */}
                <div className="mb-6">
                  <h4 className="text-heading font-medium mb-3">KVA Rating</h4>
                  <div className="space-y-2">
                    {kvaOptions.map((kva) => (
                      <label
                        key={kva.name}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedKVA.includes(kva.name)}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleKVA(kva.name);
                          }}
                          className="rounded border-border text-brandColor focus:ring-brandColor"
                        />
                        <span className="text-muted-foreground text-sm">
                          {kva.name} ({kva.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                {/* <div className="mb-6">
                  <h4 className="text-heading font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="5000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₦{priceRange[0].toLocaleString()}</span>
                      <span>₦{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div> */}

              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Products ({sortedProducts.length})
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background border border-border text-heading rounded-lg px-3 py-2 text-sm"
              >
                <option value="relevance">Sort by: Relevance</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            {sortedProducts.length > 0 ? (
              <motion.div
                key={`products-${sortedProducts.length}-${selectedCategories.join('-')}-${selectedKVA.join('-')}-${searchTerm}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}
              >
                {sortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={cardVariants}
                    className="group"
                  >
                    <Card className="p-0 flex flex-col h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="relative">
                          <div className="absolute top-3 left-3 z-10">
                            <Badge
                              className={product.inStock ? "bg-green-500 text-white" : "bg-red-500 text-white"}
                            >
                              {product.inStock ? "In Stock" : "Out of Stock"}
                            </Badge>
                          </div>
                          <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden flex items-center justify-center">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="p-4 flex-1 flex flex-col">
                          <h3 className="text-heading font-semibold mb-2 line-clamp-2">{product.name}</h3>

                          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                            {product.description}
                          </p>

                          {/* <div className="flex items-center gap-2 mb-4">
                          {product.price !== null ? (
                            <>
                              <span className="text-2xl font-bold text-heading">
                                ₦{product.price.toLocaleString()}
                              </span>
                              {product.originalPrice && (
                                <span className="text-muted-foreground line-through">
                                  ₦{product.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </>
                          ) : (
                            <span className="text-lg font-semibold text-brandColor">
                              Price on Request
                            </span>
                          )}
                        </div> */}

                          <div className="mt-auto pt-4">
                            <Button
                              className="w-full bg-brandColor hover:bg-brandColor/80 text-white"
                              onClick={() => handleGetQuote(product)}
                              disabled={!product.inStock}
                            >
                              {product.inStock ? 'Get a Quote' : 'Out of Stock'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No products found matching your filters.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedKVA([]);
                    setSearchTerm('');
                  }}
                  className="mt-4"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-heading">Get a Quote</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you with pricing information.
            </DialogDescription>
          </DialogHeader>

          {/* Selected Products Display */}
          {selectedProducts.length > 0 && (
            <div className="space-y-2 mb-4">
              <h4 className="text-sm font-medium text-heading">Products in Quote:</h4>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {selectedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-heading truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {product.price !== null && product.price !== undefined
                          ? `₦${product.price.toLocaleString()}`
                          : 'Price on Request'}
                      </p>
                    </div>
                    <button
                      onClick={() => removeProductFromQuote(product.id)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                      aria-label="Remove product"
                    >
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-heading mb-2">
                  Full Name *
                </label>
                <Input
                  id="modal-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  className="bg-background"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-heading mb-2">
                  Email Address *
                </label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleFormChange}
                  className="bg-background"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-heading mb-2">
                  Phone Number
                </label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="bg-background"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="modal-subject" className="block text-sm font-medium text-heading mb-2">
                  Subject *
                </label>
                <select
                  id="modal-subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleFormChange}
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
              <label htmlFor="modal-message" className="block text-sm font-medium text-heading mb-2">
                Message *
              </label>
              <textarea
                id="modal-message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleFormChange}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-heading placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent resize-none"
                placeholder="Tell us about your solar energy needs..."
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                className="flex-1 bg-brandColor hover:bg-brandColor/80 text-white"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleModalClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default SolarPricing;
