"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const roles = [
  "React Engineer",
  "Laravel Developer",
  "Backend Architect",
  "AI Automation Builder",
  "Open Source Enthusiast",
  "Modern Web Developer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentRole.slice(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setRoleIndex((prev: number) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Small Label */}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block"
            >
              Full Stack Developer
            </motion.span>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground leading-[1.2] md:leading-[1.15]">
              Xen architects scalable <br />
              digital products and <br />
              modern systems.
            </h1>

            {/* Typing Animation Area */}
            <div className="min-h-[1.5em] mb-8 flex items-center gap-3">
              <span className="text-accent-primary font-bold text-lg md:text-xl">→</span>
              <span className="font-mono text-base md:text-2xl text-foreground font-medium">
                {currentText}
                <span className="w-1.5 h-5 md:w-2 md:h-8 bg-accent-primary inline-block ml-1 align-middle animate-pulse" />
              </span>
            </div>

            {/* Description Text */}
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-10 leading-relaxed font-medium">
              Focused on building clean, scalable, and high-performance digital products through modern development workflows.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="clean-button-primary flex items-center justify-center gap-2 px-8 py-4 md:py-3.5 shadow-sm w-full sm:w-auto"
              >
                View Projects <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="clean-button-secondary px-8 py-4 md:py-3.5 w-full sm:w-auto text-center"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-[450px] ml-auto overflow-hidden rounded-2xl border border-border shadow-sm group bg-surface">
              <Image
                src="/img/bg-foto.png"
                alt="Xen Developer"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Subtle Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-primary/5 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-secondary/5 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};

export default Hero;
