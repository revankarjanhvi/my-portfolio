import { ExternalLink, Cpu, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Multipurpose Solar Powered Agriculture Robot",
      description:
        "An innovative agricultural robotics project combining solar power technology with automated farming capabilities for sustainable agriculture.",
      tags: ["IoT", "Embedded Systems", "Solar Power", "Robotics"],
      icon: Zap,
    },
    {
      title: "Optimized Delay and Energy Efficient Booth Multiplier",
      description:
        "Design and implementation of an optimized Booth multiplier architecture focusing on reducing computational delay and power consumption.",
      tags: ["VLSI", "RTL Design", "Digital Logic", "Optimization"],
      icon: Cpu,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 text-center">
            Projects
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="group hover:shadow-elegant transition-all duration-300 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <project.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="font-serif text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;