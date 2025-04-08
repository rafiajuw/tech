"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  // Define the background image (place it in public/images/)
  const backgroundImage = '/images/haxagon.jpg'; // Replace with your preferred image

  // Animation variants for the background image (zoom effect)
  const bgVariants = {
    initial: { scale: 1 },
    animate: {
      scale: 1.2, // Zooms in
      transition: {
        duration: 10, // Slow zoom over 10 seconds
        ease: "easeInOut",
        repeat: Infinity, // Loops indefinitely
        repeatType: "reverse", // Zooms in and out
      },
    },
  };

  // Animation variants for text and button
  const textVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const buttonVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Button hover effect
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div
        variants={bgVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0"
      >
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority // Preload for instant display
          quality={80} // Balance quality and performance
        />
      </motion.div>

      {/* Overlay with Gradient for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10 flex flex-col items-center justify-center text-white">
        {/* Animated Heading */}
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-6xl font-bold mb-4 text-center px-4 drop-shadow-lg"
        >
          WHERE CONNECTIVITY MEETS POSSIBILITY
        </motion.h1>

        {/* Animated Subtext */}
        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }} // Slight delay for stagger effect
          className="text-lg md:text-xl mb-6 text-center px-4 drop-shadow-md"
        >
          Trusted by professionals, chosen for reliability — your IPv4 brokerage partner.
        </motion.p>

        {/* Animated Button */}
        <Link href="/contactus">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover" // Hover effect
            className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </section>
  );
}