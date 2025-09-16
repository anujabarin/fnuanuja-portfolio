import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Calendar, MapPin, GraduationCap, ChevronDown, Building2 } from 'lucide-react'
import { useState } from 'react'

const LeadershipCampusWork = () => {
  const { ref, isVisible } = useScrollReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const roles = [
    {
      title: 'Teaching Assistant',
      org: 'The University of Texas at Dallas',
      location: 'Richardson, TX, United States',
      period: 'Aug 2024 – May 2025 · 10 mos',
      description:
        'Assisted Professor Wafa Jaffal for CS2340 - Computer Architecture by grading weekly assignments/projects and holding office hours to support student learning.',
      skills: ['Computer Architecture', 'Educational Leadership', 'Mentoring', 'Student Support'],
      details: [
        'Evaluated homework/projects with clear rubrics and timely feedback to improve learning outcomes.',
        'Ran office hours and Q&A sessions; clarified concepts like pipelining, caches, and ISA basics.',
        'Coordinated with the instructor on exam prep and academic integrity workflows.'
      ]
    },
    {
      title: 'Student Assistant — Parking & Transportation',
      org: 'The University of Texas at Dallas',
      location: 'Richardson, TX, United States (On‑site)',
      period: 'Feb 2024 – Aug 2024 · 7 mos',
      description:
        'Supported campus operations, enforced UTD parking policies and handled frontline customer queries.',
      skills: ['Team Management', 'Team Organization', 'Customer Service', 'Operations'],
      details: [
        'Handled student/staff queries with calm, policy accurate guidance, escalated edge cases effectively.',
        'Collaborated with the team to organize shifts and coverage during peak hours.'
      ]
    }
  ]

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="leadership" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Leadership & Campus Work
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Roles held at university that highlight leadership, teaching, and operations experience
            </p>
          </div>

          {/* List */}
          <div className="space-y-8">
            {roles.map((role, i) => (
              <Card
                key={i}
                className="shadow-card border-border/50 hover:shadow-lg transition-all duration-300 group"
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {i === 0 ? (
                            <GraduationCap className="h-5 w-5 text-primary" />
                          ) : (
                            <Building2 className="h-5 w-5 text-primary" />
                          )}
                          <h3 className="font-heading text-xl font-bold text-foreground">{role.title}</h3>
                        </div>
                        <h4 className="font-heading text-lg font-semibold text-primary mb-3">{role.org}</h4>
                      </div>

                      {/* Mobile toggle */}
                      <button
                        className="lg:hidden inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-sm hover:bg-accent/30 transition-colors"
                        aria-expanded={openIndex === i}
                        onClick={() => toggle(i)}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {role.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> {role.period}
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed">{role.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {role.skills.map((s) => (
                        <Badge key={s} variant="outline" className="text-xs font-medium">
                          {s}
                        </Badge>
                      ))}
                    </div>

                    {/* Reveal panel */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        openIndex === i ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'
                      } lg:group-hover:max-h-[500px] lg:group-hover:mt-6 lg:group-hover:opacity-100`}
                    >
                      <div className="rounded-lg border mt-4 p-5 bg-muted/30">
                        <p className="text-sm font-semibold mb-3 text-muted-foreground">More details</p>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          {role.details.map((d, idx) => (
                            <li key={idx}>{d}</li>
                          ))}
                        </ul>
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
  )
}

export default LeadershipCampusWork
