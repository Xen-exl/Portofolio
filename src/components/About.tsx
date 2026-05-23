"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { ShieldCheck, Cpu, Zap, Globe } from "lucide-react";

const Counter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numMatch = value.match(/\d+/);
  const targetValue = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (targetValue === 0) return;
    const controls = animate(0, targetValue, {
      duration: 2,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [targetValue]);

  if (targetValue === 0) return <span>{value}</span>;
  return <span>{displayValue}{suffix}</span>;
};

const stats = [
  { label: "Learning & Building", value: "2+ Years", icon: <Zap size={20} /> },
  { label: "Personal Projects", value: "10+", icon: <Globe size={20} /> },
  { label: "Full Stack Stack", value: "Modern", icon: <Cpu size={20} /> },
  { label: "New Technologies", value: "Exploring", icon: <Zap size={20} /> },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent-primary font-medium tracking-[0.2em] mb-4 uppercase text-xs">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-foreground tracking-tight">
              Focused on building modern web applications with <span className="text-accent-primary">clean architecture.</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I enjoy creating full stack applications, backend systems, and automation tools 
              using modern technologies focused on performance, maintainability, and simplicity.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Modern Frontend Development",
                "Backend Systems & APIs",
                "AI Integration & Automation",
                "DevOps & Deployment Workflow",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                    <ShieldCheck size={14} />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="premium-card p-6 md:p-8 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/5 flex items-center justify-center text-accent-primary mb-6">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                  <Counter value={stat.value} />
                </div>
                <div className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
            
            {/* Special Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="premium-card p-6 md:p-8 bg-surface border-border sm:col-span-2"
            >
              <div className="text-xl font-bold mb-2 text-foreground">Problem Solving</div>
              <p className="text-sm text-slate-600 dark:text-foreground/60 leading-relaxed">
                Passionate about building clean, efficient, and scalable digital products through 
                modern development workflows and continuous learning.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
