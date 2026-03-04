'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-200 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-gray-800 bg-[#0d1117]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tighter">
            TripleS <span className="text-blue-500">Studio.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Our Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition inline-block">
  Book a Call
</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-6 inline-block">
              Based in Dhaka, Shipping Globally 🌍
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              High-Performance Web <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Infrastructure & Apps.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just build websites. We engineer scalable, C-speed web applications and e-commerce platforms that convert visitors into revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
  <a href="#contact" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition shadow-[0_0_30px_rgba(59,130,246,0.3)]">
    Start Your Project <ArrowRight size={18} />
  </a>
  <a href="#services" className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-semibold transition border border-gray-700">
    View Services
  </a>
</div>
          </motion.div>
        </div>
        
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#161b22] px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Engineering-First Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Built with modern tech stacks to ensure absolute reliability and speed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#0d1117] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Globe className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Full-Stack Web Apps</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Custom SaaS platforms and dashboards built with React, Next.js, and scalable databases.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#0d1117] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Zap className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">E-Commerce Platforms</h3>
              <p className="text-gray-400 text-sm leading-relaxed">High-conversion storefronts integrated with SSLCommerz, Stripe, and secure user authentication.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#0d1117] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition duration-300 group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Code className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Backend & API Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Distributed architectures using Python, FastAPI, Docker, and Redis caching for zero latency.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Work / Case Studies Section */}
      <section id="work" className="py-24 bg-[#0d1117] px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just write code. We engineer systems that solve complex business bottlenecks.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Case Study 1: E-Commerce */}
            <div className="bg-[#161b22] rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition duration-300 group shadow-lg">
              {/* Image Placeholder / Abstract Header */}
              <div className="h-56 bg-gradient-to-br from-blue-900/40 to-[#0d1117] flex items-center justify-center border-b border-gray-800 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>
                 <h3 className="text-2xl font-bold text-white/50 z-10 group-hover:scale-110 transition duration-500 tracking-wider">E-COMMERCE</h3>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">React.js</span>
                  <span className="text-xs font-semibold bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">PostgreSQL</span>
                  <span className="text-xs font-semibold bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">Payment Gateway</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">High-Conversion Retail Storefront</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  <strong className="text-gray-300">The Challenge:</strong> A retail client needed a scalable online store capable of handling flash-sale traffic without crashing.<br/><br/>
                  <strong className="text-gray-300">The Solution:</strong> Engineered a custom full-stack e-commerce solution with sub-second page loads, automated inventory databases, and secure payment integration. Resulted in a 40% increase in checkout conversions.
                </p>
                <a href="#contact" className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1 transition">
                  Discuss a similar project <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Case Study 2: Backend Architecture */}
            <div className="bg-[#161b22] rounded-2xl border border-gray-800 overflow-hidden hover:border-cyan-500/50 transition duration-300 group shadow-lg">
              {/* Image Placeholder / Abstract Header */}
              <div className="h-56 bg-gradient-to-br from-cyan-900/40 to-[#0d1117] flex items-center justify-center border-b border-gray-800 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400 to-transparent"></div>
                 <h3 className="text-2xl font-bold text-white/50 z-10 group-hover:scale-110 transition duration-500 tracking-wider">BACKEND SYSTEMS</h3>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">FastAPI (Python)</span>
                  <span className="text-xs font-semibold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">Redis</span>
                  <span className="text-xs font-semibold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">Docker</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Distributed API Architecture</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  <strong className="text-gray-300">The Challenge:</strong> Traditional relational databases bottleneck and crash when hit with millions of concurrent read-requests.<br/><br/>
                  <strong className="text-gray-300">The Solution:</strong> Architected a Cache-Aside microservice using Redis and Docker. Reduced database latency from O(log N) disk lookups to O(1) in-memory lookups, ensuring zero downtime under heavy load.
                </p>
                <a href="#contact" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-1 transition">
                  Discuss a similar project <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Contact & Lead Gen Section */}
      <section id="contact" className="py-24 bg-[#0d1117] px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let&apos;s Build Something Great</h2>
            <p className="text-gray-400">Tell us about your project, timeline, and budget. We&apos;ll get back to you within 24 hours.</p>
          </div>

          <form action="https://formspree.io/f/mqapkyry" method="POST" className="bg-[#161b22] p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" name="name" required className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                <input type="email" name="email" required className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition" placeholder="john@company.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="project_type" className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                <select id="project_type" name="project_type" title="Select a project type" className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition appearance-none">
                  <option>E-Commerce Platform</option>
                  <option>Full-Stack Web App</option>
                  <option>Backend / API Development</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">Estimated Budget (USD)</label>
                <select id="budget" name="budget" className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition appearance-none">
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000 - $10,000+</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
              <textarea name="message" rows={4} required className="w-full bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition resize-none" placeholder="Tell us about your goals, features you need, and timeline..."></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              Submit Project Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0d1117] border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} TripleS Studio. All Rights Reserved. Dhaka, Bangladesh.</p>
      </footer>

    </main>
  );
}