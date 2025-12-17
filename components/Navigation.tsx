import React from 'react';
import { TabView } from '../types.ts';
import { Layout, Shield, BrainCircuit, Rocket, Scale } from 'lucide-react';

interface NavigationProps {
  currentTab: TabView;
  setTab: (tab: TabView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentTab, setTab }) => {
  const logoUrl = "https://drive.google.com/thumbnail?id=1Uxyl8RlVy9N8BqNthfBZzLNa9GgDMD-l&sz=w400";
  
  const navItems = [
    { id: TabView.HOME, label: 'Home', icon: Layout },
    { id: TabView.PILLARS, label: '3 Pillars', icon: Shield },
    { id: TabView.ETHICAL_USE, label: 'Ethical Use', icon: Scale },
    { id: TabView.PILOT_PROTOCOL, label: 'AI Protocol', icon: Rocket },
    { id: TabView.TOOLS, label: 'Tools', icon: BrainCircuit },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setTab(TabView.HOME)}>
            <img 
              src={logoUrl} 
              alt="AI EduPilot Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
              }}
            />
            <Rocket className="fallback-icon h-8 w-8 text-pilot-blue mr-2 hidden" />
          </div>
          
          <div className="flex space-x-1 sm:space-x-4 overflow-x-auto no-scrollbar items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-pilot-blue/10 text-pilot-blue'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`h-4 w-4 sm:mr-2 ${isActive ? 'text-pilot-blue' : 'text-gray-500'}`} />
                  <span className={`${isActive ? 'inline' : 'hidden sm:inline'}`}>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;