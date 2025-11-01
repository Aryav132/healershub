import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Battery, Bluetooth, CheckCircle } from 'lucide-react';
import { Device } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DeviceCardProps {
  device: Device;
  onAddToKit?: (deviceId: string) => void;
}

export function DeviceCard({ device, onAddToKit }: DeviceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <ImageWithFallback
          src={device.image}
          alt={device.name}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-blue-900">{device.name}</h3>
          <Badge variant="secondary" className="bg-teal-100 text-teal-700">
            ₹{device.price.toLocaleString()}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-4">{device.description}</p>
        
        <div className="space-y-2 mb-4">
          {device.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Battery className="w-4 h-4" />
            <span>{device.battery}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bluetooth className="w-4 h-4" />
            <span>{device.connectivity.split(',')[0]}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" className="flex-1" asChild>
          <Link to={`/devices/${device.id}`}>View Details</Link>
        </Button>
        <Button 
          className="flex-1"
          onClick={() => onAddToKit?.(device.id)}
        >
          Add to Kit
        </Button>
      </CardFooter>
    </Card>
  );
}
