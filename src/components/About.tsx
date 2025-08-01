import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
  const scrollRef = useScrollReveal();
  
  const keyStrengths = [
    "Backend Engineering",
    "Data Systems", 
    "Distributed Computing",
    "API Development",
    "Performance Optimization",
    "Cloud Architecture"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div ref={scrollRef} className="text-center mb-16 scroll-reveal">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate software engineer with a love for backend systems and data engineering
            </p>
          </div>

          {/* Main content */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="scroll-reveal glass modern-card p-8 rounded-2xl hover-scale">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm a software engineer with <strong className="text-primary">5+ years of experience</strong> in building 
                  scalable backend systems and data-driven applications. My journey started with a 
                  computer science degree and has evolved through hands-on experience with 
                  distributed systems, cloud architectures, and big data technologies.
                </p>
              </div>
              
              <div className="scroll-reveal glass modern-card p-8 rounded-2xl hover-scale" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg text-foreground leading-relaxed">
                  I specialize in <strong className="text-primary">backend engineering</strong> and <strong className="text-primary">data systems</strong>, 
                  with expertise in Python, Java, and modern frameworks. I'm passionate about 
                  solving complex problems, optimizing performance, and building systems that can 
                  scale from thousands to millions of users.
                </p>
              </div>
              
              <div className="scroll-reveal glass modern-card p-8 rounded-2xl hover-scale" style={{ animationDelay: '0.4s' }}>
                <p className="text-lg text-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open source projects, or sharing knowledge with the developer community through 
                  blog posts and technical talks.
                </p>
              </div>

              {/* Key strengths as badges */}
              <div className="pt-8 scroll-reveal" style={{ animationDelay: '0.6s' }}>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Key Strengths
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {keyStrengths.map((strength, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="glass text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale cursor-default shimmer"
                      style={{ animationDelay: `${0.1 * index}s` }}
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