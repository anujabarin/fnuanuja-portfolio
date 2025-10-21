import { Card, CardContent } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { Code, Database, Cloud } from 'lucide-react'

// Chip component (lightweight badge)
const Chip = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted/70 text-foreground text-sm border border-border/50">
    {label}
  </span>
)

const Skills = () => {
  const { ref, isVisible } = useScrollReveal()

  // Categories derived from the attached resume
  const skillCategories: {
    title: string
    icon: any
    skills: string[]
  }[] = [
    {
      title: 'Backend',
      icon: Database,
      skills: [
        'Java',
        'Spring Boot',
        'Python',
        'Flask',
        'Node.js',
        'REST APIs',
        'Scala'
      ]
    },
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        'React',
        'JavaScript',
        'HTML/CSS',
        'Angular',
        'JSP/Servlets'
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL', 'MySQL Workbench']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Git', 'GitHub', 'DevOps', 'VS Code']
    },
    {
      title: 'Data & Visualization',
      icon: Code,
      skills: ['Tableau', 'Microsoft Excel', 'Data Pipelines']
    },
    {
      title: 'Mobile',
      icon: Cloud,
      skills: ['Android', 'Kotlin', 'Jetpack Compose']
    },
    {
      title: 'Software Engineering',
      icon: Code,
      skills: [
        'Agile',
        'SDLC',
        'Software Architecture Design',
        'Requirement Analysis',
        'Use Case Description'
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Technical Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-sm border-border/30 hover:border-primary/40 transition duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((name) => (
                      <Chip key={name} label={name} />
                    ))}
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

export default Skills
