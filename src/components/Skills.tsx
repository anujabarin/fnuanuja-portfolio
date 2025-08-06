import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Code, Database, Cloud } from 'lucide-react';

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  const skillCategories = [
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Java", level: 95 },
        { name: "Python", level: 85 },
        { name: "Flask", level: 75 },
        { name: "FastAPI", level: 80 },
        { name: "Rest API", level: 80 }

      ]
    },
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "FastAPI", level: 80 },
        { name: "FastAPI", level: 80 }

      ]
    },
    
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Azure", level: 85 },
        { name: "AWS", level: 75 },
        { name: "DevOps", level: 80 },
        { name: "Shell Scripting", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border/30 hover:border-primary/40 transition duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted-foreground/10 rounded-full">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
