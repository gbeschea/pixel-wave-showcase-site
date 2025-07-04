import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users2, Lightbulb, Rocket } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver exceptional results through meticulous attention to detail and continuous optimization."
  },
  {
    icon: Users2,
    title: "Partnership",
    description: "Your success is our success. We work as an extension of your team, not just a vendor."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of digital trends and leverage cutting-edge tools to give you a competitive edge."
  },
  {
    icon: Rocket,
    title: "Growth Focus",
    description: "Every strategy is designed with one goal in mind: accelerating your business growth."
  }
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Pixel Wave</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded by digital marketing veterans, Pixel Wave emerged from a simple belief: 
              every ecommerce business deserves marketing that actually works. We combine creative 
              storytelling with data-driven precision to create campaigns that don't just look good—they deliver results.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of combined experience and $50M+ in revenue generated for our clients, 
              we've mastered the art and science of digital marketing. From startups to enterprise brands, 
              we've helped businesses across industries ride the digital wave to success.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Our Journey
            </Button>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;