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
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} {...props}>
      {/* Premium Solid Square Serif Monogram Logo (Architectural Sawn cut) */}
      <svg
        viewBox="0 0 100 100"
        className={`${iconSize} shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="100"
          height="100"
          fill="#111827"
        />
        <text
          x="50"
          y="63"
          fontFamily="Georgia, Cambria, 'Times New Roman', Times, serif"
          fontSize="42"
          fontWeight="bold"
          fill="#FFFFFF"
          textAnchor="middle"
          letterSpacing="-0.5"
        >
          SJ
        </text>
      </svg>

      {/* Brand Luxury SaaS Lettering */}
      {variant !== "icon" && (
        <div className="flex flex-col justify-center text-left">
          {/* Small Category header */}
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-sans text-[11px] font-extrabold tracking-[0.25em] uppercase ${
                variant === "footer" ? "text-slate-300" : "text-slate-900"
              }`}
            >
              SHREE JYOTI
            </span>
          </div>
          
          {/* Main Logo Title */}
          <span
            className={`font-sans text-[10px] font-bold tracking-[0.3em] leading-normal uppercase mt-1 ${
              variant === "footer" ? "text-slate-400" : "text-[#B87333]"
            }`}
          >
            ENTERPRISES
          </span>

          {/* Verification indicator */}
          <span
            className={`text-[7px] font-mono tracking-[0.25em] uppercase mt-1 leading-none ${
              variant === "footer" ? "text-slate-500" : "text-slate-500"
            }`}
          >
            Quarry OEM Exporter &bull; ESTD. 2007
          </span>
        </div>
      )}
    </div>
  );
}
