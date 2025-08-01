import { Badge } from '@/components/ui/badge';

const About = () => {
  const keyStrengths = [
    "Backend Engineering",
    "Data Systems", 
    "Distributed Computing",
    "API Development",
    "Performance Optimization",
    "Cloud Architecture"
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
          <div className="text-center max-w-3xl mx-auto">
            <div className="space-y-8 animate-fade-in">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a software engineer with <strong>5+ years of experience</strong> in building 
                scalable backend systems and data-driven applications. My journey started with a 
                computer science degree and has evolved through hands-on experience with 
                distributed systems, cloud architectures, and big data technologies.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                I specialize in <strong>backend engineering</strong> and <strong>data systems</strong>, 
                with expertise in Python, Java, and modern frameworks. I'm passionate about 
                solving complex problems, optimizing performance, and building systems that can 
                scale from thousands to millions of users.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community through 
                blog posts and technical talks.
              </p>

              {/* Key strengths as badges */}
              <div className="pt-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Key Strengths
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {keyStrengths.map((strength, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale cursor-default"
                    >
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;