import { Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Decorative background pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
            
            {/* Left: Photo with name below */}
            <div className="relative animate-fade-in">
              {/* Photo container with accent shape */}
              <div className="relative mx-auto lg:ml-auto lg:mr-12 w-fit">
                {/* Accent shape behind photo */}
                <div className="absolute -right-4 -bottom-4 w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 bg-primary rounded-[2rem] -z-10" />
                
                {/* Main photo */}
                <div className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-[2rem] overflow-hidden shadow-xl">
                  <img
                    src={profilePhoto}
                    alt="Janhvi Revankar - Cybersecurity & Hardware Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name below photo */}
              <div className="text-center lg:text-right lg:mr-12 mt-8">
                <h1 className="display-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
                  Janhvi Revankar
                </h1>
                <p className="text-sm md:text-base text-muted-foreground tracking-widest uppercase mt-2">
                  Cybersecurity & Hardware Engineer
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:pl-8 xl:pl-16 pt-4 lg:pt-12">
              <div className="space-y-8">
                {/* Section title */}
                <div className="animate-slide-up">
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    Why Me
                  </h2>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>

                {/* Description */}
                <div className="space-y-4 animate-slide-up animate-delay-100">
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Building secure systems by bridging low-level hardware understanding 
                    with robust software security practices. Passionate about embedded 
                    systems security and vulnerability research.
                  </p>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Currently exploring the intersection of hardware and software 
                    security, with a focus on creating resilient and trustworthy systems.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="animate-slide-up animate-delay-200">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open("mailto:revankarjanhvi@gmail.com")}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    schedule a call
                  </Button>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4 pt-4 animate-slide-up animate-delay-300">
                  <a
                    href="https://www.linkedin.com/in/janhvi-revankar-446974313"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:revankarjanhvi@gmail.com"
                    className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;