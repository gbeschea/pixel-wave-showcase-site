import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverBrightBg, setIsOverBrightBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Detect if we're over bright sections (services, about sections typically have bright backgrounds)
      const servicesSection = document.getElementById('services');
      const aboutSection = document.getElementById('about');
      
      if (servicesSection && aboutSection) {
        const servicesTop = servicesSection.offsetTop;
        const servicesBottom = servicesTop + servicesSection.offsetHeight;
        const aboutTop = aboutSection.offsetTop;
        const aboutBottom = aboutTop + aboutSection.offsetHeight;
        
        const headerHeight = 64; // Account for header height
        const currentPosition = scrollY + headerHeight;
        
        const isOverBright = (currentPosition >= servicesTop && currentPosition <= servicesBottom) ||
                           (currentPosition >= aboutTop && currentPosition <= aboutBottom);
        
        setIsOverBrightBg(isOverBright);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Pixel<span className="text-blue-400">Wave</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors font-medium ${
                  isOverBrightBg 
                    ? 'text-[hsl(var(--nav-bright-bg))] hover:text-blue-400' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button 
              variant="outline" 
              className="border-white bg-white text-secondary hover:bg-white/10 hover:text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors font-medium ${
                    isOverBrightBg 
                      ? 'text-[hsl(var(--nav-bright-bg))] hover:text-blue-400' 
                      : 'text-white hover:text-blue-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="outline" 
                  className="w-full border-white bg-white text-secondary hover:bg-white/10 hover:text-white"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;