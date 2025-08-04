import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "fnuanuja25@gmail.com",
      href: "mailto:fnuanuja25@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (945) 274-8901",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dallas, TX",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/anujabarin",
      username: "@anujabarin"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fnuanuja/",
      username: "fnuanuja"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-foreground">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Your message..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full shadow-button">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact info */}
            <div className="space-y-8">
              {/* Contact details */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <a 
                          href={item.href} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social links */}
              <Card className="shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-foreground">
                    Connect with me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{link.label}</p>
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.username}
                        </a>
                      </div>
                    </div>
                  ))}
                  
                  {/* Resume download */}
                  <div className="pt-4 border-t border-border">
                    <a href="/FNU_Anuja_SDE.pdf" download className="w-full">
  <Button variant="outline" className="w-full shadow-button">
    <Download className="h-4 w-4 mr-2" />
    Download Resume
  </Button>
</a>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;