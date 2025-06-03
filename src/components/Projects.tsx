import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  featured: boolean;
  role?: string;
  responsibilities?: string[];
  projectSummary?: string;
  keyFeatures?: string[];
  developmentChallenges?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern personal website built with React, TypeScript, and Tailwind CSS, showcasing my work in AI, full-stack development, and automation.",
    tags: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "Radix UI"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    github: "https://github.com/rahul-dhir-0047/folio-code",
    featured: true,
    role: "Full Stack Developer",
    responsibilities: [
      "Developed responsive layouts using Tailwind CSS and Radix UI",
      "Implemented reusable components with ShadCN UI and TypeScript",
      "Built dark/light mode support and smooth animations",
    ],
    projectSummary:
      "A personal portfolio website to showcase my AI projects, development experience, and technical skills. It emphasizes accessibility, responsiveness, and developer-focused aesthetics.",
    keyFeatures: [
      "Responsive UI with consistent design components",
      "Dark/light mode toggle",
      "Interactive project and skill sections",
      "Deployed with custom domain and optimized for performance",
    ],
    developmentChallenges: [
      "Integrating multiple UI libraries while maintaining design consistency",
      "Ensuring mobile responsiveness across devices",
      "Optimizing loading performance without compromising on visuals",
    ],
  },
  {
    id: 2,
    title: "Multimodal Document Analysis with Gemini and RAG",
    description:
      "A document analysis pipeline combining Google's Gemini and Retrieval-Augmented Generation (RAG) to extract insights from complex PDFs such as 10-K filings.",
    tags: ["Python", "Gemini", "RAG", "LLM", "LangChain"],
    image: "/assets/projects/project_2.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    role: "AI Engineer",
    responsibilities: [
      "Integrated Gemini Multimodality API for document parsing",
      "Implemented RAG to retrieve and generate context-rich answers",
      "Processed and summarized complex PDFs with 95%+ accuracy",
    ],
    projectSummary:
      "A pipeline for intelligent document analysis using multimodal AI. It extracts, summarizes, and interprets data from lengthy documents, dramatically reducing manual effort.",
    keyFeatures: [
      "Multimodal input support (text + structure)",
      "High-accuracy answer generation from unstructured documents",
      "Plug-and-play architecture for any PDF-based corpus",
      "Summarization and question-answering modes",
    ],
    developmentChallenges: [
      "Parsing complex layouts in PDF documents",
      "Combining RAG with Gemini for structured output",
      "Maintaining context relevance across large document sections",
    ],
  },
  {
    id: 3,
    title: "Box Office Success Analysis of Hollywood Movies",
    description:
      "An in-depth data analysis project uncovering key factors behind box office success using over 5,000 movie records from TMDb.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    image: "/assets/projects/project_3.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    role: "Data Analyst",
    responsibilities: [
      "Cleaned and transformed nested JSON data from TMDb API",
      "Engineered features like ROI, genre groups, and release windows",
      "Created 25+ visualizations to derive actionable insights",
    ],
    projectSummary:
      "A project that uses exploratory data analysis to identify what makes a Hollywood movie successful. It evaluates financial, genre, and temporal trends across thousands of films.",
    keyFeatures: [
      "Insightful visualizations covering ROI, budget vs revenue, genre trends",
      "Custom feature engineering to enhance predictive variables",
      "Interactive data storytelling using Jupyter Notebooks",
    ],
    developmentChallenges: [
      "Parsing and normalizing nested JSON structures",
      "Ensuring consistency across incomplete datasets",
      "Visualizing multi-dimensional data in an intuitive way",
    ],
  },
  // {
  //   id: 4,
  //   title: "Weather Dashboard",
  //   description:
  //     "An interactive weather dashboard that displays current weather and forecasts for multiple locations.",
  //   tags: ["React", "OpenWeather API", "Chart.js"],
  //   image:
  //     "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
  //   github: "https://github.com",
  //   live: "https://example.com",
  //   featured: false,
  //   role: "React Developer",
  //   responsibilities: [
  //     "Integrated with OpenWeather API for weather data",
  //     "Created interactive charts using Chart.js",
  //     "Implemented location search and geocoding",
  //     "Designed responsive UI for various devices",
  //   ],
  //   projectSummary:
  //     "An interactive weather dashboard that provides detailed weather information for multiple locations. Users can view current conditions, hourly forecasts, and 7-day predictions with visual charts and graphs.",
  //   keyFeatures: [
  //     "Location-based weather data",
  //     "Interactive charts for temperature, precipitation, and wind",
  //     "Search functionality for global locations",
  //     "Saved locations with persistent storage",
  //     "Weather alerts and notifications",
  //   ],
  //   developmentChallenges: [
  //     "Handling API rate limits efficiently",
  //     "Processing and visualizing large datasets",
  //     "Implementing accurate geolocation services",
  //     "Creating intuitive data visualizations for complex weather data",
  //   ],
  // },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-transparent/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is unique and
            demonstrates different aspects of my skillset.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="px-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="sm:basis-1/2 md:basis-1/2 lg:basis-1/2"
              >
                <Link
                  to={`/project/${project.id}`}
                  className="block hover-effect"
                >
                  <Card className="overflow-hidden bg-card border border-border h-full transition-all duration-300 hover:shadow-xl">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.github, "_blank");
                          }}
                          className="flex items-center gap-2"
                        >
                          <Github size={16} />
                          Source Code
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.live, "_blank");
                          }}
                          className="flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative inline-flex static mr-2" />
            <CarouselNext className="relative inline-flex static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
