// Mock data for HealersHub platform

export interface Device {
  id: string;
  name: string;
  price: number;
  image: string;
  features: string[];
  battery: string;
  connectivity: string;
  vitalTypes: string[];
  description: string;
}

export interface Vital {
  type: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  timestamp: Date;
}

export interface Alert {
  id: string;
  type: 'fall' | 'vitals' | 'sos' | 'battery';
  severity: 'info' | 'warning' | 'critical';
  message: string;
  timestamp: Date;
  responded: boolean;
}

export interface Responder {
  id: string;
  name: string;
  type: 'hospital' | 'auto' | 'ngo' | 'pharmacy';
  distance: number;
  available: boolean;
  contact: string;
  lat: number;
  lng: number;
}

export const devices: Device[] = [
  {
    id: 'saathiband-lite',
    name: 'SaathiBand Lite',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400',
    features: [
      'Monitors heart rate, SpO₂, movement',
      'Offline SOS via SMS',
      '7-day battery life',
      'Water-resistant, elder-friendly strap'
    ],
    battery: '7 days',
    connectivity: 'Bluetooth, SMS',
    vitalTypes: ['Heart Rate', 'SpO₂', 'Movement'],
    description: 'Perfect for daily monitoring with emergency SOS features'
  },
  {
    id: 'saathiclip-pro',
    name: 'SaathiClip Pro',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400',
    features: [
      'Fall detection with AI',
      'Real-time pulse alerts',
      'Bluetooth sync to caregiver app',
      'Clip-on design for easy wear'
    ],
    battery: '10 days',
    connectivity: 'Bluetooth, WiFi',
    vitalTypes: ['Heart Rate', 'Fall Detection', 'Blood Pressure'],
    description: 'Advanced monitoring with AI-powered fall detection'
  },
  {
    id: 'saathipendant',
    name: 'SaathiPendant',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400',
    features: [
      'Necklace design for seniors',
      'Voice-activated SOS',
      'Stylish and discreet',
      'GPS location tracking'
    ],
    battery: '5 days',
    connectivity: 'Bluetooth, GPS',
    vitalTypes: ['Heart Rate', 'Location', 'SOS'],
    description: 'Elegant wearable with voice-activated emergency features'
  },
  {
    id: 'healerspatch',
    name: 'HealersPatch',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400',
    features: [
      'Stick-on heart sensor',
      'Continuous ECG monitoring',
      'Data sync to caregiver app',
      'Medical-grade accuracy'
    ],
    battery: '14 days',
    connectivity: 'Bluetooth',
    vitalTypes: ['ECG', 'Heart Rate', 'Temperature'],
    description: 'Medical-grade patch for continuous heart monitoring'
  }
];

export const mockVitals: Vital[] = [
  { type: 'Heart Rate', value: 72, unit: 'bpm', status: 'normal', timestamp: new Date() },
  { type: 'SpO₂', value: 98, unit: '%', status: 'normal', timestamp: new Date() },
  { type: 'Blood Pressure', value: 120, unit: 'mmHg', status: 'normal', timestamp: new Date() },
  { type: 'Temperature', value: 36.8, unit: '°C', status: 'normal', timestamp: new Date() }
];

export const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'sos',
    severity: 'critical',
    message: 'SOS button pressed! Emergency contacts notified.',
    timestamp: new Date(Date.now() - 300000),
    responded: true
  },
  {
    id: '2',
    type: 'vitals',
    severity: 'warning',
    message: 'Heart rate elevated: 105 bpm',
    timestamp: new Date(Date.now() - 1800000),
    responded: false
  }
];

export const mockResponders: Responder[] = [
  {
    id: '1',
    name: 'CityCare Clinic',
    type: 'hospital',
    distance: 1.2,
    available: true,
    contact: '+91-9876543210',
    lat: 28.6139,
    lng: 77.2090
  },
  {
    id: '2',
    name: 'Rajesh Auto Services',
    type: 'auto',
    distance: 0.8,
    available: true,
    contact: '+91-9876543211',
    lat: 28.6150,
    lng: 77.2100
  },
  {
    id: '3',
    name: 'MedPlus Pharmacy',
    type: 'pharmacy',
    distance: 0.5,
    available: true,
    contact: '+91-9876543212',
    lat: 28.6130,
    lng: 77.2080
  },
  {
    id: '4',
    name: 'LifeCare NGO',
    type: 'ngo',
    distance: 2.3,
    available: true,
    contact: '+91-9876543213',
    lat: 28.6160,
    lng: 77.2110
  }
];

export const faqs = [
  {
    question: 'How to link a device?',
    answer: 'Download the HealersHub app, turn on Bluetooth, and follow the pairing instructions. The device will automatically sync with your account.'
  },
  {
    question: 'What happens during an SOS?',
    answer: 'When SOS is triggered, alerts are sent to all registered emergency contacts via SMS, app notification, and voice call. Nearby responders are also notified with your location.'
  },
  {
    question: 'How long does the battery last?',
    answer: 'Battery life varies by device: SaathiBand (7 days), SaathiClip Pro (10 days), SaathiPendant (5 days), HealersPatch (14 days).'
  },
  {
    question: 'Is the data secure?',
    answer: 'Yes, all health data is encrypted end-to-end and stored securely. Only authorized caregivers can access the information.'
  },
  {
    question: 'Can I use it without internet?',
    answer: 'Yes! Our devices support offline SOS via SMS. However, real-time monitoring requires Bluetooth or WiFi connectivity.'
  }
];
