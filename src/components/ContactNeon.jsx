import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";

export function ContactNeon() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending (replace with your sending logic)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@byte.ma",
      link: "mailto:contact@byte.ma"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+212 6 57 17 24 26",
      link: "https://wa.me/212657172426?text=Hello%20Byte!%20I'm%20interested%20in%20your%20services."
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Marrakech, Morocco",
      link: null
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-black text-white overflow-hidden py-32">
      {/* Premium animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbiting circles background */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/5 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        />

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-b from-red-500/8 via-red-500/0 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-t from-red-600/6 via-red-600/0 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <div className="flex items-end gap-6 mb-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-[#ff1a1a]" style={{textShadow: '0 0 28px rgba(255,26,26,0.6), 0 0 60px rgba(255,26,26,0.35)'}}>
              CONTACT US
            </h2>
            <motion.div
              className="h-px bg-gradient-to-r from-red-500 to-transparent flex-1 mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            />
          </div>
          <p className="text-lg text-gray-400 max-w-2xl font-light tracking-wide">
            Ready to transform your ideas into digital reality? Let's start a conversation.
          </p>
        </motion.div>

        {/* Main Content Container */}
        <motion.div
          className="relative rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-500/5 via-black to-black p-8 md:p-12 mb-16 overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          {/* Top gradient line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false }}
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-400 leading-relaxed">
                  We're here to help bring your vision to life. Reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 8 }}
                    className="group/item relative"
                  >
                    <div className="relative flex items-center gap-5 p-5 bg-black/30 border border-red-500/20 rounded-xl group-hover/item:border-red-500/50 group-hover/item:bg-black/50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-600/20 to-red-800/20 border border-red-500/30 group-hover/item:shadow-[0_0_20px_rgba(255,26,26,0.3)] transition-all duration-300">
                        <info.icon className="w-6 h-6 text-red-500" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                          {info.title}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white font-medium hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group/link"
                          >
                            <span className="truncate">{info.value}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />
                          </a>
                        ) : (
                          <p className="text-white font-medium truncate">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Us Box */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: false }}
                className="p-6 bg-gradient-to-br from-red-600/10 via-black to-black border border-red-500/20 rounded-xl"
              >
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-red-500 rounded-full"></div>
                  Why Choose Byte?
                </h4>
                <ul className="space-y-3">
                  {[
                    "24h response time",
                    "Free project consultation",
                    "Personalized approach",
                    "Cutting-edge solutions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-black/60 transition-all duration-300"
                      
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-black/60 transition-all duration-300"
                     
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-black/60 transition-all duration-300"
                      placeholder="+212 XXX-XXXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-black/60 transition-all duration-300"
                      placeholder="Project inquiry"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/40 border border-red-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-black/60 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                  className="group w-full relative px-8 py-4 font-bold text-white border-2 border-red-500 rounded-xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(255,26,26,0.4)]"
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/5 group-hover:from-red-600/40 group-hover:to-red-500/20 transition-all duration-300" />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />

                  {/* Content */}
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                  >
                    <p className="text-red-400 text-center text-sm">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
