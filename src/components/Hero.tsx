
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
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
              <Button className="bg-bank-dark hover:bg-black text-white rounded-full px-7 h-12">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full px-7 h-12">
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Trusted by 10,000+ clients all over the world</span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-bank-purple"></div>
                <div className="w-6 h-6 rounded-full bg-bank-accent"></div>
                <div className="w-6 h-6 rounded-full bg-bank-orange"></div>
                <div className="w-6 h-6 rounded-full bg-bank-blue"></div>
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
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-bank-purple/20 via-bank-accent/20 to-bank-blue/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
