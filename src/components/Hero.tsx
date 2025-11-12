import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/Profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Matching About Me background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.15'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating blobs like About */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20 flex flex-col items-center text-center gap-6">
        {/* Hero Image */}
        <div className="relative">
          <div className="w-[240px] h-[240px] rounded-full overflow-hidden border-4 border-white/10 shadow-glow backdrop-blur-sm animate-bounce-gentle mx-auto">
            <img
              src={heroImage}
              alt="Anuja - Software Engineer"
              className="w-full h-full object-cover scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute -top-3 -right-3 w-14 h-14 bg-portfolio-cyan rounded-full opacity-80 animate-pulse-slow" />
          <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-portfolio-light-blue rounded-full opacity-60 animate-pulse-slow delay-1000" />
          <div className="absolute top-1/2 -left-6 w-9 h-9 bg-portfolio-deep-blue rounded-full opacity-50 animate-bounce-gentle delay-500" />
        </div>

        {/* Name */}
        <h1 className="font-heading text-5xl sm:text-6xl font-extrabold leading-tight mt-4">
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Anuja
          </span>
        </h1>

        {/* Title */}
        <h2 className="font-heading text-xl sm:text-2xl text-foreground/90">
          Software Engineer <span className="mx-2">|</span> Backend &amp; Data Enthusiast
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl">
          A passionate software engineer crafting scalable solutions and turning complex problems into elegant code
        </p>

        {/* Call-to-action buttons */}
        <div className="mt-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-medium hover-scale"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-foreground/5 backdrop-blur-sm hover-scale"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social links */}
        <div className="mt-2 flex items-center gap-2">
          <a href="https://github.com/anujabarin" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-foreground/5 hover-scale">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/fnuanuja/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-foreground/5 hover-scale">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:fnuanuja25@gmail.com">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-foreground/5 hover-scale">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
          <a href="/FNU_Anuja.pdf" download>
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-foreground/5 hover-scale">
              <Download className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
