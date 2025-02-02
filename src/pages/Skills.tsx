
const skills = {
    '': [
      { name: 'React', level: 90 },
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Python', level: 75 },
      { name: 'Linux (ubuntu)', level: 90 },
      { name: 'AWS', level: 79 },
      { name: 'Jenkins', level: 68 },
      { name: 'Docker', level: 61 },
      { name: 'WordPess', level: 71 },
      { name: 'Terraform', level: 78 },
      { name: 'MSSQL', level: 74 },
      { name: 'Git/Github', level: 85 },
      { name: 'BitBucket', level: 88 },
      { name: 'JIRA', level: 70 },
      { name: 'SAP - Business One', level: 69 },
      { name: 'Crystal Reports', level: 75 },
      { name: '.Net', level: 56 },
      { name: 'C#', level: 68 },
      { name: 'Data Analytics', level: 70 },
    ],
};

function Skills() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Skills</h1>
      
      <div className="space-y-12">
        {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
          <div key={category} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{category}</h2>
            
            <div className="space-y-4">
              {categorySkills.map((skill, skillIndex) => (
                <div key={skill.name} className="animate-slide-up" style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms` }}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, transform: 'translateX(-100%)', animation: 'slideRight 1s forwards' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Add your certifications here */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              AWS Certified Solution Architect
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Amazon Web Services</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Issued: January 2025</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Google Certified Advanced Data Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Amazon Web Services</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Issued: October 2024</p>
          </div>
          {/* Add more certifications as needed */}
        </div>
      </div>
    </div>
  );
}

export default Skills;