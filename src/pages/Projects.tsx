import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Amazon Clone',
    description: 'A fully responsive e-commerce web application designed to replicate the core functionalities of Amazon. This project showcases my expertise in front-end, product browsing, a dynamic shopping cart.',
    image: '../Amazon.com.png',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Muneeb759/Amazon-clone',
    live: 'https://muneeb759.github.io/Amazon-clone/',

  },
  {
    title: 'Github-Finder',
    description: 'The most expanded application I had opportunity to work with. I have learned many technologies and my code was reviewed by awesome curator. ',
    image: 'https://my-react-portfolio-application.surge.sh/images/portfolio/p1.png',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Muneeb759/Github-Finder',
    live: 'https://muneeb759.github.io/Github-Finder/'
  },
  {
    title: 'Movie-App',
    description: 'Welcome to our MovieApp! Powered by React.js, this platform showcases the latest films using real-time data from popular movie APIs. Explore, discover, and enjoy! :)',
    image: 'https://my-react-portfolio-application.surge.sh/images/portfolio/p5.png',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Muneeb759/MovieApp',
    live: 'https://github.com/Muneeb759/MovieApp'
  },
  {
    title: 'NewsBara',
    description: 'NewsBara" is a dynamic news react-website that keeps you updated with the latest events and stories from around the world.',
    image: '../NewsBara.png',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/Muneeb759/NewsBara',
    live: 'https://muneeb759.github.io/NewsBara/'
  }
];

function Projects() {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">My Projects</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 animate-slide-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;