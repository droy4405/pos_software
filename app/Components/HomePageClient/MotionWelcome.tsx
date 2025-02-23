"use client";
import React from "react";
import { motion } from "framer-motion";

interface MotionEffectProps {
  effect01: string;
  className?: string;
  initialOpacity?: number;
  initialY?: number;
  animateOpacity?: number;
  animateY?: number;
  transition?: object;
}

export function MotionEffect({
  effect01,
  className = "text-4xl font-extrabold mb-8",
  initialOpacity = 0,
  initialY = -20,
  animateOpacity = 1,
  animateY = 0,
  transition = { duration: 0.8 },
  
}: MotionEffectProps) {
  return (
    <motion.h1
      className={className}
      initial={{ opacity: initialOpacity, y: initialY }}
      animate={{ opacity: animateOpacity, y: animateY }}
      transition={transition}
    >
      {effect01}
      
    </motion.h1>
  );
}