import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in">
                Hi, I'm <span className="text-primary-glow animate-glow">Anuja</span>
              </h1>
              <h2 className="font-heading text-xl lg:text-2xl text-white/90 mb-6">
                Software Engineer | Backend & Data Enthusiast
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about building scalable systems, distributed architectures, and 
                turning complex data into meaningful insights. I love solving challenging problems 
                with clean, efficient code.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-white text-primary hover:bg-white/90 shadow-glow font-medium animate-glow hover-scale"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover-scale"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover-scale">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover-scale">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover-scale">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover-scale">
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-bounce-gentle">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow border-4 border-white/20 backdrop-blur-sm">
                <img 
                  src={heroImage} 
                  alt="Anuja - Software Engineer" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              {/* Floating elements with blue colors */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-portfolio-cyan rounded-full opacity-80 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-portfolio-light-blue rounded-full opacity-60 animate-pulse-slow delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-portfolio-deep-blue rounded-full opacity-50 animate-bounce-gentle delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;