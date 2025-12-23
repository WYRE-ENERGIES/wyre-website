import { useState } from 'react';
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import OtherNavbar from '../components/navbar/OtherNavbar';
import Footer from '../sections/Footer';
import { motion } from 'framer-motion';

// Solar system packages data
const solarProducts = [
  {
    id: 1,
    name: "10Kva Inverter with 15kwh Lithium Battery",
    category: "Complete Systems",
    description: "Complete solar power system featuring a 10Kva hybrid inverter paired with a 15kwh lithium battery. Perfect for small to medium residential applications with reliable backup power.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0",
    inStock: true
  },
  {
    id: 2,
    name: "10Kva Inverter with 30kwh Battery",
    category: "Complete Systems",
    description: "Enhanced solar power system with 10Kva inverter and larger 30kwh lithium battery capacity. Ideal for medium-sized homes requiring extended backup power and energy independence.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0",
    inStock: true
  },
  {
    id: 3,
    name: "20kva with 60kwh Lithium Battery",
    category: "Complete Systems",
    description: "Powerful 20kva inverter system with 60kwh lithium battery storage. Designed for large residential or small commercial installations with high energy demands.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
    inStock: true
  },
  {
    id: 4,
    name: "40kva with 100kwh Lithium Battery",
    category: "Complete Systems",
    description: "Commercial-grade 40kva inverter system with 100kwh lithium battery bank. Perfect for large commercial buildings, offices, and industrial applications requiring substantial power capacity.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
    inStock: true
  },
  {
    id: 5,
    name: "80kva with 160kwh Battery",
    category: "Complete Systems",
    description: "High-capacity 80kva inverter system with 160kwh lithium battery storage. Engineered for large-scale commercial and industrial facilities with significant energy requirements.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    inStock: true
  },
  {
    id: 6,
    name: "80kva with 210kwh Battery",
    category: "Complete Systems",
    description: "Maximum capacity 80kva inverter system with 210kwh lithium battery bank. The ultimate solution for large industrial facilities, data centers, and operations requiring maximum energy storage and reliability.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    inStock: true
  }
];

const categories = [
  { name: "Complete Systems", count: 6 }
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

const SolarCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedKVA, setSelectedKVA] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = solarProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const productKVA = extractKVA(product.name);
    const matchesKVA = selectedKVA.length === 0 || (productKVA && selectedKVA.includes(productKVA));

    return matchesSearch && matchesCategory && matchesKVA;
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
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleKVA = (kva: string) => {
    setSelectedKVA(prev =>
      prev.includes(kva)
        ? prev.filter(k => k !== kva)
        : [...prev, kva]
    );
  };

  const handleContactRedirect = (product: typeof solarProducts[0]) => {
    // Store product info in localStorage for contact form pre-filling
    localStorage.setItem('selectedProduct', JSON.stringify({
      name: product.name,
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
        <div className="container mx-auto px-6 py-8">
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

                {/* KVA Filter */}
                <div className="mb-6">
                  <h4 className="text-heading font-medium mb-3">KVA Rating</h4>
                  <div className="space-y-2">
                    {kvaOptions.map((kva) => (
                      <label key={kva.name} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedKVA.includes(kva.name)}
                          onChange={() => toggleKVA(kva.name)}
                          className="rounded border-border text-brandColor focus:ring-brandColor"
                        />
                        <span className="text-muted-foreground text-sm">
                          {kva.name} ({kva.count})
                        </span>
                      </label>
                    ))}
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

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                          {product.description}
                        </p>

                        <div className="mt-auto pt-4">
                          <Button
                            className="w-full bg-brandColor hover:bg-brandColor/80 text-white"
                            onClick={() => handleContactRedirect(product)}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Get a quote' : 'Out of Stock'}
                          </Button>
                        </div>
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
