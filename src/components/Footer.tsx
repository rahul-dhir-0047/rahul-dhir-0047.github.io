import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0 flex-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Rahul Dhir
            </h3>
            <p className="text-foreground/70 max-w-md mb-6">
              A passionate full-stack developer building digital experiences
              that make a difference.
            </p>

            {/* Contact Details Section - Below Description */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-1.5 rounded-full">
                  <Mail className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p className="text-m font-medium">Email</p>
                  <p className="text-foreground/70 text-m">
                    rahul.dhir2001@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-1.5 rounded-full">
                  <Phone className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p className="text-m font-medium">Phone</p>
                  <p className="text-foreground/70 text-m">+91 8897464822</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-primary/20 p-1.5 rounded-full">
                  <MapPin className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <p className="text-m font-medium">Location</p>
                  <p className="text-foreground/70 text-m">
                    Bangalore/Hyderabad, IN
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/rahul-dhir-0047"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-dhir-hyd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rahul.dhir2001@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm">
            © {currentYear} Rahul Dhir. All Rights Reserved.
          </p>

          <Button
            variant="ghost"
            size="icon"
            className="mt-4 md:mt-0 hover:bg-primary/20"
            onClick={scrollToTop}
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
