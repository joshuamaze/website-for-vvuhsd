import React from 'react';
import { ExternalLink, Sparkles, BookOpen, GraduationCap, LayoutGrid } from 'lucide-react';

const GeminiPlanner: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Section 1: Google Classroom AI */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-display font-bold text-gray-900">Google Classroom AI</h2>
        <p className="mt-2 text-gray-600">Explore the official generative AI features integrated directly into Google Workspace for Education.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100 mb-20">
        <div className="bg-indigo-600 p-8 text-white text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full text-white mb-4">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Classroom + AI</h3>
            <p className="text-indigo-100 max-w-2xl mx-auto">
              Unlock new ways to teach and learn with generative AI tools designed to save time and personalize education.
            </p>
        </div>

        <div className="p-8 md:p-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-left">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 flex items-center mb-2">
                        <BookOpen className="h-4 w-4 mr-2 text-indigo-600" /> Lesson Planning
                    </h4>
                    <p className="text-sm text-gray-600">Get ideas and structure for your next class using Gemini in Classroom.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 flex items-center mb-2">
                         <GraduationCap className="h-4 w-4 mr-2 text-indigo-600" /> Student Support
                    </h4>
                    <p className="text-sm text-gray-600">Personalize content and provide real-time guided practice.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 flex items-center mb-2">
                         <Sparkles className="h-4 w-4 mr-2 text-indigo-600" /> Auto-Grading
                    </h4>
                    <p className="text-sm text-gray-600">Use Practice Sets with AI-assisted insights and grading.</p>
                </div>
            </div>

            <a 
                href="https://classroom.google.com/ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
                Visit Google Classroom AI
                <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            
            <p className="mt-6 text-sm text-gray-500">
                You will be redirected to the official Google Classroom AI hub.
            </p>
        </div>
      </div>

      {/* Section 2: District AI Apps Portal Embed */}
      <div className="border-t border-gray-200 pt-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full text-teal-700 mb-4">
              <LayoutGrid className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-display font-bold text-gray-900">District AI Apps Portal</h2>
          <p className="mt-2 text-gray-600">Access the curated list of AI applications via the VVUHSD portal.</p>
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
        <p className="text-center mt-4 text-xs text-gray-400">
            Note: If the content above does not appear, please ensure your browser allows embedded content or use the "Open in New Tab" button.
        </p>
      </div>

    </div>
  );
};

export default GeminiPlanner;