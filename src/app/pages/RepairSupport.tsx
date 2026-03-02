import { useState } from "react";
import { Header } from "../components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Wrench,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Phone,
  Video,
  Plus,
  Calendar,
  MapPin,
  User,
  Upload,
  Zap,
} from "lucide-react";

export function RepairSupport() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Active Tickets", value: "2", icon: AlertCircle, color: "text-blue-600" },
    { label: "Avg Response Time", value: "< 5 min", icon: Clock, color: "text-green-600" },
    { label: "Resolved This Month", value: "8", icon: CheckCircle2, color: "text-purple-600" },
    { label: "Maintenance Score", value: "98%", icon: Zap, color: "text-yellow-600" },
  ];

  const activeTickets = [
    {
      id: "TK-2847",
      title: "Kitchen Faucet Leaking",
      category: "Plumbing",
      priority: "High",
      status: "In Progress",
      created: "2 hours ago",
      assignee: "Mike Johnson",
      eta: "Today, 4:00 PM",
      description: "Kitchen faucet has been leaking for the past day. Water drips continuously even when fully closed.",
      updates: [
        { time: "10:30 AM", message: "Technician Mike Johnson assigned to your ticket" },
        { time: "10:45 AM", message: "Parts ordered and will arrive by 3:00 PM" },
        { time: "11:30 AM", message: "Mike is en route to your location" },
      ],
    },
    {
      id: "TK-2851",
      title: "AC Not Cooling Properly",
      category: "HVAC",
      priority: "Medium",
      status: "Scheduled",
      created: "1 day ago",
      assignee: "Sarah Chen",
      eta: "Tomorrow, 10:00 AM",
      description: "Air conditioning unit is running but not cooling the apartment effectively. Temperature remains at 76°F.",
      updates: [
        { time: "Yesterday 3:45 PM", message: "Support ticket created" },
        { time: "Yesterday 4:00 PM", message: "Scheduled for inspection tomorrow" },
      ],
    },
  ];

  const recentTickets = [
    {
      id: "TK-2834",
      title: "Dishwasher Not Draining",
      category: "Appliances",
      status: "Resolved",
      resolved: "3 days ago",
      rating: 5,
    },
    {
      id: "TK-2812",
      title: "Bedroom Light Fixture",
      category: "Electrical",
      status: "Resolved",
      resolved: "1 week ago",
      rating: 5,
    },
    {
      id: "TK-2798",
      title: "Bathroom Tile Repair",
      category: "General",
      status: "Resolved",
      resolved: "2 weeks ago",
      rating: 4,
    },
  ];

  const emergencyContacts = [
    { type: "Emergency Hotline", number: "1-800-RENT-911", available: "24/7", icon: Phone },
    { type: "Live Chat", status: "Online Now", available: "24/7", icon: MessageSquare },
    { type: "Video Support", status: "Available", available: "8 AM - 10 PM", icon: Video },
  ];

  const commonIssues = [
    { title: "Plumbing Issues", icon: "🚰", count: 45 },
    { title: "Electrical", icon: "⚡", count: 32 },
    { title: "HVAC", icon: "❄️", count: 28 },
    { title: "Appliances", icon: "🔧", count: 38 },
    { title: "Locks & Keys", icon: "🔑", count: 15 },
    { title: "General Maintenance", icon: "🏠", count: 52 },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Scheduled":
        return "bg-purple-100 text-purple-700";
      case "Resolved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="h-8 w-8" />
            <h1 className="text-4xl font-bold">24/7 Repair Support</h1>
          </div>
          <p className="text-xl opacity-90">
            Get help anytime, track repairs in real-time, and maintain your home effortlessly
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gray-50`}>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="flex items-center justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="active">Active ({activeTickets.length})</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="new">New Request</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Tickets</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeTickets.map((ticket) => (
                      <div
                        key={ticket.id}
                        className="p-4 border rounded-lg hover:border-blue-500 transition-colors cursor-pointer"
                        onClick={() => setActiveTab("active")}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm text-gray-600 font-mono">{ticket.id}</span>
                              <Badge className={getPriorityColor(ticket.priority)} variant="outline">
                                {ticket.priority}
                              </Badge>
                              <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                            </div>
                            <h4 className="font-semibold text-lg mb-1">{ticket.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{ticket.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4 text-gray-600">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {ticket.assignee}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              ETA: {ticket.eta}
                            </div>
                          </div>
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Common Issues</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {commonIssues.map((issue, index) => (
                        <button
                          key={index}
                          className="p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
                          onClick={() => setActiveTab("new")}
                        >
                          <div className="text-3xl mb-2">{issue.icon}</div>
                          <p className="font-medium text-sm mb-1">{issue.title}</p>
                          <p className="text-xs text-gray-600">{issue.count} resolved this month</p>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="active" className="space-y-6">
                {activeTickets.map((ticket) => (
                  <Card key={ticket.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle>{ticket.title}</CardTitle>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 font-mono">{ticket.id}</span>
                            <Badge className={getPriorityColor(ticket.priority)} variant="outline">
                              {ticket.priority} Priority
                            </Badge>
                            <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4 pb-4 border-b">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Category</p>
                          <p className="font-medium">{ticket.category}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Assigned To</p>
                          <p className="font-medium">{ticket.assignee}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">ETA</p>
                          <p className="font-medium text-blue-600">{ticket.eta}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Description</h4>
                        <p className="text-gray-600">{ticket.description}</p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Updates</h4>
                        <div className="space-y-3">
                          {ticket.updates.map((update, index) => (
                            <div key={index} className="flex gap-3">
                              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-600"></div>
                              <div className="flex-1">
                                <p className="text-sm text-gray-600">{update.time}</p>
                                <p className="text-sm">{update.message}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4 border-t">
                        <Button variant="outline" className="flex-1">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Technician
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          Reschedule
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Tickets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentTickets.map((ticket) => (
                        <div
                          key={ticket.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:border-green-500 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm text-gray-600 font-mono">{ticket.id}</span>
                              <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                            </div>
                            <h4 className="font-medium mb-1">{ticket.title}</h4>
                            <p className="text-sm text-gray-600">
                              {ticket.category} • Resolved {ticket.resolved}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`text-lg ${
                                    i < ticket.rating ? "text-yellow-400" : "text-gray-300"
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <Button size="sm" variant="ghost">View</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="new">
                <Card>
                  <CardHeader>
                    <CardTitle>Submit New Repair Request</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Issue Category</label>
                        <select className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500">
                          <option>Select a category</option>
                          <option>Plumbing</option>
                          <option>Electrical</option>
                          <option>HVAC</option>
                          <option>Appliances</option>
                          <option>Locks & Keys</option>
                          <option>General Maintenance</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Priority Level</label>
                        <div className="flex gap-3">
                          <Button type="button" variant="outline" className="flex-1">Low</Button>
                          <Button type="button" variant="outline" className="flex-1">Medium</Button>
                          <Button type="button" variant="outline" className="flex-1 border-red-300 text-red-600">
                            High
                          </Button>
                          <Button type="button" variant="outline" className="flex-1 border-red-600 text-red-600">
                            Emergency
                          </Button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Issue Title</label>
                        <Input placeholder="Brief description of the issue" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Detailed Description</label>
                        <Textarea
                          placeholder="Please provide as much detail as possible..."
                          rows={5}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Location in Unit</label>
                        <Input placeholder="e.g., Kitchen, Master Bathroom, Living Room" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Photos/Videos (Optional)
                        </label>
                        <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-sm text-gray-600 mb-1">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG, MP4 up to 10MB</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Preferred Service Time</label>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input type="date" />
                          <select className="rounded-lg border px-4 py-2 outline-none focus:border-blue-500">
                            <option>Any time</option>
                            <option>Morning (8 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 5 PM)</option>
                            <option>Evening (5 PM - 8 PM)</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button type="submit" className="flex-1 gap-2">
                          <Plus className="h-4 w-4" />
                          Submit Request
                        </Button>
                        <Button type="button" variant="outline" className="gap-2">
                          <Phone className="h-4 w-4" />
                          Call Support
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Emergency Contacts */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">Emergency Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {emergencyContacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start gap-3 bg-white hover:bg-red-100 border-red-200"
                    >
                      <Icon className="h-5 w-5 text-red-600" />
                      <div className="flex-1 text-left">
                        <p className="font-medium text-sm">{contact.type}</p>
                        <p className="text-xs text-gray-600">
                          {"number" in contact ? contact.number : contact.status}
                        </p>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Plus className="h-4 w-4" />
                  New Request
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule Maintenance
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Live Chat
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Video className="h-4 w-4" />
                  Video Support
                </Button>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium mb-1">💡 Quick Tip</p>
                  <p className="text-gray-600">
                    For faster service, include photos and videos with your repair request.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium mb-1">✅ Did You Know?</p>
                  <p className="text-gray-600">
                    Our average response time for urgent requests is under 5 minutes!
                  </p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
