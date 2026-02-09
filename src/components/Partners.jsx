import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Partners = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // First row - slides from right to left
  const assetBase = import.meta.env.BASE_URL
  const partnersRow1 = [
    { name: 'AWS', logo: `${assetBase}assets/clients/Amazon_Web_Services_Logo.svg` },
    { name: 'Microsoft', logo: `${assetBase}assets/clients/ms3.png` },
    { name: 'Google Cloud', logo: `${assetBase}assets/clients/gcp.png` },
    { name: 'Oracle', logo: `${assetBase}assets/clients/oracle.png` },
    { name: 'Adobe', logo: `${assetBase}assets/clients/adobe.png` },
    { name: 'SAP', logo: `${assetBase}assets/clients/sap.png` },
  ]

  // Second row - slides from right to left
  const partnersRow2 = [
    { name: 'Lenovo', logo: `${assetBase}assets/clients/lenova.png` },
    { name: 'Dell', logo: `${assetBase}assets/clients/dell.png` },
    { name: 'HP', logo: `${assetBase}assets/clients/hp.png` },
    { name: 'Palo Alto Networks', logo: `${assetBase}assets/clients/paloalto.png` },
    { name: 'Fortinet', logo: `${assetBase}assets/clients/fortinet.png` },
    { name: 'Akamai', logo: `${assetBase}assets/clients/akamai.png` },
  ]

  const PartnerLogo = ({ partner }) => (
    <div className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      <div 
        className="w-48 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20"
        style={{ display: 'none' }}
      >
        <span className="text-gray-400 font-semibold text-sm">{partner.name}</span>
      </div>
    </div>
  )

  return (
    <section id="partners" className="section-padding relative overflow-hidden bg-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
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
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Work With <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Partnering with the world&apos;s most trusted technology providers to deliver exceptional results.
          </p>
        </motion.div>

        {/* First Row - Right to Left */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex animate-slide-left">
            {/* First set */}
            {partnersRow1.map((partner, index) => (
              <PartnerLogo key={`row1-a-${index}`} partner={partner} />
            ))}
            {/* Duplicate set for seamless loop */}
            {partnersRow1.map((partner, index) => (
              <PartnerLogo key={`row1-b-${index}`} partner={partner} />
            ))}
            {/* Third set for seamless loop */}
            {partnersRow1.map((partner, index) => (
              <PartnerLogo key={`row1-c-${index}`} partner={partner} />
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left (with delay) */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide-left" style={{ animationDelay: '-20s' }}>
            {/* First set */}
            {partnersRow2.map((partner, index) => (
              <PartnerLogo key={`row2-a-${index}`} partner={partner} />
            ))}
            {/* Duplicate set for seamless loop */}
            {partnersRow2.map((partner, index) => (
              <PartnerLogo key={`row2-b-${index}`} partner={partner} />
            ))}
            {/* Third set for seamless loop */}
            {partnersRow2.map((partner, index) => (
              <PartnerLogo key={`row2-c-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
