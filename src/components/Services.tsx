import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, BarChart3, Zap, ShoppingCart, Users } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Drive measurable growth with data-driven campaigns across Google Ads, Facebook, and emerging platforms."
  },
  {
    icon: Target,
    title: "Conversion Optimization", 
    description: "Transform your website into a conversion machine with A/B testing and user experience optimization."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Make informed decisions with comprehensive tracking, reporting, and actionable business intelligence."
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Scale your marketing efforts with sophisticated automation workflows and personalized customer journeys."
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Strategy",
    description: "Comprehensive ecommerce growth strategies from product positioning to post-purchase optimization."
  },
  {
    icon: Users,
    title: "Brand Development",
    description: "Build a compelling brand that resonates with your audience and drives long-term customer loyalty."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions designed to accelerate your ecommerce growth and maximize ROI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;