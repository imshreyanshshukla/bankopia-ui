
import { useRef, useEffect } from "react";
import { CreditCard, Wallet, BanknoteIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
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
    <section id="services" className="py-20 bg-bank-light">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <div 
            ref={addToRefs}
            className="inline-flex items-center gap-2 bg-bank-accent/10 px-3 py-1 rounded-full reveal-on-scroll"
          >
            <span className="text-xs font-medium">Our Services</span>
          </div>
          <h2 
            ref={addToRefs}
            className="text-3xl md:text-4xl font-bold text-balance reveal-on-scroll"
          >
            We provide useful services
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div 
            ref={addToRefs}
            className="bg-bank-accent/10 rounded-xl p-6 flex flex-col items-center text-center transition-all hover:bg-bank-accent/20 reveal-on-scroll"
          >
            <CreditCard className="h-8 w-8 mb-4 text-bank-accent" />
            <span className="font-medium">Credit Card</span>
          </div>

          <div 
            ref={addToRefs}
            className="bg-bank-purple/10 rounded-xl p-6 flex flex-col items-center text-center transition-all hover:bg-bank-purple/20 reveal-on-scroll"
            style={{ animationDelay: '0.1s' }}
          >
            <Wallet className="h-8 w-8 mb-4 text-bank-purple" />
            <span className="font-medium">Debit Card</span>
          </div>

          <div 
            ref={addToRefs}
            className="bg-bank-blue/10 rounded-xl p-6 flex flex-col items-center text-center transition-all hover:bg-bank-blue/20 reveal-on-scroll"
            style={{ animationDelay: '0.2s' }}
          >
            <BanknoteIcon className="h-8 w-8 mb-4 text-bank-blue" />
            <span className="font-medium">Banking</span>
          </div>

          <div 
            ref={addToRefs}
            className="bg-bank-orange/10 rounded-xl p-6 flex flex-col items-center text-center transition-all hover:bg-bank-orange/20 reveal-on-scroll"
            style={{ animationDelay: '0.3s' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mb-4 text-bank-orange">
              <path d="M2 12h2"></path>
              <path d="M6 12h2"></path>
              <path d="M10 12h2"></path>
              <path d="M18 6l-1.5-1.5"></path>
              <path d="M14 5l-3-3-8.5 8.5c-.69.69-.69 1.81 0 2.5l5 5c.69.69 1.81.69 2.5 0l8.5-8.5-1-1-3.5 3.5"></path>
              <path d="M18 12l-6 6"></path>
              <path d="M15 9l6-6"></path>
            </svg>
            <span className="font-medium">Payment App</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={addToRefs} className="space-y-6 reveal-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold">Our best fintech solution additional optimization to make running</h3>
            <p className="text-muted-foreground">
              We take the complexity out of financial management by integrating blockchain technology 
              with traditional banking features. Our services are designed with simplicity and usability in mind.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-bank-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm">Real-time analytics powered by AI</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-bank-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm">Smart budget planner</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-bank-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm">Connect with wallets</span>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-bank-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm">Stop Hunting</span>
              </div>
            </div>
            
            <Button className="bg-bank-dark hover:bg-black text-white mt-4">
              Learn More <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div ref={addToRefs} className="grid grid-cols-2 gap-6 reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-5 rounded-2xl shadow-soft card-hover">
              <div className="h-10 w-10 flex items-center justify-center bg-bank-blue/10 rounded-xl mb-4">
                <BanknoteIcon className="h-5 w-5 text-bank-blue" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Online Banking</h4>
              <p className="text-sm text-muted-foreground">Manage your accounts with ease from anywhere in the world.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-soft card-hover mt-10">
              <div className="h-10 w-10 flex items-center justify-center bg-bank-purple/10 rounded-xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-bank-purple">
                  <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-7h-2c0-1-1.5-3-3-3z"></path>
                  <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
                  <path d="M16 11h0"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Premium Benefits</h4>
              <p className="text-sm text-muted-foreground">Exclusive rewards and benefits for our premium cardholders.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-soft card-hover">
              <div className="h-10 w-10 flex items-center justify-center bg-bank-orange/10 rounded-xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-bank-orange">
                  <path d="m2 18 8-8 4 4 8-8"></path>
                  <path d="M22 18v-8h-8"></path>
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Investment Options</h4>
              <p className="text-sm text-muted-foreground">Grow your wealth with our tailored investment solutions.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-soft card-hover mt-10">
              <div className="h-10 w-10 flex items-center justify-center bg-bank-accent/10 rounded-xl mb-4">
                <Shield className="h-5 w-5 text-bank-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Security First</h4>
              <p className="text-sm text-muted-foreground">Advanced security features to keep your money and data safe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
