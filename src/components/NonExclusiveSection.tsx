import { Users, Heart, Handshake, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const NonExclusiveSection = () => {
  return <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-2">
            <div className="relative">
              <div className="text-xl md:text-2xl font-bold text-black transform -rotate-2" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif', textShadow: '2px 2px 0px rgba(0,0,0,0.1)', position: 'relative', display: 'inline-block' }}>
                Click Here!
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <ArrowDown size={24} className="text-black md:w-8 md:h-8" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <Link to="/about">
              <Button size="lg" className="text-xl md:text-3xl px-10 py-6 md:px-20 md:py-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 hover:scale-105 border-4 border-primary/30 group">
                <span className="group-hover:animate-color-flash">Take the Studios by Dave Tour</span>
              </Button>
            </Link>
          </div>
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4 text-primary">
              <Users size={32} />
              <Heart size={28} />
              <Handshake size={32} />
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            We're also a Non-Exclusive Agency
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At Studios by Dave, we believe in building relationships, not restrictions. 
            We're proud to be a <span className="font-semibold text-primary">non-exclusive agency</span> that 
            welcomes and caters to anyone in need of our services. Whether you're a small startup, 
            an established business, or anywhere in between, we're here to help you succeed online.
          </p>
          
          <p className="text-base text-muted-foreground">
            Your success is our success - no exclusivity, just great results.
          </p>
        </div>
      </div>
    </section>;
};
export default NonExclusiveSection;