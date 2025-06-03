
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Create a more dynamic scroll animation system
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When element enters viewport
        if (entry.isIntersecting) {
          // Calculate how far the element is in the viewport (0 to 1)
          const visibilityRatio = entry.intersectionRatio;
          
          // Apply opacity based on visibility ratio for a smoother fade-in
          const element = entry.target as HTMLElement;
          element.style.opacity = Math.min(visibilityRatio * 2, 1).toString();
          element.style.transform = `translateY(${20 - (visibilityRatio * 20)}px)`;
        } else {
          // When element is not in viewport, reduce opacity
          const element = entry.target as HTMLElement;
          element.style.opacity = "0";
          element.style.transform = "translateY(20px)";
        }
      });
    }, { 
      threshold: Array.from({ length: 20 }, (_, i) => i / 20), // Create 20 thresholds from 0 to 1
      rootMargin: "-5% 0px" // Start slightly before element enters viewport
    });

    // Find all sections and their children to animate
    const sectionsToAnimate = document.querySelectorAll('section > div, .card');
    sectionsToAnimate.forEach(section => {
      // Set initial styles for transition
      const element = section as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      {/* AnimatedBackground positioned as a fixed element to cover the entire page */}
      <AnimatedBackground />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Index;
