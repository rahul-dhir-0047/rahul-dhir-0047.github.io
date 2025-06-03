import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const textToType = "I build AI-powered Apps.";
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    // Handle typing animation
    const timeout = setTimeout(() => {
      if (!isDeleting && index < textToType.length) {
        // Typing
        setTypedText((prev) => prev + textToType[index]);
        setIndex(index + 1);
        setTypingSpeed(100);
      } else if (!isDeleting && index >= textToType.length) {
        // Finished typing, pause before deleting
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (isDeleting && typedText.length > 0) {
        // Deleting
        setTypedText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
      } else if (isDeleting && typedText.length === 0) {
        // Finished deleting, start typing again
        setIsDeleting(false);
        setIndex(0);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, typedText, textToType]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <h1 className="text-sm md:text-base text-primary mb-4 font-mono">
            Hi, my name is
          </h1>
          <h2 className="text-4xl md:text-7xl font-bold mb-2 md:mb-4 gradient-text">
            Rahul Dhir
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mb-6">
            AI Engineer | Full-Stack Developer | Data-Driven Innovator
          </p>
          <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-16">
            <p className="text-2xl md:text-4xl font-bold text-foreground/80">
              {typedText}
              <span
                className={`${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              >
                |
              </span>
            </p>
          </div>
          <p className="text-foreground/70 max-w-xl mb-8 text-base md:text-lg">
            I'm a software engineer specializing in AI and data-driven
            solutions. Currently, I'm focused on building intelligent,
            user-centered products that blend automation with real-world impact.
          </p>
          <div className="flex flex-col w-full md:flex-row gap-4">
            <Button
              size="lg"
              className="w-full md:w-auto flex items-center gap-2 hover-effect"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/rahul-dhir-hyd/",
                  "_blank"
                );
              }}
            >
              <Linkedin size={18} />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto flex items-center gap-2 hover-effect"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail size={18} />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="text-primary" />
      </button>
    </section>
  );
};

export default Hero;
