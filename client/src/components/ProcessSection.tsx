import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Zap, Rocket, ArrowRight, CheckCircle, Clock, Target } from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  gradient: string;
}

interface ProcessSectionProps {
  onGetStarted?: () => void;
}

const steps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery & Strategy",
    description: "We analyze your current workflow, identify automation opportunities, and design a custom solution that fits your business needs perfectly.",
    details: [
      "15-minute no-pressure consultation",
      "Workflow analysis and pain point identification", 
      "Custom automation strategy development",
      "Clear pricing and timeline discussion"
    ],
    icon: Calendar,
    duration: "15 minutes",
    gradient: "from-blue-500/10 via-primary/10 to-cyan-500/10"
  },
  {
    id: "build",
    title: "Build & Deploy",
    description: "Our expert team builds your custom AI automation system using proven frameworks and integrates it seamlessly with your existing tools.",
    details: [
      "Custom AI agent development",
      "Integration with your existing tools",
      "Comprehensive testing and optimization", 
      "Team training and documentation"
    ],
    icon: Zap,
    duration: "7-15 days",
    gradient: "from-purple-500/10 via-primary/10 to-pink-500/10"
  },
  {
    id: "scale",
    title: "Scale & Optimize",
    description: "Launch your automation system and watch your efficiency soar. We provide ongoing optimization to ensure maximum ROI and continuous improvement.",
    details: [
      "Live system deployment",
      "Performance monitoring and reporting",
      "Continuous optimization based on data",
      "Ongoing support and maintenance"
    ],
    icon: Rocket,
    duration: "Ongoing",
    gradient: "from-emerald-500/10 via-primary/10 to-teal-500/10"
  }
];

export default function ProcessSection({ onGetStarted }: ProcessSectionProps) {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            From <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Chaos to Clarity</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
              in 3 Simple Steps
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our proven methodology takes you from manual workflows to fully automated systems in just 2-3 weeks.
          </p>
        </div>

        {/* Premium Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.id} className="group relative h-full border-border/50 bg-gradient-to-b from-card/50 to-card/30 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-8 z-20">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/25 border-4 border-background group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>
                
                <CardHeader className="relative z-10 pt-12 pb-6">
                  {/* Icon and Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                      <Clock className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">{step.duration}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl lg:text-3xl mb-4 font-bold group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {step.description}
                  </p>
                </CardHeader>
                
                <CardContent className="relative z-10 pb-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-primary flex items-center gap-2 mb-4">
                      <CheckCircle className="w-4 h-4" />
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 shadow-lg shadow-primary/50"></div>
                          <span className="font-medium leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-30">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <Card className="relative max-w-4xl mx-auto overflow-hidden border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            
            <CardContent className="relative z-10 p-12 text-center">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Ready to Start Your
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                    Automation Journey?
                  </span>
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Join 500+ businesses that have transformed their operations with our AI automation solutions. 
                  Your competitors are already automating — don't get left behind.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="font-semibold">Quick Setup</span>
                  <span className="text-sm text-muted-foreground">Go live in 7-15 days</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-3">
                    <Target className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="font-semibold">Proven Results</span>
                  <span className="text-sm text-muted-foreground">300% average ROI increase</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-3">
                    <Rocket className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="font-semibold">Risk-Free</span>
                  <span className="text-sm text-muted-foreground">No upfront costs</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="relative group text-xl px-12 py-6 bg-primary/90 hover:bg-primary shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    console.log('Get started clicked');
                    onGetStarted?.();
                  }}
                  data-testid="button-get-started"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Transformation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-xl px-12 py-6 border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    console.log('View case studies clicked');
                  }}
                  data-testid="button-case-studies"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  View Success Stories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}