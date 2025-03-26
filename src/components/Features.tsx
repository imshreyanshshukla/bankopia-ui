
import { 
  CircleDollarSign, 
  ChartBar, 
  Shield, 
  Clock, 
  ChevronRight
} from "lucide-react";
import { useEffect, useRef } from "react";

const Features = () => {
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
    <section id="features" className="py-20 bg-gradient-to-b from-white to-bank-light">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <div 
            ref={addToRefs} 
            className="inline-flex items-center gap-2 bg-bank-accent/10 px-3 py-1 rounded-full reveal-on-scroll"
          >
            <span className="text-xs font-medium">Features</span>
          </div>
          <h2 
            ref={addToRefs} 
            className="text-3xl md:text-4xl font-bold text-balance reveal-on-scroll"
          >
            Manage your finances<br />don't compromise.
          </h2>
          <p 
            ref={addToRefs} 
            className="text-muted-foreground mx-auto max-w-xl reveal-on-scroll"
          >
            Experience the future of banking with our cutting-edge platform designed to make financial management simple and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            ref={addToRefs} 
            className="bg-white rounded-2xl p-6 shadow-soft card-hover reveal-on-scroll"
          >
            <div className="h-12 w-12 flex items-center justify-center bg-bank-accent/10 rounded-xl mb-6">
              <CircleDollarSign className="h-6 w-6 text-bank-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Payment Processing</h3>
            <p className="text-muted-foreground mb-4">Instant transactions with the lowest fees on the market, powered by our proprietary technology.</p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-bank-accent">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div 
            ref={addToRefs} 
            className="bg-bank-dark text-white rounded-2xl p-6 shadow-card card-hover reveal-on-scroll"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-xl mb-6">
              <ChartBar className="h-6 w-6 text-bank-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
            <p className="text-white/70 mb-4">Track your spending patterns and gain valuable insights into your financial habits with detailed analytics.</p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-bank-accent">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div 
            ref={addToRefs} 
            className="bg-white rounded-2xl p-6 shadow-soft card-hover reveal-on-scroll"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="h-12 w-12 flex items-center justify-center bg-bank-purple/10 rounded-xl mb-6">
              <Shield className="h-6 w-6 text-bank-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
            <p className="text-muted-foreground mb-4">Your data is protected with military-grade encryption and multi-factor authentication.</p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-bank-purple">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div 
            ref={addToRefs} 
            className="bg-white rounded-2xl p-6 shadow-soft card-hover reveal-on-scroll"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="h-12 w-12 flex items-center justify-center bg-bank-blue/10 rounded-xl mb-6">
              <Clock className="h-6 w-6 text-bank-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-time Computing</h3>
            <p className="text-muted-foreground mb-4">Fintech solutions that process your data in real-time, providing instant insights and actions.</p>
            <a href="#" className="inline-flex items-center text-sm font-medium text-bank-blue">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
