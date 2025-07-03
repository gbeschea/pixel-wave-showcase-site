import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@pixelmediawave.com",
    description: "Send us an email anytime"
  },
  {
    icon: Phone,
    title: "Phone", 
    content: "+1 (555) 123-4567",
    description: "Mon-Fri from 9am to 6pm"
  },
  {
    icon: MapPin,
    title: "Office",
    content: "123 Digital Ave, Tech City",
    description: "Visit our creative space"
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "< 24 hours",
    description: "We respond quickly"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to <span className="text-blue-400">Grow Together?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can help amplify your ecommerce success. 
            Get in touch for a free consultation and growth strategy session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                <p className="text-lg text-blue-400 font-medium mb-1">{info.content}</p>
                <p className="text-sm text-gray-300">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">
              Start Your Growth Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                placeholder="First Name" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Input 
                placeholder="Last Name" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
            </div>
            <Input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Input 
              placeholder="Company Name" 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Textarea 
              placeholder="Tell us about your project and goals..." 
              rows={4}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Button variant="hero" size="lg" className="w-full">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;