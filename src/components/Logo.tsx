import { ComponentProps } from "react";
import logoImg from "../assets/images/logo.jpeg";

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
          LOGO IMAGE
          ════════════════════════════════════════ */}
      <img
        src={logoImg}
        alt="Shree Jyoti Enterprises"
        className={`${iconSize} shrink-0 object-contain rounded-md border border-stone-200/50 shadow-sm bg-white p-0.5`}
      />

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
