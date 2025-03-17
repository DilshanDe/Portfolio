import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Send,
  MessageSquare,
  User,
  AtSign,
  Phone,
  MapPinned,
} from "lucide-react";
import { CONTACT } from "../assets/constants/index";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
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
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setFormData({ from_name: "", from_email: "", message: "" });
    }
  }

  return (
    <div id="contacts" className="relative min-h-screen p-2 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-8">
        <div className="space-y-8 p-8">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-red-500/30  rounded-full blur-xl" />
            <motion.h1
              initial={{ scale: 0.6 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-red-500 mb-4"
            >
              Contact me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-zinc-400 leading-relaxed"
            >
              Let's talk about your problem.
            </motion.p>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex items-center space-x-4 text-zinc-400 hover:text-red-400 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50">
                <Mail className="h-5 w-5" />
              </div>
              <a href={CONTACT.email} className="text-lg">
                {CONTACT.email}
              </a>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex items-center space-x-4 text-zinc-400 hover:text-red-400 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-lg">{CONTACT.phoneNo}</span>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex items-center space-x-4 text-zinc-400 hover:text-red-400 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50">
                <MapPinned className="h-5 w-5" />
              </div>
              <span className="text-lg">{CONTACT.address}</span>
            </motion.div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800 via-gray-600 to-pink-900 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="relative p-8 bg-zinc-900 rounded-2xl border border-zinc-800/50 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gray-400 to-pink-700 mb-6">
              Send me a message
            </h3>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 text-zinc-100 placeholder-zinc-500"
                />
              </div>

              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 text-zinc-100 placeholder-zinc-500"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message*"
                  required
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 text-zinc-100 placeholder-zinc-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 via-gray-700 to-pink-950 hover:from-red-800 hover:via-gray-800 hover:to-pink-950 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
