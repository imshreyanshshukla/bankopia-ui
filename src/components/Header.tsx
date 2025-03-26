
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="h-6 w-6 rounded-full bg-bank-accent"></div>
          <h1 className="text-xl font-semibold">Bankopia</h1>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm font-medium hover:text-bank-accent transition-colors">Home</a>
          <a href="#features" className="text-sm font-medium hover:text-bank-accent transition-colors">Features</a>
          <a href="#services" className="text-sm font-medium hover:text-bank-accent transition-colors">Services</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-bank-accent transition-colors">Testimonials</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium">Log in</Button>
          <Button className="bg-bank-dark hover:bg-black text-white">Free Trial</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
