import React, { useState } from 'react';
import { 
  Layout, Shield, BrainCircuit, Rocket, Scale, ArrowRight, 
  ShieldCheck, Zap, Users, GraduationCap, School, 
  Download, MousePointerClick, Search, PenTool, ClipboardCheck, 
  ExternalLink, Sparkles, LayoutGrid, FolderOpen, HelpCircle, Award 
} from 'lucide-react';

const TabView = { 
  HOME: 'HOME', 
  PILLARS: 'PILLARS', 
  ETHICAL_USE: 'ETHICAL_USE', 
  AI_PROTOCOL: 'AI_PROTOCOL', 
  TOOLS: 'TOOLS' 
};

const driveLink = "https://drive.google.com/drive/folders/1JwplS15rtJyk8Eq3BAV-0xvjuhjBD1id?usp=sharing";
const certificationsLink = "https://edu.google.com/intl/ALL_us/learning-center/certifications/";
const logoUrl = "https://drive.google.com/thumbnail?id=1Uxyl8RlVy9N8BqNthfBZzLNa9GgDMD-l&sz=w400";

const Navigation = ({ currentTab, setTab }: { currentTab: string, setTab: (t: string) => void }) => {
  const navItems = [
    { id: TabView.HOME, label: 'Home', icon: Layout },
    { id: TabView.PILLARS, label: '3 Pillars', icon: Shield },
    { id: TabView.ETHICAL_USE, label: 'Ethical Use', icon: Scale },
    { id: TabView.AI_PROTOCOL, label: 'AI Protocol', icon: Rocket },
    { id: TabView.TOOLS, label: 'Tools', icon: BrainCircuit }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setTab(TabView.HOME)}>
          <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="flex space-x-1 overflow-x-auto no-scrollbar">
          {navItems.map(item => {
            const IconComponent = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button 
                key={item.id} 
                onClick={() => setTab(item.id)} 
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive ? 'bg-pilot-blue/10 text-pilot-blue' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <IconComponent size={16} className={`mr-1.5 ${isActive ? 'text-pilot-blue' : 'text-gray-400'}`} />
                <span className={isActive ? 'inline' : 'hidden md:inline'}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  const [currentTab, setCurrentTab] = useState(TabView.HOME);

  const renderContent = () => {
    switch (currentTab) {
      case TabView.PILLARS:
        return (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-display font-bold text-center mb-16">The 3 Pillars for Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center uppercase tracking-tight flex items-center justify-center gap-2 text-pilot-blue"><School size={20}/> Educator Framework</h3>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                    <img src="https://drive.google.com/thumbnail?id=1iMZAtETmezwwOlm9rQdD-Y0lGpvGhedg&sz=w1200" className="w-full" alt="Educator Framework" />
                    <a href="https://drive.google.com/file/d/1iMZAtETmezwwOlm9rQdD-Y0lGpvGhedg/view" target="_blank" className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm">Open High-Res <ExternalLink size={12}/></a>
                  </div>
               </div>
               <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center uppercase tracking-tight flex items-center justify-center gap-2 text-pilot-purple"><GraduationCap size={20}/> Student Guide</h3>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                    <img src="https://drive.google.com/thumbnail?id=10N5NxD9Mc_6aWbB5WcUtB4yltRuy2YHh&sz=w1200" className="w-full" alt="Student Guide" />
                    <a href="https://drive.google.com/file/d/10N5NxD9Mc_6aWbB5WcUtB4yltRuy2YHh/view" target="_blank" className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm">Open High-Res <ExternalLink size={12}/></a>
                  </div>
               </div>
            </div>
          </div>
        );
      case TabView.ETHICAL_USE:
        return (
          <div className="max-w-5xl mx-auto px-4 py-12">
             <div className="bg-blue-600 rounded-3xl p-8 text-center text-white shadow-xl mb-16">
                <h2 className="text-3xl font-display font-bold uppercase mb-2">Ethical AI Use</h2>
                <p className="text-blue-100 text-lg">Play Smart, Don't Cheat. A guide for integrity in the age of AI.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
                   <img src="https://drive.google.com/thumbnail?id=1q7ZLXz_B1QVr0CbWnGNUvZt8lzxNnDlD&sz=w800" className="mb-6 rounded-lg border w-full h-auto" alt="Teacher Guide" />
                   <a href="https://drive.google.com/file/d/1q7ZLXz_B1QVr0CbWnGNUvZt8lzxNnDlD/view" target="_blank" className="bg-pilot-blue text-white w-full py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">Download Teacher Guide <Download size={18}/></a>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
                   <img src="https://drive.google.com/thumbnail?id=1x-ygYvKLprseRXqvQEs7VJelB4DDRU-9&sz=w800" className="mb-6 rounded-lg border w-full h-auto" alt="Student Checklist" />
                   <a href="https://drive.google.com/file/d/1x-ygYvKLprseRXqvQEs7VJelB4DDRU-9/view" target="_blank" className="bg-pilot-blue text-white w-full py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">Download Student Checklist <Download size={18}/></a>
                </div>
             </div>
          </div>
        );
      case TabView.AI_PROTOCOL:
        return (
          <div className="max-w-5xl mx-auto px-4 py-12">
             <h2 className="text-4xl font-display font-bold text-center mb-12 uppercase tracking-tighter">The AI Protocol</h2>
             <img src="https://drive.google.com/thumbnail?id=1Y8uy_8YqFkYTQdZUPXhxek_MTFD8hWxe&sz=w1200" className="rounded-3xl shadow-2xl mb-16 w-full border-4 border-white" alt="AI Protocol" />
             <div className="grid gap-4">
                {[
                  { id: '1', t: 'Prompt Smart', i: MousePointerClick, d: "Demand understanding, not just answers.", c: 'bg-blue-600' },
                  { id: '2', t: 'Investigate', i: Search, d: "AI can hallucinate. Verify everything.", c: 'bg-amber-500' },
                  { id: '3', t: 'Learn Logic', i: HelpCircle, d: "Focus on the why, not the what.", c: 'bg-purple-600' },
                  { id: '4', t: 'Own It', i: PenTool, d: "Close the tab. Use your own voice for final drafts.", c: 'bg-green-600' },
                  { id: '5', t: 'Test Solo', i: ClipboardCheck, d: "Ensure you can perform without the AI.", c: 'bg-red-600' }
                ].map(s => {
                  const StepIcon = s.i;
                  return (
                    <div key={s.id} className="bg-white flex items-center p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                      <div className={`w-12 h-12 ${s.c} text-white rounded-full flex items-center justify-center font-bold text-xl mr-6`}>{s.id}</div>
                      <div>
                        <h4 className="font-bold text-xl flex items-center gap-2"><StepIcon size={20} className="text-gray-400" /> {s.t}</h4>
                        <p className="text-gray-600">{s.d}</p>
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>
        );
      case TabView.TOOLS:
        return (
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="bg-indigo-600 p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between mb-12 shadow-xl">
               <div><h3 className="text-2xl font-bold flex items-center gap-2"><FolderOpen /> Digital Resource Drive</h3><p className="text-indigo-100">Posters, handouts, and teacher materials.</p></div>
               <a href={driveLink} target="_blank" className="mt-6 md:mt-0 px-8 py-3 bg-white text-indigo-600 font-bold rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors">Open Drive <ExternalLink size={20}/></a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
               <div className="bg-white p-8 rounded-3xl shadow-lg border text-center flex flex-col hover:scale-105 transition-transform duration-300">
                  <Sparkles className="mx-auto text-blue-600 mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-3">Google Classroom AI</h3>
                  <a href="https://classroom.google.com/ai" target="_blank" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl mt-auto hover:bg-blue-700 transition-colors">Visit Portal</a>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-lg border text-center flex flex-col hover:scale-105 transition-transform duration-300">
                  <Award className="mx-auto text-purple-600 mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-3">Educator Certs</h3>
                  <a href={certificationsLink} target="_blank" className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl mt-auto hover:bg-purple-700 transition-colors">View Pathway</a>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-lg border text-center flex flex-col hover:scale-105 transition-transform duration-300">
                  <LayoutGrid className="mx-auto text-teal-600 mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-3">District Apps Portal</h3>
                  <a href="http://aiapps.vvuhsd.org/" target="_blank" className="w-full py-3 bg-teal-600 text-white font-bold rounded-xl mt-auto hover:bg-teal-700 transition-colors">Open Hub</a>
               </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden aspect-[16/10] border-8 border-white">
               <iframe src="http://aiapps.vvuhsd.org/" className="w-full h-full border-0" title="District AI Hub" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </div>
          </div>
        );
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              Equipping Students for a <br />
              <span className="gradient-text">Future with AI</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Moving from "Autopilot" to "Pilot". A comprehensive guide for teachers to foster ethical, equitable, and proficient AI usage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button onClick={() => setCurrentTab(TabView.PILLARS)} className="bg-pilot-blue text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center">
                Explore 3 Pillars <ArrowRight className="ml-2" size={18} />
              </button>
              <button onClick={() => setCurrentTab(TabView.TOOLS)} className="border-2 border-gray-200 px-8 py-4 rounded-xl font-bold bg-white text-gray-700 hover:bg-gray-50 transition-all">
                Teacher Tools
              </button>
            </div>
            <div className="max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-900">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/5VJj9hkUQe4" title="AI Video" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900 font-sans">
      <Navigation currentTab={currentTab} setTab={setCurrentTab} />
      <main className="flex-grow animate-fadeIn">
        {renderContent()}
      </main>
      <footer className="bg-white border-t py-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} AI EduPilot. VVUHSD Framework.</p>
      </footer>
    </div>
  );
};

export default App;