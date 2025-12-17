import React from 'react';
import { FolderOpen, ExternalLink } from 'lucide-react';

const Resources: React.FC = () => {
  const driveLink = "https://drive.google.com/drive/folders/1JwplS15rtJyk8Eq3BAV-0xvjuhjBD1id?usp=sharing";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-gray-900">Teacher's Toolkit</h2>
        <p className="mt-2 text-lg text-gray-600">Access visual aids, handouts, and presentation materials from the resource drive.</p>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
        
        <div className="mb-6 md:mb-0 md:mr-6 relative z-10">
          <h3 className="text-xl font-bold text-indigo-900 mb-2">Access the Full Digital Drive</h3>
          <p className="text-indigo-700">Get direct access to all original files, high-resolution posters, and curriculum documents in the official Google Drive repository.</p>
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

      <div className="bg-white rounded-xl border border-dashed border-gray-300 p-12 text-center">
        <p className="text-gray-500 italic">More specific classroom resources and lesson templates are updated periodically in the shared drive link above.</p>
      </div>
    </div>
  );
};

export default Resources;