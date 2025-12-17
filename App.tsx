import React, { useState } from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import Pillars from './components/Pillars.tsx';
import StudentGuide from './components/StudentGuide.tsx';
import PilotProtocol from './components/PilotProtocol.tsx';
import Tools from './components/Tools.tsx';
import { TabView } from './types.ts';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabView>(TabView.HOME);

  const renderContent = () => {
    switch (currentTab) {
      case TabView.HOME:
        return <Hero setTab={setCurrentTab} />;
      case TabView.PILLARS:
        return <Pillars />;
      case TabView.ETHICAL_USE:
        return <StudentGuide />;
      case TabView.PILOT_PROTOCOL:
        return <PilotProtocol />;
      case TabView.TOOLS:
        return <Tools />;
      default:
        return <Hero setTab={setCurrentTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900">
      <Navigation currentTab={currentTab} setTab={setCurrentTab} />
      <main className="flex-grow animate-fadeIn">
        {renderContent()}
      </main>
      <footer className="bg-white border-t border-gray-200 py-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} AI EduPilot. Designed for Educators.</p>
        <p className="text-xs mt-2">VVUHSD AI Implementation Framework</p>
      </footer>
    </div>
  );
};

export default App;