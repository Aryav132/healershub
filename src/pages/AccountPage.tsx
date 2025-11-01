import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { User, Shield, Bell, CreditCard, Download, LogOut } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { devices } from '../data/mockData';

export function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-blue-900 mb-2">My Account</h1>
          <p className="text-gray-600">Manage your profile, devices, and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="profile">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="devices">
              <Shield className="w-4 h-4 mr-2" />
              Devices
            </TabsTrigger>
            <TabsTrigger value="subscription">
              <CreditCard className="w-4 h-4 mr-2" />
              Subscription
            </TabsTrigger>
            <TabsTrigger value="privacy">
              <Shield className="w-4 h-4 mr-2" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your account details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="Rajesh" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Kumar" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="rajesh.kumar@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+91-9876543210" />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="Connaught Place, New Delhi" />
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-blue-900 mb-3">Emergency Contacts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p>Priya Kumar (Daughter)</p>
                        <p className="text-sm text-gray-500">+91-9876543211</p>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p>Dr. Sharma (Family Doctor)</p>
                        <p className="text-sm text-gray-500">+91-9876543212</p>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-3">
                    Add Emergency Contact
                  </Button>
                </div>

                <Button className="w-full" onClick={() => toast.success('Profile updated successfully!')}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Devices Tab */}
          <TabsContent value="devices">
            <Card>
              <CardHeader>
                <CardTitle>Connected Devices</CardTitle>
                <CardDescription>
                  Manage your HealersHub wearables and health monitors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-blue-900">SaathiBand Lite</h4>
                      <p className="text-sm text-gray-500">Serial: SB-2024-001234</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">Battery</p>
                      <p>87%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Last Sync</p>
                      <p>2 min ago</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Connected Since</p>
                      <p>Jan 15, 2025</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Firmware</p>
                      <p>v2.1.4</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      Sync Now
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Settings
                    </Button>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  + Add New Device
                </Button>

                <div className="border-t pt-4">
                  <h4 className="text-blue-900 mb-3">Available Devices</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {devices.slice(1, 3).map((device) => (
                      <div key={device.id} className="border rounded-lg p-3 bg-gray-50">
                        <h5 className="text-sm mb-1">{device.name}</h5>
                        <p className="text-xs text-gray-500 mb-2">₹{device.price.toLocaleString()}</p>
                        <Button size="sm" variant="outline" className="w-full">
                          Purchase
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscription Tab */}
          <TabsContent value="subscription">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>
                  Manage your HealersHub subscription and billing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg p-6 text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white mb-1">Premium Plan</h3>
                      <p className="text-blue-100 text-sm">Full access to all features</p>
                    </div>
                    <Badge className="bg-white text-blue-900">Active</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>✓ Unlimited device connections</p>
                    <p>✓ 24/7 emergency response</p>
                    <p>✓ Priority support</p>
                    <p>✓ Advanced health analytics</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Current Period</p>
                    <p>Jan 1 - Jan 31, 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <p>₹499/month</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Next Billing</p>
                    <p>Feb 1, 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p>•••• 4242</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" onClick={() => toast.success('Subscription renewed!')}>
                    Renew Subscription
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Change Plan
                  </Button>
                </div>

                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Invoices
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Data Access</CardTitle>
                <CardDescription>
                  Control who can access your health data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-blue-900">Share data with caregivers</p>
                      <p className="text-sm text-gray-500">Allow family members to view your health data</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-blue-900">Share location during emergencies</p>
                      <p className="text-sm text-gray-500">GPS location shared with responders during SOS</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-blue-900">Anonymous analytics</p>
                      <p className="text-sm text-gray-500">Help improve HealersHub with usage data</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-blue-900 mb-3">Data Access Permissions</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm">Priya Kumar (Daughter)</span>
                      <Button variant="outline" size="sm">Revoke</Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm">Dr. Sharma (Doctor)</span>
                      <Button variant="outline" size="sm">Revoke</Button>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download My Data
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose how you want to receive updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-blue-900">Emergency Alerts</p>
                    <p className="text-sm text-gray-500">Critical health and SOS notifications</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-blue-900">Daily Health Summary</p>
                    <p className="text-sm text-gray-500">Daily report of vitals and activity</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-blue-900">Device Status Updates</p>
                    <p className="text-sm text-gray-500">Battery, connectivity, and sync alerts</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="text-blue-900">Product Updates</p>
                    <p className="text-sm text-gray-500">New features and improvements</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5" />
                </div>

                <Button className="w-full" onClick={() => toast.success('Preferences saved!')}>
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Logout Button */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
