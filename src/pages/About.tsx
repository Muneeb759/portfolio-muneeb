import ProfilePicture from '../components/ProfilePicture';

function About() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Me</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="animate-slide-up">
          <ProfilePicture imageUrl="" />
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">
          I’m an undergraduate Computer Science student with a passion for technology and innovation. Currently, I work as an SAP Business One Consultant at Supernova Solutions, 
          where I combine my technical expertise with business acumen to deliver impactful solutions. 
          My academic background in Computer Science has fueled my keen interest in Data Science, Machine Learning, SAP, and Software Development.
          </p>

          <p className="text-gray-600 dark:text-gray-300">
          I have hands-on experience with React.js, AWS, and SAP Business One, which has allowed me to build robust, scalable, and user-friendly applications. 
          My profile reflects my eagerness to connect with like-minded professionals, mentors, and collaborators who share my enthusiasm for Web Development, Front-End Technologies, and Data Science.
          </p>
          
          <p className="text-gray-600 dark:text-gray-300">
          When I’m not coding, you’ll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts. 
          I’m always excited to learn, grow, and make meaningful contributions to the tech community. Let’s connect and create something amazing together!
          New chat</p>
          
          <div className="pt-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Quick Facts</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>SAP - Business One Consultant </li>
              <li>React.js Developer with 1 years of experience</li>
              <li>Based in Karachi, Sindh</li>
              <li>Problem Solver</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;


