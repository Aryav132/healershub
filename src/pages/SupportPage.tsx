import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { faqs } from '../data/mockData';
import { Phone, Mail, MessageCircle, BookOpen, FileText, AlertCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function SupportPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Support ticket submitted! We will respond within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-blue-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600">
            We're here to help. Find answers or get in touch with our team.
          </p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Emergency Helpline</h3>
              <p className="text-sm text-gray-600 mb-3">24/7 support for urgent issues</p>
              <p className="text-teal-600">+91-1800-XXX-XXXX</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-3">Chat with HealerBot</p>
              <Button variant="outline" size="sm">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-3">Response within 24 hours</p>
              <p className="text-sm text-purple-600">support@healershub.com</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-blue-900 mb-2">Tutorials</h3>
              <p className="text-sm text-gray-600 mb-3">Step-by-step guides</p>
              <Button variant="outline" size="sm">View Guides</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQs */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Quick answers to common questions about HealersHub
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-900 mb-1">
                        Can't find what you're looking for?
                      </p>
                      <p className="text-sm text-blue-700">
                        Submit a support ticket or contact us directly for personalized help.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tutorials Section */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>
                  Learn how to use HealersHub devices and features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-blue-900">Getting Started with SaathiBand</h4>
                      <p className="text-sm text-gray-500">5:32 min</p>
                    </div>
                    <Button variant="outline" size="sm">Watch</Button>
                  </div>

                  <div className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-blue-900">How to Trigger Emergency SOS</h4>
                      <p className="text-sm text-gray-500">3:15 min</p>
                    </div>
                    <Button variant="outline" size="sm">Watch</Button>
                  </div>

                  <div className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <FileText className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-blue-900">Adding Family Members as Caregivers</h4>
                      <p className="text-sm text-gray-500">4:20 min</p>
                    </div>
                    <Button variant="outline" size="sm">Watch</Button>
                  </div>

                  <div className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FileText className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-blue-900">Understanding Health Dashboard</h4>
                      <p className="text-sm text-gray-500">6:45 min</p>
                    </div>
                    <Button variant="outline" size="sm">Watch</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Submit a support ticket and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91-XXXXXXXXXX" />
                  </div>

                  <div>
                    <Label htmlFor="category">Issue Category</Label>
                    <select id="category" className="w-full border rounded-md p-2" required>
                      <option value="">Select category</option>
                      <option value="device">Device Issue</option>
                      <option value="app">App/Dashboard Issue</option>
                      <option value="billing">Billing & Subscription</option>
                      <option value="emergency">Emergency Response</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Describe Your Issue</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your issue..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Ticket
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Report Device Issue Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Report Device Issue</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">
                  Experiencing problems with your wearable device?
                </p>
                <Button variant="outline" className="w-full">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Report Technical Issue
                </Button>
                <Button variant="outline" className="w-full">
                  Request Replacement
                </Button>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Support Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Emergency Support</span>
                  <span>24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone Support</span>
                  <span>9 AM - 9 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email Support</span>
                  <span>24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Live Chat</span>
                  <span>9 AM - 6 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
