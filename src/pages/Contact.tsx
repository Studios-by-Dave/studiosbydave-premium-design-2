import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import SimpleSEO from "@/components/SimpleSEO";
import { breadcrumbSchema } from "@/data/structuredData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage } from
"@/components/ui/form";

const contactFormSchema = z.object({
  firstName: z.string().
  trim().
  min(1, "First name is required").
  max(100, "First name must be less than 100 characters").
  regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes"),
  lastName: z.string().
  trim().
  min(1, "Last name is required").
  max(100, "Last name must be less than 100 characters").
  regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z.string().
  trim().
  min(1, "Email is required").
  email("Please enter a valid email address").
  max(255, "Email must be less than 255 characters"),
  phone: z.string().
  trim().
  min(1, "Phone number is required").
  regex(/^[\d\s()+-]+$/, "Please enter a valid phone number").
  min(10, "Phone number must be at least 10 characters").
  max(20, "Phone number must be less than 20 characters"),
  business: z.string().
  trim().
  max(100, "Business type must be less than 100 characters").
  optional(),
  message: z.string().
  trim().
  min(1, "Message is required").
  max(2000, "Message must be less than 2000 characters"),
  honeypot: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      business: "",
      message: "",
      honeypot: ""
    }
  });

  const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.studiosbydave.com" },
  { name: "Contact", url: "https://www.studiosbydave.com/contact" }]
  );

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Studios by Dave",
    "description": "Get in touch with Studios by Dave for professional web design, SEO, AI automations, and branding services. Free consultations available.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Studios by Dave",
      "telephone": "+1-704-473-8188",
      "email": "dx1creations25@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "125 S. Toney Street",
        "addressLocality": "Shelby",
        "addressRegion": "NC",
        "addressCountry": "US"
      }
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        const errorMessage = error.message?.includes("Too many requests") || error.message?.includes("429") ?
        "You've submitted too many requests. Please try again in an hour." :
        "Failed to send message. Please try again or contact us directly at dx1creations25@gmail.com";

        throw new Error(errorMessage);
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000
      });

      form.reset();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again or contact us directly at dx1creations25@gmail.com",
        variant: "destructive",
        duration: 7000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen lg:scale-[0.95] lg:origin-top transition-transform duration-500" itemScope itemType="https://schema.org/WebPage">
      <SimpleSEO
        title="Contact Studios by Dave - Get Your Free Quote Today"
        description="Contact Studios by Dave for professional web design, SEO, AI automations, and branding services. Free consultations available. Call (704) 473-8188 or email us today."
        keywords="contact studiosbydave, free web design quote, contractor web design consultation, SEO services quote, AI automation consultation, Shelby NC web design"
        structuredData={[breadcrumbs, contactSchema]} />

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-24" role="banner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block">
            {/* Pixie Dust Effect */}
            <div className="absolute -top-8 -left-4 w-40 h-40 pointer-events-none">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full animate-dust-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: i % 4 === 0 
                      ? 'hsl(var(--trophy-gold))' 
                      : i % 4 === 1 
                      ? 'hsl(var(--accent) / 0.6)'
                      : 'hsl(0, 0%, 30%)',
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    filter: 'blur(0.5px)',
                    boxShadow: i % 4 === 0 ? '0 0 5px hsl(var(--trophy-gold))' : 'none'
                  }}
                />
              ))}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
              Let's Build Something{" "}
              <span className="gradient-text bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                GREAT
              </span>{" "}
              Together
            </h1>
          </div>
          <p className="text-xl text-white/90">
            Ready to take your business to the next level? Get in touch for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-gradient-subtle relative">
        {/* Contact Mascot */}
        <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-10 animate-bounce-slow">
          <img 
            src="/assets/promos/logo-mascot-contact.png" 
            alt="Mascot pointing to contact information" 
            className="w-64 h-64 object-contain drop-shadow-lg"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-40">
          <div id="get-in-touch" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help your business succeed online. Reach out through any of these channels:
                </p>
              </div>

              {/* Contact Card - Phone & Email */}
              <div className="flex flex-col gap-4 mb-8">
                {/* Phone Card */}
                <div className="bg-gradient-hero rounded-xl border border-white/20 p-6 shadow-glow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone size={24} className="text-accent" />
                    </div>
                    <p className="text-white/80 text-base font-medium mb-1">Call Us — TEXT US!</p>
                    <a href="tel:+17044738188" className="text-3xl lg:text-5xl font-bold transition-colors gradient-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-text-shine bg-clip-text text-transparent block">
                      (704) 473-8188
                    </a>
                    <p className="text-trophy-gold font-bold text-base mt-2">Always Open. 24/7.</p>
                    <p className="text-white/60 text-xs mt-1">We respond within 12-24 hours, guaranteed.</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-gradient-hero rounded-xl border border-white/20 p-6 shadow-glow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail size={24} className="text-accent" />
                    </div>
                    <p className="text-white/80 text-base font-medium mb-1">Email Us</p>
                    <a href="mailto:dx1creations25@gmail.com" className="text-xl lg:text-3xl font-bold transition-colors break-all block gradient-text bg-gradient-to-r from-accent via-white to-accent bg-[length:200%_auto] animate-text-shine bg-clip-text text-transparent">
                      dx1creations25@gmail.com
                    </a>
                    <p className="text-white/60 text-xs mt-2">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-card">
                  <div className="w-12 h-12 bg-gradient-primary-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                    <p className="text-primary font-medium">Shelby, NC Surrounding Area</p>
                    <p className="text-sm text-muted-foreground">Serving contractors nationwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-card">
                  <div className="w-12 h-12 bg-gradient-primary-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-primary font-medium">Same Day Response</p>
                    <p className="text-sm text-muted-foreground">Quick turnaround on all inquiries</p>
                  </div>
                </div>
              </div>

              {/* Contact Form - Temporarily Removed */}
              
              {/* CTA Box */}
              <Card className="bg-gradient-hero text-white border-0 border border-white/20 shadow-glow">
                <CardHeader>
                  <CardTitle className="text-white">Ready to Start?</CardTitle>
                  <CardDescription className="text-white/80">
                    Schedule a free 30-minute consultation to discuss your project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="tel:+17044738188">
                    <Button variant="hero" className="w-full">
                      Call Us Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
      </section>

      <Footer />
    </div>);

};

export default Contact;