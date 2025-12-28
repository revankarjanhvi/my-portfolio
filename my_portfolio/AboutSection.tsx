import { Shield, Cpu, Network } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Cpu,
      title: "Hardware Foundation",
      description: "Strong foundation in electronics, digital systems, and hardware architecture.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Focus",
      description: "Specialized in network security, cryptography, and secure system design.",
    },
    {
      icon: Network,
      title: "Hardware-Software Integration",
      description: "Bridging hardware-aware security with robust software practices.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6 text-center">
            About Me
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />
          
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-16">
            I hold a Bachelor's degree in Electronics and Communication Engineering and am 
            currently pursuing a Master's in Cybersecurity. With a strong foundation in hardware 
            and digital systems, I focus on cybersecurity, computer networks, and hardware-aware 
            security design. I am passionate about building secure systems by bridging low-level 
            hardware understanding with robust software security practices.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl bg-background shadow-soft hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;