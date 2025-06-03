import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code, User } from "lucide-react";
import profile_image from "../assets/projects/good_looking_guy.jpg";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-transparent relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Software engineer passionate about building exceptional digital
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden mb-6 border border-border bg-card shadow-lg">
                <img
                  src={profile_image}
                  alt="Profile"
                  className="w-full aspect-[1/1] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold gradient-text">
                    Rahul Dhir
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Full Stack Developer
                  </p>

                  <Separator className="my-4" />

                  <div className="flex flex-col gap-3 mt-4">
                    <div className="flex items-center gap-3">
                      <User size={18} className="text-primary" />
                      <span>Based in Bangalore/Hyderabad IN</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code size={18} className="text-primary" />
                      <span>2+ years experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
              I'm a curious and impact-driven engineer who thrives at the intersection of AI, data, 
              and full-stack development. With experience ranging from building multilingual, 
              AI-powered customer service systems to deploying document analysis pipelines using 
              cutting-edge models like Gemini and RAG, I focus on creating intelligent solutions that 
              are both technically robust and user-centric. My work blends machine learning, automation, 
              and modern web technologies to transform complex challenges into seamless digital experiences.
              </p>

              <p className="text-lg leading-relaxed mb-6">
              I believe great technology should be intuitive, insightful, and scalable. Whether I'm analyzing 
              thousands of movie records to uncover trends or integrating LLMs into enterprise workflows, my 
              approach combines thoughtful design with clean, maintainable code. I'm always exploring new ways 
              to bridge the gap between raw data and real-world impact—crafting tools that don't just function, but truly serve.
              </p>

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 mt-8">
                <GraduationCap className="text-primary" />
                Education
              </h3>
              {/* <Card className="mb-6">
                <CardContent className="pt-6">
                  <h4 className="font-bold">Master of Computer Science</h4>
                  <p className="text-muted-foreground">
                    Stanford University • 2017-2019
                  </p>
                  <p className="mt-2">
                    Specialized in Software Engineering and Artificial
                    Intelligence
                  </p>
                </CardContent>
              </Card> */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h4 className="font-bold">
                    Bachelor of Engineering (B.E) in Electrical and Electronics Engineering (EEE)
                  </h4>
                  <p className="text-muted-foreground">
                    Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad, India • 2019-2023
                  </p>
                  <p className="mt-2">
                    Graduated with a CGPA of 8.9, ranked top of the department. Elected as Class Representative for 4 consecutive years.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 mt-8">
                <Briefcase className="text-primary" />
                Experience
              </h3>
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h4 className="font-bold">Associate Software Developer - Integration & Automation Specialist</h4>
                  <p className="text-muted-foreground">
                    Right Prompt Technologies Pvt. Ltd. • Feb 2024 – Present
                  </p>
                  <p className="mt-2">
                  Developing AI-powered enterprise solutions using Node.js, Next.js, and ServiceNow; automated workflows that reduced manual underwriting by 85%.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-bold">Analyst - Salesforce Developer</h4>
                  <p className="text-muted-foreground">
                    Deloitte USI Consulting • Jul 2023 - Oct 2023
                  </p>
                  <p className="mt-2">
                    Built and automated Salesforce processes with Apex, Omnistudio, and Lightning Web Components; enhanced UI and boosted data entry efficiency by 95%.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
