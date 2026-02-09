import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const assetBase = import.meta.env.BASE_URL

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Products', id: 'projects' },
    { label: 'Partners', id: 'partners' },
    { label: 'Careers', link: '/careers' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-gray-950/80 shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={`${assetBase}assets/images/logo.png`}
              alt="CloudRack Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <div className="h-10 w-10 bg-gradient-to-br from-brand-400 to-accent-500 rounded-lg flex items-center justify-center" style={{display: 'none'}}>
              <span className="text-2xl font-bold text-white">C</span>
            </div>
            <span className="text-2xl font-bold gradient-text hidden md:block">CloudRack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.link ? (
                <Link
                  key={item.label}
                  to={item.link}
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-brand-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-brand-500/50 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-brand-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  item.link ? (
                    <Link
                      key={item.label}
                      to={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-300 hover:text-brand-400 transition-colors duration-200 font-medium py-2"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-gray-300 hover:text-brand-400 transition-colors duration-200 font-medium py-2 w-full text-left"
                    >
                      {item.label}
                    </button>
                  )
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-brand-500/50 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
