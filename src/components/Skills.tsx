"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux,
  SiFramer,
  SiReactquery,
  SiShadcnui,
  SiNodedotjs, 
  SiExpress,
  SiLaravel, 
  SiPython, 
  SiGo,
  SiNestjs,
  SiFastify,
  SiBun,
  SiPostgresql, 
  SiMysql,
  SiMongodb, 
  SiRedis, 
  SiPrisma,
  SiSupabase,
  SiDrizzle,
  SiDocker, 
  SiGithubactions,
  SiCloudflare,
  SiVercel,
  SiKubernetes,
  SiTerraform,
  SiGooglecloud,
  SiOpenai, 
  SiLangchain,
  SiN8N,
  SiGit, 
  SiPostman,
  SiFigma,
  SiLinux
} from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";

const techStack = [
  // Core & Frontend
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "adaptive" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React Query", Icon: SiReactquery, color: "#FF4154" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Framer", Icon: SiFramer, color: "#0055FF" },
  { name: "Shadcn UI", Icon: SiShadcnui, color: "adaptive" },
  
  // Backend & Systems
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "adaptive" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Go", Icon: SiGo, color: "#00ADD8" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Fastify", Icon: SiFastify, color: "adaptive" },
  { name: "Bun", Icon: SiBun, color: "adaptive" },
  
  // Database
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { name: "Drizzle", Icon: SiDrizzle, color: "#C5F74F" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  
  // Infrastructure & DevOps
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { name: "AWS", Icon: BiLogoAws, color: "#FF9900" },
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
  { name: "Vercel", Icon: SiVercel, color: "adaptive" },
  { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
  
  // AI & Automation
  { name: "OpenAI", Icon: SiOpenai, color: "adaptive" },
  { name: "LangChain", Icon: SiLangchain, color: "adaptive" },
  { name: "n8n", Icon: SiN8N, color: "#FF6D5B" },
  
  // Tools
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

const TechPill = ({ tech }: { tech: { name: string; Icon: any; color: string } }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="flex items-center gap-2 md:gap-2.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-surface border border-border group cursor-default transition-all duration-300"
    >
      <tech.Icon 
        size={14} 
        className="transition-colors duration-300"
        style={{ 
          color: isHovered 
            ? (tech.color === "adaptive" ? "var(--foreground)" : tech.color)
            : "var(--muted-foreground)",
          opacity: isHovered ? 1 : 0.4
        }}
      />
      <span 
        className="text-xs md:text-sm font-medium transition-colors duration-300"
        style={{ 
          color: isHovered ? "var(--foreground)" : "var(--muted-foreground)"
        }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-primary font-bold tracking-[0.3em] mb-4 uppercase text-[10px]"
          >
            Technical Stack
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            Crafting digital solutions with <br />
            <span className="text-muted-foreground/40">modern technologies.</span>
          </motion.h3>
        </div>

        {/* Clean Pill Layout */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              viewport={{ once: true }}
            >
              <TechPill tech={tech} />
            </motion.div>
          ))}
        </div>

        {/* Subtle Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="h-[1px] w-12 bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
