import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const heroSlides = [
  {
    title: "Unique Approach",
    description: "CloudRack takes a tailored, business-first approach to technology solutions. We design and implement secure, high-performance systems based on your specific goals—not one-size-fits-all models. By combining modern cloud technologies, proven best practices, and continuous optimization, we deliver scalable, future-ready solutions that grow with your business."
  },
  {
    title: "Hi-End Technology Solutions",
    description: "Powering secure, scalable, and high-performance digital infrastructure. CloudRack delivers enterprise-grade solutions designed to optimize performance, enhance security, and accelerate business growth."
  }
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-20"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="/assets/videos/cloud-bg.mp4" type="video/mp4" />
        </video>
        {/* Fallback Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-gray-950/95 to-accent-900/90" />
        
        {/* Animated Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-brand-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-brand-400 text-sm font-semibold">
                  Enterprise Cloud Solutions
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="gradient-text">{heroSlides[currentSlide].title}</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-brand-500/50 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-16">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 bg-brand-400' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
