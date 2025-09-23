import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onBookCall?: () => void;
}

export default function Navigation({ onBookCall }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    console.log(`Scroll to ${sectionId}`);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center group">
            <div className="relative text-2xl font-black tracking-tight">
              <span className="text-primary drop-shadow-sm group-hover:text-primary/90 transition-colors duration-300">AI</span>
              <span className="text-foreground group-hover:text-foreground/90 transition-colors duration-300">Automate</span>
              <div className="absolute -inset-1 bg-primary/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium hover:scale-105 group"
              data-testid="nav-services"
            >
              Services
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium hover:scale-105 group"
              data-testid="nav-process"
            >
              Process
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium hover:scale-105 group"
              data-testid="nav-testimonials"
            >
              Results
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>
            
            {/* Premium CTA Button */}
            <Button 
              size="sm"
              className="relative group px-6 py-2 bg-primary/90 hover:bg-primary border border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
              onClick={() => {
                console.log('Nav book call clicked');
                onBookCall?.();
              }}
              data-testid="nav-book-call"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-500"></div>
              <Zap className="w-4 h-4 mr-2" />
              Book Call
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
              className="relative hover:bg-primary/10 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-primary" />
              ) : (
                <Menu className="h-5 w-5 text-primary" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-4 pb-6 space-y-2">
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center w-full px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300 rounded-lg font-medium"
                data-testid="mobile-nav-services"
              >
                <Sparkles className="w-4 h-4 mr-3 text-primary" />
                Services
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="flex items-center w-full px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300 rounded-lg font-medium"
                data-testid="mobile-nav-process"
              >
                <Zap className="w-4 h-4 mr-3 text-primary" />
                Process
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="flex items-center w-full px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300 rounded-lg font-medium"
                data-testid="mobile-nav-testimonials"
              >
                <Sparkles className="w-4 h-4 mr-3 text-primary" />
                Results
              </button>
              
              <div className="pt-4">
                <Button 
                  className="w-full relative group bg-primary/90 hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                  onClick={() => {
                    console.log('Mobile nav book call clicked');
                    onBookCall?.();
                    setIsMenuOpen(false);
                  }}
                  data-testid="mobile-nav-book-call"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-500"></div>
                  <Zap className="w-4 h-4 mr-2" />
                  Book Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}