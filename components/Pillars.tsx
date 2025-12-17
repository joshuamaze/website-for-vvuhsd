import React from 'react';
import { Lock, BookOpen, MessageSquare, HandHeart, Scale, Users, Brain, Lightbulb, Timer, GraduationCap, School } from 'lucide-react';

const Pillars: React.FC = () => {
  const teacherInfographicUrl = "https://drive.google.com/thumbnail?id=1iMZAtETmezwwOlm9rQdD-Y0lGpvGhedg&sz=w1200";
  const studentInfographicUrl = "https://drive.google.com/thumbnail?id=10N5NxD9Mc_6aWbB5WcUtB4yltRuy2YHh&sz=w1200";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">The 3 Pillars for Success</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">Equipping both teachers and students with skills for a future where AI is a standard professional tool.</p>
      </div>

      {/* Infographics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        
        {/* Teacher Version */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <School className="text-pilot-blue h-6 w-6" />
            <h3 className="text-2xl font-display font-bold text-gray-800 uppercase tracking-tight">Educator Framework</h3>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src={teacherInfographicUrl} 
                alt="The 3 Pillars of AI Integration: Educator Overview" 
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-3 right-3">
                <a 
                  href="https://drive.google.com/file/d/1iMZAtETmezwwOlm9rQdD-Y0lGpvGhedg/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700 shadow-sm border border-gray-200 hover:bg-white transition-colors"
                >
                  View High Res ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Student Version */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <GraduationCap className="text-pilot-purple h-6 w-6" />
            <h3 className="text-2xl font-display font-bold text-gray-800 uppercase tracking-tight">Student Guide</h3>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src={studentInfographicUrl} 
                alt="The 3 Pillars of AI Integration: Student Edition" 
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-3 right-3">
                <a 
                  href="https://drive.google.com/file/d/10N5NxD9Mc_6aWbB5WcUtB4yltRuy2YHh/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-700 shadow-sm border border-gray-200 hover:bg-white transition-colors"
                >
                  View High Res ↗
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        
        {/* Pillar 1: Safety */}
        <div className="bg-white rounded-2xl shadow-xl border-t-8 border-blue-500 overflow-hidden flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
          <div className="bg-blue-50 p-6 text-center border-b border-blue-100">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-3">
              <Lock className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1. SAFETY</h3>
            <p className="text-sm font-medium text-blue-700 uppercase tracking-wide">Ethical Use & Transparency</p>
          </div>
          <div className="p-6 flex-1">
            <ul className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Lock size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Clear Ethical Use Policy</h4>
                  <p className="text-gray-600 text-sm">Prioritizing responsible usage and data privacy.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <BookOpen size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Transparency</h4>
                  <p className="text-gray-600 text-sm">Knowing when and how AI is used. No pretending it's your work.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <MessageSquare size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Teachable Moments</h4>
                  <p className="text-gray-600 text-sm">Discussing bias, hallucinations, and integrity.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-blue-600 p-4 text-center">
            <p className="text-white font-medium">Outcome: Secure & Informed Environment</p>
          </div>
        </div>

        {/* Pillar 2: Equality */}
        <div className="bg-white rounded-2xl shadow-xl border-t-8 border-amber-400 overflow-hidden flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
          <div className="bg-amber-50 p-6 text-center border-b border-amber-100">
            <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full text-amber-600 mb-3">
              <Scale className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">2. EQUALITY</h3>
            <p className="text-sm font-medium text-amber-700 uppercase tracking-wide">Inclusive Access & Opportunity</p>
          </div>
          <div className="p-6 flex-1">
            <ul className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    <HandHeart size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Inclusive Access</h4>
                  <p className="text-gray-600 text-sm">Bridging the digital divide. Everyone gets the tool.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    <Scale size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Same Opportunity</h4>
                  <p className="text-gray-600 text-sm">Fair resource distribution to build literacy for all.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    <Users size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Empowering Every Learner</h4>
                  <p className="text-gray-600 text-sm">No student left behind in the AI revolution.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-amber-500 p-4 text-center">
            <p className="text-white font-medium">Outcome: Equitable Skill Development</p>
          </div>
        </div>

        {/* Pillar 3: Proficiency */}
        <div className="bg-white rounded-2xl shadow-xl border-t-8 border-purple-500 overflow-hidden flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
          <div className="bg-purple-50 p-6 text-center border-b border-purple-100">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full text-purple-600 mb-3">
              <Brain className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">3. PROFICIENCY</h3>
            <p className="text-sm font-medium text-purple-700 uppercase tracking-wide">Pilot Mindset & Efficiency</p>
          </div>
          <div className="p-6 flex-1">
            <ul className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <Brain size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Becoming 'Pilots'</h4>
                  <p className="text-gray-600 text-sm">Active direction of technology, not passive reliance.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <Lightbulb size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Brainstorming Boost</h4>
                  <p className="text-gray-600 text-sm">Using AI as a thought partner to break through creative blocks.</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <Timer size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Efficiency</h4>
                  <p className="text-gray-600 text-sm">Streamlining tasks and workflows to focus on deep work.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-purple-600 p-4 text-center">
            <p className="text-white font-medium">Outcome: Future-Ready Creators</p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-900 rounded-xl p-8 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-purple-500"></div>
        <h3 className="text-2xl font-bold mb-3">The Goal: The 'Infinite Tutor'</h3>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">Unlimited patience for deeper learning, supported by Student-Safe Gemini & Ethical Frameworks.</p>
      </div>
    </div>
  );
};

export default Pillars;