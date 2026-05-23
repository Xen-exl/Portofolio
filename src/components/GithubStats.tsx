"use client";

import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { GitBranch, Star, Users, Activity } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

const Counter = ({ value, isLoading }: { value: string; isLoading?: boolean }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9,]/g, "");
  const hasComma = value.includes(",");

  useEffect(() => {
    if (isLoading) return;
    
    const controls = animate(0, numericValue, {
      duration: 2,
      onUpdate: (latest) => {
        const val = Math.floor(latest);
        if (hasComma) {
          setDisplayValue(val.toLocaleString() + suffix);
        } else {
          setDisplayValue(val.toString() + suffix);
        }
      },
    });
    return () => controls.stop();
  }, [numericValue, suffix, hasComma, isLoading]);

  if (isLoading) return <span className="animate-pulse opacity-50">...</span>;
  return <span>{displayValue}</span>;
};

const GithubStats = () => {
  const [githubData, setGithubData] = useState({
    repos: "0",
    followers: "0",
    contributions: "0",
    streak: "0 Days"
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Fetch User Data (Repos, Followers)
        const userResponse = await fetch("https://api.github.com/users/xen-exl");
        const userData = await userResponse.json();

        // Note: Contributions and Streak are not available directly from public API without Auth
        // For public access, we estimate or use specific endpoints if available
        // Here we'll use actual data from the user object
        setGithubData({
          repos: userData.public_repos?.toString() || "0",
          followers: userData.followers?.toString() || "0",
          contributions: "Fetching...", // Usually requires GraphQL or complex scraping
          streak: "Active"
        });
        
        // Try to get a better contribution count via events or simplified estimation
        // For true contributions, we usually need a proxy or GraphQL, 
        // but we'll show what we can get from public API
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const stats = [
    { label: "Total Repositories", value: githubData.repos, icon: <GitBranch size={20} /> },
    { label: "Public Projects", value: githubData.repos, icon: <Activity size={20} /> },
    { label: "Followers", value: githubData.followers, icon: <Users size={20} /> },
    { label: "Coding Years", value: "2", icon: <Star size={20} /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="premium-card p-6 md:p-12 bg-background relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-12 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground tracking-tight">GitHub Activity</h3>
                <p className="text-muted-foreground text-xs md:text-sm">Real-time open source contributions from GitHub.</p>
              </div>
              <motion.a
                href="https://github.com/xen-exl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-sm"
              >
                Follow on GitHub
              </motion.a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center md:text-left"
                >
                  <div className="flex items-center justify-center md:justify-start gap-2 text-accent-primary mb-2">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 16 })}
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    <Counter value={stat.value} isLoading={loading && stat.value === "0"} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Real GitHub Activity Graph */}
            <div className="mt-16 pt-8 border-t border-border overflow-x-auto scrollbar-hide">
              <div className="min-w-[800px] flex justify-center py-4">
                <GitHubCalendar 
                  username="xen-exl" 
                  blockSize={12}
                  blockMargin={4}
                  fontSize={12}
                  theme={{
                    light: ['#EBEDF0', '#9BE9A8', '#40C463', '#30A14E', '#216E39'],
                    dark: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
