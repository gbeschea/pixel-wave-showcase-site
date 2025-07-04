import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@pixelwaveagency.com",
    description: "Send us an email anytime"
  },
  {
    icon: Phone,
    title: "Phone", 
    content: "+86 18826289786",
    description: "Mon-Fri from 9am to 6pm"
  },
  {
    icon: MapPin,
    title: "Office",
    content: "2-4 Tai Yau Street, San Po Kong, Hong Kong",
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // For now, we'll simulate form submission
      // To actually send emails, you'll need Supabase integration
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    {...register("firstName", { required: "First name is required" })}
                    placeholder="First Name*" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Input 
                    {...register("lastName", { required: "Last name is required" })}
                    placeholder="Last Name*" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div>
                <Input 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email" 
                  placeholder="Email Address*" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Input 
                  {...register("company", { required: "Company name is required" })}
                  placeholder="Company Name*" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                {errors.company && (
                  <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>
              <div>
                <Textarea 
                  {...register("message", { required: "Message is required" })}
                  placeholder="Tell us about your project and goals...*" 
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;