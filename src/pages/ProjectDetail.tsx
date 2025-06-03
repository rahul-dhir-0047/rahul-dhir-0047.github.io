import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/components/Projects";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Github, ExternalLink } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState(
    projects.find((p) => p.id === Number(id))
  );

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update project when ID changes
    setProject(projects.find((p) => p.id === Number(id)));
  }, [id]);

  const handleBackClick = () => {
    // Navigate to home page and scroll to projects section
    navigate("/");
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto py-32 px-4 text-center">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <Button onClick={handleBackClick} className="mt-8">
            Go back to projects
          </Button>
        </div>
      </Layout>
    );
  }

  // Find next project for "UP NEXT" section
  const nextProjectIndex = projects.findIndex((p) => p.id === project.id) + 1;
  const nextProject = projects[nextProjectIndex] || projects[0]; // Cycle back to first project if at the end

  return (
    <Layout>
      <AnimatedBackground />
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4">
          {/* Back button - Updated to navigate to projects section */}
          <Button
            variant="outline"
            onClick={handleBackClick}
            className="mb-8 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Button>

          {/* Hero image */}
          <div className="h-[50vh] overflow-hidden rounded-lg mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project title and links */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.github, "_blank")}
                  className="flex items-center gap-2"
                >
                  <Github size={18} />
                  Source Code
                </Button>
              )}
              {project.live && (
                <Button
                  onClick={() => window.open(project.live, "_blank")}
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          {/* Project details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left sidebar with Role and Technologies */}
            <div className="space-y-8">
              {/* Role */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Role</h2>
                <p>{project.role}</p>
              </div>

              {/* Technologies used */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm font-medium bg-primary/20 text-primary px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {project.responsibilities?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Project Summary */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Summary</h2>
                <p className="text-foreground/80 leading-relaxed">
                  {project.projectSummary}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="list-disc pl-5 space-y-3">
                  {project.keyFeatures?.map((feature, index) => (
                    <li key={index} className="text-foreground/80">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development and Challenges */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Development and Challenges
                </h2>
                <ul className="list-disc pl-5 space-y-3">
                  {project.developmentChallenges?.map((challenge, index) => (
                    <li key={index} className="text-foreground/80">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Up Next Section */}
          <div className="mt-24">
            <h3 className="text-xl font-bold mb-8 text-center">UP NEXT</h3>
            <Card
              className="max-w-md mx-auto cursor-pointer hover-effect transition-all duration-300 hover:shadow-xl"
              onClick={() => navigate(`/project/${nextProject.id}`)}
            >
              <CardHeader>
                <CardTitle>{nextProject.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  {nextProject.description.substring(0, 100)}...
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <ArrowRight />
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
