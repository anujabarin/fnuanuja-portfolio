import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary-glow/5 rounded-full blur-2xl animate-floating" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="glass px-4 py-2 rounded-full text-sm font-medium text-primary border border-primary/20">
                  👋 Welcome to my portfolio
                </span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Anuja
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Software Engineer | Backend & Data Enthusiast
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I craft scalable backend systems and data-driven solutions that power modern applications. 
                Passionate about distributed computing, cloud architecture, and building systems that matter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="btn-modern group shadow-button hover:shadow-glow"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass hover:bg-primary/10 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-6 justify-center lg:justify-start">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="glass hover:bg-primary/20 hover:text-primary transition-all duration-300 hover-scale"
                  asChild
                >
                  <a href="https://github.com/anuja" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="glass hover:bg-primary/20 hover:text-primary transition-all duration-300 hover-scale"
                  asChild
                >
                  <a href="https://linkedin.com/in/anuja" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="glass hover:bg-primary/20 hover:text-primary transition-all duration-300 hover-scale"
                  asChild
                >
                  <a href="mailto:anuja@example.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="glass rounded-2xl p-1 hover-scale">
                <img 
                  src={heroImage} 
                  alt="Anuja - Software Engineer"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl shadow-card"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;