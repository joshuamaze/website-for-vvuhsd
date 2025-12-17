import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Lightbulb, FileText, Search, UserCheck, Skull, Copy, VenetianMask, EyeOff, Calculator, Download } from 'lucide-react';

const StudentGuide: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-sans">
        
        {/* Header Section */}
        <div className="bg-blue-600 rounded-t-2xl p-6 text-center shadow-lg mx-auto max-w-4xl relative z-10 border-b-4 border-blue-800">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wide uppercase">
                AI Ethical Use: Student Guide
            </h1>
        </div>
        <div className="bg-white max-w-4xl mx-auto p-6 text-center shadow-md mb-8 border-x border-b border-gray-200 rounded-b-xl">
             <p className="text-xl text-gray-800 font-medium">Level Up Your Learning with AI. Play Smart, Don't Cheat.</p>
        </div>

        {/* Resources & Downloads Section - MOVED TO TOP */}
        <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-4 uppercase tracking-tight">Classroom Resources</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Download these posters to set clear expectations and standards for AI use in your classroom.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
                
                {/* Teacher Policy Guide */}
                <div className="flex flex-col items-center group">
                    <a 
                        href="https://drive.google.com/file/d/1q7ZLXz_B1QVr0CbWnGNUvZt8lzxNnDlD/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shadow-xl border border-gray-200 mb-6 transition-all transform group-hover:-translate-y-2 group-hover:shadow-2xl block"
                    >
                         <img 
                            src="https://drive.google.com/thumbnail?id=1q7ZLXz_B1QVr0CbWnGNUvZt8lzxNnDlD&sz=w1000" 
                            alt="Teacher AI Policy & Expectations Guide" 
                            className="w-full h-full object-contain bg-white"
                         />
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1q7ZLXz_B1QVr0CbWnGNUvZt8lzxNnDlD/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors"
                    >
                        <Download className="mr-2 h-5 w-5 text-indigo-600" />
                        Download Teacher Guide
                    </a>
                </div>

                {/* Student Checklist */}
                <div className="flex flex-col items-center group">
                    <a 
                        href="https://drive.google.com/file/d/1x-ygYvKLprseRXqvQEs7VJelB4DDRU-9/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden shadow-xl border border-gray-200 mb-6 transition-all transform group-hover:-translate-y-2 group-hover:shadow-2xl block"
                    >
                         <img 
                            src="https://drive.google.com/thumbnail?id=1x-ygYvKLprseRXqvQEs7VJelB4DDRU-9&sz=w1000" 
                            alt="Student AI Use Checklist" 
                            className="w-full h-full object-contain bg-white"
                         />
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1x-ygYvKLprseRXqvQEs7VJelB4DDRU-9/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors"
                    >
                        <Download className="mr-2 h-5 w-5 text-indigo-600" />
                        Download Student Checklist
                    </a>
                </div>

            </div>
            
            <p className="text-center mt-8 text-xs text-gray-400">
                Preview images are generated from Google Drive. If they do not appear, please use the download button to view the file directly.
            </p>
        </div>

        <div className="w-full border-t border-gray-200 mb-16"></div>

        {/* The Pilot (Green) Section */}
        <div className="mb-10 max-w-5xl mx-auto">
            <div className="bg-green-700 text-white p-4 rounded-t-xl text-center border-b-4 border-green-800">
                <h2 className="text-2xl font-bold uppercase">The Pilot Approach (Recommended Strategy)</h2>
            </div>
            <div className="bg-white border-x-2 border-b-2 border-green-200 rounded-b-xl p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    
                    <div className="text-center p-4">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4 border-2 border-blue-200">
                            <Lightbulb size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg uppercase leading-tight mb-2">Power-Up:<br/>Idea Generator</h3>
                        <p className="text-sm text-gray-700 leading-snug">
                            Use AI for topic ideas & questions. <span className="font-bold">YOU</span> pick the best one.
                        </p>
                    </div>

                    <div className="text-center p-4">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4 border-2 border-orange-200">
                            <FileText size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg uppercase leading-tight mb-2">Blueprint<br/>Mode</h3>
                        <p className="text-sm text-gray-700 leading-snug">
                            Get a structure for your project. <span className="font-bold">YOU</span> build the content.
                        </p>
                    </div>

                    <div className="text-center p-4">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4 border-2 border-blue-200">
                            <Search size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg uppercase leading-tight mb-2">Level-Up<br/>Editing</h3>
                        <p className="text-sm text-gray-700 leading-snug">
                            Paste <span className="font-bold">YOUR</span> work for checks. <span className="font-bold">YOU</span> make the final call.
                        </p>
                    </div>

                    <div className="text-center p-4">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4 border-2 border-orange-200">
                            <UserCheck size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg uppercase leading-tight mb-2">Co-Op Mode<br/>(Tutoring)</h3>
                        <p className="text-sm text-gray-700 leading-snug">
                            Ask for explanations. <span className="font-bold">YOU</span> understand the concept.
                        </p>
                    </div>

                </div>
            </div>
        </div>

        {/* The Autopilot (Yellow/Orange) Section */}
        <div className="mb-10 max-w-5xl mx-auto">
            <div className="bg-amber-400 text-gray-900 p-4 rounded-t-xl text-center border-b-4 border-amber-500">
                <h2 className="text-2xl font-bold uppercase">The Autopilot Approach (Incorrect Usage)</h2>
            </div>
            <div className="bg-white border-x-2 border-b-2 border-amber-200 rounded-b-xl p-6 shadow-sm">
                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    
                    <div className="text-center p-4">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white text-red-600 mb-4 border-2 border-gray-200 shadow-sm relative">
                            <FileText size={32} />
                            <div className="absolute -bottom-1 -right-1 bg-red-600 rounded-full p-0.5 border-2 border-white">
                                <XCircle size={16} className="text-white" />
                            </div>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg uppercase leading-tight mb-2">Auto-Fail:<br/>Copy-Paste</h3>
                        <p className="text-sm text-gray-700 leading-snug">
                            Letting AI write your essay. That's not your work.
                        </p>
                    </div>

                    <div className="text-center p-4">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white text-red-600 mb-4 border-2 border-gray-200 shadow-sm">
                            <VenetianMask size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg uppercase leading-tight mb-2">Identity<br/>Theft</h3>
                        <p className="text-sm text-gray-700 leading-snug">
                            Submitting AI text as yours. Major penalty.
                        </p>
                    </div>

                    <div className="text-center p-4">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white text-red-600 mb-4 border-2 border-gray-200 shadow-sm">
                            <EyeOff size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg uppercase leading-tight mb-2">Buggy Intel<br/>(Blind Trust)</h3>
                        <p className="text-sm text-gray-700 leading-snug">
                            Believing AI without checking. It hallucinates!
                        </p>
                    </div>

                    <div className="text-center p-4">
                        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white text-red-600 mb-4 border-2 border-gray-200 shadow-sm relative">
                            <Calculator size={32} />
                            <div className="absolute -bottom-1 -right-1 bg-gray-900 rounded-full p-0.5 border-2 border-white">
                                <Skull size={16} className="text-white" />
                            </div>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg uppercase leading-tight mb-2">Skill Drain<br/>(Bypassing)</h3>
                        <p className="text-sm text-gray-700 leading-snug">
                            Using AI to solve problems you don't get. No XP gained.
                        </p>
                    </div>

                </div>
            </div>
        </div>

        {/* Ethical Mastery Checklist (Blue) Section */}
        <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-blue-700 text-white p-4 rounded-t-xl text-center border-b-4 border-blue-900">
                <h2 className="text-2xl font-bold uppercase">Ethical Mastery Checklist</h2>
            </div>
            <div className="bg-white border-x-2 border-b-2 border-blue-200 rounded-b-xl p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="flex flex-col items-center text-center">
                         <div className="h-16 w-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                             <FileText size={40} />
                         </div>
                         <div className="flex items-start">
                             <input type="checkbox" className="mt-1 h-6 w-6 text-blue-600 rounded border-gray-300" checked readOnly />
                             <p className="ml-3 text-left text-gray-800">
                                <span className="font-bold block text-lg">CREDIT THE ASSIST:</span> 
                                Cite when you use AI tools.
                             </p>
                         </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                         <div className="h-16 w-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                             <UserCheck size={40} />
                         </div>
                         <div className="flex items-start">
                             <input type="checkbox" className="mt-1 h-6 w-6 text-blue-600 rounded border-gray-300" checked readOnly />
                             <p className="ml-3 text-left text-gray-800">
                                <span className="font-bold block text-lg">VERIFY FACTS:</span> 
                                Check AI info for accuracy.
                             </p>
                         </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                         <div className="h-16 w-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                             <Lightbulb size={40} />
                         </div>
                         <div className="flex items-start">
                             <input type="checkbox" className="mt-1 h-6 w-6 text-blue-600 rounded border-gray-300" checked readOnly />
                             <p className="ml-3 text-left text-gray-800">
                                <span className="font-bold block text-lg">OWN YOUR LEARNING:</span> 
                                Be ready to explain your work.
                             </p>
                         </div>
                    </div>

                </div>
            </div>
            
            <div className="text-center mt-8">
                 <p className="text-xl font-bold text-gray-900">The Ultimate Goal: YOU become the master, AI is just the tool.</p>
            </div>
        </div>
    </div>
  );
};

export default StudentGuide;