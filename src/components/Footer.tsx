"use client";

import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold text-foreground">
            Xen
          </div>
          
          <div className="text-muted-foreground text-xs font-medium tracking-tight">
            © {new Date().getFullYear()} Built by <span className="text-foreground">Xen</span>. All rights reserved.
          </div>

          <div className="flex gap-6">
            {[
              { icon: <Github size={18} />, href: "https://github.com/xen-exl" },
              { icon: <Linkedin size={18} />, href: "#" },
              { icon: <Twitter size={18} />, href: "#" },
              { icon: <Instagram size={18} />, href: "https://instagram.com/nxz_ienx" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
