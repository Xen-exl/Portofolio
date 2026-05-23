"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent-primary font-medium tracking-[0.2em] mb-4 uppercase text-xs"
            >
              Get in Touch
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-foreground tracking-tight"
            >
              Let&apos;s build something <br />
              <span className="text-accent-primary">exceptional.</span>
            </motion.h3>
            <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-12 leading-relaxed max-w-md">
              Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities and digital products.
            </p>

            <div className="space-y-4 md:space-y-6">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "projectxen@gmail.com", href: "mailto:projectxen@gmail.com" },
                { icon: <Instagram size={18} />, label: "Instagram", value: "@nxz_ienx", href: "https://instagram.com/nxz_ienx" },
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-accent-primary group-hover:border-accent-primary/30 transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5 md:mb-1">
                      {item.label}
                    </div>
                    <div className="text-base md:text-lg font-medium text-foreground group-hover:text-accent-primary transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3 md:gap-4 mt-10 md:mt-12">
              {[
                { icon: <Github size={18} />, href: "https://github.com/xen-exl" },
                { icon: <Linkedin size={18} />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent-primary/30 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-6 md:p-10 bg-background"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-3 rounded-lg bg-surface border border-border focus:border-accent-primary/50 focus:outline-none transition-all text-foreground text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-lg bg-surface border border-border focus:border-accent-primary/50 focus:outline-none transition-all text-foreground text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-3 rounded-lg bg-surface border border-border focus:border-accent-primary/50 focus:outline-none transition-all resize-none text-foreground text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full clean-button-primary flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
