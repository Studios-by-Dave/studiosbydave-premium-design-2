import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InternalLinksFooter from "@/components/InternalLinks";
import SimpleSEO from "@/components/SimpleSEO";
import PixieDust from "@/components/PixieDust";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

// Portfolio screenshots
import studiosbydaveImg from "@/assets/portfolio/studiosbydave.png";
import fsExpeditedImg from "@/assets/portfolio/fs-expedited.jpg";
import padgsteenguitarsImg from "@/assets/portfolio/padgsteenguitars.png";
import shadesColorCraftImg from "@/assets/portfolio/shades-color-craft.png";
import leeBuildsShelbyImg from "@/assets/portfolio/lee-builds-shelby.png";
import odysseyHomeVisionsImg from "@/assets/portfolio/odyssey-home-visions.png";
import moleDetectiveImg from "@/assets/portfolio/mole-detective.png"; // kept for future use
import melodyLockImg from "@/assets/portfolio/melody-lock.png";
import rifeWaveImg from "@/assets/portfolio/rife-wave.png";
import waveSpyImg from "@/assets/portfolio/wave-spy.png";
import bigFuturisticPictureBoxImg from "@/assets/portfolio/big-futuristic-picture-box.png";
import audioNotesAiImg from "@/assets/portfolio/audio-notes-ai.png";
import mikesGutHealerImg from "@/assets/portfolio/mikes-gut-healer-5000.png";
import theLivingWordImg from "@/assets/portfolio/the-living-word.png";

interface PortfolioProject {
  title: string;
  description: string;
  images: string[]; // Changed to array for multiple screenshots
  category: "website" | "webapp";
}

const webProjects: PortfolioProject[] = [
  {
    title: "Studios by Dave",
    description: "Our flagship website showcasing professional web development and digital marketing services for local businesses.",
    images: [studiosbydaveImg],
    category: "website",
  },
  {
    title: "F&S Expedited LLC",
    description: "Professional interstate freight carrier specializing in reliable, fast, and customer-focused logistics solutions from Shelby, NC.",
    images: [fsExpeditedImg],
    category: "website",
  },
  {
    title: "Padgsteen Guitars",
    description: "Handcrafted guitars & soulful Southern music from the heart of Appalachia. A beautiful showcase for a master luthier and musician.",
    images: [padgsteenguitarsImg],
    category: "website",
  },
  {
    title: "Shades of Gray Painters",
    description: "Professional painting company website featuring interior, exterior, and specialty finishes with a texture gallery showcase.",
    images: [shadesColorCraftImg],
    category: "website",
  },
  {
    title: "Lee Construction",
    description: "Shelby's trusted general contractor since 1982. Commercial developments to custom homes with quality craftsmanship.",
    images: [leeBuildsShelbyImg],
    category: "website",
  },
  {
    title: "Odyssey Custom Renovations",
    description: "Home renovation specialists transforming kitchens, bathrooms, and complete home makeovers with expert craftsmanship.",
    images: [odysseyHomeVisionsImg],
    category: "website",
  },
];

const appProjects: PortfolioProject[] = [
  {
    title: "Big Futuristic Picture Box",
    description: "AI-powered multi-layered image generator with advanced image reference and image doctor capabilities for creative professionals.",
    images: [bigFuturisticPictureBoxImg],
    category: "webapp",
  },
  {
    title: "Audio Notes AI",
    description: "AI-powered audio notes transcriber that transforms your audio notes and snippets into visual data, graphs, and actionable plans.",
    images: [audioNotesAiImg],
    category: "webapp",
  },
  {
    title: "Musical Lock",
    description: "Revolutionary authentication system replacing passwords with memorable melodies for secure access.",
    images: [melodyLockImg],
    category: "webapp",
  },
  {
    title: "Mikes Gut Healer 5000",
    description: "Fully comprehensive resource for gut healing, featuring earth medicines and Rife frequencies for true body, mind, and spirit healing.",
    images: [mikesGutHealerImg],
    category: "webapp",
  },
  {
    title: "The Living Word",
    description: "KJV-powered tool of spiritual life guidance with AI training based strictly on the King James Version of the Holy Bible.",
    images: [theLivingWordImg],
    category: "webapp",
  },
  {
    title: "RIFE Frequency Generator",
    description: "Professional 20 MHz sweep/function generator with audio samples and frequency generation capabilities.",
    images: [rifeWaveImg],
    category: "webapp",
  },
  {
    title: "5G Spectrum Analyzer",
    description: "Professional RF spectrum analysis system for passive monitoring across multiple frequency bands.",
    images: [waveSpyImg],
    category: "webapp",
  },
];

interface ProjectCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <button
    onClick={onClick}
    className="group block w-full text-left overflow-hidden rounded-xl border border-white/10 luxury-card hover:border-luxury-royal-blue/50 transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.images[0]}
        alt={`${project.title} - ${project.category === 'website' ? 'Website' : 'Web Application'} preview`}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
        width="400"
        height="225"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="inline-flex items-center gap-1 bg-luxury-lime text-black px-3 py-1.5 rounded-full text-sm font-medium">
          View Gallery
        </span>
      </div>
    </div>
    <div className="p-5">
      <h3 className="display-heading text-luxury-text-primary text-lg font-bold group-hover:text-luxury-royal-blue transition-colors">
        {project.title}
      </h3>
      <p className="mt-2 font-body text-luxury-text-secondary text-sm line-clamp-2">
        {project.description}
      </p>
    </div>
  </button>
);

