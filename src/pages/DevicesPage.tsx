import { useState } from 'react';
import { DeviceCard } from '../components/DeviceCard';
import { devices } from '../data/mockData';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, Filter } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function DevicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [kit, setKit] = useState<string[]>([]);

  const filteredDevices = devices.filter((device) => {
    const matchesSearch = device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         device.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || 
                         device.vitalTypes.some(type => type.toLowerCase().includes(filterType.toLowerCase()));
    return matchesSearch && matchesFilter;
  });

  const handleAddToKit = (deviceId: string) => {
    if (kit.includes(deviceId)) {
      toast.info('Device already in your kit');
    } else {
      setKit([...kit, deviceId]);
      const device = devices.find(d => d.id === deviceId);
      toast.success(`${device?.name} added to your kit!`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-blue-900 mb-4">Choose your smart health companion.</h1>
          <p className="text-xl text-gray-600 mb-8">
            Browse our collection of AI-powered health wearables designed for seniors
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search devices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Devices</SelectItem>
                <SelectItem value="heart">Heart Rate</SelectItem>
                <SelectItem value="fall">Fall Detection</SelectItem>
                <SelectItem value="spo2">SpO₂</SelectItem>
                <SelectItem value="ecg">ECG</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Kit Summary */}
        {kit.length > 0 && (
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-teal-900">
                  <span>{kit.length} device{kit.length > 1 ? 's' : ''} in your kit</span>
                </p>
                <p className="text-sm text-teal-700">
                  Total: ₹{devices.filter(d => kit.includes(d.id)).reduce((sum, d) => sum + d.price, 0).toLocaleString()}
                </p>
              </div>
              <Button variant="outline" onClick={() => {
                setKit([]);
                toast.success('Kit cleared');
              }}>
                Clear Kit
              </Button>
            </div>
          </div>
        )}

        {/* Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDevices.map((device) => (
            <DeviceCard
              key={device.id}
              device={device}
              onAddToKit={handleAddToKit}
            />
          ))}
        </div>

        {filteredDevices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No devices found matching your criteria</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl p-8 text-white text-center">
          <h2 className="text-white mb-4">Need help choosing?</h2>
          <p className="text-blue-100 mb-6">
            Our team can help you select the perfect device based on your specific health needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-white text-[rgb(0,0,0)] hover:bg-white/10">
              Contact Support
            </Button>
            <Button className="bg-white text-blue-900 hover:bg-blue-50">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
