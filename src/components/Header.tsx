
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { UserRound, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCreditCard = () => {
    navigate('/credit-card');
  };

  const handleFreeTrial = () => {
    toast({
      title: "Free Trial Activated!",
      description: "Thanks for your interest! We'll contact you shortly.",
      variant: "default",
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-bank-accent flex items-center justify-center">
            <img 
              src="/lovable-uploads/e4cd8255-997b-4684-a8a8-81cda1463f24.png" 
              alt="Bankopia mascot" 
              className="h-6 w-6 object-contain rounded-full"
            />
          </div>
          <h1 className="text-xl font-semibold">Bankopia</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm font-medium hover:text-bank-accent transition-colors">Home</a>
          <a href="#features" className="text-sm font-medium hover:text-bank-accent transition-colors">Features</a>
          <a href="#services" className="text-sm font-medium hover:text-bank-accent transition-colors">Services</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-bank-accent transition-colors">Testimonials</a>
          <Button 
            variant="outline" 
            className="text-sm font-medium" 
            onClick={handleCreditCard}
          >
            Credit Card
          </Button>
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="text-sm font-medium flex items-center gap-2" 
            onClick={handleLogin}
          >
            <UserRound size={18} />
            Log in
          </Button>
          <Button 
            className="bg-bank-dark hover:bg-black text-white" 
            onClick={handleFreeTrial}
          >
            Free Trial
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col gap-4 animate-slide-down">
            <a href="#" className="text-sm font-medium hover:text-bank-accent transition-colors py-2">Home</a>
            <a href="#features" className="text-sm font-medium hover:text-bank-accent transition-colors py-2">Features</a>
            <a href="#services" className="text-sm font-medium hover:text-bank-accent transition-colors py-2">Services</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-bank-accent transition-colors py-2">Testimonials</a>
            <Button 
              variant="outline" 
              className="text-sm font-medium w-full" 
              onClick={handleCreditCard}
            >
              Credit Card
            </Button>
            <hr className="my-2 border-gray-100" />
            <Button 
              variant="ghost" 
              className="text-sm font-medium flex items-center justify-center gap-2 w-full" 
              onClick={handleLogin}
            >
              <UserRound size={18} />
              Log in
            </Button>
            <Button 
              className="bg-bank-dark hover:bg-black text-white w-full" 
              onClick={handleFreeTrial}
            >
              Free Trial
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
