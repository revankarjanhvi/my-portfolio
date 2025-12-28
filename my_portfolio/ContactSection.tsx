import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "revankarjanhvi@gmail.com",
      href: "mailto:revankarjanhvi@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7483790438",
      href: "tel:+917483790438",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "janhvi-revankar",
      href: "https://www.linkedin.com/in/janhvi-revankar-446974313",
    },
  ];

  return (
    <section id="contact" className="py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
            Get in Touch
          </h2>
          
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a conversation about cybersecurity and hardware engineering.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-elegant transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="gap-2"
            onClick={() => window.open("mailto:revankarjanhvi@gmail.com")}
          >
            <Mail size={18} />
            Send me an email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;