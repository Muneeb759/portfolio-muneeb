import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import ProfilePicture from '../components/ProfilePicture';

function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center justify-between gap-12 py-12 animate-fade-in">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 animate-slide-up">
          Muhammad Muneeb
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up delay-200">
        A student, currently working as a SAP - Business One Consultant and have a keen interest in React.js & Data Science.
        </p>
        
        <div className="flex justify-center lg:justify-start space-x-6 mb-8 animate-slide-up delay-200">
          <a
            href="https://github.com/Muneeb759"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transform hover:scale-110 transition-all"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-muneeb19/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transform hover:scale-110 transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:muneebameer2004@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transform hover:scale-110 transition-all"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up delay-300">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="flex-1 max-w-md animate-slide-up delay-400">
        <ProfilePicture imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" />
      </div>
    </div>
  );
}

export default Home;