import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BotMessageSquare, Mic, Target, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
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
    icon: BotMessageSquare,
    features: ["WhatsApp Integration", "Lead Qualification", "Multi-language Support", "CRM Sync"]
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
    features: ["Natural Speech", "Appointment Booking", "Sales Conversations", "Call Recording"]
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
    features: ["Email Automation", "Social Media Posting", "Performance Tracking", "A/B Testing"]
  }
];

export default function ServicesOverview({ onLearnMore, onBookDemo }: ServicesOverviewProps) {
  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Three Core Services That <span className="text-primary">Transform</span> Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our proven AI automation solutions or combine them for maximum impact. 
            Each service is designed to scale with your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="h-full hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-sm text-primary font-medium">
                      0{index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Includes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 pt-4">
                    <Button 
                      className="w-full"
                      onClick={() => {
                        console.log(`Book demo for ${service.id}`);
                        onBookDemo?.(service.id);
                      }}
                      data-testid={`button-demo-${service.id}`}
                    >
                      Book Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        console.log(`Learn more about ${service.id}`);
                        onLearnMore?.(service.id);
                      }}
                      data-testid={`button-learn-${service.id}`}
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which service is right for you?
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8"
            onClick={() => {
              console.log('Schedule consultation clicked');
            }}
            data-testid="button-consultation"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}