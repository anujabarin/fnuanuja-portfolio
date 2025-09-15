import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading backend development for a high-traffic e-commerce platform serving 2M+ users. Architected microservices infrastructure and improved system performance by 40%.",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "AWS", "Docker"],
      details: [
        "Cut P95 latency from 620ms → 360ms by optimizing caching and DB indexes.",
        "Designed blue/green deploys and rollback playbooks to reduce downtime.",
        "Mentored 4 engineers; introduced coding standards and review checklists.",
        "Partnered with Product to A/B test features, lifting conversion by 3.2%."
      ],
      links: [
        { label: "Case study", href: "#" },
        { label: "Service playbook", href: "#" }
      ]
    },
    {
      title: "Backend Engineer",
      company: "DataFlow Inc",
      location: "Remote",
      period: "2020 - 2022",
      description:
        "Built scalable data processing pipelines handling 10TB+ daily data. Developed RESTful APIs and implemented real-time analytics dashboard.",
      technologies: ["Java", "Spring Boot", "Apache Kafka", "MongoDB", "Elasticsearch"],
      details: [
        "Implemented Kafka DLQ + retries; improved pipeline reliability to 99.95%.",
        "Designed search schema in ES; query time improved by 55%.",
        "Introduced tracing (OpenTelemetry)My to cut MTTR by ~40%."
      ],
      links: [{ label: "Architecture notes", href: "#" }]
    },
    {
      title: "Software Developer",
      company: "Tata Steel",
      location: "Jamshedpur, India",
      period: "2019 - 2019",
      description:
        "Full-stack development for a fintech startup. Implemented secure payment processing and contributed to 3x user growth through feature development.",
      technologies: ["Python", "Flask", "React", "MySQL", "Stripe API"],
      details: [
        "Led PCI-aware integration with Stripe + idempotent webhooks.",
        "Shipped onboarding flow that reduced drop-off by 18%.",
        "Built internal admin tools to speed support ops by 30%."
      ],
      links: [{ label: "Security checklist", href: "#" }]
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
              <Card
                key={index}
                className="shadow-card border-border/50 hover:shadow-lg transition-all duration-300 group"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Left side - Job info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                            {exp.title}
                          </h3>
                          <h4 className="font-heading text-lg font-semibold text-primary mb-3">
                            {exp.company}
                          </h4>
                        </div>

                        {/* Mobile/keyboard toggle */}
                        <button
                          className="lg:hidden inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-sm hover:bg-accent/30 transition-colors"
                          aria-expanded={openIndex === index}
                          onClick={() => toggle(index)}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              openIndex === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

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
                          <Badge key={techIndex} variant="outline" className="text-xs font-medium">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Reveal panel: hover (desktop) + toggle (mobile) */}
                      <div
                        className={`
                          overflow-hidden transition-all duration-300 ease-out
                          ${openIndex === index ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}
                          lg:group-hover:max-h-[500px] lg:group-hover:mt-6 lg:group-hover:opacity-100
                        `}
                      >
                        <div className="rounded-lg border mt-4 p-5 bg-muted/30">
                          <p className="text-sm font-semibold mb-3 text-muted-foreground">
                            More details
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-sm">
                            {exp.details.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>

                          {exp.links?.length ? (
                            <div className="flex flex-wrap gap-3 mt-4">
                              {exp.links.map((l, i) => (
                                <a
                                  key={i}
                                  href={l.href}
                                  className="text-sm underline underline-offset-4 hover:no-underline"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {l.label}
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </div>
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
