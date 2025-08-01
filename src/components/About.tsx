import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Database,
      title: "Data Systems",
      description: "Designing efficient data pipelines and analytics platforms"
    },
    {
      icon: Server,
      title: "Backend Engineering",
      description: "Building robust APIs and distributed systems"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and reliability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate software engineer with a love for backend systems and data engineering
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                I'm a software engineer with <strong>5+ years of experience</strong> in building 
                scalable backend systems and data-driven applications. My journey started with a 
                computer science degree and has evolved through hands-on experience with 
                distributed systems, cloud architectures, and big data technologies.
              </p>
              
              <p className="text-foreground leading-relaxed">
                I specialize in <strong>backend engineering</strong> and <strong>data systems</strong>, 
                with expertise in Python, Java, and modern frameworks. I'm passionate about 
                solving complex problems, optimizing performance, and building systems that can 
                scale from thousands to millions of users.
              </p>
              
              <p className="text-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community through 
                blog posts and technical talks.
              </p>
            </div>
            
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card key={index} className="shadow-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;