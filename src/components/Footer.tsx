import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social links */}
          {/* <div className="flex justify-center gap-4 mb-8">
            <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
              <Mail className="h-5 w-5" />
            </Button>
          </div> */}

          {/* Copyright */}
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/80 mb-2">
              © {currentYear} Anuja. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center justify-center gap-1">
              Built with <Heart className="h-4 w-4 text-red-400 fill-current" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;