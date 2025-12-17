import React from 'react';
import { ExternalLink, Sparkles, BookOpen, GraduationCap, LayoutGrid, FolderOpen, Award } from 'lucide-react';

const Tools: React.FC = () => {
  const driveLink = "https://drive.google.com/drive/folders/1JwplS15rtJyk8Eq3BAV-0xvjuhjBD1id?usp=sharing";
  const certificationsLink = "https://edu.google.com/intl/ALL_us/learning-center/certifications/";

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold text-gray-900">AI Teacher Tools & Resources</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to implement, guide, and utilize AI in your classroom effectively.</p>
      </div>

      {/* Section 1: Teacher's Toolkit (Drive Access) */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
            <FolderOpen size={24} />
          </div>
          <h3 className="text-2xl font-display font-bold text-gray-900">Digital Toolkit</h3>
        </div>
        
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
          
          <div className="mb-6 md:mb-0 md:mr-6 relative z-10">
            <h4 className="text-xl font-bold text-indigo-900 mb-2">Access the Official Resource Drive</h4>
            <p className="text-indigo-700">Get direct access to all original files, high-resolution posters, handouts, and curriculum documents.</p>
          </div>
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all relative z-10"
          >
            <FolderOpen className="mr-2 h-5 w-5" />
            Open Google Drive
            <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
          </a>
        </div>
      </div>

      {/* Section 2: External Platforms Grid */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Google Classroom AI */}
           <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 text-center flex flex-col h-full">
              <Sparkles className="mx-auto text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Google Classroom AI</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">Explore official generative AI features built into Workspace for Education.</p>
              <a href="https://classroom.google.com/ai" target="_blank" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg transition-colors hover:bg-blue-700">Explore Classroom AI</a>
           </div>

           {/* Google Certifications */}
           <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 text-center flex flex-col h-full">
              <Award className="mx-auto text-purple-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Educator Certifications</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">Get certified and lead the way in using Google tools and AI in the classroom.</p>
              <a href={certificationsLink} target="_blank" className="inline-block px-6 py-3 bg-purple-600 text-white font-bold rounded-lg transition-colors hover:bg-purple-700">View Certifications</a>
           </div>

           {/* District Portal */}
           <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-100 text-center flex flex-col h-full">
              <LayoutGrid className="mx-auto text-teal-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">District Apps Portal</h3>
              <p className="text-gray-600 mb-6 flex-grow text-sm">Access the curated list of approved VVUHSD AI applications.</p>
              <a href="http://aiapps.vvuhsd.org/" target="_blank" className="inline-block px-6 py-3 bg-teal-600 text-white font-bold rounded-lg transition-colors hover:bg-teal-700">Open Portal</a>
           </div>
        </div>
      </div>

      {/* Section 3: District AI Apps Portal Embed */}
      <div className="border-t border-gray-200 pt-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-teal-100 rounded-lg text-teal-700">
            <LayoutGrid size={24} />
          </div>
          <h3 className="text-2xl font-display font-bold text-gray-900">District Portal Live View</h3>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
           <div className="w-full h-[800px] relative bg-gray-50">
             <iframe 
               src="http://aiapps.vvuhsd.org/" 
               className="w-full h-full border-0"
               title="District AI Apps"
               sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
             ></iframe>
              <div className="absolute bottom-4 right-4">
                  <a 
                    href="http://aiapps.vvuhsd.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Open in New Tab <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
              </div>
           </div>
        </div>
        <p className="text-center mt-4 text-xs text-gray-400 italic">
            Note: If the content above does not appear, your browser may be blocking embedded content. Use the "Open in New Tab" button.
        </p>
      </div>

    </div>
  );
};

export default Tools;