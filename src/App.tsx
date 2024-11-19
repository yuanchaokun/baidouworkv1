import { Github, Mail, Terminal } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Header */}
      <header className="fixed w-full bg-[#1E293B]/80 backdrop-blur-sm z-10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-[#38BDF8]" />
            <span className="font-bold text-xl">baidou.work</span>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => setActiveSection('projects')}
              className={`hover:text-[#38BDF8] transition ${activeSection === 'projects' ? 'text-[#38BDF8]' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setActiveSection('about')}
              className={`hover:text-[#38BDF8] transition ${activeSection === 'about' ? 'text-[#38BDF8]' : ''}`}
            >
              About
            </button>
            <a href="mailto:contact@baidou.work" className="hover:text-[#38BDF8] transition">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Building the future with
            <span className="text-[#38BDF8]"> code</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Full-stack developer specializing in creating innovative web solutions
            and digital experiences.
          </p>
          <div className="flex space-x-4 mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#38BDF8] transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:contact@baidou.work" className="p-2 hover:text-[#38BDF8] transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-20 px-4 bg-[#1E293B]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((project) => (
                <div key={project} className="bg-[#0F172A] rounded-lg p-6 hover:transform hover:-translate-y-1 transition duration-300">
                  <img 
                    src={`https://source.unsplash.com/random/800x600?technology&sig=${project}`}
                    alt="Project preview"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-400 mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-[#38BDF8]/10 text-[#38BDF8] rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-[#38BDF8]/10 text-[#38BDF8] rounded-full text-sm">
                      TypeScript
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-20 px-4 bg-[#1E293B]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://source.unsplash.com/random/400x600?portrait"
                  alt="Profile"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  I'm a passionate developer with expertise in modern web technologies.
                  My journey in software development started with a curiosity about
                  how things work on the internet, and it has evolved into a
                  professional career building solutions that make a difference.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-[#38BDF8]/10 text-[#38BDF8] rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#0F172A] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 baidou.work. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;