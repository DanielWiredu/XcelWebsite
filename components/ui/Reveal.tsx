"use client";

import { m, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "p";
};

/** Scroll-triggered fade-and-rise. Reduced motion is handled by MotionConfig. */
export function Reveal({ children, className, delay = 0, y = 28, as = "div" }: RevealProps) {
  const Tag = m[as] as typeof m.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    >
      {children}
    </Tag>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

type StaggerProps = { children: ReactNode; className?: string; as?: "div" | "ul" | "ol" };

/** Parent that staggers direct <StaggerItem> children as they enter the viewport. */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const Tag = m[as] as typeof m.div;
  return (
    <Tag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Tag = m[as] as typeof m.div;
  return (
    <Tag className={className} variants={itemVariants}>
      {children}
    </Tag>
  );
}