interface ProjectGalleryModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectGalleryModal = ({ project, isOpen, onClose }: ProjectGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) return null;

  const hasMultipleImages = project.images.length > 1;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-hidden p-0 bg-luxury-surface border-white/10">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="display-heading text-luxury-text-primary text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <p className="font-body text-luxury-text-secondary mt-2">{project.description}</p>
        </DialogHeader>
        
        <div className="relative p-6 pt-4">
          {/* Main Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-luxury-bg">
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            {/* Navigation Arrows */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-luxury-bg/80 hover:bg-luxury-bg text-luxury-text-primary transition-colors border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-luxury-bg/80 hover:bg-luxury-bg text-luxury-text-primary transition-colors border border-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {hasMultipleImages && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-luxury-royal-blue ring-2 ring-luxury-royal-blue/30"
                      : "border-transparent hover:border-white/30"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Image Counter */}
          {hasMultipleImages && (
            <div className="text-center text-sm font-body text-luxury-text-secondary mt-2">
              {currentIndex + 1} of {project.images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectGallery = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-luxury-bg">
      <SimpleSEO
        title="Portfolio - Studios by Dave | Web Design & Development Projects"
        description="Explore our portfolio of professional websites and web applications. See real examples of our work for local businesses including contractors, musicians, and innovative apps."
        keywords="web design portfolio, website examples, web development projects, contractor websites, business websites, web applications"
      />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] bg-luxury-bg noise-overlay flex items-center overflow-hidden">
          {/* Radial Glow */}
          <div className="absolute inset-0 radial-glow" />

          {/* Background Mosaic of Website Screens */}
          <div className="absolute inset-0 z-0 opacity-[0.07] blur-[2px] overflow-hidden pointer-events-none select-none">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 scale-125 -rotate-6 origin-center">
              {[
                studiosbydaveImg, fsExpeditedImg, padgsteenguitarsImg, shadesColorCraftImg,
                leeBuildsShelbyImg, odysseyHomeVisionsImg, bigFuturisticPictureBoxImg, audioNotesAiImg,
                melodyLockImg, mikesGutHealerImg, theLivingWordImg, rifeWaveImg, waveSpyImg,
                studiosbydaveImg, fsExpeditedImg, padgsteenguitarsImg, shadesColorCraftImg, 
                leeBuildsShelbyImg, odysseyHomeVisionsImg, bigFuturisticPictureBoxImg
              ].map((img, i) => (
                <div key={i} className="aspect-video bg-luxury-surface rounded-lg shadow-2xl border border-white/10 overflow-hidden transform hover:scale-110 transition-transform duration-700">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-24">
            <div className="text-center max-w-3xl mx-auto">
              <div className="section-eyebrow mb-4">✦ Our Work</div>
              <h1 className="display-heading text-luxury-text-primary text-6xl md:text-8xl mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="font-body text-luxury-text-secondary text-lg">
                Explore our collection of websites and web applications. Each project is crafted with attention to detail, performance, and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Web Projects Section */}
        <section className="py-32 bg-luxury-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="section-eyebrow mb-4">✦ Websites</div>
              <h2 className="display-heading text-luxury-text-primary text-3xl md:text-4xl mb-4">
                Websites
              </h2>
              <p className="font-body text-luxury-text-secondary max-w-2xl">
                Professional, responsive websites built for local businesses. From contractors to artisans, we create digital experiences that convert visitors into customers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  onClick={() => openProjectGallery(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Web Apps Section */}
        <section className="py-32 bg-luxury-surface border-y border-white/6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="section-eyebrow mb-4">✦ Web Applications</div>
              <h2 className="display-heading text-luxury-text-primary text-3xl md:text-4xl mb-4">
                Web Applications
              </h2>
              <p className="font-body text-luxury-text-secondary max-w-2xl">
                Interactive web applications showcasing our technical expertise. From specialized tools to innovative solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {appProjects.map((project) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  onClick={() => openProjectGallery(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-luxury-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="section-eyebrow mb-4">✦ Let's Build</div>
            <h2 className="display-heading text-luxury-text-primary text-4xl md:text-5xl mb-6">
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-luxury-purple to-luxury-royal-blue bg-clip-text text-transparent">
                Great?
              </span>
            </h2>
            <p className="font-body text-luxury-text-secondary text-lg mb-8">
              Let's discuss your project and create something that stands out.
            </p>
            <Link to="/contact">
              <Button className="bg-luxury-lime text-black hover:bg-luxury-lime/90 font-semibold uppercase tracking-wider text-xs" size="lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Project Gallery Modal */}
      <ProjectGalleryModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <InternalLinksFooter />
      <Footer />
    </div>
  );
};

export default Portfolio;
