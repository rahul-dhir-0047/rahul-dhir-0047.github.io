
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Delay visibility for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Space-themed animated background */}
      <AnimatedBackground />
      
      <div className={`relative z-10 max-w-lg w-full mx-4 transition-transform duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
        <div 
          className={`bg-background/40 backdrop-blur-xl rounded-xl p-8 border border-primary/20 shadow-lg transition-all duration-500 ${isVisible ? 'shadow-primary/15' : 'shadow-primary/0'} ${isHovering ? 'shadow-xl shadow-primary/30' : ''}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="text-center space-y-6">
            <div className={`mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6 transition-all duration-500 ${isHovering ? 'animate-pulse-slow bg-primary/20' : ''}`}>
              <AlertTriangle className={`h-10 w-10 text-primary transition-all duration-500 ${isHovering ? 'rotate-12 scale-110' : ''}`} />
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold gradient-text animate-float`}>404</h1>
            <h2 className={`text-2xl font-semibold text-foreground transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              Lost in Space
            </h2>
            
            <p className={`text-foreground/70 transition-all delay-100 duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              The page you're looking for seems to have drifted into a black hole.
            </p>
            
            <div className={`pt-4 transition-all delay-200 duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Button
                size="lg"
                className={`hover:bg-primary hover:scale-105 transition-all duration-300 group`}
                onClick={() => window.location.href = '/'}
              >
                <Home className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative overflow-hidden">
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Return to Home</span>
                  <span className="absolute top-0 left-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Beam me up!</span>
                </span>
              </Button>
            </div>
            
            <div className={`mt-6 transition-all delay-300 duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-sm text-foreground/50">
                Error: Page at "{location.pathname}" not found
              </p>
            </div>
          </div>
        </div>
        
        {/* Flying meteors decoration */}
        <div className="absolute -top-16 -left-16 w-12 h-12 opacity-70 animate-[float_6s_ease-in-out_infinite_1s]">
          <div className="w-full h-full bg-primary/30 rounded-full blur-md"></div>
        </div>
        <div className="absolute -bottom-12 -right-12 w-20 h-20 opacity-80 animate-[float_8s_ease-in-out_infinite_0.5s]">
          <div className="w-full h-full bg-secondary/30 rounded-full blur-md"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
