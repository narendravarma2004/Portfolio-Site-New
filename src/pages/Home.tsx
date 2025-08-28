import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center"
    >
      <div className="text-center">
        {/* Profile Image */}
        <div className="relative w-56 h-56 mx-auto mb-8">
          <img
            src="https://i.postimg.cc/y6j0ckGj/IMG-20230518-WA0011.jpg"
            alt="Narendra"
            className="rounded-full object-contain w-full h-full shadow-2xl p-2 bg-white"
          />
          <motion.div
            className="absolute inset-0 border-4 border-blue-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          Narendra Varma Kamparaju
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Full Stack Developer & App Developer
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center mb-8"
        >
          <Link
            to="/contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            Hire Me <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://drive.google.com/file/d/1v3sYeESvxma1PKWk_iGjS-qp6S6BQzEn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-600 text-white rounded-full flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            <FileText className="w-4 h-4" /> Resume
          </a>

          <Link
            to="/projects"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            View Projects
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-6 justify-center"
        >
          <a href="https://github.com/narendravarma2004" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/kamparajunarendravarma/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Twitter className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};