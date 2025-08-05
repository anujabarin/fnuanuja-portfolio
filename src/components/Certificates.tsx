import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      level: "Professional",
      description: "Expertise in designing distributed applications and systems on the AWS platform.",
      skills: ["Cloud Architecture", "Scalability", "Security", "Cost Optimization"],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      level: "Professional",
      description: "Specialized in designing and building data processing systems and machine learning models.",
      skills: ["BigQuery", "DataFlow", "ML Engineering", "Data Pipeline"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Kubernetes Certified Application Developer",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      level: "Professional",
      description: "Proficiency in designing, building and deploying cloud-native applications for Kubernetes.",
      skills: ["Container Orchestration", "Microservices", "DevOps", "YAML"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
      title: "Python Institute Certified Expert",
      issuer: "Python Institute",
      date: "2021",
      level: "Expert",
      description: "Advanced Python programming and software development best practices.",
      skills: ["Python", "Object-Oriented Programming", "Testing", "Performance"],
      color: "bg-green-500/10 text-green-400 border-green-500/20"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Certifications & Achievements
              </h2>
            </div>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my expertise in cloud technologies, 
              data engineering, and software development best practices.
            </p>
          </div>

          {/* Certificates grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground font-medium">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className={cert.color}>
                        {cert.level}
                      </Badge>
                      <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Continuously learning and pursuing additional certifications in emerging technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;