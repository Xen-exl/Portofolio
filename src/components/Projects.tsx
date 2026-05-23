"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "BinaAPK Platform",
    description: "An automated tool designed to convert HTML/JS/CSS web applications into Android APKs using GitHub Actions. It supports direct folder uploads and drag-and-drop features, eliminating manual repository management.",
    tags: ["GitHub Actions", "Android", "Automation", "Vercel"],
    image: "/img/binaapk.png",
    links: { live: "https://xenbuild.vercel.app/", github: "https://github.com/Xen-exl/BinaAPK" },
  },
  {
    title: "BinaAPK Landing Page",
    description: "A high-performance landing page for BinaAPK, featuring a premium dark aesthetic with glassmorphism and smooth animations. Includes a real-time build simulation and a fully responsive layout.",
    tags: ["HTML5", "Vanilla CSS", "JavaScript", "Lucide Icons"],
    image: "/img/webbinaapk.png",
    links: { live: "https://xen-exl.github.io/Website-BinaAPK/", github: "https://github.com/Xen-exl/Website-BinaAPK" },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent-primary font-medium tracking-[0.2em] mb-4 uppercase text-xs"
            >
              Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
            >
              Selected <span className="text-accent-primary">Works.</span>
            </motion.h3>
          </div>
          <motion.button
            className="flex items-center gap-2 text-foreground font-semibold hover:opacity-70 transition-all text-sm"
          >
            View all projects <ArrowUpRight size={16} />
          </motion.button>
        </div>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-16 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 relative group">
                <div className="relative overflow-hidden rounded-xl border border-border aspect-[16/10] bg-surface shadow-sm group-hover:shadow-md transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-foreground tracking-tight">{project.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-surface border border-border text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 pt-4">
                  <a href={project.links.live} className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent-primary transition-colors">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={project.links.github} className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent-primary transition-colors">
                    Source Code <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
