"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Define props interface
interface PrivacyPolicyProps {
  sectionVariants?: Variants; // Optional variants for the main section
}

// PrivacyPolicy component with explicit React.FC typing
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ sectionVariants }) => {
  // Animation for policy sections on hover
  const policySectionVariants: Variants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Default section variants if none provided
  const defaultSectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const sections = [
    {
      title: "Introduction",
      content:
        "We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data.",
    },
    {
      title: "Information We Collect",
      content:
        "We may collect personal information such as your name, email address, and IP address details when you interact with our platform. We also collect non-personal information like browser type, operating system, and usage data to improve our services.",
    },
    // Add more sections as needed
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants || defaultSectionVariants} // Use provided variants or fallback
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Our Privacy Policy
        </h2>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileHover="hover"
            variants={policySectionVariants}
            className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200"
          >
            <h3
              className="text-2xl font-semibold text-gray-800 mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {section.title}
            </h3>
            <p
              className="text-gray-600 text-lg"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              {section.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;