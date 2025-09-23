import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface HeroProps {
  onBookCall?: () => void;
  onWatchDemo?: () => void;
}

export default function Hero({ onBookCall, onWatchDemo }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm text-muted-foreground">System Online</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Don't hire more,<br />
          <span className="text-primary">Automate smarter.</span>
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-foreground">
            With AI.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
          Transform your business with AI chatbots, voice agents, and lead campaign systems. 
          Scale from 10 leads to 10,000 conversions without hiring more staff.
        </p>

        {/* Video Container */}
        <div className="mb-12">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-card border border-border">
            {/* YouTube Video Placeholder - Replace with actual embed */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-muted">
              <Button 
                size="lg" 
                className="h-16 w-16 rounded-full"
                onClick={() => {
                  console.log('Play VSL video');
                  onWatchDemo?.();
                }}
                data-testid="button-play-video"
              >
                <Play className="h-6 w-6 ml-1" />
              </Button>
            </div>
            {/* Actual YouTube embed would go here */}
            <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
              🎥 Watch Our 3-Minute Demo
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => {
              console.log('Book call clicked');
              onBookCall?.();
            }}
            data-testid="button-book-call"
          >
            Book Free Strategy Call
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-4"
            onClick={() => {
              console.log('Request demo clicked');
              onWatchDemo?.();
            }}
            data-testid="button-request-demo"
          >
            Request Live Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>500+ Businesses Automated</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <span>7-15 Days to Go Live</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span>No Upfront Costs</span>
          </div>
        </div>
      </div>
    </section>
  );
}