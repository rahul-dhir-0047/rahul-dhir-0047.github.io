import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  brightness: number;
  color: string;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Get canvas context
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars: Star[] = [];
    const starCount = 200; // More stars than before
    const colors = ["#ffffff", "#fffafa", "#f8f8ff", "#e6e6fa", "#b0c4de"]; // Various star colors

    for (let i = 0; i < starCount; i++) {
      // Random star position and properties
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.5 + 0.5, // Smaller stars for more realistic space feel
        speed: Math.random() * 0.05 + 0.01, // Slower movement for stars
        brightness: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Create multiple glowing areas (like distant galaxies)
    const galaxies = [
      {
        x: canvas.width / 2,
        y: canvas.height / 3,
        radius: canvas.width / 5,
        color: "rgba(128, 0, 128, 0.15)", // Purple center
      },
      {
        x: canvas.width / 4,
        y: canvas.height / 1.5,
        radius: canvas.width / 7,
        color: "rgba(70, 0, 130, 0.1)", // Indigo center
      },
      {
        x: canvas.width * 0.75,
        y: canvas.height * 0.6,
        radius: canvas.width / 6,
        color: "rgba(0, 0, 128, 0.12)", // Deep blue center
      },
    ];

    // Nebula parameters
    const nebulae = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.7,
        width: canvas.width * 0.3,
        height: canvas.height * 0.3,
        color1: "rgba(138, 43, 226, 0.05)", // Purple
        color2: "rgba(75, 0, 130, 0.02)", // Indigo
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.2,
        width: canvas.width * 0.2,
        height: canvas.height * 0.4,
        color1: "rgba(100, 0, 200, 0.03)", // Purple blue
        color2: "rgba(0, 0, 0, 0)", // Transparent
      },
    ];

    // Animation loop
    let pulsePhase = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update pulse phase
      pulsePhase += 0.01;
      const pulseFactor = Math.sin(pulsePhase) * 0.2 + 0.8; // 0.6 to 1.0

      // Draw nebulae
      nebulae.forEach((nebula) => {
        const radius = Math.max(nebula.width, nebula.height) / 2;

        const gradient = ctx.createRadialGradient(
          nebula.x,
          nebula.y,
          0,
          nebula.x,
          nebula.y,
          radius
        );
        gradient.addColorStop(0, nebula.color1);
        gradient.addColorStop(1, nebula.color2);

        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw galaxy glows with pulsating effect
      galaxies.forEach((galaxy) => {
        const gradient = ctx.createRadialGradient(
          galaxy.x,
          galaxy.y,
          0,
          galaxy.x,
          galaxy.y,
          galaxy.radius * pulseFactor
        );
        gradient.addColorStop(0, galaxy.color);
        gradient.addColorStop(
          0.3,
          galaxy.color
            .replace("0.15", "0.1")
            .replace("0.12", "0.07")
            .replace("0.1", "0.05")
        );
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)"); // Fade to transparent

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(galaxy.x, galaxy.y, galaxy.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw stars
      stars.forEach((star) => {
        // Move stars
        star.y += star.speed;

        // Reset stars that move off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        // Make some stars twinkle
        const twinkle = Math.sin(Date.now() * 0.002 + star.x) * 2 + 0.8;
        const starOpacity = star.brightness * twinkle;

        ctx.fillStyle = star.color
          .replace(")", `, ${starOpacity})`)
          .replace("rgb", "rgba");
        ctx.fill();

        // Add a subtle glow to bigger stars
        if (star.size > 1) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = star.color
            .replace(")", ", 0.1)")
            .replace("rgb", "rgba");
          ctx.fill();
        }
      });

      // Draw shooting stars occasionally
      if (Math.random() < 0.01) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: (Math.random() * canvas.height) / 3,
          length: Math.random() * 80 + 20,
          angle: Math.PI / 6 + (Math.random() * Math.PI) / 6,
          speed: Math.random() * 10 + 5,
        };

        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        const endX =
          shootingStar.x + Math.cos(shootingStar.angle) * shootingStar.length;
        const endY =
          shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length;
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default AnimatedBackground;
