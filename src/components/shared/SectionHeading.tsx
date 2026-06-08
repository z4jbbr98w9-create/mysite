import Reveal from "./Reveal";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
}: Props) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
            <span className="w-6 h-px bg-accent" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="display-font text-4xl md:text-5xl font-bold leading-[1.05] text-balance">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
