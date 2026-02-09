import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NoVacancy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative z-10 container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center backdrop-blur-sm border border-white/10"
          >
            <svg className="w-16 h-16 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">No Vacancies Available</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 mb-8 leading-relaxed"
          >
            We appreciate your interest in joining CloudRack! Unfortunately, we don&apos;t have any open positions at the moment. 
            However, we&apos;re always looking for talented individuals to join our team.
          </motion.p>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-8 mb-8 text-left"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Stay Connected</h2>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Follow us on LinkedIn for the latest job postings</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Check back regularly for new opportunities</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Send your resume to careers@cloudrack.com for future consideration</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-brand-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
            >
              Back to Home
            </Link>
            <Link
              to="/careers"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
            >
              View Open Positions
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12"
          >
            <p className="text-gray-500 mb-4">Questions about careers at CloudRack?</p>
            <a
              href="mailto:careers@cloudrack.com"
              className="text-brand-400 hover:text-brand-300 transition-colors font-semibold inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>careers@cloudrack.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NoVacancy
