
const experiences = [
  {
    company: 'Supernova Solutions Pvt. Limited',
    position: 'SAP - Business One Consultant',
    period: 'Oct 2024 - Present',
    description: [
      'Handled Functional and Technical problems of SAP Business One',
      'Developed and maintained multiple client-facing Add-ons',
      'Hands on experience in SQL queries and stored procedures',
    ],
  },
  {
    company: 'TexNexx',
    position: 'Front-End Developer',
    period: 'Apr 2024 - Aug 2024',
    description: [
      'Developed user-facing features using React.js',
      'Optimized application for maximum speed and scalability',
      'Collaborated with back-end developers and web designers to improve usability',
    ],
  },
  {
    company: 'Techrotics Technologies Lab',
    position: 'React.js Developer',
    period: 'Feb 2024 - Mar 2024',
    description: [
      'Developed an e-commerce platform using React.js',
      'Implemented responsive design for mobile and desktop',
      'Worked with the UX team to design and develop new features',
    ],
  },
  
  // Add more experiences as needed
];

function Experience() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Experience</h1>
      
      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-12 relative animate-slide-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-10 top-1.5 border-2 border-white dark:border-gray-900"></div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                {exp.position}
              </h3>
              
              <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                {exp.company}
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {exp.period}
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="animate-slide-up" style={{ animationDelay: `${(index * 3 + itemIndex) * 100 + 200}ms` }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 animate-slide-up" style={{ animationDelay: '800ms' }}>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Education</h2>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
            Bachelor of Science in Computer Science
          </h3>
          <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            Dawood University Of Engineering & Technology
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            2022 - Present
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
            Pre-Engineering
          </h3>
          <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
            Govt. Islamia Science College
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            2020 - 2022
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;