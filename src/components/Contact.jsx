import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  MessageSquare,
  User,
  AtSign,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { CONTACT } from "../assets/constants/index";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_zvn9fo2",
        "template_dlf2j2q",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        "J_zrKa24x-Oneu1iw"
      );
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setFormData({ from_name: "", from_email: "", message: "" });
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div id="contacts" className="relative min-h-screen p-4 flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-gray-900 to-red-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-full max-w-7xl grid lg:grid-cols-2 gap-12 z-10"
      >
        {/* Left Side - Contact Info */}
        <motion.div variants={itemVariants} className="space-y-8 p-8">
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-lg"
            />
            
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles className="h-8 w-8 text-red-400" />
              <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-pink-300">
                Let's Connect
              </h1>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed mb-2"
            >
              Ready to bring your ideas to life?
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Drop me a message and let's create something amazing together.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: Phone, label: "Phone", value: CONTACT.phoneNo, href: `tel:${CONTACT.phoneNo}` },
              { icon: MapPin, label: "Location", value: CONTACT.address, href: "#" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 group-hover:from-red-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-red-400 group-hover:text-red-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300">{item.label}</p>
                  <p className="text-lg font-medium text-white group-hover:text-red-200">{item.value}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-red-400 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div variants={itemVariants} className="relative group">
          {/* Animated Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-3xl blur-sm opacity-20 group-hover:opacity-30 transition duration-1000 animate-gradient-xy" />
          
          <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <h3 className="text-3xl font-bold text-white">
                Send Message
              </h3>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              {[
                { icon: User, name: "from_name", placeholder: "Your Name", type: "text" },
                { icon: AtSign, name: "from_email", placeholder: "your@email.com", type: "email" },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  variants={itemVariants}
                  className="relative group"
                >
                  <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/10"
                  />
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="relative group">
                <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder-gray-400 resize-none transition-all duration-300 hover:bg-white/10"
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </motion.div>
                    ) : isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-5 w-5" />
                        Message Sent!
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Send Message
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-size: 400% 400%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
    </div>
  );
}