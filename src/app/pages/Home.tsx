import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Header } from "../components/Header";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Search,
  Users,
  Wrench,
  House,
  Shield,
  Sparkles,
  ArrowRight,
  Star,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Home as HomeIcon,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Search,
      title: "Smart Property Search",
      description: "AI-powered search that understands your preferences and finds your perfect match.",
    },
    {
      icon: Users,
      title: "AI Roommate Matching",
      description: "Advanced algorithms match you with compatible roommates based on lifestyle and habits.",
    },
    {
      icon: Wrench,
      title: "24/7 Repair Support",
      description: "Instant maintenance requests with real-time tracking and emergency support.",
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Every property is verified and inspected for quality and authenticity.",
    },
    {
      icon: Sparkles,
      title: "Virtual Tours",
      description: "Explore properties from anywhere with immersive 3D virtual tours.",
    },
    {
      icon: HomeIcon,
      title: "Easy Move-In",
      description: "Streamlined process from application to keys, all handled digitally.",
    },
  ];

  const featuredProperties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MjQyMDAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Modern Downtown Loft",
      location: "Manhattan, NY",
      price: "$2,800",
      beds: 2,
      baths: 2,
      sqft: 1200,
      rating: 4.9,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyMzc1NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Luxury Penthouse",
      location: "San Francisco, CA",
      price: "$4,500",
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      rating: 5.0,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507138451611-3001135909fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwc3R1ZGlvJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3MjQxMjQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Cozy Studio",
      location: "Austin, TX",
      price: "$1,400",
      beds: 1,
      baths: 1,
      sqft: 600,
      rating: 4.7,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content: "Found my perfect apartment and an amazing roommate through RentAI. The AI matching is incredibly accurate!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Designer",
      content: "The 24/7 repair support is a game-changer. Had a plumbing issue at midnight and it was resolved by morning.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      content: "Virtual tours saved me so much time. I found and signed for my place without ever visiting in person!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm">AI-Powered Rental Platform</span>
            </div>
            
            <h1 className="mb-6 text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Find Your Perfect Home & Roommate
            </h1>
            
            <p className="mb-8 text-xl text-gray-600">
              Experience the future of renting with AI-powered matching, virtual tours, and 24/7 support
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/listings">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Browse Properties
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/roommate-finder">
                <Button size="lg" variant="outline" className="gap-2">
                  Find a Roommate
                  <Users className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Search Bar */}
            <Card className="mx-auto max-w-3xl shadow-lg">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter location..."
                      className="flex-1 bg-transparent outline-none"
                    />
                  </div>
                  <Button className="gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose RentAI</h2>
            <p className="text-gray-600 text-lg">Everything you need for a seamless rental experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Properties</h2>
              <p className="text-gray-600 text-lg">Handpicked listings just for you</p>
            </div>
            <Link to="/listings">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Link key={property.id} to={`/property/${property.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{property.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </div>
                    <h3 className="mb-4 text-xl font-semibold">{property.title}</h3>
                    <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <BedDouble className="h-4 w-4" />
                        {property.beds} Beds
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        {property.baths} Baths
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize className="h-4 w-4" />
                        {property.sqft} sqft
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 text-lg">Join thousands of happy renters</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 text-gray-600 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
          <p className="text-xl mb-8 opacity-90">Join RentAI today and experience the future of renting</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings">
              <Button size="lg" variant="secondary" className="gap-2">
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white hover:text-purple-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                  <House className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-semibold">RentAI</span>
              </div>
              <p className="text-gray-400">The future of renting, powered by AI.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/listings" className="hover:text-white transition-colors">Browse Listings</Link></li>
                <li><Link to="/roommate-finder" className="hover:text-white transition-colors">Find Roommate</Link></li>
                <li><Link to="/repair-support" className="hover:text-white transition-colors">Repair Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2026 RentAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
