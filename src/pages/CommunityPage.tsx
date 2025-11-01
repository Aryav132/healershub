import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { mockResponders } from '../data/mockData';
import { Hospital, Car, Package, Users, MapPin, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { toast } from 'sonner@2.0.3';

export function CommunityPage() {
  const [filter, setFilter] = useState<string>('all');

  const filteredResponders = mockResponders.filter(
    (r) => filter === 'all' || r.type === filter
  );

  const getIcon = (type: string) => {
    switch (type) {
      case 'hospital': return <Hospital className="w-5 h-5" />;
      case 'auto': return <Car className="w-5 h-5" />;
      case 'pharmacy': return <Package className="w-5 h-5" />;
      case 'ngo': return <Users className="w-5 h-5" />;
      default: return <MapPin className="w-5 h-5" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'hospital': return 'bg-red-100 text-red-700';
      case 'auto': return 'bg-blue-100 text-blue-700';
      case 'pharmacy': return 'bg-green-100 text-green-700';
      case 'ngo': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-blue-900 mb-4">Emergency Response Network</h1>
          <p className="text-xl text-gray-600 mb-6">
            Connect with hospitals, responders, and volunteers in your community
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button>
              <MapPin className="w-4 h-4 mr-2" />
              View Near Me
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Register As Responder</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join the Responder Network</DialogTitle>
                  <DialogDescription>
                    Help save lives in your community by becoming a registered responder
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  toast.success('Application submitted! We will contact you soon.');
                }}>
                  <div>
                    <Label htmlFor="resp-name">Your Name</Label>
                    <Input id="resp-name" placeholder="Full name" required />
                  </div>
                  <div>
                    <Label htmlFor="resp-phone">Phone Number</Label>
                    <Input id="resp-phone" type="tel" placeholder="+91-XXXXXXXXXX" required />
                  </div>
                  <div>
                    <Label htmlFor="resp-type">Responder Type</Label>
                    <select id="resp-type" className="w-full border rounded-md p-2" required>
                      <option value="">Select type</option>
                      <option value="auto">Auto/Taxi Driver</option>
                      <option value="hospital">Healthcare Worker</option>
                      <option value="ngo">NGO Volunteer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="resp-city">City</Label>
                    <Input id="resp-city" placeholder="Your city" required />
                  </div>
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline">Learn About CSR Partnerships</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Responder Map</CardTitle>
                <CardDescription>
                  Live view of nearby emergency responders and healthcare facilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg h-96 flex items-center justify-center border border-blue-200">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-700 mb-2">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      Showing {mockResponders.length} responders within 5 km radius
                    </p>
                    <div className="mt-4 space-x-2">
                      <Badge className="bg-red-100 text-red-700">
                        <Hospital className="w-3 h-3 mr-1" />
                        Hospitals
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-700">
                        <Car className="w-3 h-3 mr-1" />
                        Transport
                      </Badge>
                      <Badge className="bg-green-100 text-green-700">
                        <Package className="w-3 h-3 mr-1" />
                        Pharmacies
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filter & Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Network Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Hospital className="w-5 h-5 text-red-600" />
                    <span className="text-sm">Hospitals</span>
                  </div>
                  <span className="text-red-600">
                    {mockResponders.filter(r => r.type === 'hospital').length}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Auto Drivers</span>
                  </div>
                  <span className="text-blue-600">
                    {mockResponders.filter(r => r.type === 'auto').length}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Pharmacies</span>
                  </div>
                  <span className="text-green-600">
                    {mockResponders.filter(r => r.type === 'pharmacy').length}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">NGOs</span>
                  </div>
                  <span className="text-purple-600">
                    {mockResponders.filter(r => r.type === 'ngo').length}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: 102
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Ambulance: 108
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  HealersHub: +91-XXXX
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Responders List */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Network Directory</CardTitle>
                <Tabs value={filter} onValueChange={setFilter}>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="hospital">Hospitals</TabsTrigger>
                    <TabsTrigger value="auto">Transport</TabsTrigger>
                    <TabsTrigger value="pharmacy">Pharmacy</TabsTrigger>
                    <TabsTrigger value="ngo">NGOs</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredResponders.map((responder) => (
                  <div
                    key={responder.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${getColor(responder.type)}`}>
                        {getIcon(responder.type)}
                      </div>
                      <Badge variant={responder.available ? "default" : "secondary"} className="bg-green-100 text-green-700">
                        Available
                      </Badge>
                    </div>
                    <h4 className="text-blue-900 mb-1">{responder.name}</h4>
                    <p className="text-sm text-gray-500 mb-2">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {responder.distance} km away
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="w-3 h-3 mr-1" />
                      {responder.contact}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partner Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-8 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-4">Partner With Us</h2>
            <p className="text-blue-100 mb-6">
              Join our network as a hospital, NGO, or corporate partner to help build a safer community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Hospital Partnership
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                CSR Collaboration
              </Button>
              <Button className="bg-white text-blue-900 hover:bg-blue-50">
                Contact Partnership Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
