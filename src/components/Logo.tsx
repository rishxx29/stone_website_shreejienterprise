import { ComponentProps } from "react";

interface LogoProps extends ComponentProps<"div"> {
  variant?: "full" | "icon" | "footer";
  iconSize?: string;
  textColor?: string;
  className?: string;
}

export default function Logo({
  variant = "full",
  iconSize = "h-11 w-auto",
  textColor = "text-slate-900",
  className = "",
  ...props
}: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <div className={`flex items-center gap-4 select-none ${className}`} {...props}>

      {/* ════════════════════════════════════════
          LOGO MARK — Stone Mountain Strata Seal
          ════════════════════════════════════════ */}
      <svg
        viewBox="0 0 104 104"
        className={`${iconSize} shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep quarry bg */}
          <radialGradient id="bgG" cx="45%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#2c1608" />
            <stop offset="100%" stopColor="#0c0704" />
          </radialGradient>

          {/* Strata layer gradients — light peak → dark base */}
          <linearGradient id="s1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f0c870" />
            <stop offset="100%" stopColor="#ffe0a0" />
          </linearGradient>
          <linearGradient id="s2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c98a3e" />
            <stop offset="100%" stopColor="#e8aa60" />
          </linearGradient>
          <linearGradient id="s3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8f5822" />
            <stop offset="100%" stopColor="#b87838" />
          </linearGradient>
          <linearGradient id="s4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4d2e0e" />
            <stop offset="100%" stopColor="#7a4a1e" />
          </linearGradient>

          {/* Gold glow for ring */}
          <linearGradient id="ringG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#f5c842" />
            <stop offset="100%" stopColor="#b1926d" />
          </linearGradient>

          {/* Fade-out divider */}
          <linearGradient id="divG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#d97706" stopOpacity="0" />
            <stop offset="25%"  stopColor="#d97706" stopOpacity="1" />
            <stop offset="75%"  stopColor="#d97706" stopOpacity="1" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Outer ambient halo ── */}
        <rect x="2" y="2" width="100" height="100" rx="18" fill="#855b32" opacity="0.18" />

        {/* ── Main rounded-square body ── */}
        <rect x="1" y="1" width="102" height="102" rx="16" fill="url(#bgG)" />

        {/* ── Gold border ring ── */}
        <rect x="1" y="1" width="102" height="102" rx="16"
          fill="none" stroke="url(#ringG)" strokeWidth="2" opacity="0.9" />

        {/* ── Inner thin accent border ── */}
        <rect x="5.5" y="5.5" width="93" height="93" rx="13"
          fill="none" stroke="#d97706" strokeWidth="0.6" opacity="0.3" />

        {/* ══ MOUNTAIN STRATA ══ */}

        {/* Layer 1 — Peak (lightest, warmest gold) */}
        <polygon
          points="52,18  45,32  59,32"
          fill="url(#s1)"
          filter="url(#glow)"
        />

        {/* Layer 2 */}
        <polygon
          points="43,34  61,34  67,46  37,46"
          fill="url(#s2)"
        />

        {/* Layer 3 */}
        <polygon
          points="35,48  69,48  75,60  29,60"
          fill="url(#s3)"
        />

        {/* Layer 4 — Base (darkest) */}
        <polygon
          points="27,62  77,62  81,72  23,72"
          fill="url(#s4)"
        />

        {/* Strata separator lines */}
        <line x1="45" y1="33" x2="59" y2="33" stroke="#f5c842" strokeWidth="0.9" opacity="0.9" />
        <line x1="37" y1="47" x2="67" y2="47" stroke="#d97706" strokeWidth="0.9" opacity="0.8" />
        <line x1="29" y1="61" x2="75" y2="61" stroke="#c98a3e" strokeWidth="0.8" opacity="0.7" />

        {/* ── Star sparkle at mountain peak ── */}
        <g transform="translate(52,14)" opacity="0.95">
          <line x1="0" y1="-5"  x2="0"  y2="5"   stroke="#ffe0a0" strokeWidth="1"   strokeLinecap="round"/>
          <line x1="-5" y1="0"  x2="5"  y2="0"   stroke="#ffe0a0" strokeWidth="1"   strokeLinecap="round"/>
          <line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" stroke="#ffe0a0" strokeWidth="0.6" strokeLinecap="round"/>
          <line x1="3.5" y1="-3.5"  x2="-3.5" y2="3.5" stroke="#ffe0a0" strokeWidth="0.6" strokeLinecap="round"/>
          <circle cx="0" cy="0" r="1.4" fill="#ffe0a0"/>
        </g>

        {/* ── Gold divider ── */}
        <line x1="16" y1="77" x2="88" y2="77"
          stroke="url(#divG)" strokeWidth="1.2" />

        {/* ── "SJ" Monogram ── */}
        <text
          x="52"
          y="96"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="18"
          fontWeight="bold"
          fill="#ffffff"
          textAnchor="middle"
          letterSpacing="5"
          opacity="0.97"
        >
          SJ
        </text>

        {/* ── Corner facet ornaments ── */}
        {/* Top-left */}
        <polygon points="13,13 17,13 13,17" fill="#d97706" opacity="0.6" />
        {/* Top-right */}
        <polygon points="91,13 87,13 91,17" fill="#d97706" opacity="0.6" />
        {/* Bottom-left */}
        <polygon points="13,91 17,91 13,87" fill="#d97706" opacity="0.6" />
        {/* Bottom-right */}
        <polygon points="91,91 87,91 91,87" fill="#d97706" opacity="0.6" />

      </svg>

      {/* ════════════════
          BRAND TEXT BLOCK
          ════════════════ */}
      {variant !== "icon" && (
        <div className="flex flex-col justify-center text-left">

          {/* Company name */}
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-sans text-[14px] font-black tracking-[0.2em] uppercase leading-none ${
                isFooter ? "text-white" : "text-slate-900"
              }`}
            >
              SHREE
            </span>
            <span
              className={`font-sans text-[14px] font-black tracking-[0.2em] uppercase leading-none ${
                isFooter ? "text-white" : "text-slate-900"
              }`}
            >
              JYOTI
            </span>
          </div>

          {/* Decorative separator */}
          <div className="flex items-center gap-1.25 my-1">
            <div
              className="h-[1.5px] flex-1 max-w-7 rounded-full"
              style={{ background: "linear-gradient(90deg, #d97706, #b1926d)" }}
            />
            <div
              className="w-1.25 h-1.25 rotate-45"
              style={{ background: "#d97706" }}
            />
            <div
              className="h-[1.5px] flex-1 max-w-7 rounded-full"
              style={{ background: "linear-gradient(90deg, #b1926d, #d97706)" }}
            />
          </div>

          {/* Enterprises */}
          <span
            className={`font-sans text-[8.5px] font-extrabold tracking-[0.45em] uppercase leading-none ${
              isFooter ? "text-amber-400/90" : "text-[#855b32]"
            }`}
          >
            ENTERPRISES
          </span>

          {/* Tagline */}
          <span
            className={`font-mono text-[6.5px] tracking-[0.18em] uppercase leading-none mt-1 ${
              isFooter ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Natural Stone · Kota, Rajasthan
          </span>
        </div>
      )}
    </div>
  );
}
