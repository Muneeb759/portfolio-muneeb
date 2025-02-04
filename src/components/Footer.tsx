import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a
            href="https://github.com/Muneeb759"
            target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
            href="https://www.linkedin.com/in/muhammad-muneeb19/"
            target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
            href="mailto:muneebameer2004@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail size={20} />
            </a>
            <a
            href="https://www.instagram.com/m_muneeb._/"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Mohammad Muneeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer