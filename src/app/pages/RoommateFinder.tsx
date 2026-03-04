import { useState } from "react";
import { Header } from "../components/Header";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Sparkles,
  Users,
  Heart,
  MessageCircle,
  Calendar,
  MapPin,
  Briefcase,
  Coffee,
  Music,
  DumbbellIcon,
  Book,
  Dog,
  Moon,
  Sun,
  Check,
  X,
} from "lucide-react";

export function RoommateFinder() {
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);

  const userProfile = {
    name: "You",
    age: 28,
    occupation: "Software Engineer",
    budget: "$1,400 - $2,000",
    moveIn: "Apr 1, 2026",
    preferences: {
      cleanliness: 85,
      socialLevel: 70,
      quietHours: true,
      petFriendly: true,
      smoking: false,
      schedule: "Early Bird",
    },
    interests: ["Fitness", "Reading", "Cooking", "Hiking"],
  };

  const potentialRoommates = [
    {
      id: 1,
      name: "Nguyễn Văn Hà",
      age: 26,
      image: "https://images.unsplash.com/photo-1625111958853-5cafac52eb67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      occupation: "Graphic Designer",
      location: "Looking in Da Nang, Vietnam",
      budget: "1,500,000 - 2,000,000 VND",
      matchScore: 94,
      moveIn: "Apr 1, 2026",
      bio: "Creative professional who loves keeping a tidy space. Enjoy morning workouts and quiet evenings. Looking for a respectful roommate to share a great apartment!",
      preferences: {
        cleanliness: 90,
        socialLevel: 65,
        quietHours: true,
        petFriendly: true,
        smoking: false,
        schedule: "Early Bird",
      },
      interests: ["Fitness", "Art", "Cooking", "Yoga"],
      lifestyle: {
        work: "Hybrid (3 days office)",
        social: "Moderate - occasional gatherings",
        pets: "Open to pets",
        cooking: "Love to cook",
      },
    },
    {
      id: 2,
      name: "Đào Thị Hồng Nhung",
      age: 23,
      image: "https://images.unsplash.com/photo-1747625119727-05ed172af729?q=80&w=668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      occupation: "Marketing Manager",
      location: "Looking in Ha Noi, Vietnam",
      budget: "2,000,000 - 3,000,000 VND",
      matchScore: 87,
      moveIn: "Mar 15, 2026",
      bio: "Professional working from home most days. I value a clean, organized space and good communication. Love hosting small dinner parties on weekends!",
      preferences: {
        cleanliness: 85,
        socialLevel: 80,
        quietHours: true,
        petFriendly: false,
        smoking: false,
        schedule: "Night Owl",
      },
      interests: ["Reading", "Wine Tasting", "Traveling", "Photography"],
      lifestyle: {
        work: "Remote",
        social: "Social - regular hosting",
        pets: "No pets preferred",
        cooking: "Occasional cooking",
      },
    },
    {
      id: 3,
      name: "Phạm Bảo Ngọc",
      age: 22,
      image: "https://images.unsplash.com/photo-1439778615639-28529f7628bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      occupation: "Data Analyst",
      location: "Looking in TP. HCM, Vietnam",
      budget: "1,400,000 - 1,900,000 VND",
      matchScore: 91,
      moveIn: "Apr 1, 2026",
      bio: "Easy-going professional who respects shared spaces. Early riser who enjoys weekend hikes. Looking for someone with similar habits and interests!",
      preferences: {
        cleanliness: 88,
        socialLevel: 60,
        quietHours: true,
        petFriendly: true,
        smoking: false,
        schedule: "Early Bird",
      },
      interests: ["Hiking", "Gaming", "Fitness", "Music"],
      lifestyle: {
        work: "Office (9-5)",
        social: "Low-key - prefer quiet",
        pets: "Has a small dog",
        cooking: "Meal prep enthusiast",
      },
    },
  ];

  const compatibilityFactors = [
    { label: "Cleanliness", yourScore: 85, theirScore: 90, icon: Sparkles },
    { label: "Social Level", yourScore: 70, theirScore: 65, icon: Users },
    { label: "Schedule Match", yourScore: 90, theirScore: 90, icon: Calendar },
    { label: "Lifestyle", yourScore: 85, theirScore: 88, icon: Coffee },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-8 w-8" />
            <h1 className="text-4xl font-bold">AI Roommate Matching</h1>
          </div>
          <p className="text-xl opacity-90">
            Find your perfect roommate based on lifestyle, habits, and preferences
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Your Profile Card */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {userProfile.name[0]}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{userProfile.name}</h3>
                  <p className="text-gray-600 text-sm">{userProfile.occupation}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Budget</p>
                    <p className="font-medium">{userProfile.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Move-in Date</p>
                    <p className="font-medium">{userProfile.moveIn}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Preferences</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Cleanliness</span>
                        <span className="font-medium">{userProfile.preferences.cleanliness}%</span>
                      </div>
                      <Progress value={userProfile.preferences.cleanliness} />
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Social Level</span>
                        <span className="font-medium">{userProfile.preferences.socialLevel}%</span>
                      </div>
                      <Progress value={userProfile.preferences.socialLevel} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Lifestyle</p>
                    <div className="flex flex-wrap gap-2">
                      {userProfile.preferences.schedule === "Early Bird" && (
                        <Badge variant="secondary" className="gap-1">
                          <Sun className="h-3 w-3" />
                          Early Bird
                        </Badge>
                      )}
                      {userProfile.preferences.quietHours && (
                        <Badge variant="secondary" className="gap-1">
                          <Moon className="h-3 w-3" />
                          Quiet Hours
                        </Badge>
                      )}
                      {userProfile.preferences.petFriendly && (
                        <Badge variant="secondary" className="gap-1">
                          <Dog className="h-3 w-3" />
                          Pet Friendly
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Interests</p>
                    <div className="flex flex-wrap gap-2">
                      {userProfile.interests.map((interest) => (
                        <Badge key={interest} variant="outline">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6">Edit Profile</Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Your Top Matches</h2>
              <p className="text-gray-600">
                Based on your preferences, we found {potentialRoommates.length} highly compatible roommates
              </p>
            </div>

            <div className="space-y-6">
              {potentialRoommates.map((roommate) => (
                <Card key={roommate.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="md:flex">
                      {/* Profile Image */}
                      <div className="md:w-64 h-64 md:h-auto flex-shrink-0 relative">
                        <ImageWithFallback
                          src={roommate.image}
                          alt={roommate.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <div className="bg-white px-3 py-2 rounded-full shadow-lg">
                            <div className="flex items-center gap-2">
                              <Sparkles className="h-4 w-4 text-purple-600" />
                              <span className="font-bold text-purple-600">{roommate.matchScore}% Match</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-1">
                              {roommate.name}, {roommate.age}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                {roommate.occupation}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {roommate.location}
                              </div>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Heart className="h-6 w-6 text-gray-400 hover:text-red-500" />
                          </button>
                        </div>

                        <p className="text-gray-600 mb-4">{roommate.bio}</p>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Budget</p>
                            <p className="font-medium">{roommate.budget}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Move-in</p>
                            <p className="font-medium">{roommate.moveIn}</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2">Interests</p>
                          <div className="flex flex-wrap gap-2">
                            {roommate.interests.map((interest) => (
                              <Badge key={interest} variant="secondary">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            onClick={() =>
                              setSelectedProfile(selectedProfile === roommate.id ? null : roommate.id)
                            }
                            variant="outline"
                            className="flex-1"
                          >
                            {selectedProfile === roommate.id ? "Hide Details" : "View Details"}
                          </Button>
                          <Button className="flex-1 gap-2">
                            <MessageCircle className="h-4 w-4" />
                            Message
                          </Button>
                        </div>

                        {/* Expanded Details */}
                        {selectedProfile === roommate.id && (
                          <div className="mt-6 pt-6 border-t">
                            <Tabs defaultValue="compatibility">
                              <TabsList className="mb-4">
                                <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
                                <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
                                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                              </TabsList>

                              <TabsContent value="compatibility" className="space-y-4">
                                {compatibilityFactors.map((factor) => {
                                  const Icon = factor.icon;
                                  const average = (factor.yourScore + factor.theirScore) / 2;
                                  return (
                                    <div key={factor.label}>
                                      <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                          <Icon className="h-4 w-4 text-gray-600" />
                                          <span className="font-medium">{factor.label}</span>
                                        </div>
                                        <span className="text-sm text-gray-600">{average.toFixed(0)}% compatible</span>
                                      </div>
                                      <div className="flex gap-2 items-center text-sm">
                                        <span className="text-gray-500 w-12">You:</span>
                                        <Progress value={factor.yourScore} className="flex-1" />
                                        <span className="w-12 text-right">{factor.yourScore}%</span>
                                      </div>
                                      <div className="flex gap-2 items-center text-sm mt-1">
                                        <span className="text-gray-500 w-12">Them:</span>
                                        <Progress value={factor.theirScore} className="flex-1" />
                                        <span className="w-12 text-right">{factor.theirScore}%</span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </TabsContent>

                              <TabsContent value="lifestyle" className="space-y-3">
                                {Object.entries(roommate.lifestyle).map(([key, value]) => (
                                  <div key={key} className="flex items-center justify-between py-2 border-b last:border-0">
                                    <span className="font-medium capitalize">{key}:</span>
                                    <span className="text-gray-600">{value}</span>
                                  </div>
                                ))}
                              </TabsContent>

                              <TabsContent value="preferences" className="space-y-3">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="flex items-center gap-2">
                                    {roommate.preferences.quietHours ? (
                                      <Check className="h-5 w-5 text-green-600" />
                                    ) : (
                                      <X className="h-5 w-5 text-red-600" />
                                    )}
                                    <span>Quiet Hours</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {roommate.preferences.petFriendly ? (
                                      <Check className="h-5 w-5 text-green-600" />
                                    ) : (
                                      <X className="h-5 w-5 text-red-600" />
                                    )}
                                    <span>Pet Friendly</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {!roommate.preferences.smoking ? (
                                      <Check className="h-5 w-5 text-green-600" />
                                    ) : (
                                      <X className="h-5 w-5 text-red-600" />
                                    )}
                                    <span>Non-Smoking</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="secondary">{roommate.preferences.schedule}</Badge>
                                  </div>
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
