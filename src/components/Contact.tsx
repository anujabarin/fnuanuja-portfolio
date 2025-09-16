import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Mail, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "fnuanuja25@gmail.com",
      href: "mailto:fnuanuja25@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dallas, TX",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/anujabarin",
      username: "@anujabarin"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fnuanuja/",
      username: "fnuanuja"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
          </div>

          <div className="space-y-8">
            {/* Contact details */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social links */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground">
                  Connect with me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{link.label}</p>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.username}
                      </a>
                    </div>
                  </div>
                ))}

                {/* Resume download */}
                <div className="pt-4 border-t border-border">
                  <a href="/FNU_Anuja_SDE.pdf" download className="w-full">
                    <Button variant="outline" className="w-full shadow-button">
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
