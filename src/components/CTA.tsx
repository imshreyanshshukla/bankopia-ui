
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      revealRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className="py-20 bg-bank-dark text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={addToRefs} className="space-y-8 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <span className="text-xs font-medium">Get Started Today</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Are you ready for a better<br />finance solution?
            </h2>
            <p className="text-white/70 max-w-md">
              Join thousands of satisfied customers who have already transformed their financial management experience with Bankopia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-bank-accent hover:bg-bank-accent/90 text-black rounded-full px-7 h-12">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full px-7 h-12">
                Contact Sales
              </Button>
            </div>
          </div>
          <div ref={addToRefs} className="reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-bank-purple/30 via-bank-accent/20 to-bank-blue/20 blur-3xl rounded-full"></div>
              <img 
                src="/lovable-uploads/e4cd8255-997b-4684-a8a8-81cda1463f24.png"
                alt="Banking app features" 
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
