import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React ", level: 80 },
      { name: "Next.js", level: 80 },
      { name: "ShadCN UI", level: 80 },
      { name: "HTML/CSS", level: 70 },
      { name: "JavaScript", level: 70 },
      // { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Python", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "ServiceNow", level: 70 },
      { name: "PostgreSQL", level: 70 },
      { name: "SOAP/REST", level: 90 },
      { name: "OracleDB", level: 70 },
      { name: "Gemini / OpenAI", level: 90 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    skills: [
      { name: "Git and GitHub", level: 95 },
      { name: "Linux", level: 95 },
      { name: "Docker", level: 60 },
      { name: "CI/CD Azure DevOps", level: 70 },
      { name: "VSCode", level: 95 },
      { name: "SoapUI", level: 90 },
      { name: "POSTMAN", level: 80 },
      { name: "LangChain / LlamaIndex", level: 70 },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [animateSkills, setAnimateSkills] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right" | ""
  >("");

  const handleTabChange = (value: string) => {
    // Determine animation direction based on the current and next tabs
    const currentIndex = skillCategories.findIndex((c) => c.id === activeTab);
    const nextIndex = skillCategories.findIndex((c) => c.id === value);

    if (currentIndex < nextIndex) {
      setAnimationDirection("right");
    } else {
      setAnimationDirection("left");
    }

    setAnimateSkills(false);
    setActiveTab(value);

    setTimeout(() => {
      setAnimateSkills(true);
    }, 100);
  };

  useEffect(() => {
    // Trigger animation when component mounts
    setTimeout(() => {
      setAnimateSkills(true);
    }, 100);
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world. Here's an overview of my technical skills.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs
            defaultValue="frontend"
            className="w-full"
            value={activeTab}
            onValueChange={handleTabChange}
          >
            <TabsList className="grid w-full grid-cols-3 mb-8 relative">
              {/* Add animated background indicator - now pure primary color */}
              <div
                className="absolute top-0 h-full bg-primary rounded-sm transition-all duration-300 ease-out z-0"
                style={{
                  width: "33.333%",
                  transform: `translateX(${
                    skillCategories.findIndex((c) => c.id === activeTab) * 100
                  }%)`,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              />

              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-transparent data-[state=active]:text-primary-foreground transition-all duration-300 z-10 relative"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className={`space-y-6 transition-all duration-500 ${
                  category.id === activeTab
                    ? animateSkills
                      ? "opacity-100 transform-none"
                      : `opacity-0 ${
                          animationDirection === "right"
                            ? "translate-x-20"
                            : animationDirection === "left"
                            ? "-translate-x-20"
                            : ""
                        }`
                    : "opacity-0"
                }`}
              >
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      opacity: animateSkills ? 1 : 0,
                      transform: animateSkills
                        ? "translateY(0)"
                        : "translateY(10px)",
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70">{skill.level}%</span>
                    </div>
                    <Progress
                      value={animateSkills ? skill.level : 0}
                      className="h-2 progress-animate"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        transitionDuration: "1.5s",
                        transitionProperty: "width, opacity",
                        transitionTimingFunction:
                          "cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
