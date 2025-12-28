import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "M.Tech in Cybersecurity",
      institution: "Reva University (RACE)",
      year: "Expected 2027",
      current: true,
    },
    {
      degree: "B.E. in Electronics and Communications",
      institution: "Government Engineering College Karwar",
      year: "2025",
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 text-center">
            Education
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background shadow-soft" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <GraduationCap className="w-5 h-5 text-primary" />
                        {edu.current && (
                          <span className="text-xs font-medium text-primary bg-accent px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-primary font-medium text-sm">
                        {edu.year}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;