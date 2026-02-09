import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      name: "FinTech Cloud Migration",
      industry: "Financial Services",
      description: "Migrated a legacy banking infrastructure to multi-cloud environment with zero downtime, achieving 50% cost reduction and 3x performance improvement.",
      tags: ["AWS", "Kubernetes", "Security", "Migration"],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      name: "Healthcare Data Platform",
      industry: "Healthcare",
      description: "Built HIPAA-compliant data analytics platform processing 10M+ patient records daily with real-time insights and AI-powered diagnostics.",
      tags: ["Azure", "AI", "Compliance", "Big Data"],
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      name: "E-Commerce Scaling Solution",
      industry: "Retail",
      description: "Implemented auto-scaling infrastructure handling Black Friday traffic spikes of 100x normal load while maintaining sub-second response times.",
      tags: ["GCP", "Kubernetes", "CDN", "Auto-Scaling"],
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      name: "Manufacturing IoT Platform",
      industry: "Manufacturing",
      description: "Deployed edge computing solution connecting 5,000+ IoT devices with real-time monitoring, predictive maintenance, and supply chain optimization.",
      tags: ["AWS", "IoT", "Edge Computing", "ML"],
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      name: "SaaS Application Modernization",
      industry: "Technology",
      description: "Transformed monolithic application into microservices architecture, improving deployment frequency from monthly to daily releases.",
      tags: ["Kubernetes", "DevOps", "Microservices", "CI/CD"],
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      name: "Global CDN Implementation",
      industry: "Media & Entertainment",
      description: "Delivered multi-region content delivery network serving 50M+ users globally with 99.99% uptime and <50ms latency worldwide.",
      tags: ["CDN", "Global", "Performance", "Streaming"],
      gradient: "from-cyan-500/20 to-blue-500/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-400 text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming businesses across industries with innovative cloud solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass-card p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/10 overflow-hidden relative"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Industry Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-brand-400 font-semibold">
                    {project.industry}
                  </span>
                  <svg className="w-6 h-6 text-gray-600 group-hover:text-brand-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Project Name */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-300 transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-400 group-hover:border-brand-400/30 group-hover:text-brand-400 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
