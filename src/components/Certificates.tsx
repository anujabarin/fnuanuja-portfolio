import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      date: "2023",
      description:
        "Validated foundational knowledge of Oracle Cloud Infrastructure, covering core services, and cloud architecture principles.",
      skills: [
        "Cloud Architecture",
        "Cloud Computing Fundamental",
        "Security",
        "Identity and Access Management (IAM)"
      ],
      link: "/Oracle_certificate.pdf"
    },
    {
      title: "Solutions Architecture Job Simulation",
      issuer: "Forage(Amazon Web services",
      date: "2025",
      description:
        "Completed a hands-on simulation of real-world AWS solution architecture tasks, focusing on infrastructure design, cloud security, and cost optimization.",
      skills: ["Infrastructure Design (EC2, S3)", "Networking in AWS", "Problem Solving"],
      link: "/AWC_APACcompletion_certificate.pdf"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "2025",
      description:
        "Gained knowledge of AI concepts and their application within the Salesforce ecosystem, including ethical AI, CRM integration, and business use cases.",
      skills: ["AI Fundamentals", "Salesforce AI Products", "AI Integration", "Use Case Evaluation"],
      link: "/Salesforce_Certificate.pdf"
    },
    {
      title: "Accenture Training Certification",
      issuer: "Accenture",
      date: "2021",
      description:
        "Proficiency in designing Java based applications using Spring Frameworks.",
      skills: ["Java", "Spring Framework", "Spring Boot", "Hibernate"],
      link: "/Accenture_training_certification.pdf"
    },
    {
      title: "Basics of Data Science in Python",
      issuer: "Tata Steel",
      date: "2019",
      description:
        "Gained foundational skills in data analysis, visualization, and machine learning using Python and its core data science libraries.",
      skills: ["Data Handling with Pandas & NumPy", "Basic Statistics & Probability", "Intro to Machine Learning", "Jupyter Notebook Proficiency"],
      link: "/Tata_Steel.pdf"
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
                      <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">{cert.description}</p>

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

                  {/* View Certificate Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      View Certificate
                    </Badge>
                  </a>
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
