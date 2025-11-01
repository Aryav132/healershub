import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Heart, Shield, Users, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-[rgb(180,189,215)] mb-3 text-[48px] font-[Helvetica_Neue] font-bold italic">Welcome to HealersHub</h1>
              <p className="text-2xl text-[rgb(144,236,255)] mb-2">Because every second counts.</p>
              <p className="text-xl text-blue-100">
                Your trusted partner in senior health and safety
              </p>
            </div>
            <div className="border-t border-blue-400 opacity-30 mb-8"></div>
            <h2 className="text-white mb-6">
              Find, connect, and protect with smart health wearables.
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Empowering seniors and caregivers with AI-powered health monitoring, instant emergency response, and a community that cares.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50"
                asChild
              >
                <Link to="/devices">
                  View Available Devices <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white text-blue-900 hover:bg-blue-50"
                asChild
              >
                <Link to="/dashboard">Access Dashboard</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button variant="outline" className="border-white bg-white text-blue-900 hover:bg-blue-50" asChild>
                <Link to="/caregiver">Join as Caregiver</Link>
              </Button>
              <Button variant="outline" className="border-white bg-white text-blue-900 hover:bg-blue-50" asChild>
                <Link to="/community">Emergency Response Network</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-900 mb-4">Why Choose HealersHub?</h2>
            <p className="text-xl text-gray-600">
              Complete health monitoring and emergency response in one ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-600">
                Track heart rate, SpO₂, blood pressure, and activity 24/7 with medical-grade accuracy.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Instant SOS</h3>
              <p className="text-gray-600">
                One-button emergency alerts to family, hospitals, and nearby responders via SMS and calls.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Fall Detection</h3>
              <p className="text-gray-600">
                AI-powered fall detection automatically alerts caregivers even if the user can't respond.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Community Network</h3>
              <p className="text-gray-600">
                Connect with hospitals, auto-rickshaw drivers, NGOs, and volunteers in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 mb-4">Our Smart Devices</h2>
            <p className="text-xl text-gray-600">
              Choose the perfect health companion for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
                alt="SaathiBand Lite"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-blue-900 mb-2">SaathiBand Lite</h3>
                <p className="text-teal-600 mb-2">₹2,499</p>
                <p className="text-sm text-gray-600 mb-4">
                  Essential monitoring with 7-day battery and offline SOS
                </p>
                <Button asChild className="w-full">
                  <Link to="/devices">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400"
                alt="SaathiClip Pro"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-blue-900 mb-2">SaathiClip Pro</h3>
                <p className="text-teal-600 mb-2">₹3,499</p>
                <p className="text-sm text-gray-600 mb-4">
                  AI fall detection with real-time sync and 10-day battery
                </p>
                <Button asChild className="w-full">
                  <Link to="/devices">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400"
                alt="SaathiPendant"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-blue-900 mb-2">SaathiPendant</h3>
                <p className="text-teal-600 mb-2">₹2,999</p>
                <p className="text-sm text-gray-600 mb-4">
                  Elegant necklace design with voice-activated SOS
                </p>
                <Button asChild className="w-full">
                  <Link to="/devices">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400"
                alt="HealersPatch"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-blue-900 mb-2">HealersPatch</h3>
                <p className="text-teal-600 mb-2">₹1,999</p>
                <p className="text-sm text-gray-600 mb-4">
                  Medical-grade ECG patch with 14-day battery
                </p>
                <Button asChild className="w-full">
                  <Link to="/devices">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/devices">
                View All Devices <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of families who trust HealersHub for their loved ones' safety.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" asChild>
              <Link to="/devices">Browse Devices</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white text-blue-900 hover:bg-blue-50" asChild>
              <Link to="/caregiver">Register as Caregiver</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
