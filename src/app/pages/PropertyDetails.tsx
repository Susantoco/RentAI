import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Star,
  Heart,
  Share2,
  Calendar,
  ArrowLeft,
  Check,
  Wifi,
  Car,
  Dumbbell,
  Wind,
  ShieldCheck,
  Tv,
  User,
  Phone,
  Mail,
} from "lucide-react";

export function PropertyDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const property = {
    id: 1,
    title: "Modern Downtown Loft",
    location: "Da Nang, Vietnam",
    address: "123 Main Street, Da Nang, Vietnam",
    price: 2800000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    rating: 4.9,
    reviews: 24,
    available: "Mar 15, 2026",
    description:
      "Experience luxury living in this stunning modern loft in the heart of Viet Nam. This beautifully designed 2-bedroom, 2-bathroom apartment features floor-to-ceiling windows, hardwood floors, and high-end finishes throughout. The open-concept living area is perfect for entertaining, while the gourmet kitchen comes equipped with stainless steel appliances and granite countertops.",
    images: [
      "https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc3MjQyMDAwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyMzc1NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1680210849773-f97a41c6b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc3MjM2ODQ2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1674494777503-f5d3484104c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjB2aWV3JTIwYmFsY29ueXxlbnwxfHx8fDE3NzI0NDU5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    amenities: [
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Car, label: "Parking Space" },
      { icon: Dumbbell, label: "Fitness Center" },
      { icon: Wind, label: "Central AC" },
      { icon: ShieldCheck, label: "24/7 Security" },
      { icon: Tv, label: "Smart TV Ready" },
    ],
    features: [
      "Floor-to-ceiling windows",
      "Hardwood floors",
      "In-unit washer/dryer",
      "Stainless steel appliances",
      "Granite countertops",
      "Walk-in closets",
      "Private balcony",
      "Pet friendly",
      "Dishwasher",
      "Microwave",
      "Storage space",
      "Bike storage",
    ],
    landlord: {
      name: "Premium Properties LLC",
      rating: 4.8,
      properties: 45,
      responseTime: "< 2 hours",
    },
    nearbyPlaces: [
      { name: "Subway Station", distance: "0.2 mi" },
      { name: "Central Park", distance: "0.5 mi" },
      { name: "Whole Foods", distance: "0.3 mi" },
      { name: "Bryant Park", distance: "0.4 mi" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Back Button */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/listings" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Back to Listings
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="mb-8">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="col-span-4 md:col-span-3 h-96 rounded-xl overflow-hidden relative group">
              <ImageWithFallback
                src={property.images[selectedImage]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="hidden md:flex md:col-span-1 flex-col gap-4">
              {property.images.slice(1, 4).map((image, index) => (
                <div
                  key={index + 1}
                  className={`h-28 rounded-xl overflow-hidden cursor-pointer transition-all ${
                    selectedImage === index + 1 ? "ring-2 ring-blue-600" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(index + 1)}
                >
                  <ImageWithFallback src={image} alt={`View ${index + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:hidden gap-2 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedImage === index ? "ring-2 ring-blue-600" : "opacity-70"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-blue-600">Available {property.available}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{property.rating}</span>
                  <span className="text-gray-600">({property.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-3">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>{property.address}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <BedDouble className="h-5 w-5 text-gray-600" />
                <span className="font-medium">{property.beds} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-gray-600" />
                <span className="font-medium">{property.baths} Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="h-5 w-5 text-gray-600" />
                <span className="font-medium">{property.sqft} sqft</span>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mb-8">
              <TabsList className="mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>

              <TabsContent value="description">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About This Property</h3>
                    <p className="text-gray-600 leading-relaxed">{property.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="amenities">
                <div className="grid md:grid-cols-3 gap-6">
                  {property.amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <Card key={index}>
                        <CardContent className="p-6 text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-3">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <p className="font-medium">{amenity.label}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="location">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Address</h3>
                    <p className="text-gray-600">{property.address}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Nearby</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {property.nearbyPlaces.map((place, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <span className="font-medium">{place.name}</span>
                          <span className="text-gray-600">{place.distance}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Landlord Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Property Manager</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                    {property.landlord.name[0]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{property.landlord.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {property.landlord.rating} rating
                      </div>
                      <span>•</span>
                      <span>{property.landlord.properties} properties</span>
                      <span>•</span>
                      <span>Response: {property.landlord.responseTime}</span>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-blue-600">
                      ${property.price.toLocaleString()}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Plus utilities and fees</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Security Deposit</span>
                    <span className="font-medium">${property.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Lease Term</span>
                    <span className="font-medium">12 months</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Available</span>
                    <span className="font-medium">{property.available}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full gap-2" size="lg">
                    <Calendar className="h-5 w-5" />
                    Schedule Tour
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Contact Agent
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-900 mb-1">
                        Verified Property
                      </p>
                      <p className="text-xs text-blue-700">
                        This property has been verified and inspected by our team
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-purple-900 mb-1">
                        Find a Roommate
                      </p>
                      <p className="text-xs text-purple-700 mb-3">
                        Split the rent with AI-matched compatible roommates
                      </p>
                      <Link to="/roommate-finder">
                        <Button variant="outline" size="sm" className="w-full border-purple-300 text-purple-700 hover:bg-purple-100">
                          Find Roommates
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
