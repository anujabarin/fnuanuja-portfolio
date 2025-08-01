import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Distributed Analytics Platform",
      description: "Built a real-time analytics platform processing 10M+ events daily using Apache Kafka, Spark, and Elasticsearch. Reduced query response times by 70% and enabled real-time dashboards for business insights.",
      technologies: ["Python", "Apache Kafka", "Spark", "Elasticsearch", "Docker", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Microservices E-commerce API",
      description: "Designed and implemented a scalable microservices architecture for an e-commerce platform handling 100k+ concurrent users. Used event-driven architecture with Redis for caching and PostgreSQL for data persistence.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ", "Kubernetes"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "ML Model Deployment Pipeline",
      description: "Created an automated ML model deployment pipeline with A/B testing capabilities. Integrated with MLflow for model versioning and monitoring, reducing deployment time from days to minutes.",
      technologies: ["Python", "MLflow", "FastAPI", "Docker", "AWS Lambda", "Terraform"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Developed a scalable real-time chat application supporting 50k+ concurrent connections using WebSockets, Redis pub/sub, and horizontal scaling with load balancers.",
      technologies: ["Node.js", "Socket.io", "Redis", "MongoDB", "React", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Data Pipeline Orchestrator",
      description: "Built a robust data pipeline orchestration system using Apache Airflow to process and transform 100GB+ of data daily from multiple sources into a data warehouse.",
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "AWS S3", "Snowflake", "dbt"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in backend systems, data engineering, and scalable architectures
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`shadow-card border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-heading text-xl text-foreground">
                      {project.title}
                      {project.featured && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View more button */}
          <div className="text-center mt-12">
            <Button className="shadow-button">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;