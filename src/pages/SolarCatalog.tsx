import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import OtherNavbar from '../components/navbar/OtherNavbar';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';

// Dummy solar products data
const solarProducts = [
  {
    id: 1,
    name: "Premium 400W Monocrystalline Solar Panel",
    price: 299000,
    originalPrice: 349000,
    category: "Solar Panels",
    description: "High-efficiency monocrystalline solar panel with 22% efficiency rating, perfect for residential and commercial installations.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 2,
    name: "High-Efficiency 500W Bifacial Panel",
    price: 449000,
    originalPrice: null,
    category: "Solar Panels",
    description: "Advanced bifacial technology captures sunlight from both sides, increasing energy output by up to 30%.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 3,
    name: "Lithium Iron Phosphate 10kWh Battery",
    price: 1299000,
    originalPrice: 1499000,
    category: "Batteries",
    description: "Long-lasting LiFePO4 battery with 10-year warranty, ideal for off-grid and backup power systems.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: false
  },
  {
    id: 4,
    name: "5kW Hybrid Solar Inverter",
    price: 899000,
    originalPrice: null,
    category: "Inverters",
    description: "Smart hybrid inverter with grid-tie and off-grid capabilities, includes WiFi monitoring and mobile app.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 5,
    name: "Solar Panel Mounting System",
    price: 199000,
    originalPrice: 249000,
    category: "Mounting Systems",
    description: "Durable aluminum mounting system suitable for various roof types, includes all necessary hardware.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 6,
    name: "Smart Solar Charge Controller",
    price: 159000,
    originalPrice: null,
    category: "Controllers",
    description: "MPPT charge controller with LCD display, USB ports, and Bluetooth connectivity for remote monitoring.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 7,
    name: "20kWh Solar Battery Bank",
    price: 2499000,
    originalPrice: 2999000,
    category: "Batteries",
    description: "Large capacity battery bank perfect for commercial installations and extended backup power needs.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: false
  },
  {
    id: 8,
    name: "10kW String Inverter",
    price: 1599000,
    originalPrice: null,
    category: "Inverters",
    description: "High-power string inverter with multiple MPPT inputs, designed for large residential and commercial systems.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 9,
    name: "Solar Panel Cleaning Kit",
    price: 49000,
    originalPrice: 69000,
    category: "Accessories",
    description: "Complete cleaning kit with telescopic pole, soft brush, and eco-friendly cleaning solution for solar panels.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 10,
    name: "Micro Inverter 300W",
    price: 129000,
    originalPrice: null,
    category: "Inverters",
    description: "Compact micro inverter for individual panel optimization, includes 25-year warranty and monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 11,
    name: "Solar Panel Junction Box",
    price: 29000,
    originalPrice: 39000,
    category: "Accessories",
    description: "Weatherproof junction box with bypass diodes for safe and efficient solar panel connections.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 12,
    name: "Grid-Tie Solar System Kit",
    price: 3999000,
    originalPrice: 4499000,
    category: "Complete Systems",
    description: "Complete 5kW grid-tie solar system including panels, inverter, mounting, and all necessary components.",
    image: "https://images.unsplash.com/photo-1616745207210-a98414926a3a?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  }
];

const categories = [
  { name: "Solar Panels", count: 2 },
  { name: "Batteries", count: 2 },
  { name: "Inverters", count: 3 },
  { name: "Mounting Systems", count: 1 },
  { name: "Controllers", count: 1 },
  { name: "Accessories", count: 2 },
  { name: "Complete Systems", count: 1 }
];

const SolarCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = solarProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleContactRedirect = (product: typeof solarProducts[0]) => {
    // Store product info in localStorage for contact form pre-filling
    localStorage.setItem('selectedProduct', JSON.stringify({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    }));
    window.location.href = '/contact';
  };

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
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="max-w-[83rem] mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-heading">
              Our Product Catalog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of solar panels, batteries, inverters, and accessories for your energy needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="max-w-[83rem] mx-auto px-6 py-8">
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
                      <label key={category.name} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => toggleCategory(category.name)}
                          className="rounded border-border text-brandColor focus:ring-brandColor"
                        />
                        <span className="text-muted-foreground text-sm">
                          {category.name} ({category.count})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
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
                </div>

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
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            <motion.div
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
                    <CardContent className="p-0">
                      <Link to={`/product/${product.id}`} className="block">
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

                        <div className="p-4">
                          <h3 className="text-heading font-semibold mb-2 line-clamp-2 hover:text-brandColor transition-colors">{product.name}</h3>

                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {product.description}
                          </p>

                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl font-bold text-heading">
                              ₦{product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-muted-foreground line-through">
                                ₦{product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>

                      <div className="p-4 pt-0">
                        <Button
                          className="w-full bg-brandColor hover:bg-brandColor/80 text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            handleContactRedirect(product);
                          }}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'Contact to Buy' : 'Out of Stock'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SolarCatalog;
