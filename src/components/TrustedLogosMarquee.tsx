import comptia from "@/assets/marquee-logos/comptia.png";
import vscode from "@/assets/marquee-logos/vscode.jpeg";
import claude from "@/assets/marquee-logos/claude.png";
import opencode from "@/assets/marquee-logos/opencode.png";
import hostinger from "@/assets/marquee-logos/hostinger.png";
import openrouter from "@/assets/marquee-logos/openrouter.svg";
import windsurf from "@/assets/marquee-logos/windsurf.svg";
import leadParrot from "@/assets/marquee-logos/lead-parrot.png";
import ollama from "@/assets/marquee-logos/ollama.png";
import studiosByDave from "@/assets/marquee-logos/studios-by-dave.png";

const logos = [
  { src: comptia, alt: "CompTIA A+" },
  { src: vscode, alt: "VS Code" },
  { src: opencode, alt: "OpenCode" },
  { src: hostinger, alt: "Hostinger" },
  { src: openrouter, alt: "OpenRouter" },
  { src: claude, alt: "Claude" },
  { src: windsurf, alt: "Windsurf" },
  { src: leadParrot, alt: "Lead Parrot" },
  { src: ollama, alt: "Ollama" },
  { src: studiosByDave, alt: "Studios by Dave" },
];

const TrustedLogosMarquee = () => {
  const doubled = [...logos, ...logos];

  return (
    <section className="w-full py-12 overflow-hidden bg-muted/30">
      <p className="text-center text-sm text-muted-foreground mb-6 font-semibold tracking-wide uppercase">
        Powered by the best in the industry
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max items-center gap-10 px-8">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-24 w-52"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                width="208"
                height="96"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedLogosMarquee;
