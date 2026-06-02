"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    id: 1,
    icon: "📧",
    label: "Email",
    value: "sriramadithya6@gmail.com",
    href: "mailto:sriramadithya9@gmail.com",
    type: "link",
  },
  {
    id: 2,
    icon: "📍",
    label: "Location",
    value: "Hyderabad, India",
    href: "#",
    type: "text",
  },
  {
    id: 3,
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/sriram-adithya",
    href: "https://linkedin.com/in/sriram-adithya/",
    type: "link",
  },
  {
    id: 4,
    icon: "💻",
    label: "GitHub",
    value: "github.com/Sriram-Adithya96",
    href: "https://github.com/Sriram-Adithya96",
    type: "link",
  },
];

const socialLinks = [
  {
    id: 1,
    icon: "🐙",
    label: "GitHub",
    href: "https://github.com/Sriram-Adithya96",
    color: "hover:text-slate-800",
  },
  {
    id: 2,
    icon: "🔗",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sriram-adithya/",
    color: "hover:text-blue-600",
  },
  {
    id: 3,
    icon: "✉️",
    label: "Email",
    href: "mailto:sriram.adithya@example.com",
    color: "hover:text-purple-600",
  },
];

// Contact Info Card Component
function ContactInfoCard({ contact }: { contact: (typeof contactInfo)[0] }) {
  return (
    <motion.a
      href={contact.href}
      target={contact.type === "link" ? "_blank" : undefined}
      rel={contact.type === "link" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="group relative overflow-hidden rounded-[20px] border border-white/40 bg-white/80 backdrop-blur-md p-6 md:p-7 transition cursor-pointer"
    >
      {/* Purple glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 -z-10 rounded-[20px] bg-gradient-to-br from-purple-300/30 via-violet-300/20 to-indigo-300/10 blur-xl"
      />

      <div className="flex items-start gap-4">
        {/* Icon with background */}
        <div className="flex-shrink-0 w-14 h-14 rounded-[12px] bg-gradient-to-br from-purple-100/80 to-violet-100/60 flex items-center justify-center border border-purple-200/40 group-hover:shadow-lg transition duration-200">
          <span className="text-2xl group-hover:scale-110 transition duration-200">
            {contact.icon}
          </span>
        </div>
        
        {/* Text content */}
        <div className="flex-1 min-w-0 pt-0.5">
          <p className="text-xs text-purple-600 font-semibold uppercase tracking-wider">
            {contact.label}
          </p>
          <p className="text-sm font-medium text-slate-900 mt-2 group-hover:text-purple-600 transition break-words">
            {contact.value}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative overflow-hidden rounded-[24px] border border-white/40 bg-white/80 backdrop-blur-md p-8 md:p-9"
    >
      {/* Purple glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -inset-1 -z-10 rounded-[24px] bg-gradient-to-br from-purple-300/20 via-violet-300/10 to-indigo-300/5 blur-2xl"
      />

      {/* Form Fields */}
      <div className="space-y-5">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-3 rounded-[12px] bg-purple-50/50 border border-purple-200/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-200/50 transition"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="w-full px-4 py-3 rounded-[12px] bg-purple-50/50 border border-purple-200/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-200/50 transition"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            required
            className="w-full px-4 py-3 rounded-[12px] bg-purple-50/50 border border-purple-200/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-200/50 transition"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me more about your message..."
            rows={4}
            required
            className="w-full px-4 py-3 rounded-[12px] bg-purple-50/50 border border-purple-200/50 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-200/50 transition resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting || submitStatus === "success"}
        whileHover={!isSubmitting ? { y: -2 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        className="mt-6 w-full relative overflow-hidden rounded-[12px] bg-gradient-to-r from-purple-500 to-violet-600 px-6 py-3 font-semibold text-white transition disabled:opacity-75"
      >
        {/* Button glow on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-1 -z-10 rounded-[12px] bg-gradient-to-r from-purple-400/40 to-violet-500/40 blur-lg"
        />

        <motion.span
          initial={false}
          animate={
            isSubmitting
              ? { opacity: 0 }
              : submitStatus === "success"
                ? { opacity: 0 }
                : { opacity: 1 }
          }
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.span>

        {/* Loading animation */}
        {isSubmitting && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          </motion.span>
        )}

        {/* Success message */}
        {submitStatus === "success" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            ✓ Message sent!
          </motion.span>
        )}
      </motion.button>

      {/* Success notification */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={
          submitStatus === "success"
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 10 }
        }
        transition={{ duration: 0.3 }}
        className="mt-4 text-center text-sm text-green-600 font-medium"
      >
        {submitStatus === "success" &&
          "Thanks for reaching out! I'll get back to you soon."}
      </motion.div>
    </motion.form>
  );
}

// Social Links Component
function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="flex items-center justify-center gap-4 mt-8"
    >
      <p className="text-sm text-slate-600 font-medium">Follow me:</p>
      <div className="flex gap-3">
        {socialLinks.map((link) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`text-2xl transition-all ${link.color}`}
            title={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export function ContactSection() {
  return (
    <section className="relative mx-auto mt-16 w-[min(1200px,92vw)] overflow-hidden md:mt-20 pb-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 text-center md:mb-14"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
          Let's Connect
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          Let's Build Something Great Together
        </h2>
        <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing internships, projects, collaborations,
          and opportunities in web development, AI, and software engineering.
        </p>
      </motion.div>

      {/* Two-Column Layout - 40/60 split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[24px] border border-white/40 bg-white/80 backdrop-blur-md p-8 shadow-lg h-full lg:order-2"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Contact Information
            </h3>

            <p className="text-slate-600 mb-8">
              Feel free to reach out for internships, collaborations,
              freelance opportunities, or tech discussions.
            </p>

            <div className="space-y-6">
              {contactInfo.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  target={contact.type === "link" ? "_blank" : undefined}
                  rel={contact.type === "link" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center text-white text-lg shadow-md">
                    {contact.icon}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-purple-600 font-semibold">
                      {contact.label}
                    </p>

                    <p className="text-slate-800 font-medium group-hover:text-purple-600 transition">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200">
              <h4 className="text-sm font-semibold text-slate-700 mb-4">
                Follow Me
              </h4>

              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-purple-200 flex items-center justify-center text-xl hover:bg-purple-50 transition"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        {/* Right Side - Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>

    </section>
  );
}
