import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Code, Database, Cloud, Zap, Users, BookOpen } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const keyStrengths = [
    {
      icon: Code,
      title: "Backend Enginering",
      description: "Scalable server-side applications"
    },
    {
      icon: Database,
      title: "Data Systems",
      description: "Data visualize & analytics platforms"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Distributed & microservices"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance solutions"
    },
    {
      icon: Users,
      title: "API Development",
      description: "RESTful APIs"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new tech"
    }
  ];

  const highlights = [
    { number: "2+", label: "Years Experience" },
    { number: "8+", label: "Projects undertaken" },
    { number: "10+", label: "Technologies Mastered" },
    { number: "∞", label: "Problems Solved" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              <span className="text-primary">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable systems and distributed architectures. I turn complex
          data into clean, efficient solutions and thrive across the SDLC from design to deployment.
            </p>
          </div>

          {/* Stats highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{highlight.number}</div>
                  <div className="text-sm text-muted-foreground">{highlight.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                <span className="text-primary">My Journey</span>
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                With over 2 years of experience in software engineering, I’ve grown from a curious computer student to a confident backend engineer, blending hands on industry work with academic exploration. 
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                During my time at Accenture, I contributed to enterprise scale applications, working with cross-functional teams to deliver robust, efficient solutions. At university, I led Cargo Connect prject, where we optimized airport freight movement without infrastructure changes, an experience that showed me the real impact of thoughtful software design.

              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I specialize in crafting robust backend solutions and optimizing performance for applications that serve millions. Every line of code I write is driven by the question: 
                <em className="text-primary">"How can this scale better?"</em> I find deep satisfaction in turning complex challenges into clean, maintainable solutions.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                For me, growth comes from collaboration, curiosity, and a constant drive to learn.

              </p>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyStrengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{strength.title}</h4>
                          <p className="text-sm text-muted-foreground">{strength.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Let's Build and Grow Together
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always excited about new challenges and opportunities to create innovative solutions. 
                  Whether it's architecting a new system or optimizing existing infrastructure, let's collaborate!
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    Exploring new roles
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">
                    Remote friendly
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    Driven by teamwork
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-accent hover:text-primary-foreground transition-colors cursor-default">
                    Strong interpersonal skills
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    Cooperative mindset
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;