const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Hardware & VLSI",
      skills: ["VLSI Design", "RTL", "FPGA", "Verilog", "Digital Electronics"],
    },
    {
      title: "Security & Networks",
      skills: ["Network Security", "Cryptography", "IoT Security"],
    },
    {
      title: "Programming",
      skills: ["Python", "Hardware Description Languages"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 text-center">
            Skills & Expertise
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-accent text-accent-foreground rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;