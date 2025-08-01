import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "JavaScript", "TypeScript", "Go", "SQL", "Bash"],
      color: "text-portfolio-blue"
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["Django", "FastAPI", "Spring Boot", "React", "Node.js", "Flask", "Apache Spark"],
      color: "text-portfolio-light-blue"
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra", "AWS S3", "Snowflake"],
      color: "text-portfolio-purple"
    },
    {
      title: "Tools & Technologies",
      icon: Cloud,
      skills: ["Docker", "Kubernetes", "AWS", "Apache Kafka", "RabbitMQ", "Git", "Terraform", "Jenkins"],
      color: "text-portfolio-blue"
    }
  ];

  const additionalSkills = [
    "Microservices Architecture",
    "Event-Driven Systems",
    "API Design & Development",
    "Data Pipeline Engineering",
    "Performance Optimization",
    "System Design",
    "DevOps & CI/CD",
    "Agile Development"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable software solutions
            </p>
          </div>

          {/* Main skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card border-border/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <CardTitle className="font-heading text-lg text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional skills */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="font-heading text-xl text-foreground text-center">
                Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {additionalSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="text-sm font-medium border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills summary */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With <strong>5+ years</strong> of hands-on experience, I've worked across the full technology stack 
              with a focus on backend systems, data engineering, and cloud-native architectures. I'm always 
              learning new technologies and staying current with industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;