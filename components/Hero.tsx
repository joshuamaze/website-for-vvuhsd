import React from 'react';
import { TabView } from '../types.ts';
import { ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

interface HeroProps {
  setTab: (tab: TabView) => void;
}

const Hero: React.FC<HeroProps> = ({ setTab }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-10">
         <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-gray-900 mb-6">
            Equipping Students for a <br />
            <span className="gradient-text">Future with AI</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Moving from "Autopilot" to "Pilot". A comprehensive guide for teachers to foster ethical, equitable, and proficient AI usage in the classroom.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button
              onClick={() => setTab(TabView.PILLARS)}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-pilot-blue hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Explore the 3 Pillars
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => setTab(TabView.TOOLS)}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-200 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              Access Teacher Tools
            </button>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative pt-[56.25%] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-gray-900">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/5VJj9hkUQe4" 
                title="AI in Education Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
                <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                    <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Safety First</h3>
                <p className="text-gray-600 text-sm mt-2">Ethical use, transparency, and understanding bias are the foundation.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 text-center">
                <div className="mx-auto bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-amber-600">
                    <Users size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Equality & Access</h3>
                <p className="text-gray-600 text-sm mt-2">Bridging the digital divide so every student has the same opportunity.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center">
                <div className="mx-auto bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-purple-600">
                    <Zap size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Proficiency</h3>
                <p className="text-gray-600 text-sm mt-2">Developing the "Pilot Mindset" to use AI as a thought partner, not a crutch.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;