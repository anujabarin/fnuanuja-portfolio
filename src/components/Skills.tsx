import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Code, Database, Cloud, Wrench, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&q=80",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "Go", "SQL", "Bash"],
      description: "Modern programming languages for diverse development needs"
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&q=80",
      skills: ["Django", "FastAPI", "Spring Boot", "React", "Node.js", "Flask", "Apache Spark"],
      description: "Powerful frameworks for rapid application development"
    },
    {
      title: "Databases & Storage",
      icon: Database,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop&q=80",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra", "AWS S3", "Snowflake"],
      description: "Scalable data storage and management solutions"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop&q=80",
      skills: ["Docker", "Kubernetes", "AWS", "Apache Kafka", "RabbitMQ", "Git", "Terraform", "Jenkins"],
      description: "Infrastructure and deployment automation tools"
    }
  ];

  const coreCompetencies = [
    {
      title: "System Architecture",
      skills: ["Modular design", "Distributed Computing","Scalability"],
      icon: "🏗️"
    },
    {
      title: "Backend Engineering",
      skills: ["RESTful APIs","Microservices"],
      icon: "🔗"
    },
    {
      title: "Frontend Development",
      skills: ["Responsive UI", "ReactJS"],
      icon: "📊"
    },
    {
      title: "Performance",
      skills: ["Optimization", "Caching", "Load Balancing"],
      icon: "⚡"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-bounce-gentle"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering modern software development with scalable architecture and cutting edge technologies
            </p>
          </div>

          {/* Main skills grid with images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 overflow-hidden hover-scale">
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-xl border border-primary/30">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-sm text-white/80">{category.description}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale cursor-default bg-secondary/60 backdrop-blur-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core competencies grid */}
          <div className="mb-16">
            <h3 className="font-heading text-3xl font-bold text-foreground text-center mb-12">
              Core <span className="text-primary">Competencies</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCompetencies.map((competency, index) => (
                <Card key={index} className="bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {competency.icon}
                    </div>
                    <h4 className="font-heading text-lg font-bold text-foreground mb-3">
                      {competency.title}
                    </h4>
                    <div className="space-y-2">
                      {competency.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm text-muted-foreground">
                          {skill}
                        </div>
                      ))}
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

export default Skills;