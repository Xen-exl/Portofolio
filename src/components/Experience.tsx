"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Trophy } from "lucide-react";

const experiences = [
  {
    role: "Building & Learning",
    company: "Independent Developer",
    period: "2025 — Present",
    description: "Building modern web applications, exploring backend systems, and creating automation tools using modern technologies.",
    tags: ["Next.js", "Laravel", "PostgreSQL", "Docker"],
    icon: <Briefcase size={20} />,
  },
  {
    role: "Open Source & Experiments",
    company: "Personal Projects",
    period: "2025 — Present",
    description: "Working on personal projects, UI concepts, and developer tools while continuously improving full stack development skills.",
    tags: ["React", "TypeScript", "Node.js", "GitHub"],
    icon: <Code size={20} />,
  },
  {
    role: "Learning Modern Web Development",
    company: "Self-directed Learning",
    period: "2024 — Present",
    description: "Learning scalable application architecture, API development, deployment workflows, and modern frontend engineering.",
    tags: ["Web Development", "APIs", "Automation"],
    icon: <Trophy size={20} />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[120px] rounded-full -z-10 opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-primary font-bold tracking-[0.3em] mb-4 uppercase text-[10px]"
          >
            Professional Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight"
          >
            My experience in building <br />
            <span className="text-muted-foreground/40">digital excellence.</span>
          </motion.h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Hidden on small mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border/50 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 top-0 md:top-12 w-3 h-3 md:w-4 md:h-4 rounded-full bg-background border-2 border-accent-primary -translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-accent-primary animate-ping opacity-20" />
                </div>

                {/* Period - Desktop Left/Right */}
                <div className={`w-full md:w-1/2 flex pl-10 md:pl-0 ${i % 2 === 0 ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16"}`}>
                  <span className="text-[10px] md:text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] bg-surface px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-border">
                    {exp.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                  <div className="premium-card p-6 md:p-8 group hover:border-accent-primary/20 transition-all duration-500 bg-surface/30 backdrop-blur-sm">
                    <div className="flex items-start gap-4 md:gap-6 mb-4 md:mb-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-background border border-border flex items-center justify-center text-accent-primary group-hover:scale-110 transition-transform duration-500 shadow-sm shrink-0">
                        {React.cloneElement(exp.icon as React.ReactElement, { size: 20 })}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg md:text-xl text-foreground tracking-tight mb-1">
                          {exp.role}
                        </h4>
                        <p className="text-accent-primary text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 md:mb-8 font-medium">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-background border border-border text-muted-foreground/70 group-hover:text-foreground group-hover:border-accent-primary/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
