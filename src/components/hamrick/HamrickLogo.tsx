interface HamrickLogoProps {
  className?: string;
  variant?: "full" | "stacked" | "icon";
  dark?: boolean;
}

const HamrickLogo = ({ className = "", variant = "full", dark = false }: HamrickLogoProps) => {
  const textColor = dark ? "#ffffff" : "#1A1A1A";
  const bgColor = "#FFD100";
  const borderColor = dark ? "rgba(255,255,255,0.4)" : "#1A1A1A";

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Hamrick Fence Co."
      >
        <rect x="1" y="1" width="62" height="62" rx="6" fill={bgColor} stroke={textColor} strokeWidth="2" />
        <text
          x="32"
          y="38"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Oswald, Arial Black, sans-serif"
          fontSize="14"
          fontWeight="700"
          fill={textColor}
          letterSpacing="1"
        >
          HFC
        </text>
      </svg>
    );
  }

  if (variant === "stacked") {
    return (
      <svg
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Hamrick Fence Co."
      >
        {/* Yellow sign background */}
        <rect x="1" y="1" width="158" height="118" rx="8" fill={bgColor} stroke={borderColor} strokeWidth="2.5" />
        {/* Fence post silhouette */}
        <g fill={textColor} opacity="0.8">
          <rect x="18" y="22" width="5" height="36" rx="1" />
          <rect x="78" y="22" width="5" height="36" rx="1" />
          <rect x="138" y="22" width="5" height="36" rx="1" />
          <rect x="18" y="28" width="125" height="4" rx="1" />
          <rect x="18" y="40" width="125" height="4" rx="1" />
        </g>
        {/* Company name */}
        <text x="80" y="75" dominantBaseline="middle" textAnchor="middle" fontFamily="Oswald, Arial Black, sans-serif" fontSize="22" fontWeight="700" fill={textColor} letterSpacing="2">HAMRICK</text>
        <text x="80" y="96" dominantBaseline="middle" textAnchor="middle" fontFamily="Oswald, Arial Black, sans-serif" fontSize="15" fontWeight="600" fill={textColor} letterSpacing="3">FENCE CO.</text>
      </svg>
    );
  }

  // Full horizontal version
  return (
    <svg
      viewBox="0 0 320 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Hamrick Fence Co."
    >
      {/* Yellow sign background */}
      <rect x="1" y="1" width="318" height="70" rx="6" fill={bgColor} stroke={borderColor} strokeWidth="2" />
      {/* Fence post silhouette on left */}
      <g fill={textColor} opacity="0.75">
        <rect x="12" y="8" width="4" height="32" rx="1" />
        <rect x="30" y="8" width="4" height="32" rx="1" />
        <rect x="48" y="8" width="4" height="32" rx="1" />
        <rect x="12" y="14" width="40" height="3.5" rx="1" />
        <rect x="12" y="24" width="40" height="3.5" rx="1" />
      </g>
      {/* Company name */}
      <text x="168" y="28" dominantBaseline="middle" textAnchor="middle" fontFamily="Oswald, Arial Black, sans-serif" fontSize="28" fontWeight="700" fill={textColor} letterSpacing="3">HAMRICK FENCE CO.</text>
      {/* Tagline */}
      <text x="168" y="52" dominantBaseline="middle" textAnchor="middle" fontFamily="Oswald, sans-serif" fontSize="11" fontWeight="500" fill={textColor} letterSpacing="2" opacity="0.8">BOILING SPRINGS &amp; SHELBY, NC</text>
    </svg>
  );
};

export default HamrickLogo;
