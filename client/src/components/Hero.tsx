import { Button } from "@/components/ui/button";
import { Play, Sparkles, Zap, Clock } from "lucide-react";

interface HeroProps {
  onBookCall?: () => void;
  onWatchDemo?: () => void;
}

export default function Hero({ onBookCall, onWatchDemo }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Status Indicator */}
        <div className="relative inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <div className="relative">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-medium text-primary">AI System Online</span>
          <Sparkles className="w-4 h-4 text-primary" />
        </div>

        {/* Main Headline with Enhanced Typography */}
        <div className="mb-12 space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] tracking-tight">
            <span className="block bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Don't hire more,
            </span>
            <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent mt-2">
              Automate smarter.
            </span>
          </h1>
          <div className="relative">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-muted-foreground tracking-wide">
              With <span className="relative font-bold text-primary">AI
                <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-lg"></div>
              </span>
            </h2>
          </div>
        </div>

        {/* Enhanced Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-5xl mx-auto leading-relaxed font-light">
          Transform your business with intelligent automation. Scale from 
          <span className="text-primary font-semibold"> 10 leads to 10,000 conversions </span> 
          without hiring more staff.
        </p>

        {/* Premium Video Container */}
        <div className="relative mb-16 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card to-card/80 border border-border/50 backdrop-blur-sm shadow-2xl">
            {/* Sophisticated Video Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative group/play">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"></div>
                <Button 
                  size="lg" 
                  className="relative h-20 w-20 rounded-full bg-primary/90 hover:bg-primary border-2 border-primary/50 shadow-2xl group-hover/play:scale-110 transition-all duration-300"
                  onClick={() => {
                    console.log('Play VSL video');
                    onWatchDemo?.();
                  }}
                  data-testid="button-play-video"
                >
                  <Play className="h-8 w-8 ml-1 text-primary-foreground" />
                </Button>
              </div>
            </div>
            
            {/* Enhanced Video Label */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Watch 3-Minute Demo</span>
            </div>

            {/* Duration Badge */}
            <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
              <Clock className="w-3 h-3" />
              3:24
            </div>
          </div>
        </div>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Button 
            size="lg" 
            className="relative group text-xl px-12 py-6 bg-primary hover:bg-primary/90 border-2 border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              console.log('Book call clicked');
              onBookCall?.();
            }}
            data-testid="button-book-call"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
            <Zap className="w-5 h-5 mr-2" />
            Book Free Strategy Call
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="relative group text-xl px-12 py-6 border-2 border-primary/30 hover:border-primary/60 bg-background/50 backdrop-blur-sm hover:bg-primary/5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              console.log('Request demo clicked');
              onWatchDemo?.();
            }}
            data-testid="button-request-demo"
          >
            <Play className="w-5 h-5 mr-2" />
            Request Live Demo
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-card/50 to-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-emerald-500/50 rounded-full animate-ping"></div>
              </div>
              <span className="text-2xl font-bold text-emerald-500">500+</span>
            </div>
            <span className="text-sm text-muted-foreground font-medium">Businesses Automated</span>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-card/50 to-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-primary/50 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              </div>
              <span className="text-2xl font-bold text-primary">7-15</span>
            </div>
            <span className="text-sm text-muted-foreground font-medium">Days to Go Live</span>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-card/50 to-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-amber-500/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="text-2xl font-bold text-amber-500">$0</span>
            </div>
            <span className="text-sm text-muted-foreground font-medium">Upfront Costs</span>
          </div>
        </div>
      </div>
    </section>
  );
}