import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, TrendingUp, Sparkles, Zap, ArrowRight, CheckCircle, Star } from "lucide-react";

interface FinalCTAProps {
  onBookCall?: () => void;
  onRequestDemo?: () => void;
}

export default function FinalCTA({ onBookCall, onRequestDemo }: FinalCTAProps) {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main CTA Card */}
        <Card className="relative overflow-hidden border-border/50 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm shadow-2xl">
          {/* Premium Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          <CardContent className="relative z-10 p-12 lg:p-16 text-center">
            {/* Urgency Indicator */}
            <div className="relative inline-flex items-center gap-3 mb-12 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 backdrop-blur-sm">
              <div className="relative">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping"></div>
              </div>
              <span className="text-sm font-bold text-primary">Limited Spots Available This Month</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            {/* Main Headline */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tight">
                <span className="block">Ready to</span>
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                  10x Your Conversions
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground mt-4">
                  in 15 Days or Less?
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                Don't let manual processes hold you back. Join the businesses that are already 
                <span className="text-primary font-semibold"> automating their way to success</span>.
              </p>
            </div>

            {/* Enhanced Value Props */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="group p-6 rounded-2xl bg-gradient-to-b from-card/50 to-card/30 border border-border/50 hover:bg-card/60 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-8 w-8 text-emerald-500" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-emerald-500">Lightning Fast</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Go live in 7-15 days with our proven deployment process
                </p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-b from-card/50 to-card/30 border border-border/50 hover:bg-card/60 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-blue-500">Zero Risk</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No upfront costs, no long-term contracts, just results
                </p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-b from-card/50 to-card/30 border border-border/50 hover:bg-card/60 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-purple-500" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-purple-500">Proven Results</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  300% average ROI increase across 500+ businesses
                </p>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                size="lg" 
                className="relative group text-xl px-12 py-6 bg-primary hover:bg-primary/90 border-2 border-primary/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                onClick={() => {
                  console.log('Book free call clicked');
                  onBookCall?.();
                }}
                data-testid="button-book-free-call"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out"></div>
                <Zap className="w-6 h-6 mr-2" />
                Book Your Free Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="relative group text-xl px-12 py-6 border-2 border-primary/30 hover:border-primary/60 bg-background/50 backdrop-blur-sm hover:bg-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
                onClick={() => {
                  console.log('See live demo clicked');
                  onRequestDemo?.();
                }}
                data-testid="button-see-demo"
              >
                <Sparkles className="w-6 h-6 mr-2" />
                See Live Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Enhanced Trust Signals */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2 text-emerald-500">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium">No pressure consultation</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-500">
                  <Star className="w-4 h-4" />
                  <span className="font-medium">Custom solution designed for you</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-purple-500">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium">Full support and training included</span>
                </div>
              </div>
              
              {/* Final Social Proof */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
                <p className="text-lg font-semibold text-primary mb-2">
                  ⚡ 23 businesses automated this week
                </p>
                <p className="text-sm text-muted-foreground">
                  Join the automation revolution before your competitors do
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Teaser */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground mb-6 font-medium">
              Still have questions about how AI automation can transform your business?
            </p>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
              onClick={() => {
                console.log('View FAQ clicked');
              }}
              data-testid="button-faq"
            >
              <span className="text-lg font-semibold">View Frequently Asked Questions</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}