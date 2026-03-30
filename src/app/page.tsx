"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, Users, Languages } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 lg:py-24 font-sans text-slate-300">
      {/* Header Section */}
      <motion.header 
        initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}
        className="mb-16 border-b border-slate-700 pb-8 text-center"
      >
        <motion.h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
          Rida Shahid
        </motion.h1>
        <p className="text-xl text-indigo-400 font-medium mb-6">Business Administration Graduate</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-slate-400" />
            <span>+92 313 7946587</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-slate-400" />
            <a href="mailto:ridasa786@gmail.com" className="hover:text-indigo-400 transition-colors">
              ridasa786@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-slate-400" />
            <span>Sabzazar A Block, Hassan Street, Lahore, Pakistan</span>
          </div>
        </div>
      </motion.header>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Left Column (Main content) */}
        <div className="md:col-span-2 space-y-12">
          
          {/* Summary */}
          <motion.section variants={fadeIn} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="text-indigo-400" /> Professional Summary
            </h2>
            <p className="leading-relaxed">
              Highly motivated and detail-oriented Business Administration graduate seeking an entry-level position in a dynamic, growth-oriented organization. Eager to leverage a strong academic foundation in commerce and business management to drive operational efficiency, support strategic objectives, and continuously develop advanced professional competencies.
            </p>
          </motion.section>

          {/* Education */}
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 pb-2 border-b border-slate-700/50">
              <GraduationCap className="text-indigo-400" /> Education
            </h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-indigo-500/30">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-900" />
                <h3 className="text-xl font-semibold text-slate-100">Bachelor of Business Administration (BBA)</h3>
                <p className="text-indigo-400 text-sm mb-2">2-Year Program | 2023 – 2025</p>
                <p className="text-slate-400">Punjab University, Commerce Campus</p>
              </div>
              <div className="relative pl-6 border-l-2 border-indigo-500/30">
                <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-900" />
                <h3 className="text-xl font-semibold text-slate-100">Bachelor of Commerce (B.Com)</h3>
                <p className="text-slate-400 text-sm mb-2">2014 – 2017</p>
                <p className="text-slate-400">University of Gujrat, Marghazar Campus</p>
              </div>
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 pb-2 border-b border-slate-700/50">
              <Briefcase className="text-indigo-400" /> Professional Experience
            </h2>
            <div className="space-y-8">
              <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/30 hover:border-indigo-500/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-100">Banking Intern</h3>
                  <span className="text-sm px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full">3 Months</span>
                </div>
                <p className="text-indigo-300 text-sm mb-4">MCB Bank (Bhimber Road, Gujrat)</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Facilitated daily banking operations and provided comprehensive customer service support.</li>
                  <li>Managed financial records, ensured data accuracy, and streamlined documentation processes.</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/30 hover:border-indigo-500/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-100">Educator</h3>
                  <span className="text-sm px-3 py-1 bg-slate-700 text-slate-300 rounded-full">11 Months</span>
                </div>
                <p className="text-indigo-300 text-sm mb-4">Allied School (Jinnah Campus)</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Designed and delivered engaging lesson plans while effectively managing classroom dynamics.</li>
                  <li>Fostered a collaborative learning environment, enhancing student engagement and academic performance.</li>
                </ul>
              </div>
            </div>
          </motion.section>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-8">
          
          {/* Skills */}
          <motion.section variants={fadeIn} className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Code2 className="text-indigo-400" size={20} /> Competencies
            </h2>
            
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="text-slate-100 font-medium mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["MS Office Suite", "Digital Research", "Data Entry", "Proofreading"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-700/50 rounded-lg text-slate-300">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-slate-100 font-medium mb-2">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Communication", "Time Management", "Prioritization", "Client Relations"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-700/50 rounded-lg text-slate-300">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-slate-100 font-medium mb-2">Operational Support</h3>
                <div className="flex flex-wrap gap-2">
                  {["Workflow Organization", "Record Keeping", "Cross-functional Collaboration"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-lg">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Languages */}
          <motion.section variants={fadeIn} className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Languages className="text-indigo-400" size={20} /> Languages
            </h2>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-slate-200">Urdu</span>
                <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded">Native</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-200">English</span>
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">Fluent</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-200">Punjabi</span>
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">Fluent</span>
              </li>
            </ul>
          </motion.section>

        </div>
      </motion.div>
    </main>
  );
}