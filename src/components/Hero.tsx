
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const handleGetStarted = () => {
    toast({
      title: "Welcome to Bankopia!",
      description: "We're setting up your account. You'll receive an email shortly.",
    });
  };

  const handleLearnMore = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-right" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 bg-bank-accent/10 px-3 py-1 rounded-full">
              <div className="h-2 w-2 rounded-full bg-bank-accent"></div>
              <span className="text-xs font-medium">Safely manage your finances</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              The <span className="text-bank-accent">bank</span> that <span className="text-bank-accent">does</span> it all
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              A smart software powered platform that helps you manage your finances and blockchain transactions seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-bank-dark hover:bg-black text-white rounded-full px-7 h-12"
                onClick={handleGetStarted}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-7 h-12"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">Trusted by 10,000+ clients</span>
              <div className="flex -space-x-2">
                {/* Fun cartoon character avatars instead of plain circles */}
                <div className="w-8 h-8 rounded-full bg-bank-purple flex items-center justify-center overflow-hidden border-2 border-white">
                  <img src="/lovable-uploads/e4cd8255-997b-4684-a8a8-81cda1463f24.png" alt="User" className="w-6 h-6 object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-bank-accent flex items-center justify-center overflow-hidden border-2 border-white">
                  <img src="/lovable-uploads/e4cd8255-997b-4684-a8a8-81cda1463f24.png" alt="User" className="w-6 h-6 object-cover transform scale-x-[-1]" />
                </div>
                <div className="w-8 h-8 rounded-full bg-bank-orange flex items-center justify-center overflow-hidden border-2 border-white">
                  <img src="/lovable-uploads/e4cd8255-997b-4684-a8a8-81cda1463f24.png" alt="User" className="w-6 h-6 object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold border-2 border-bank-light">
                  +7K
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src="/lovable-uploads/e4cd8255-997b-4684-a8a8-81cda1463f24.png" 
                alt="Banking app interface" 
                className="w-full h-auto object-contain rounded-xl"
              />
              {/* Add floating cartoon elements */}
              <div className="absolute -top-8 -right-4 w-16 h-16 bg-bank-accent rounded-full flex items-center justify-center animate-bounce shadow-lg transform rotate-12">
                <span className="text-xl font-bold">$</span>
              </div>
              <div className="absolute -bottom-10 -left-8 w-20 h-20 bg-bank-purple rounded-full flex items-center justify-center animate-float shadow-lg" style={{animationDelay: '1s'}}>
                <span className="text-white text-2xl font-bold">💰</span>
              </div>
              <div className="absolute top-1/3 -right-12 w-14 h-14 bg-bank-orange rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <span className="text-white text-xl font-bold">🔒</span>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-bank-purple/20 via-bank-accent/20 to-bank-blue/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
