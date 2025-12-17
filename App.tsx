import React, { useState } from 'react';
import { 
  Layout, Shield, BrainCircuit, Rocket, Scale, ArrowRight, 
  ShieldCheck, Zap, Users, GraduationCap, School, 
  Download, MousePointerClick, Search, PenTool, ClipboardCheck, 
  ExternalLink, Sparkles, LayoutGrid, FolderOpen, HelpCircle, Award,
  Lock, BookOpen, MessageSquare, HandHeart, Brain, Lightbulb, Timer,
  CheckCircle2, XCircle, Calculator, UserCheck, EyeOff, VenetianMask, Skull
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
    { id: TabView.AI_PROTOCOL, label: 'Protocol', icon: Rocket },
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
          <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
            <h2 className="text-4xl font-display font-bold text-center mb-16">The 3 Pillars for Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
               <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center uppercase tracking-tight flex items-center justify-center gap-2 text-pilot-blue"><School size={20}/> Educator Framework</h3>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white group">
                    <img src="https://drive.google.com/thumbnail?id=1iMZAtETmezwwOlm9rQdD-Y0lGpvGhedg&sz=w1200" className="w-full transition-transform group-hover:scale-[1.02]" alt="Educator Framework" />
                    <a href="https://drive.google.com/file/d/1iMZAtETmezwwOlm9rQdD-Y0lGpvGhedg/view" target="_blank" className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm hover:bg-white transition-colors">Open High-Res <ExternalLink size={12}/></a>
                  </div>
               </div>
               <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center uppercase tracking-tight flex items-center justify-center gap-2 text-pilot-purple"><GraduationCap size={20}/> Student Guide</h3>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white group">
                    <img src="https://drive.google.com/thumbnail?id=10N5NxD9Mc_6aWbB5WcUtB4yltRuy2YHh&sz=w1200" className="w-full transition-transform group-hover:scale-[1.02]" alt="Student Guide" />
                    <a href="https://drive.google.com/file/d/10N5NxD9Mc_6aWbB5WcUtB4yltRuy2YHh/view" target="_blank" className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm hover:bg-white transition-colors">Open High-Res <ExternalLink size={12}/></a>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { title: 'Safety', icon: Lock, color: 'border-blue-500', bg: 'bg-blue-50', text: 'Ethical Use & Transparency', points: ['Clear Policy', 'Transparency', 'Teachable Moments'], outcome: 'Secure Environment' },
                { title: 'Equality', icon: Scale, color: 'border-amber-400', bg: 'bg-amber-50', text: 'Inclusive Access', points: ['Inclusive Access', 'Same Opportunity', 'Empowering Learners'], outcome: 'Equitable Skills' },
                { title: 'Proficiency', icon: Brain, color: 'border-purple-500', bg: 'bg-purple-50', text: 'Pilot Mindset', points: ['Active Direction', 'Brainstorming Boost', 'Workflow Efficiency'], outcome: 'Future Creators' }
              ].map((p, i) => (
                <div key={i} className={`bg-white rounded-2xl shadow-xl border-t-8 ${p.color} overflow-hidden flex flex-col hover:translate-y-[-4px] transition-all`}>
                  <div className={`${p.bg} p-6 text-center border-b`}>
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-full text-pilot-dark mb-3 shadow-sm">
                      <p.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 uppercase">{i + 1}. {p.title}</h3>
                    <p className="text-xs font-bold text-gray-500 tracking-widest mt-1 uppercase">{p.text}</p>
                  </div>
                  <div className="p-6 flex-1">
                    <ul className="space-y-4">
                      {p.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle2 size={16} className="text-green-500" />
                          <span className="font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-pilot-dark p-4 text-center">
                    <p className="text-white text-sm font-bold tracking-tight">Outcome: {p.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case TabView.ETHICAL_USE:
        return (
          <div className="max-w-5xl mx-auto px-4 py-12 animate-fadeIn">
             <div className="bg-pilot-blue rounded-3xl p-10 text-center text-white shadow-xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
                <h2 className="text-4xl font-display font-bold uppercase mb-4 tracking-tight">Ethical AI Mastery</h2>
                <p className="text-blue-100 text-xl font-medium max-w-2xl mx-auto">"Play Smart, Don't Cheat." Setting the gold standard for classroom integrity.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                {[
                  { id: '1q7ZLXz_B1QVr0CbWnGNUvZt8lzxNnDlD', title: 'Teacher Policy Guide', label: 'Download Teacher Guide' },
                  { id: '1x-ygYvKLprseRXqvQEs7VJelB4DDRU-9', title: 'Student AI Checklist', label: 'Download Checklist' }
                ].map(item => (
                  <div key={item.id} className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center group">
                     <div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden mb-6 border relative">
                        <img src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w800`} className="w-full h-full object-contain transition-transform group-hover:scale-105" alt={item.title} />
                     </div>
                     <h4 className="font-bold text-lg mb-4">{item.title}</h4>
                     <a href={`https://drive.google.com/file/d/${item.id}/view`} target="_blank" className="bg-pilot-blue text-white w-full py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                       {item.label} <Download size={20}/>
                     </a>
                  </div>
                ))}
             </div>

             <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-pilot-blue">
                  <ClipboardCheck size={28} /> Ethical Mastery Checklist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { t: 'Credit the Assist', d: 'Always cite AI as a contributor.', icon: UserCheck },
                    { t: 'Verify Facts', d: 'Check AI output for accuracy.', icon: Search },
                    { t: 'Own the Results', d: 'Final work must be your voice.', icon: PenTool }
                  ].map((check, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-2xl">
                      <div className="bg-white p-3 rounded-full shadow-sm text-pilot-blue mb-4">
                        <check.icon size={32} />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{check.t}</h4>
                      <p className="text-sm text-gray-600">{check.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        );

      case TabView.AI_PROTOCOL:
        return (
          <div className="max-w-5xl mx-auto px-4 py-12 animate-fadeIn">
             <div className="text-center mb-12">
               <h2 className="text-4xl font-display font-bold mb-4 uppercase tracking-tighter">The P.I.L.O.T. Protocol</h2>
               <p className="text-gray-500 font-medium tracking-widest uppercase text-sm">Your Flight Plan for AI Mastery</p>
             </div>
             
             <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img src="https://drive.google.com/thumbnail?id=1Y8uy_8YqFkYTQdZUPXhxek_MTFD8hWxe&sz=w1200" className="w-full" alt="AI Protocol" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all pointer-events-none"></div>
             </div>

             <div className="space-y-6">
                {[
                  { id: '1', t: 'Prompt Smart', i: MousePointerClick, d: "Demand understanding, not just answers. Be specific.", c: 'bg-blue-600' },
                  { id: '2', t: 'Investigate', i: Search, d: "Verify everything. AI is a tool, not a source of truth.", c: 'bg-amber-500' },
                  { id: '3', t: 'Learn Logic', i: HelpCircle, d: "Focus on the 'Why', not just the 'What'.", c: 'bg-purple-600' },
                  { id: '4', t: 'Own It', i: PenTool, d: "Close the AI tab. Use your own voice for final drafts.", c: 'bg-green-600' },
                  { id: '5', t: 'Test Solo', i: ClipboardCheck, d: "Ensure you can solve the problem without AI assistance.", c: 'bg-red-600' }
                ].map(s => {
                  const Icon = s.i;
                  return (
                    <div key={s.id} className="bg-white flex flex-col md:flex-row items-center p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all gap-8 group">
                      <div className={`w-16 h-16 ${s.c} text-white rounded-2xl flex items-center justify-center font-bold text-3xl shadow-lg shrink-0 group-hover:rotate-6 transition-transform`}>{s.id}</div>
                      <div className="flex-1 text-center md:text-left">
                        <h4 className="font-bold text-2xl flex items-center justify-center md:justify-start gap-3 mb-2">
                          <Icon size={24} className="text-gray-400" /> {s.t}
                        </h4>
                        <p className="text-gray-600 text-lg font-medium">{s.d}</p>
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>
        );

      case TabView.TOOLS:
        return (
          <div className="max-w-6xl mx-auto px-4 py-12 animate-fadeIn">
            <div className="bg-indigo-600 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between mb-12 shadow-2xl relative overflow-hidden">
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-bold flex items-center gap-3 mb-2"><FolderOpen /> Digital Resource Drive</h3>
                 <p className="text-indigo-100 text-lg">High-res posters, lesson handouts, and more.</p>
               </div>
               <a href={driveLink} target="_blank" className="mt-8 md:mt-0 px-10 py-4 bg-white text-indigo-600 font-bold rounded-2xl flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl relative z-10">
                 Open Drive <ExternalLink size={20}/>
               </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               {[
                 { t: 'Google Classroom AI', i: Sparkles, c: 'bg-blue-600', l: 'https://classroom.google.com/ai', d: 'Official AI tools built into Workspace.' },
                 { t: 'Educator Certs', i: Award, c: 'bg-purple-600', l: certificationsLink, d: 'Professional development pathways.' },
                 { t: 'District AI Portal', i: LayoutGrid, c: 'bg-teal-600', l: 'http://aiapps.vvuhsd.org/', d: 'Approved local AI application list.' }
               ].map((tool, idx) => (
                 <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 text-center flex flex-col hover:scale-[1.03] transition-all group">
                    <div className={`${tool.c} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform`}>
                      <tool.i size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{tool.t}</h3>
                    <p className="text-gray-500 text-sm mb-8 flex-grow">{tool.d}</p>
                    <a href={tool.l} target="_blank" className={`${tool.c} text-white w-full py-4 rounded-2xl font-bold hover:brightness-110 transition-all shadow-md`}>Visit Portal</a>
                 </div>
               ))}
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[16/10] border-8 border-white">
               <iframe src="http://aiapps.vvuhsd.org/" className="w-full h-full border-0 bg-slate-50" title="District AI Hub" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </div>
          </div>
        );

      default:
        return (
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8 tracking-tight">
              Equipping Students for a <br />
              <span className="gradient-text">Future with AI</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-medium">
              Transition from "Autopilot" to "Pilot". A comprehensive guide for educators to foster ethical, equitable, and proficient AI usage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <button onClick={() => setCurrentTab(TabView.PILLARS)} className="bg-pilot-blue text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all flex items-center justify-center text-lg">
                Explore 3 Pillars <ArrowRight className="ml-2" size={20} />
              </button>
              <button onClick={() => setCurrentTab(TabView.TOOLS)} className="border-2 border-gray-200 px-10 py-5 rounded-2xl font-bold bg-white text-gray-700 hover:bg-gray-50 transition-all shadow-lg text-lg">
                Teacher Tools
              </button>
            </div>
            
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-pilot-blue to-pilot-purple rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white bg-gray-900">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/5VJj9hkUQe4" title="AI Video" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
               {[
                 { t: 'Safety First', d: 'Ethical use and transparency are our foundation.', i: ShieldCheck, c: 'text-blue-600' },
                 { t: 'Equal Access', i: Users, d: 'Bridging the digital divide for every learner.', c: 'text-amber-500' },
                 { t: 'Proficiency', i: Zap, d: 'Empowering students to be effective pilots.', c: 'text-purple-600' }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl shadow-md border border-gray-50 text-center">
                   <div className={`${item.c} mb-4 flex justify-center`}><item.i size={40}/></div>
                   <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900 selection:bg-pilot-blue selection:text-white">
      <Navigation currentTab={currentTab} setTab={setCurrentTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <footer className="bg-white border-t py-16 text-center text-gray-400 text-sm mt-12">
        <div className="flex justify-center gap-6 mb-4">
          <img src={logoUrl} alt="Footer Logo" className="h-8 grayscale opacity-50" />
        </div>
        <p className="font-medium">&copy; {new Date().getFullYear()} AI EduPilot. VVUHSD Framework.</p>
        <p className="text-xs mt-2 italic">Crafting a safer, smarter future for education.</p>
      </footer>
    </div>
  );
};

export default App;