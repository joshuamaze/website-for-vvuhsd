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

// --- Configuration ---
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

const Navigation = ({ currentTab, setTab }: any) => (
  <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
      <div className="flex items-center cursor-pointer" onClick={() => setTab(TabView.HOME)}>
        <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="flex space-x-1 overflow-x-auto no-scrollbar">
        {[
          { id: TabView.HOME, label: 'Home', icon: Layout },
          { id: TabView.PILLARS, label: '3 Pillars', icon: Shield },
          { id: TabView.ETHICAL_USE, label: 'Ethical', icon: Scale },
          { id: TabView.AI_PROTOCOL, label: 'Protocol', icon: Rocket },
          { id: TabView.TOOLS, label: 'Tools', icon: BrainCircuit },
          { id: TabView.AI_PILOT, label: 'AI Pilot', icon: Sparkles }
        ].map(item => (
          <button 
            key={item.id} 
            onClick={() => setTab(item.id)} 
            className={`flex items-center px-3 py-2 rounded-md text-sm font-semibold transition-all ${
              currentTab === item.id ? 'bg-pilot-blue/10 text-pilot-blue' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon size={16} className="mr-1.5" />
            <span className={currentTab === item.id ? 'inline' : 'hidden md:inline'}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  </nav>
);

const LessonScaffolder = () => {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generatePlan = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a P.I.L.O.T protocol activity for ${subject} about ${topic}. Focus on AI as co-pilot. Output markdown.`,
      });
      setResult(response.text || "Failed to generate.");
    } catch (e) {
      setResult("Check district API configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
      <div className="bg-white rounded-[2rem] shadow-2xl border p-10">
        <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3">
          <Sparkles className="text-pilot-blue" /> AI Lesson Scaffolder
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input 
            value={subject} onChange={e => setSubject(e.target.value)}
            placeholder="Subject (e.g. 11th Grade Bio)" 
            className="w-full bg-slate-50 border-2 rounded-xl px-4 py-3 outline-none focus:border-pilot-blue"
          />
          <input 
            value={topic} onChange={e => setTopic(e.target.value)}
            placeholder="Topic (e.g. DNA Replication)" 
            className="w-full bg-slate-50 border-2 rounded-xl px-4 py-3 outline-none focus:border-pilot-blue"
          />
        </div>
        <button 
          onClick={generatePlan} disabled={loading || !subject}
          className="w-full bg-pilot-blue text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
          {loading ? 'Thinking...' : 'Generate Activity'}
        </button>
        {result && <div className="mt-8 p-6 bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-2xl whitespace-pre-wrap text-gray-700">{result}</div>}
      </div>
    </div>
  );
};

const App = () => {
  const [tab, setTab] = useState(TabView.HOME);

  const render = () => {
    switch (tab) {
      case TabView.PILLARS:
        return (
          <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
            <h2 className="text-4xl font-display font-bold text-center mb-12">The 3 Pillars for Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {[
                { id: '1iMZAtETmezwwOlm9rQdD-Y0lGpvGhedg', title: 'Educator Framework', icon: School },
                { id: '10N5NxD9Mc_6aWbB5WcUtB4yltRuy2YHh', title: 'Student Guide', icon: GraduationCap }
              ].map(img => (
                <div key={img.id} className="text-center">
                  <h3 className="text-xl font-bold mb-4 flex justify-center items-center gap-2 text-pilot-blue"><img.icon size={20}/> {img.title}</h3>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-2">
                    <img src={`https://drive.google.com/thumbnail?id=${img.id}&sz=w1000`} className="w-full" />
                    <a href={`https://drive.google.com/file/d/${img.id}/view`} target="_blank" className="block py-3 text-sm font-bold text-gray-500 hover:text-pilot-blue">Open Full Resource ↗</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: 'Safety', i: Lock, c: 'border-blue-500', p: ['Clear Policy', 'Transparency', 'Human Oversight'] },
                { t: 'Equality', i: Scale, c: 'border-amber-400', p: ['Inclusive Access', 'Same Opportunity', 'Bias Awareness'] },
                { t: 'Proficiency', i: Brain, c: 'border-purple-500', p: ['Pilot Mindset', 'Workflow Efficiency', 'Creative Boost'] }
              ].map(p => (
                <div key={p.t} className={`bg-white p-8 rounded-2xl shadow-lg border-t-8 ${p.c} hover:-translate-y-1 transition-all`}>
                  <p.i className="mb-4 text-pilot-dark" size={32} />
                  <h3 className="text-2xl font-display font-bold mb-4">{p.t}</h3>
                  <ul className="space-y-3">
                    {p.p.map(pt => <li key={pt} className="flex items-center gap-2 text-gray-600 font-medium"><CheckCircle2 className="text-green-500" size={16}/> {pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case TabView.ETHICAL_USE:
        return (
          <div className="max-w-5xl mx-auto px-4 py-12 animate-fadeIn">
            <div className="bg-pilot-blue rounded-[2.5rem] p-12 text-center text-white shadow-xl mb-12">
              <h2 className="text-4xl font-display font-bold mb-2 uppercase">Ethical AI Use</h2>
              <p className="text-blue-100 text-xl font-medium">"Play Smart, Don't Cheat."</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { id: '1q7ZLXz_B1QVr0CbWnGNUvZt8lzxNnDlD', t: 'Teacher Policy Guide' },
                { id: '1x-ygYvKLprseRXqvQEs7VJelB4DDRU-9', t: 'Student AI Checklist' }
              ].map(item => (
                <div key={item.id} className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                  <img src={`https://drive.google.com/thumbnail?id=${item.id}&sz=w800`} className="w-full rounded-xl mb-6 shadow-inner" />
                  <h4 className="font-bold text-lg mb-4 text-center">{item.t}</h4>
                  <a href={`https://drive.google.com/file/d/${item.id}/view`} target="_blank" className="bg-pilot-blue text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700">Download <Download size={20}/></a>
                </div>
              ))}
            </div>
          </div>
        );
      case TabView.AI_PROTOCOL:
        return (
          <div className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn">
            <h2 className="text-4xl font-display font-bold text-center mb-10 uppercase">The P.I.L.O.T. Protocol</h2>
            <img src="https://drive.google.com/thumbnail?id=1Y8uy_8YqFkYTQdZUPXhxek_MTFD8hWxe&sz=w1200" className="w-full rounded-3xl shadow-2xl mb-12 border-8 border-white" />
            <div className="space-y-4">
              {[
                { n: 1, t: 'Prompt Smart', d: "Demand understanding, not just answers.", c: 'bg-blue-600' },
                { n: 2, t: 'Investigate', d: "AI lies. Trust nothing. Verify everything.", c: 'bg-amber-500' },
                { n: 3, t: 'Learn Logic', d: "Focus on the 'Why', not just the 'What'.", c: 'bg-purple-600' },
                { n: 4, t: 'Own It', d: "Use your own voice for final drafts.", c: 'bg-green-600' },
                { n: 5, t: 'Test Solo', d: "Ensure you can perform without AI help.", c: 'bg-red-600' }
              ].map(s => (
                <div key={s.n} className="bg-white p-8 rounded-2xl shadow-md border flex items-center gap-6">
                  <div className={`${s.c} text-white w-14 h-14 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg`}>{s.n}</div>
                  <div><h4 className="font-bold text-xl">{s.t}</h4><p className="text-gray-500">{s.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        );
      case TabView.TOOLS:
        return (
          <div className="max-w-6xl mx-auto px-4 py-12 animate-fadeIn">
            <div className="bg-indigo-600 p-10 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between mb-12 shadow-xl">
               <div><h3 className="text-2xl font-bold flex items-center gap-2 mb-1"><FolderOpen /> Resource Drive</h3><p className="text-indigo-100">Posters, handouts, and district curriculum assets.</p></div>
               <a href={driveLink} target="_blank" className="mt-6 md:mt-0 px-8 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-lg">Open Drive</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {[
                 { t: 'Classroom AI', i: Sparkles, l: 'https://classroom.google.com/ai', c: 'bg-blue-600' },
                 { t: 'Educator Certs', i: Award, l: certificationsLink, c: 'bg-purple-600' },
                 { t: 'District Portal', i: LayoutGrid, l: 'http://aiapps.vvuhsd.org/', c: 'bg-teal-600' }
               ].map(tool => (
                 <div key={tool.t} className="bg-white p-10 rounded-3xl shadow-lg border text-center flex flex-col items-center">
                    <tool.i size={40} className={`mb-6 ${tool.c.replace('bg-', 'text-')}`} />
                    <h3 className="text-xl font-bold mb-6">{tool.t}</h3>
                    <a href={tool.l} target="_blank" className={`${tool.c} text-white w-full py-3 rounded-xl font-bold shadow-md`}>Visit Site</a>
                 </div>
               ))}
            </div>
            <iframe src="http://aiapps.vvuhsd.org/" className="w-full h-[600px] rounded-3xl shadow-2xl border-4 border-white" title="Hub" />
          </div>
        );
      case TabView.AI_PILOT: return <LessonScaffolder />;
      default: return (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center animate-fadeIn">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-gray-900 mb-8 tracking-tighter leading-tight">Equipping Students <br /><span className="gradient-text">for a Future with AI</span></h1>
          <p className="text-2xl text-gray-500 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">Moving from <span className="text-gray-900 font-bold italic underline decoration-red-500">"Autopilot"</span> to <span className="text-pilot-blue font-bold italic underline decoration-pilot-blue">"Pilot"</span>. A guide for VVUHSD.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-24">
            <button onClick={() => setTab(TabView.PILLARS)} className="bg-pilot-blue text-white px-12 py-5 rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center text-xl">Framework <ArrowRight className="ml-3" size={24} /></button>
            <button onClick={() => setTab(TabView.TOOLS)} className="border-4 border-gray-100 px-12 py-5 rounded-2xl font-bold bg-white text-gray-700 hover:bg-gray-50 shadow-xl text-xl">Teacher Tools</button>
          </div>
          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white max-w-5xl mx-auto">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/5VJj9hkUQe4" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900">
      <Navigation currentTab={tab} setTab={setTab} />
      <main className="flex-grow">{render()}</main>
      <footer className="bg-white border-t py-12 text-center text-gray-400 mt-20">
        <p className="font-bold text-lg mb-2">AI EduPilot Framework &copy; {new Date().getFullYear()}</p>
        <p className="text-sm italic">Victor Valley Union High School District</p>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);