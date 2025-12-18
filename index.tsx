import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Layout, Shield, BrainCircuit, Rocket, Scale, ArrowRight, 
  ShieldCheck, Zap, Users, GraduationCap, School, 
  Download, MousePointerClick, Search, PenTool, ClipboardCheck, 
  ExternalLink, Sparkles, LayoutGrid, FolderOpen, HelpCircle, Award,
  Lock, Brain, CheckCircle2, Loader2, Send
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Configuration & Links ---
const driveLink = "https://drive.google.com/drive/folders/1JwplS15rtJyk8Eq3BAV-0xvjuhjBD1id?usp=sharing";
const certificationsLink = "https://edu.google.com/intl/ALL_us/learning-center/certifications/";
const logoUrl = "https://drive.google.com/thumbnail?id=1Uxyl8RlVy9N8BqNthfBZzLNa9GgDMD-l&sz=w400";

const TabView = { 
  HOME: 'HOME', 
  PILLARS: 'PILLARS', 
  ETHICAL_USE: 'ETHICAL_USE', 
  AI_PROTOCOL: 'AI_PROTOCOL', 
  TOOLS: 'TOOLS',
  AI_PILOT: 'AI_PILOT'
};

// --- Sub-Components ---

const Navigation = ({ currentTab, setTab }: { currentTab: string, setTab: (t: string) => void }) => {
  const navItems = [
    { id: TabView.HOME, label: 'Home', icon: Layout },
    { id: TabView.PILLARS, label: '3 Pillars', icon: Shield },
    { id: TabView.ETHICAL_USE, label: 'Ethical', icon: Scale },
    { id: TabView.AI_PROTOCOL, label: 'Protocol', icon: Rocket },
    { id: TabView.TOOLS, label: 'Tools', icon: BrainCircuit },
    { id: TabView.AI_PILOT, label: 'AI Pilot', icon: Sparkles }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setTab(TabView.HOME)}>
          <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
        </div>
        <div className="flex space-x-1 overflow-x-auto no-scrollbar">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button 
                key={item.id} 
                onClick={() => setTab(item.id)} 
                className={`flex items-center px-3 py-2 rounded-md text-sm font-semibold transition-all ${
                  isActive ? 'bg-pilot-blue/10 text-pilot-blue' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={16} className={`mr-1.5 ${isActive ? 'text-pilot-blue' : 'text-gray-400'}`} />
                <span className={isActive ? 'inline' : 'hidden md:inline'}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

const LessonScaffolder = () => {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generatePlan = async () => {
    if (!subject || !topic) return;
    setLoading(true);
    setResult(null);

    try {
      const apiKey = (window as any).process?.env?.API_KEY || "";
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a lesson activity using the P.I.L.O.T protocol for ${subject} on the topic of ${topic}. Ensure AI is used as a 'Co-Pilot' for specific brainstorming or feedback, not doing the work for the student. Output in Markdown.`,
        config: {
          systemInstruction: "You are an AI integration expert for Victor Valley Union High School District. You design ethical AI lesson plans."
        }
      });
      setResult(response.text || "No response received.");
    } catch (e) {
      setResult("Error: Unable to connect to Gemini. Please check API configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border p-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-pilot-blue text-white rounded-2xl shadow-lg">
            <Sparkles size={32} />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold">AI Lesson Scaffolder</h2>
            <p className="text-gray-500 font-medium italic">Gemini-powered P.I.L.O.T Integration</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Grade / Subject</label>
            <input 
              value={subject} 
              onChange={e => setSubject(e.target.value)}
              placeholder="e.g. 10th Grade English" 
              className="w-full bg-slate-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-pilot-blue outline-none transition-all"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Learning Topic</label>
            <input 
              value={topic} 
              onChange={e => setTopic(e.target.value)}
              placeholder="e.g. Character Archetypes" 
              className="w-full bg-slate-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:border-pilot-blue outline-none transition-all"
            />
          </div>
        </div>

        <button 
          onClick={generatePlan}
          disabled={loading || !subject || !topic}
          className="w-full bg-pilot-blue text-white font-bold text-xl py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 shadow-xl disabled:opacity-50 transition-all active:scale-95"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Send size={24} />}
          {loading ? 'Consulting Gemini...' : 'Generate Flight Plan'}
        </button>

        {result && (
          <div className="mt-12 p-8 bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-[2rem] animate-fadeIn">
            <h4 className="text-pilot-blue font-bold text-xl mb-4">Lesson Activity Structure:</h4>
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-sans">{result}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const [currentTab, setCurrentTab] = useState(TabView.HOME);

  const renderContent = () => {
    switch (currentTab) {
      case TabView.PILLARS:
        return (
          <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
            <h2 className="text-4xl font-display font-bold text-center mb-16 uppercase tracking-tight">The 3 Pillars for Success</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
               <div className="space-y-6 text-center">
                  <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center justify-center gap-3 text-pilot-blue"><School /> Educator Framework</h3>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white group">
                    <img src="https://drive.google.com/thumbnail?id=1iMZAtETmezwwOlm9rQdD-Y0lGpvGhedg&sz=w1200" className="w-full transition-transform duration-700 group-hover:scale-105" alt="Educator" />
                    <div className="absolute inset-0 bg-pilot-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <a href="https://drive.google.com/file/d/1iMZAtETmezwwOlm9rQdD-Y0lGpvGhedg/view" target="_blank" className="bg-white text-pilot-dark px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl">High Res Poster <ExternalLink size={20}/></a>
                    </div>
                  </div>
               </div>
               <div className="space-y-6 text-center">
                  <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center justify-center gap-3 text-pilot-purple"><GraduationCap /> Student Guide</h3>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white group">
                    <img src="https://drive.google.com/thumbnail?id=10N5NxD9Mc_6aWbB5WcUtB4yltRuy2YHh&sz=w1200" className="w-full transition-transform duration-700 group-hover:scale-105" alt="Student" />
                    <div className="absolute inset-0 bg-pilot-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <a href="https://drive.google.com/file/d/10N5NxD9Mc_6aWbB5WcUtB4yltRuy2YHh/view" target="_blank" className="bg-white text-pilot-dark px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-2xl">High Res Poster <ExternalLink size={20}/></a>
                    </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Safety', icon: Lock, color: 'border-blue-500', bg: 'bg-blue-50', points: ['Clear Policy', 'Transparency', 'Human Oversight'] },
                { title: 'Equality', icon: Scale, color: 'border-amber-400', bg: 'bg-amber-50', points: ['Inclusive Access', 'Same Opportunity', 'Bias Awareness'] },
                { title: 'Proficiency', icon: Brain, color: 'border-purple-500', bg: 'bg-purple-50', points: ['Pilot Mindset', 'Workflow Efficiency', 'Creative Boost'] }
              ].map((p, i) => (
                <div key={i} className={`bg-white rounded-[2rem] shadow-xl border-t-[10px] ${p.color} p-10 hover:-translate-y-2 transition-all`}>
                  <div className={`${p.bg} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-sm`}>
                    <p.icon size={36} className="text-pilot-dark" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-6 uppercase tracking-tighter">{p.title}</h3>
                  <ul className="space-y-4">
                    {p.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-4 font-semibold text-gray-700">
                        <CheckCircle2 className="text-green-500" size={20} /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case TabView.ETHICAL_USE:
        return (
          <div className="max-w-6xl mx-auto px-4 py-12 animate-fadeIn">
             <div className="bg-pilot-blue rounded-[3rem] p-16 text-center text-white shadow-2xl mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <h2 className="text-5xl font-display font-bold uppercase mb-4 tracking-tighter">Ethical AI Use</h2>
                <p className="text-blue-100 text-2xl font-medium">"Play Smart, Don't Cheat." Guidelines for integrity.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { id: '1q7ZLXz_B1QVr0CbWnGNUvZt8lzxNnDlD', title: 'Teacher Policy Guide', desc: 'Policy examples and classroom rules.' },
                  { id: '1x-ygYvKLprseRXqvQEs7VJelB4DDRU-9', title: 'Student AI Checklist', desc: 'A step-by-step check for learners.' }
                ].map(item => (
                  <div key={item.id} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col group">
                     <div className="w-full aspect-[3/4] bg-slate-50 rounded-2xl overflow-hidden mb-8 border-4 border-white shadow-inner flex items-center justify-center">
                        <img src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w1000`} className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500" alt={item.title} />
                     </div>
                     <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                     <p className="text-gray-500 mb-8 leading-relaxed">{item.desc}</p>
                     <a href={`https://drive.google.com/file/d/${item.id}/view`} target="_blank" className="bg-pilot-blue text-white w-full py-5 rounded-2xl font-bold text-center flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg">
                       Download Resource <Download />
                     </a>
                  </div>
                ))}
             </div>
          </div>
        );

      case TabView.AI_PROTOCOL:
        return (
          <div className="max-w-5xl mx-auto px-4 py-12 animate-fadeIn">
             <h2 className="text-5xl font-display font-bold text-center mb-12 uppercase tracking-tighter">The P.I.L.O.T. Protocol</h2>
             <div className="relative mb-20 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-200">
                <img src="https://drive.google.com/thumbnail?id=1Y8uy_8YqFkYTQdZUPXhxek_MTFD8hWxe&sz=w1200" className="w-full" alt="Protocol" />
                <a href="https://drive.google.com/file/d/1Y8uy_8YqFkYTQdZUPXhxek_MTFD8hWxe/view" target="_blank" className="absolute bottom-6 right-6 bg-white/95 px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2">View Full Poster <ExternalLink size={16}/></a>
             </div>
             <div className="grid gap-8">
                {[
                  { id: '1', t: 'Prompt Smart', i: MousePointerClick, d: "Demand understanding, not just answers.", c: 'bg-blue-600' },
                  { id: '2', t: 'Investigate', i: Search, d: "Verify everything. AI is a tool, not a fact-checker.", c: 'bg-amber-500' },
                  { id: '3', t: 'Learn Logic', i: HelpCircle, d: "Focus on the 'Why', not just the 'What'.", c: 'bg-purple-600' },
                  { id: '4', t: 'Own It', i: PenTool, d: "Use your own voice for final drafts.", c: 'bg-green-600' },
                  { id: '5', t: 'Test Solo', i: ClipboardCheck, d: "Ensure you can perform without AI help.", c: 'bg-red-600' }
                ].map(s => {
                  const StepIcon = s.i;
                  return (
                    <div key={s.id} className="bg-white flex flex-col md:flex-row items-center p-10 rounded-[2rem] shadow-xl border border-gray-50 hover:shadow-2xl transition-all gap-10">
                      <div className={`w-20 h-20 ${s.c} text-white rounded-3xl flex items-center justify-center font-bold text-4xl shadow-lg shrink-0`}>{s.id}</div>
                      <div>
                        <h4 className="font-bold text-3xl mb-3 flex items-center gap-3"><StepIcon size={28} className="text-gray-400" /> {s.t}</h4>
                        <p className="text-gray-600 text-xl font-medium leading-relaxed">{s.d}</p>
                      </div>
                    </div>
                  );
                })}
             </div>
          </div>
        );

      case TabView.TOOLS:
        return (
          <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
            <div className="bg-indigo-600 p-12 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between mb-16 shadow-2xl">
               <div className="mb-6 md:mb-0">
                 <h3 className="text-4xl font-bold flex items-center gap-4 mb-2"><FolderOpen size={40} /> Resource Drive</h3>
                 <p className="text-indigo-100 text-xl font-medium">Posters, handouts, and district curriculum assets.</p>
               </div>
               <a href={driveLink} target="_blank" className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-2xl flex items-center gap-3 hover:bg-gray-100 transition-all text-xl shadow-lg">Open Drive <ExternalLink /></a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
               {[
                 { t: 'Classroom AI', i: Sparkles, c: 'bg-blue-600', l: 'https://classroom.google.com/ai', d: 'Google Workspace official AI educator tools.' },
                 { t: 'Educator Certs', i: Award, c: 'bg-purple-600', l: certificationsLink, d: 'Professional training and badge pathways.' },
                 { t: 'District Portal', i: LayoutGrid, c: 'bg-teal-600', l: 'http://aiapps.vvuhsd.org/', d: 'Approved VVUHSD AI application list.' }
               ].map((tool, idx) => (
                 <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-100 text-center flex flex-col hover:translate-y-[-8px] transition-all group">
                    <div className={`${tool.c} text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:rotate-12 transition-transform`}>
                      <tool.i size={36} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{tool.t}</h3>
                    <p className="text-gray-500 mb-10 flex-grow text-lg leading-snug">{tool.d}</p>
                    <a href={tool.l} target="_blank" className={`${tool.c} text-white w-full py-4 rounded-2xl font-bold hover:brightness-110 shadow-md text-lg transition-all`}>Launch Tool</a>
                 </div>
               ))}
            </div>
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden aspect-video border-[12px] border-white ring-1 ring-gray-100">
               <iframe src="http://aiapps.vvuhsd.org/" className="w-full h-full border-0 bg-slate-50" title="Hub" />
            </div>
          </div>
        );

      case TabView.AI_PILOT:
        return <LessonScaffolder />;

      default:
        return (
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center animate-fadeIn">
            <h1 className="text-5xl md:text-8xl font-display font-bold text-gray-900 mb-8 tracking-tighter">
              Equipping Students for a <br />
              <span className="gradient-text">Future with AI</span>
            </h1>
            <p className="mt-4 text-2xl md:text-3xl text-gray-500 max-w-4xl mx-auto mb-16 font-medium leading-relaxed">
              Transitioning from <span className="text-gray-900 font-bold italic underline decoration-red-500">"Autopilot"</span> to <span className="text-pilot-blue font-bold italic underline decoration-pilot-blue">"Pilot"</span>. A guide for VVUHSD educators.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
              <button onClick={() => setCurrentTab(TabView.PILLARS)} className="bg-pilot-blue text-white px-12 py-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:bg-blue-700 transition-all flex items-center justify-center text-2xl group">
                Explore Framework <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
              </button>
              <button onClick={() => setCurrentTab(TabView.TOOLS)} className="border-4 border-gray-100 px-12 py-6 rounded-2xl font-bold bg-white text-gray-700 hover:bg-gray-50 transition-all shadow-xl text-2xl">
                Teacher Tools
              </button>
            </div>
            
            <div className="relative group max-w-6xl mx-auto mb-32">
              <div className="absolute -inset-2 bg-gradient-to-r from-pilot-blue to-pilot-purple rounded-[3.5rem] blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white bg-gray-900">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/5VJj9hkUQe4" title="Intro Video" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { t: 'Safety First', d: 'Ethical guidelines and transparency are our foundation.', i: ShieldCheck, c: 'text-blue-600' },
                 { t: 'Equal Access', i: Users, d: 'Bridging the digital divide for every district learner.', c: 'text-amber-500' },
                 { t: 'Proficiency', i: Zap, d: 'Empowering students to be responsible masters of AI.', c: 'text-purple-600' }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-gray-50 text-center flex flex-col items-center">
                   <div className={`${item.c} mb-6`}><item.i size={56}/></div>
                   <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">{item.t}</h4>
                   <p className="text-gray-500 text-lg leading-relaxed">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900 selection:bg-pilot-blue selection:text-white font-sans">
      <Navigation currentTab={currentTab} setTab={setCurrentTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <footer className="bg-white border-t py-20 text-center text-gray-400 mt-20">
        <div className="flex justify-center gap-10 mb-6 grayscale opacity-40">
          <img src={logoUrl} alt="Footer Logo" className="h-10" />
        </div>
        <p className="font-bold text-lg mb-2">AI EduPilot Framework &copy; {new Date().getFullYear()}</p>
        <p className="text-sm italic text-gray-400 uppercase tracking-widest">Victor Valley Union High School District</p>
      </footer>
    </div>
  );
};

// --- Initializer ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}