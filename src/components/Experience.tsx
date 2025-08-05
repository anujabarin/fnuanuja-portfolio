import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading backend development for a high-traffic e-commerce platform serving 2M+ users. Architected microservices infrastructure and improved system performance by 40%.",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "AWS", "Docker"]
    },
    {
      title: "Backend Engineer",
      company: "DataFlow Inc",
      location: "Remote",
      period: "2020 - 2022",
      description: "Built scalable data processing pipelines handling 10TB+ daily data. Developed RESTful APIs and implemented real-time analytics dashboard.",
      technologies: ["Java", "Spring Boot", "Apache Kafka", "MongoDB", "Elasticsearch"]
    },
    {
      title: "Software Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: "Full-stack development for a fintech startup. Implemented secure payment processing and contributed to 3x user growth through feature development.",
      technologies: ["Python", "Flask", "React", "MySQL", "Stripe API"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in software engineering and backend development
            </p>
          </div>

          {/* Experience timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-card border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left side - Job info */}
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="font-heading text-lg font-semibold text-primary mb-3">
                        {exp.company}
                      </h4>
                      
                      {/* Location and period */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="text-xs font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
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

export default Experience;