import React from 'react';
import { MousePointerClick, Search, HelpCircle, PenTool, ClipboardCheck, ArrowRight } from 'lucide-react';

const PilotProtocol: React.FC = () => {
  const infographicUrl = "https://drive.google.com/thumbnail?id=1Y8uy_8YqFkYTQdZUPXhxek_MTFD8hWxe&sz=w1200";
  
  const steps = [
    {
      id: '1',
      title: 'Prompt Smart',
      icon: MousePointerClick,
      desc: "Don't beg for answers. Demand understanding.",
      examples: ["'Give me a hint, not the solution.'", "'Create an outline, I'll write the essay.'"],
      color: 'bg-blue-600',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-100'
    },
    {
      id: '2',
      title: 'Investigate',
      icon: Search,
      desc: "AI lies. Trust nothing. Verify everything.",
      examples: ["Fact-check every citation.", "Cross-reference with your notes."],
      color: 'bg-amber-600',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-100'
    },
    {
      id: '3',
      title: 'Learn Logic',
      icon: HelpCircle,
      desc: "Get the 'Why', not just the 'What'.",
      examples: ["'Explain why this formula works.'", "'What is the context?'"],
      color: 'bg-purple-600',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-100'
    },
    {
      id: '4',
      title: 'Own It',
      icon: PenTool,
      desc: "Close the tab. Use your own voice.",
      examples: ["Synthesize, don't summarize.", "Write the final draft solo."],
      color: 'bg-green-600',
      textColor: 'text-green-700',
      borderColor: 'border-green-100'
    },
    {
      id: '5',
      title: 'Test Solo',
      icon: ClipboardCheck,
      desc: "Cut the cord. Can you do it alone?",
      examples: ["Try a new problem without AI.", "Teach it to a friend."],
      color: 'bg-red-600',
      textColor: 'text-red-700',
      borderColor: 'border-red-100'
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-display font-bold text-gray-900 tracking-tight mb-4">The AI Protocol</h2>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-medium">5 Steps to AI Mastery</p>
        <div className="w-24 h-1 bg-pilot-blue mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Main Infographic Section */}
      <div className="mb-16 flex justify-center">
        <div className="relative group w-full max-w-4xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100">
            <img 
              src={infographicUrl} 
              alt="The P.I.L.O.T. Protocol Flight Plan Infographic" 
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-4 right-4">
              <a 
                href="https://drive.google.com/file/d/1Y8uy_8YqFkYTQdZUPXhxek_MTFD8hWxe/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 shadow-sm border border-gray-200 hover:bg-white transition-all flex items-center gap-2"
              >
                View High Res <span className="text-pilot-blue text-lg leading-none">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            
            {/* Left Identifier Section */}
            <div className={`md:w-24 ${step.color} p-4 flex flex-col items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-4xl font-display font-bold">{step.id}</span>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center mb-2">
                        {React.createElement(step.icon, { size: 24, className: `mr-3 ${step.textColor}` })}
                        <h3 className={`text-2xl font-bold ${step.textColor}`}>{step.title}</h3>
                    </div>
                    <p className="text-xl text-gray-800 font-bold leading-tight">{step.desc}</p>
                </div>
                
                <div className={`bg-gray-50 rounded-lg p-4 border ${step.borderColor} md:w-80 shrink-0`}>
                    <ul className="space-y-2">
                        {step.examples.map((ex, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600 font-medium">
                                <ArrowRight className={`h-4 w-4 mr-2 flex-shrink-0 mt-0.5 ${step.textColor}`} />
                                <span>{ex}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-block bg-gray-900 rounded-2xl p-8 text-white shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-2">Ready to Fly?</h3>
            <p className="text-gray-300 text-lg">Follow the plan. Own the result.</p>
        </div>
      </div>
    </div>
  );
};

export default PilotProtocol;