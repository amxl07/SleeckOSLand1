import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Zap, Rocket, ArrowRight } from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
}

interface ProcessSectionProps {
  onGetStarted?: () => void;
}

const steps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery Call",
    description: "We analyze your current workflow, identify automation opportunities, and design a custom solution that fits your business needs.",
    details: [
      "15-minute no-pressure consultation",
      "Workflow analysis and pain point identification",
      "Custom automation strategy development",
      "Clear pricing and timeline discussion"
    ],
    icon: Calendar,
    duration: "15 minutes"
  },
  {
    id: "build",
    title: "Build & Deploy",
    description: "Our team builds your custom AI automation system using proven frameworks and integrates it seamlessly with your existing tools.",
    details: [
      "Custom AI agent development",
      "Integration with your existing tools",
      "Comprehensive testing and optimization",
      "Team training and documentation"
    ],
    icon: Zap,
    duration: "7-15 days"
  },
  {
    id: "scale",
    title: "Scale & Optimize", 
    description: "Launch your automation system and watch your efficiency soar. We provide ongoing optimization to ensure maximum ROI.",
    details: [
      "Live system deployment",
      "Performance monitoring and reporting",
      "Continuous optimization based on data",
      "Ongoing support and maintenance"
    ],
    icon: Rocket,
    duration: "Ongoing"
  }
];

export default function ProcessSection({ onGetStarted }: ProcessSectionProps) {
  return (
    <section className="py-32 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From <span className="text-primary">Chaos to Clarity</span> in 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven process takes you from manual workflows to fully automated systems in just 2-3 weeks.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.id} className="relative h-full hover-elevate">
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                <CardHeader className="pt-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {step.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-3">{step.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">What's included:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* Connector Arrow (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-card rounded-lg p-8 border max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Automation Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join 500+ businesses that have transformed their operations with our AI automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => {
                  console.log('Get started clicked');
                  onGetStarted?.();
                }}
                data-testid="button-get-started"
              >
                Start Your Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => {
                  console.log('View case studies clicked');
                }}
                data-testid="button-case-studies"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}