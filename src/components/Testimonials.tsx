
import { useRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Bankopia has transformed the way I manage my finances. The real-time analytics are incredible.",
    author: "Alexandra Johnson",
    role: "Small Business Owner",
    color: "bg-bank-accent/10",
    textColor: "text-bank-accent"
  },
  {
    id: 2,
    quote: "The security features provide me with peace of mind. I can't imagine using any other banking platform.",
    author: "Michael Chen",
    role: "Software Engineer",
    color: "bg-bank-purple/10",
    textColor: "text-bank-purple"
  },
  {
    id: 3,
    quote: "Their customer service is exceptional. Any issues I've had were resolved quickly and professionally.",
    author: "Sarah Martinez",
    role: "Healthcare Professional",
    color: "bg-bank-blue/10",
    textColor: "text-bank-blue"
  }
];

const Testimonials = () => {
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
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div 
            ref={addToRefs}
            className="inline-flex items-center gap-2 bg-bank-accent/10 px-3 py-1 rounded-full reveal-on-scroll"
          >
            <span className="text-xs font-medium">Testimonials</span>
          </div>
          <h2 
            ref={addToRefs}
            className="text-3xl md:text-4xl font-bold text-balance reveal-on-scroll"
          >
            What they say about us
          </h2>
          <p 
            ref={addToRefs}
            className="text-muted-foreground mx-auto max-w-xl reveal-on-scroll"
          >
            Don't just take our word for it. Hear what our customers have to say about their experience with Bankopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              ref={addToRefs}
              className={`p-8 rounded-2xl ${testimonial.color} reveal-on-scroll`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8889 0H0V11.5556C0 21.3333 5.77778 29.7778 16 32V25.7778C10.6667 24 7.55556 19.1111 7.11111 13.3333H13.8889V0ZM40 0H26.1111V11.5556C26.1111 21.3333 31.8889 29.7778 42.1111 32V25.7778C36.7778 24 33.6667 19.1111 33.2222 13.3333H40V0Z" fill="currentColor" className={testimonial.textColor} />
                </svg>
              </div>
              <p className="text-lg mb-8">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
