import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();
  
  type Project = {
    title: string;
    description?: string;
    bullets?: string[];
    timeframe?: string;
    role?: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
  };

  const projects: Project[] = [
    // --- New projects provided by user ---
    {
      title: "Cargo Connect: Improving Airport Freight Flow",
      timeframe: "Jan 2025 – May 2025 • Team Lead",
      description: 
        "Led a 4-member team to build a real-time freight routing system using Flask, PostgreSQL, and Google Maps API, reducing truck idle time by 40% in congested airport zones and developed a Kotlin Android app with Jetpack Compose for live route updates, cargo assignments, and secure driver authentication, while integrating Google Maps and mock systems to simulate logistics scenarios such as accidents and parking delays. We designed a modular architecture for routing, scheduling, and notifications that enabled parallel team development and seamless integrations."
      ,
      technologies: [
        "Flask","PostgreSQL","Google Maps API","Kotlin","Jetpack Compose","REST APIs","Docker","JWT"
      ],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Churn Prediction Model",
      timeframe: "Oct 2024 – Dec 2024",
      description: 
        "Developed a Decision Tree model to predict telecom customer churn with 69% accuracy, focusing on high‑risk segments. Analysis revealed that 31% of customers accounted for 63% of total churn, with Fiber Optic users exhibiting a 42% churn rate. Insights guided targeted retention strategies that addressed key drivers like contract type, internet service, and tenure, helping reduce the overall churn rate of 27%."
      ,
      technologies: [
        "Python","R","Decision Trees","pandas","scikit‑learn","Confusion Matrix","Matplotlib"
      ],
      githubUrl: "https://github.com/anujabarin/Project_Churn_prediction"  
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in backend systems, data engineering, ML, and scalable architectures
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
                    <CardTitle className="font-heading text-xl text-foreground flex items-center gap-2">
                      {project.title}
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">Featured</Badge>
                      )}
                    </CardTitle>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8" aria-label="GitHub">
                          <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button asChild variant="ghost" size="icon" className="h-8 w-8" aria-label="Live">
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {project.timeframe && (
                    <div className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.timeframe}</span>
                    </div>
                  )}
                </CardHeader>

                <CardContent>
                  {project.bullets ? (
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                      {project.bullets.map((b, i) => (
                        <li key={i} className="leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
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
            <Button className="shadow-button" asChild>
              <a href="#" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
