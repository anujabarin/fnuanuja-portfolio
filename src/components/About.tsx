import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Cloud, Zap, Users, BookOpen } from 'lucide-react';

const About = () => {
  const keyStrengths = [
    {
      icon: Code,
      title: "Backend Engineering",
      description: "Scalable server-side applications"
    },
    {
      icon: Database,
      title: "Data Systems",
      description: "Big data & analytics platforms"
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
      description: "RESTful & GraphQL APIs"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new tech"
    }
  ];

  const highlights = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "10+", label: "Technologies Mastered" },
    { number: "∞", label: "Problems Solved" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate software engineer crafting scalable solutions and turning complex problems into elegant code
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
                My Journey
              </h3>
              <p className="text-lg text-foreground leading-relaxed">
                With <span className="text-primary font-semibold">5+ years of experience</span> in software engineering, 
                I've evolved from a curious computer science student to a seasoned backend architect. My passion lies in 
                building <span className="text-accent font-semibold">scalable systems</span> that handle real-world complexity.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                I specialize in crafting robust backend solutions, designing efficient data pipelines, and optimizing 
                performance for applications that serve millions. Every line of code I write is driven by the question: 
                <em className="text-primary">"How can this scale better?"</em>
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Beyond coding, I'm an active contributor to open source projects and love sharing knowledge through 
                technical blogs and community talks. Learning never stops in tech, and I embrace that challenge every day.
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
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always excited about new challenges and opportunities to create innovative solutions. 
                  Whether it's architecting a new system or optimizing existing infrastructure, let's collaborate!
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    Open to opportunities
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">
                    Remote friendly
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    Team player
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