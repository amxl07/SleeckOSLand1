import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp, Users, Globe, Zap } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  results: string;
}

interface SocialProofProps {
  className?: string;
}

// todo: remove mock functionality - replace with real testimonials
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    content: "The AI chatbot increased our lead response rate by 400%. We're now capturing leads 24/7 and our sales team can focus on closing deals instead of initial inquiries.",
    rating: 5,
    results: "400% increase in lead response rate"
  },
  {
    id: "2", 
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthHub Agency",
    content: "Voice agents handle all our appointment booking now. We went from missing 30% of calls to booking 95% of qualified leads automatically. Game changer for our business.",
    rating: 5,
    results: "95% appointment booking rate"
  },
  {
    id: "3",
    name: "Jennifer Walsh",
    role: "Founder",
    company: "EcoLiving Store", 
    content: "The automated lead campaigns helped us scale from $50K to $200K monthly revenue in 6 months. The ROI is incredible - every dollar spent returns $8 in revenue.",
    rating: 5,
    results: "4x revenue growth in 6 months"
  }
];

const stats = [
  { value: "500+", label: "Businesses Automated" },
  { value: "10M+", label: "Leads Processed" },
  { value: "300%", label: "Average ROI Increase" },
  { value: "24/7", label: "System Uptime" }
];

export default function SocialProof({ className }: SocialProofProps) {
  return (
    <section className={`relative py-32 px-4 overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Proven Results</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block">Trusted by</span>
            <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Real results from real businesses. See how our AI automation solutions have transformed operations across industries.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const icons = [Users, Globe, TrendingUp, Zap];
            const IconComponent = icons[index];
            const colors = ['text-emerald-500', 'text-blue-500', 'text-purple-500', 'text-amber-500'];
            const bgColors = ['bg-emerald-500/10', 'bg-blue-500/10', 'bg-purple-500/10', 'bg-amber-500/10'];
            
            return (
              <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-b from-card/50 to-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 hover:scale-105">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${bgColors[index]} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${colors[index]}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-black ${colors[index]} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group relative h-full border-border/50 bg-gradient-to-b from-card/50 to-card/30 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              <CardContent className="relative p-8">
                {/* Enhanced Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-sm" />
                  ))}
                </div>

                {/* Enhanced Content */}
                <blockquote className="text-base mb-8 leading-relaxed font-medium italic text-foreground">
                  "{testimonial.content}"
                </blockquote>

                {/* Enhanced Results Highlight */}
                <div className="relative p-4 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-primary">Key Result</span>
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      {testimonial.results}
                    </div>
                  </div>
                </div>

                {/* Enhanced Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <div className="font-bold text-base text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Trust Badges */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8 font-medium">
            Trusted by startups to Fortune 500 companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
            {['TECHFLOW', 'GROWTHHUB', 'ECOLIVING', 'INNOVATE', 'NEXUS'].map((company, index) => (
              <div 
                key={company}
                className="group px-6 py-3 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:border-primary/30"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="text-sm font-mono font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {company}
                </span>
              </div>
            ))}
            <div className="px-6 py-3 rounded-xl border border-border/50 bg-primary/5 hover:bg-primary/10 transition-all duration-300">
              <span className="text-sm font-bold text-primary">+495 MORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}