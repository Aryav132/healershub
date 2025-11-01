import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert, AlertDescription } from '../components/ui/alert';
import { mockVitals, mockAlerts, mockResponders } from '../data/mockData';
import { Activity, Heart, Droplet, Thermometer, AlertCircle, Play, Pause, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner@2.0.3';

export function DashboardPage() {
  const [vitals, setVitals] = useState(mockVitals);
  const [isLive, setIsLive] = useState(false);
  const [alerts, setAlerts] = useState(mockAlerts);

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setVitals(prev => prev.map(vital => {
        let newValue = vital.value;
        const variance = vital.type === 'Heart Rate' ? 5 : 
                        vital.type === 'SpO₂' ? 1 :
                        vital.type === 'Blood Pressure' ? 3 : 0.2;
        
        newValue += (Math.random() - 0.5) * variance;
        
        return {
          ...vital,
          value: Math.round(newValue * 10) / 10,
          timestamp: new Date()
        };
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isLive]);

  const handleTriggerSOS = () => {
    const newAlert = {
      id: Date.now().toString(),
      type: 'sos' as const,
      severity: 'critical' as const,
      message: 'SOS button pressed! Emergency contacts notified.',
      timestamp: new Date(),
      responded: false
    };
    setAlerts([newAlert, ...alerts]);
    toast.error('SOS Alert Triggered!');

    setTimeout(() => {
      toast.success('Nearest hospital notified (CityCare Clinic)');
    }, 1000);

    setTimeout(() => {
      toast.success('Auto-rickshaw responder 0.8 km away');
    }, 2000);
  };

  const getVitalIcon = (type: string) => {
    switch (type) {
      case 'Heart Rate': return <Heart className="w-5 h-5" />;
      case 'SpO₂': return <Droplet className="w-5 h-5" />;
      case 'Blood Pressure': return <Activity className="w-5 h-5" />;
      case 'Temperature': return <Thermometer className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const getVitalColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'critical': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-blue-900 mb-2">Live Health Dashboard</h1>
              <p className="text-gray-600">Monitor vitals and manage emergency alerts in real-time</p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => setIsLive(!isLive)}
                variant={isLive ? "default" : "outline"}
              >
                {isLive ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    Pause Stream
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Start Demo Stream
                  </>
                )}
              </Button>
              <Button variant="destructive" onClick={handleTriggerSOS}>
                <AlertCircle className="w-4 h-4 mr-2" />
                Trigger SOS
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Vitals */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vital Signs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence>
                {vitals.map((vital) => (
                  <motion.div
                    key={vital.type}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-gray-700">{vital.type}</CardTitle>
                          <div className={`p-2 rounded-lg ${getVitalColor(vital.status)}`}>
                            {getVitalIcon(vital.type)}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-baseline gap-2">
                          <span className="text-blue-900">{vital.value}</span>
                          <span className="text-gray-500">{vital.unit}</span>
                        </div>
                        <Badge
                          variant="secondary"
                          className={`mt-2 ${getVitalColor(vital.status)}`}
                        >
                          {vital.status.charAt(0).toUpperCase() + vital.status.slice(1)}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Live Graph Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Heart Rate Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg flex items-center justify-center border border-blue-100">
                  <div className="text-center">
                    <Activity className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      {isLive ? 'Live monitoring active' : 'Click "Start Demo Stream" to view live graph'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Alerts and Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full" variant="outline">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add Family Member
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Family Member</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Name</Label>
                        <Input placeholder="Enter name" />
                      </div>
                      <div>
                        <Label>Phone Number</Label>
                        <Input placeholder="+91-XXXXXXXXXX" />
                      </div>
                      <div>
                        <Label>Relationship</Label>
                        <Input placeholder="e.g., Son, Daughter" />
                      </div>
                      <Button className="w-full" onClick={() => toast.success('Family member added!')}>
                        Add Contact
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button className="w-full" variant="outline">
                  View Health Log
                </Button>
                <Button className="w-full" variant="outline">
                  Download Report
                </Button>
              </CardContent>
            </Card>

            {/* Live Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Live Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-4">No alerts</p>
                ) : (
                  <AnimatePresence>
                    {alerts.map((alert) => (
                      <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <Alert className={alert.severity === 'critical' ? 'border-red-200 bg-red-50' : 'border-yellow-200 bg-yellow-50'}>
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>
                            <p className="text-sm mb-1">{alert.message}</p>
                            <p className="text-xs text-gray-500">
                              {alert.timestamp.toLocaleTimeString()}
                            </p>
                          </AlertDescription>
                        </Alert>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </CardContent>
            </Card>

            {/* Nearby Responders */}
            <Card>
              <CardHeader>
                <CardTitle>Nearby Responders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockResponders.slice(0, 3).map((responder) => (
                  <div key={responder.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm">{responder.name}</p>
                      <p className="text-xs text-gray-500">{responder.distance} km away</p>
                    </div>
                    <Badge variant={responder.available ? "default" : "secondary"} className="bg-green-100 text-green-700">
                      Available
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
