import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mic, Target, ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  gradient: string;
  metric: string;
  metricValue: string;
}

interface ServicesOverviewProps {
  onLearnMore?: (serviceId: string) => void;
  onBookDemo?: (serviceId: string) => void;
}

const services: Service[] = [
  {
    id: "chatbots",
    title: "AI Chatbots",
    description: "Intelligent conversational agents that handle customer inquiries, qualify leads, and provide 24/7 support across multiple platforms.",
    benefits: [
      "Handle 1000+ conversations simultaneously",
      "Reduce response time from hours to seconds", 
      "Qualify leads automatically with smart questions"
    ],
    icon: MessageSquare,
    features: ["WhatsApp Integration", "Lead Qualification", "Multi-language Support", "CRM Sync"],
    gradient: "from-blue-500/10 via-primary/10 to-cyan-500/10",
    metric: "Response Time",
    metricValue: "< 2 sec"
  },
  {
    id: "voice-agents",
    title: "Voice Agents", 
    description: "AI-powered voice assistants that make and receive calls, book appointments, and conduct sales conversations with natural human-like speech.",
    benefits: [
      "Make 100+ calls per hour automatically",
      "Book appointments while you sleep",
      "Never miss a lead follow-up call"
    ],
    icon: Mic,
    features: ["Natural Speech", "Appointment Booking", "Sales Conversations", "Call Recording"],
    gradient: "from-purple-500/10 via-primary/10 to-pink-500/10", 
    metric: "Calls/Hour",
    metricValue: "100+"
  },
  {
    id: "lead-campaigns",
    title: "Lead Campaign Systems",
    description: "Automated marketing funnels that capture, nurture, and convert leads through personalized multi-channel campaigns.",
    benefits: [
      "Increase conversion rates by 300%",
      "Automate entire sales funnels",
      "Personalize outreach at scale"
    ],
    icon: Target,
    features: ["Email Automation", "Social Media Posting", "Performance Tracking", "A/B Testing"],
    gradient: "from-emerald-500/10 via-primary/10 to-teal-500/10",
    metric: "Conversion Rate",
    metricValue: "+300%"
  }
];

export default function ServicesOverview({ onLearnMore, onBookDemo }: ServicesOverviewProps) {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Core Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Three Services That
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Transform Everything
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choose from our proven AI automation solutions or combine them for exponential impact. 
            Each service scales with your ambitions.
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="group relative h-full border-border/50 bg-gradient-to-b from-card/50 to-card/30 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Premium Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <CardHeader className="relative z-10 pb-6">
                  {/* Header with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <div className="text-6xl font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl lg:text-3xl mb-4 font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="relative z-10 space-y-8">
                  {/* Performance Metric */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">{service.metric}</span>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-xl font-bold text-primary">{service.metricValue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-bold mb-4 text-primary flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 shadow-lg shadow-primary/50"></div>
                          <span className="font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features Tags */}
                  <div>
                    <h4 className="font-bold mb-4">Includes</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-3 py-2 bg-muted/50 hover:bg-primary/10 rounded-full text-muted-foreground hover:text-primary transition-colors duration-200 cursor-default border border-border/50"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Premium Action Buttons */}
                  <div className="flex flex-col gap-3 pt-4">
                    <Button 
                      className="w-full group/btn relative overflow-hidden bg-primary/90 hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => {
                        console.log(`Book demo for ${service.id}`);
                        onBookDemo?.(service.id);
                      }}
                      data-testid={`button-demo-${service.id}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-500"></div>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Book Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                      onClick={() => {
                        console.log(`Learn more about ${service.id}`);
                        onLearnMore?.(service.id);
                      }}
                      data-testid={`button-learn-${service.id}`}
                    >
                      Learn More 
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="relative max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-card/80 via-card/60 to-card/80 border border-border/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Not sure which service fits your needs?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Let our experts analyze your business and recommend the perfect automation strategy.
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-4 border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  console.log('Schedule consultation clicked');
                }}
                data-testid="button-consultation"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Schedule Free Strategy Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}