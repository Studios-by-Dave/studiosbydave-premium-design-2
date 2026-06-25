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
      "email": "david.richardson@studiosbydave.com",
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
        "Failed to send message. Please try again or contact us directly at david.richardson@studiosbydave.com";

        throw new Error(errorMessage);
      }

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000
      });

      form.reset();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error
        ? error.message
        : "Failed to send message. Please try again or contact us directly at david.richardson@studiosbydave.com";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 7000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-bg lg:scale-[0.95] lg:origin-top transition-transform duration-500" itemScope itemType="https://schema.org/WebPage">
      <SimpleSEO
        title="Contact Studios by Dave - Get Your Free Quote Today"
        description="Contact Studios by Dave for professional web design, SEO, AI automations, and branding services. Free consultations available. Call (704) 473-8188 or email us today."
        keywords="contact studiosbydave, free web design quote, contractor web design consultation, SEO services quote, AI automation consultation, Shelby NC web design"
        structuredData={[breadcrumbs, contactSchema]} />

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-luxury-bg noise-overlay flex items-center overflow-hidden" role="banner">
        {/* Tie Dye Background */}
        <div 
          className="absolute inset-0 z-0 opacity-20 contrast-125 brightness-75 scale-110 blur-[2px]"
          style={{
            backgroundImage: 'url("/assets/tie dye_3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen'
          }}
        />
        {/* Radial Glow */}
        <div className="absolute inset-0 radial-glow z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 py-16">
          <div className="relative inline-block">
            <div className="section-eyebrow mb-4">✦ Contact</div>
            <h1 className="display-heading text-luxury-text-primary text-5xl lg:text-6xl mb-6 text-center" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                GREAT
              </span>{" "}
              Together
            </h1>
          </div>
          <p className="font-body text-luxury-text-secondary text-xl">
            Ready to take your business to the next level? Get in touch for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-24 bg-luxury-surface border-y border-white/6 relative">
        {/* Contact Mascot */}
        <div className="hidden lg:block absolute right-4 top-1/4 z-10 animate-bounce-slow">
          <img 
            src="/assets/promos/logo-mascot-contact.png" 
            alt="Mascot pointing to contact information" 
            className="w-64 h-64 object-contain drop-shadow-lg"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-40 text-center">
          <div id="get-in-touch" className="space-y-8">
            <div className="flex flex-col items-center">
              <div className="section-eyebrow mb-4">✦ Get in Touch</div>
              <h2 className="display-heading text-luxury-text-primary text-4xl lg:text-5xl mb-6">
                Get in Touch
              </h2>
                <p className="font-body text-luxury-text-secondary text-xl mb-12 max-w-2xl mx-auto">
                  We're here to help your business succeed online. Reach out through any of these channels: <span className="text-luxury-lime font-bold text-2xl animate-flash-red">Hit the button!</span>
                </p>
              </div>

              {/* Contact Card - Phone & Email */}
              <div className="flex flex-col gap-8 mb-8">
                {/* Phone Button */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-luxury-lime to-white rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <a href="tel:+17044738188" className="relative flex flex-col items-center justify-center bg-luxury-lime p-6 lg:p-10 rounded-full transition-all duration-300 transform group-hover:scale-[1.01] shadow-[0_20px_50px_rgba(201,240,77,0.3),inset_0_-8px_12px_rgba(0,0,0,0.2),inset_0_8px_12px_rgba(255,255,255,0.4)] border-b-8 border-luxury-lime/50 active:translate-y-1 active:border-b-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Phone size={24} className="text-black/60" />
                      <span className="text-black/60 text-sm font-bold uppercase tracking-widest">Call or Text Anytime</span>
                    </div>
                    <span className="text-3xl lg:text-6xl font-bold text-black tracking-tight text-center">
                      (704) 473-8188
                    </span>
                    <div className="mt-4 px-4 py-1 bg-black/10 rounded-full">
                      <p className="text-black font-bold text-sm uppercase tracking-wider">Available 24/7 • IF NO IMMEDIATE RESPONSE 12-24 HR RESPONSE GUARANTEED</p>
                    </div>
                  </a>
                </div>

                {/* Email Button */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-luxury-lime to-white rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <a href="mailto:david.richardson@studiosbydave.com" className="relative flex flex-col items-center justify-center bg-luxury-lime p-6 lg:p-10 rounded-full transition-all duration-300 transform group-hover:scale-[1.01] shadow-[0_20px_50px_rgba(201,240,77,0.3),inset_0_-8px_12px_rgba(0,0,0,0.2),inset_0_8px_12px_rgba(255,255,255,0.4)] border-b-8 border-luxury-lime/50 active:translate-y-1 active:border-b-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail size={24} className="text-black/60" />
                      <span className="text-black/60 text-sm font-bold uppercase tracking-widest">Send an Email</span>
                    </div>
                    <span className="text-lg sm:text-xl lg:text-3xl font-bold text-black break-all text-center leading-tight max-w-full">
                      david.richardson@studiosbydave.com
                    </span>
                    <div className="mt-4 px-4 py-1 bg-black/10 rounded-full">
                      <p className="text-black font-bold text-sm uppercase tracking-wider">IF NO IMMEDIATE RESPONSE 12-24 HR RESPONSE GUARANTEED</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-4 p-6 luxury-card rounded-xl">
                  <div className="w-12 h-12 bg-luxury-royal-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-luxury-royal-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-text-primary mb-1">Service Area</h3>
                    <p className="text-luxury-royal-blue font-medium">Shelby, NC Surrounding Area</p>
                    <p className="text-sm text-luxury-text-secondary">Serving contractors nationwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 luxury-card rounded-xl">
                  <div className="w-12 h-12 bg-luxury-royal-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-luxury-royal-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-text-primary mb-1">Response Time</h3>
                    <p className="text-luxury-royal-blue font-medium">Same Day Response</p>
                    <p className="text-sm text-luxury-text-secondary">Quick turnaround on all inquiries</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="luxury-card rounded-xl p-8 mb-12 border border-luxury-purple/20 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-luxury-royal-blue/10 blur-3xl opacity-50 pointer-events-none" />
                <div className="relative z-10 w-full mb-8 text-center">
                  <h3 className="font-body text-xl md:text-2xl text-luxury-text-primary font-medium tracking-wide">
                    Or if you prefer a contact form below, it's routed in
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-luxury-purple to-luxury-royal-blue mx-auto mt-4 rounded-full" />
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-luxury-text-secondary uppercase text-xs tracking-wider">First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" className="bg-white border-white/20 text-black placeholder:text-black/50 focus:border-luxury-lime focus:ring-1 focus:ring-luxury-lime transition-colors font-medium shadow-inner" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-luxury-text-secondary uppercase text-xs tracking-wider">Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" className="bg-white border-white/20 text-black placeholder:text-black/50 focus:border-luxury-lime focus:ring-1 focus:ring-luxury-lime transition-colors font-medium shadow-inner" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-luxury-text-secondary uppercase text-xs tracking-wider">Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" className="bg-white border-white/20 text-black placeholder:text-black/50 focus:border-luxury-lime focus:ring-1 focus:ring-luxury-lime transition-colors font-medium shadow-inner" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-luxury-text-secondary uppercase text-xs tracking-wider">Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" className="bg-white border-white/20 text-black placeholder:text-black/50 focus:border-luxury-lime focus:ring-1 focus:ring-luxury-lime transition-colors font-medium shadow-inner" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-luxury-text-secondary uppercase text-xs tracking-wider">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you today?" 
                              className="min-h-[120px] bg-white border-white/20 text-black placeholder:text-black/50 focus:border-luxury-lime focus:ring-1 focus:ring-luxury-lime transition-colors resize-y font-medium shadow-inner" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Honeypot field for spam prevention */}
                    <FormField
                      control={form.control}
                      name="honeypot"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input {...field} tabIndex={-1} autoComplete="off" />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-luxury-royal-blue text-white hover:bg-luxury-purple transition-all duration-300 font-semibold uppercase tracking-wider h-14 relative overflow-hidden group"
                    >
                      <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                      <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-smooth" />
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Certification Badges Section - Moved to Footer for better flow */}
              
              {/* CTA Box */}
              <div className="luxury-card rounded-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="display-heading text-luxury-text-primary text-2xl mb-2">Ready to Start?</h3>
                  <p className="font-body text-luxury-text-secondary">
                    Schedule a free 30-minute consultation to discuss your project.
                  </p>
                </div>
                <a href="tel:+17044738188">
                  <Button className="w-full bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs">
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
      </section>

      <Footer />
    </div>);

};

export default Contact;