import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Projects = () => {
  const scrollRef = useScrollReveal();
  
  const projects = [
    {
      title: "E-commerce Analytics Platform",
      description: "Built a real-time analytics dashboard processing 10M+ daily transactions. Implemented data pipelines using Apache Kafka and created REST APIs serving 2M+ users.",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Apache Kafka", "Docker"],
      githubUrl: "https://github.com/anuja/ecommerce-analytics",
      liveUrl: "https://analytics-demo.anuja.dev",
      featured: true
    },
    {
      title: "Distributed File Storage System",
      description: "Designed and implemented a fault-tolerant distributed storage system with automatic data replication and recovery mechanisms.",
      technologies: ["Java", "Spring Boot", "MongoDB", "Docker", "Kubernetes"],
      githubUrl: "https://github.com/anuja/distributed-storage",
      liveUrl: null,
      featured: true
    },
    {
      title: "Real-time Chat Application",
      description: "Developed a scalable chat platform supporting 100K+ concurrent users with WebSocket connections and message persistence.",
      technologies: ["Node.js", "Socket.io", "React", "PostgreSQL", "AWS"],
      githubUrl: "https://github.com/anuja/realtime-chat",
      liveUrl: "https://chat.anuja.dev",
      featured: false
    },
    {
      title: "ML Model Deployment Pipeline",
      description: "Created an automated ML pipeline for model training, validation, and deployment with A/B testing capabilities.",
      technologies: ["Python", "FastAPI", "TensorFlow", "Docker", "MLflow", "AWS"],
      githubUrl: "https://github.com/anuja/ml-pipeline",
      liveUrl: null,
      featured: false
    },
    {
      title: "API Gateway Service",
      description: "Built a high-performance API gateway with rate limiting, authentication, and request routing for microservices architecture.",
      technologies: ["Go", "Redis", "Nginx", "Docker", "Prometheus"],
      githubUrl: "https://github.com/anuja/api-gateway",
      liveUrl: null,
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div ref={scrollRef} className="text-center mb-16 scroll-reveal">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in backend engineering and system design
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="glass modern-card group hover-scale transition-all duration-500 scroll-reveal"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs shimmer"
                        style={{ animationDelay: `${0.1 * techIndex}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="scroll-reveal" style={{ animationDelay: '0.8s' }}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="glass modern-card hover-scale transition-all duration-300"
                  style={{ animationDelay: `${0.3 * index}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-heading text-lg font-semibold text-foreground">
                        {project.title}
                      </h4>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
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

export default Projects;