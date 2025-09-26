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
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Empires are built by<br />
          <span className="text-primary">obsessing over efficiency</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
          We will make sure you are as efficient as possible
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
              console.log('Get free Instagram chatbot clicked');
              onBookCall?.();
            }}
            data-testid="button-free-instagram-chatbot"
          >
            Free Instagram Chatbot
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

        {/* Sub-line and Trust Indicators */}
        <div className="mt-8 text-sm text-muted-foreground">
          <span>Built 100+ automations</span>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
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