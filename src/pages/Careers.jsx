import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    {
      id: 1,
      title: "Cloud Solutions Architect",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Join our team as a Cloud Solutions Architect to design and implement enterprise-grade cloud infrastructure solutions for Fortune 500 clients. You'll work with cutting-edge technologies across AWS, Azure, and GCP.",
      responsibilities: [
        "Design scalable, secure, and cost-effective cloud architectures",
        "Lead technical discussions with clients and stakeholders",
        "Develop migration strategies for legacy systems to cloud platforms",
        "Implement Infrastructure as Code using Terraform and CloudFormation",
        "Mentor junior engineers and conduct architecture reviews",
        "Stay current with emerging cloud technologies and best practices"
      ],
      requirements: [
        "5+ years of experience in cloud architecture or infrastructure roles",
        "Expert knowledge of AWS, Azure, or GCP (multi-cloud preferred)",
        "Strong understanding of networking, security, and DevOps practices",
        "Experience with containerization (Docker, Kubernetes)",
        "Excellent communication and client-facing skills",
        "Relevant certifications (AWS Solutions Architect, Azure Architect, etc.)"
      ],
      niceToHave: [
        "Experience with serverless architectures",
        "Knowledge of FinOps and cost optimization strategies",
        "Previous consulting or client-facing experience",
        "Contributions to open-source projects"
      ]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      location: "New York, NY / Remote",
      type: "Full-time",
      department: "Engineering",
      description: "We're looking for a passionate DevOps Engineer to build and maintain CI/CD pipelines, automate infrastructure, and ensure high availability of our clients' critical systems.",
      responsibilities: [
        "Build and maintain CI/CD pipelines using Jenkins, GitLab CI, or GitHub Actions",
        "Automate infrastructure provisioning and configuration management",
        "Implement monitoring and logging solutions for production systems",
        "Optimize application performance and system reliability",
        "Collaborate with development teams to improve deployment processes",
        "Respond to incidents and implement preventive measures"
      ],
      requirements: [
        "3+ years of DevOps or Site Reliability Engineering experience",
        "Strong scripting skills (Python, Bash, PowerShell)",
        "Experience with configuration management tools (Ansible, Puppet, Chef)",
        "Proficiency with container orchestration (Kubernetes, Docker Swarm)",
        "Understanding of networking, security, and Linux system administration",
        "Experience with monitoring tools (Prometheus, Grafana, Datadog)"
      ],
      niceToHave: [
        "Experience with service mesh (Istio, Linkerd)",
        "Knowledge of GitOps practices",
        "Familiarity with chaos engineering",
        "Certifications in cloud platforms or Kubernetes"
      ]
    }
  ]

  const JobModal = ({ job, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-card p-8 max-w-3xl max-h-[90vh] overflow-y-auto w-full"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">{job.title}</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-brand-500/20 border border-brand-500/30 rounded-full text-brand-400 text-sm">
                {job.department}
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm">
                {job.type}
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm">
                {job.location}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-300 leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Responsibilities</h4>
            <ul className="space-y-2">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Requirements</h4>
            <ul className="space-y-2">
              {job.requirements.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-3">Nice to Have</h4>
            <ul className="space-y-2">
              {job.niceToHave.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full px-8 py-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-brand-500/50 transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-brand-500/10 border border-brand-500/30 rounded-full text-brand-400 text-sm font-semibold mb-4">
            Join Our Team
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build Your Career at <span className="gradient-text">CloudRack</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join a team of passionate cloud experts working on cutting-edge technologies and transforming businesses worldwide.
          </p>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6 mb-12">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-brand-500/20 border border-brand-500/30 rounded-full text-brand-400 text-sm">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{job.location}</span>
                    </span>
                  </div>
                </div>
                <button
                  className="px-6 py-3 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg text-white font-semibold hover:shadow-xl hover:shadow-brand-500/50 transition-all duration-300 hover:scale-105 md:w-auto w-full"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Tech</h3>
              <p className="text-gray-400">Work with the latest cloud technologies and tools</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Pay</h3>
              <p className="text-gray-400">Industry-leading compensation and benefits package</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
              <p className="text-gray-400">Transform businesses across the world</p>
            </div>
          </div>
        </motion.div>

        {/* Link to No Vacancy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Don&apos;t see a position that fits?</p>
          <Link
            to="/careers/no-vacancy"
            className="text-brand-400 hover:text-brand-300 transition-colors underline"
          >
            Check future opportunities
          </Link>
        </motion.div>
      </div>

      {/* Job Modal */}
      {selectedJob && <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  )
}

export default Careers
