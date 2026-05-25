import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  strength?: number;
};

export function MagneticButton({
  href,
  onClick,
  className = "",
  children,
  target,
  rel,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const handleMove = (e: MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Tag: any = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref as any}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </Tag>
  );
}
