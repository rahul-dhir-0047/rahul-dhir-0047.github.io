import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Toggle } from "./ui/toggle";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useLocalStorage<"dark" | "light">("theme", "dark");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavigation = (href: string) => {
    // If we're not on the homepage, go to homepage and then scroll to section
    if (!isHomePage) {
      navigate("/");
      const sectionId = href.replace("#", "");
      setTimeout(() => {
        const projectsSection = document.getElementById(sectionId);
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If we're already on homepage, just scroll to the section
      const sectionId = href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleResumeClick = () => {
    // Direct link to the resume file in the public folder
    const resumeUrl = "/final_resume.pdf";

    // Create a temporary anchor element and trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rahul_Dhir_Resume.pdf"; // Set a user-friendly filename
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold gradient-text">
          Rahul
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-foreground/80 hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              className="hover-effect flex items-center gap-2"
              onClick={handleResumeClick}
            >
              <Download size={16} />
              Resume
            </Button>

            {/* Theme toggle - positioned to the right of Resume button */}
            <Toggle
              variant="outline"
              size="sm"
              pressed={theme === "light"}
              onPressedChange={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={16} className="text-yellow-400" />
              ) : (
                <Moon size={16} className="text-black" />
              )}
            </Toggle>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="default"
            size="sm"
            className="hover-effect flex items-center gap-2 mr-2"
            onClick={handleResumeClick}
          >
            <Download size={16} />
            Resume
          </Button>

          {/* Theme toggle for mobile */}
          <Toggle
            variant="outline"
            size="sm"
            pressed={theme === "light"}
            onPressedChange={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-yellow-400" />
            ) : (
              <Moon size={16} className="text-black" />
            )}
          </Toggle>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(link.href);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
