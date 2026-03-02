import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Star,
  Heart,
  Filter,
  SlidersHorizontal,
} from "lucide-react";

export function Listings() {
  const [priceRange, setPriceRange] = useState([1000, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MjQyMDAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Modern Downtown Loft",
      location: "Manhattan, NY",
      price: 2800,
      beds: 2,
      baths: 2,
      sqft: 1200,
      rating: 4.9,
      tags: ["Pet Friendly", "Gym"],
      available: "Mar 15",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyMzc1NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Luxury Penthouse",
      location: "San Francisco, CA",
      price: 4500,
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      rating: 5.0,
      tags: ["Parking", "Rooftop"],
      available: "Available Now",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507138451611-3001135909fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwc3R1ZGlvJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3MjQxMjQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Cozy Studio",
      location: "Austin, TX",
      price: 1400,
      beds: 1,
      baths: 1,
      sqft: 600,
      rating: 4.7,
      tags: ["Utilities Included"],
      available: "Apr 1",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1680210849773-f97a41c6b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3MjM2ODQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Contemporary Family Home",
      location: "Seattle, WA",
      price: 3200,
      beds: 3,
      baths: 2,
      sqft: 1500,
      rating: 4.8,
      tags: ["Pet Friendly", "Backyard"],
      available: "Mar 20",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1688888019305-27d5de949222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXBhcnRtZW50JTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyNDIwMDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Urban High-Rise",
      location: "Chicago, IL",
      price: 2200,
      beds: 2,
      baths: 1.5,
      sqft: 950,
      rating: 4.6,
      tags: ["Doorman", "Pool"],
      available: "Available Now",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1674494777503-f5d3484104c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjB2aWV3JTIwYmFsY29ueXxlbnwxfHx8fDE3NzI0NDU5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Penthouse with View",
      location: "Miami, FL",
      price: 3800,
      beds: 2,
      baths: 2,
      sqft: 1400,
      rating: 4.9,
      tags: ["Ocean View", "Balcony"],
      available: "Mar 25",
    },
  ];

  const amenities = [
    "Pet Friendly",
    "Parking",
    "Gym",
    "Pool",
    "Doorman",
    "Laundry",
    "Air Conditioning",
    "Dishwasher",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Browse Properties</h1>
          <p className="text-xl opacity-90">Find your perfect home from our curated listings</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-80 flex-shrink-0`}>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm">Reset</Button>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="mb-3 block font-medium">Price Range</label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={500}
                    max={6000}
                    step={100}
                    className="mb-3"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="mb-6">
                  <label className="mb-3 block font-medium">Bedrooms</label>
                  <div className="flex gap-2">
                    {["Studio", "1", "2", "3", "4+"].map((bed) => (
                      <Button key={bed} variant="outline" size="sm" className="flex-1">
                        {bed}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div className="mb-6">
                  <label className="mb-3 block font-medium">Bathrooms</label>
                  <div className="flex gap-2">
                    {["1", "1.5", "2", "2.5+"].map((bath) => (
                      <Button key={bath} variant="outline" size="sm" className="flex-1">
                        {bath}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <label className="mb-3 block font-medium">Amenities</label>
                  <div className="space-y-3">
                    {amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <Checkbox id={amenity} />
                        <label htmlFor={amenity} className="text-sm cursor-pointer">
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <label className="mb-3 block font-medium">Availability</label>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      Available Now
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Within 30 Days
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Custom Date
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{properties.length}</span> properties found
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <select className="rounded-lg border px-4 py-2 text-sm outline-none">
                  <option>Most Relevant</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Property Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {properties.map((property) => (
                <Link key={property.id} to={`/property/${property.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all group h-full">
                    <div className="relative h-64 overflow-hidden">
                      <ImageWithFallback
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="bg-white px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{property.rating}</span>
                        </div>
                        <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                          <Heart className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-blue-600">{property.available}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {property.location}
                      </div>
                      <h3 className="mb-3 text-xl font-semibold">{property.title}</h3>
                      
                      <div className="mb-4 flex flex-wrap gap-2">
                        {property.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

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

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <span className="text-2xl font-bold text-blue-600">
                            ${property.price.toLocaleString()}
                          </span>
                          <span className="text-gray-500 ml-1">/month</span>
                        </div>
                        <Button size="sm" className="gap-2">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
