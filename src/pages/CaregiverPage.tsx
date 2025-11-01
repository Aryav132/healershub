import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { UserPlus, Link as LinkIcon, History, Bell } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { devices } from '../data/mockData';

export function CaregiverPage() {
  const [selectedDevice, setSelectedDevice] = useState('');

  const handleAddElder = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Elder profile created successfully!');
  };

  const handleConnectDevice = () => {
    if (!selectedDevice) {
      toast.error('Please select a device');
      return;
    }
    toast.success('Device connected successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-blue-900 mb-4">Caregiver Portal</h1>
          <p className="text-xl text-gray-600">
            Manage profiles, connect devices, and monitor your loved ones' health
          </p>
        </div>

        <Tabs defaultValue="add-elder" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="add-elder">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Elder
            </TabsTrigger>
            <TabsTrigger value="connect-device">
              <LinkIcon className="w-4 h-4 mr-2" />
              Connect Device
            </TabsTrigger>
            <TabsTrigger value="health-log">
              <History className="w-4 h-4 mr-2" />
              Health Log
            </TabsTrigger>
            <TabsTrigger value="alerts">
              <Bell className="w-4 h-4 mr-2" />
              Alert Settings
            </TabsTrigger>
          </TabsList>

          {/* Add New Elder */}
          <TabsContent value="add-elder">
            <Card>
              <CardHeader>
                <CardTitle>Add New Elder Profile</CardTitle>
                <CardDescription>
                  Create a profile for your loved one to start monitoring their health
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddElder} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Enter full name" required />
                    </div>
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input id="age" type="number" placeholder="Enter age" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" required />
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Enter city" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="health-issues">Known Health Issues</Label>
                    <Textarea
                      id="health-issues"
                      placeholder="List any existing health conditions (e.g., diabetes, hypertension)"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="emergency-contact">Emergency Contact Name</Label>
                    <Input id="emergency-contact" placeholder="Primary emergency contact" />
                  </div>

                  <div>
                    <Label htmlFor="emergency-phone">Emergency Contact Phone</Label>
                    <Input id="emergency-phone" type="tel" placeholder="+91-XXXXXXXXXX" />
                  </div>

                  <Button type="submit" className="w-full">
                    Create Elder Profile
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Connect Device */}
          <TabsContent value="connect-device">
            <Card>
              <CardHeader>
                <CardTitle>Connect Wearable Device</CardTitle>
                <CardDescription>
                  Link a HealersHub device to start monitoring vitals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="elder-select">Select Elder Profile</Label>
                  <Select>
                    <SelectTrigger id="elder-select">
                      <SelectValue placeholder="Choose profile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Demo Elder (Age 72)</SelectItem>
                      <SelectItem value="grandma">Grandma (Age 68)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="device-select">Choose Device</Label>
                  <Select value={selectedDevice} onValueChange={setSelectedDevice}>
                    <SelectTrigger id="device-select">
                      <SelectValue placeholder="Select purchased wearable" />
                    </SelectTrigger>
                    <SelectContent>
                      {devices.map((device) => (
                        <SelectItem key={device.id} value={device.id}>
                          {device.name} - ₹{device.price.toLocaleString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-blue-900 mb-2">Connection Steps:</h4>
                  <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                    <li>Ensure the device is charged and powered on</li>
                    <li>Enable Bluetooth on your smartphone</li>
                    <li>Place device within 2 meters of your phone</li>
                    <li>Click "Connect Now" below</li>
                  </ol>
                </div>

                <Button onClick={handleConnectDevice} className="w-full">
                  Connect Now
                </Button>

                <div className="text-center">
                  <Button variant="link">
                    Need help? View pairing tutorial →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Health Log */}
          <TabsContent value="health-log">
            <Card>
              <CardHeader>
                <CardTitle>Health Activity Log</CardTitle>
                <CardDescription>
                  View daily and weekly health data from connected wearables
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label>Select Elder Profile</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose profile" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Demo Elder (Age 72)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="border rounded-lg p-4 bg-white">
                    <h4 className="text-blue-900 mb-4">Recent Activity</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <p className="text-sm">Heart Rate</p>
                          <p className="text-xs text-gray-500">Today, 2:30 PM</p>
                        </div>
                        <p className="text-green-600">72 bpm</p>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <p className="text-sm">SpO₂ Level</p>
                          <p className="text-xs text-gray-500">Today, 2:30 PM</p>
                        </div>
                        <p className="text-green-600">98%</p>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <p className="text-sm">Blood Pressure</p>
                          <p className="text-xs text-gray-500">Today, 9:00 AM</p>
                        </div>
                        <p className="text-green-600">120/80 mmHg</p>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <div>
                          <p className="text-sm">Steps Walked</p>
                          <p className="text-xs text-gray-500">Today</p>
                        </div>
                        <p className="text-blue-600">3,240 steps</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Download Full Report (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alert Settings */}
          <TabsContent value="alerts">
            <Card>
              <CardHeader>
                <CardTitle>Alert Preferences</CardTitle>
                <CardDescription>
                  Customize how you receive emergency and health notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Select Elder Profile</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose profile" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Demo Elder (Age 72)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-blue-900">SMS Notifications</p>
                      <p className="text-sm text-gray-500">Receive alerts via text message</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-blue-900">Voice Call Alerts</p>
                      <p className="text-sm text-gray-500">Get automated voice calls for critical alerts</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-blue-900">App Push Notifications</p>
                      <p className="text-sm text-gray-500">Mobile app notifications</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5" />
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="text-blue-900">Email Summaries</p>
                      <p className="text-sm text-gray-500">Daily health summary reports</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5" />
                  </div>
                </div>

                <Button className="w-full">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Button variant="outline" className="h-auto py-4">
            <div className="text-center w-full">
              <UserPlus className="w-6 h-6 mx-auto mb-2" />
              <p>Register New Caregiver</p>
            </div>
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <div className="text-center w-full">
              <LinkIcon className="w-6 h-6 mx-auto mb-2" />
              <p>Sync Device Now</p>
            </div>
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <div className="text-center w-full">
              <History className="w-6 h-6 mx-auto mb-2" />
              <p>View All Logs</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
