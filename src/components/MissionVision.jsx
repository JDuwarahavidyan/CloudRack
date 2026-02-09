import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const MissionVision = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="mission-vision" className="section-padding relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
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
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mission & <span className="gradient-text">Vision</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/30 to-brand-600/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To empower enterprises with transformative cloud solutions that drive innovation, efficiency, and growth. 
              We are committed to delivering secure, scalable, and intelligent infrastructure that enables our clients 
              to focus on their core business while we handle the complexity of modern cloud operations.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Deliver excellence through automation and innovation</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Build long-term partnerships based on trust and results</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Maintain highest standards of security and compliance</span>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/30 to-accent-600/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To be the global leader in cloud transformation, recognized for our innovation, expertise, and unwavering 
              commitment to client success. We envision a future where businesses of all sizes can harness the full 
              power of cloud technology to achieve their most ambitious goals.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Pioneer next-generation cloud technologies and practices</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Expand our global footprint while maintaining service excellence</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400">Foster a culture of continuous learning and innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
