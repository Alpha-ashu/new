
import React, { useState, useEffect } from 'react';
import { Page, Session } from './types';
import { LogoIcon, PlayIcon, ArrowRightIcon, MicIcon, TargetIcon, SearchIcon, ChartIcon, DashboardIcon, BookIcon, BuildingIcon, ReportIcon, SettingsIcon, ChevronDownIcon } from './components/Icons';

// Page Components defined outside the main App component to prevent re-rendering issues.

interface HomePageProps {
  navigateToDashboard: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateToDashboard }) => {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-slate-50 gradient-bg">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LogoIcon className="w-8 h-8 text-cyan-400" />
          <h1 className="text-2xl font-bold text-slate-50">First Round AI</h1>
        </div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Testimonials</a>
          <button onClick={navigateToDashboard} className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-md transition-colors">
            Sign In
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 text-center pt-24 pb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-50">
          Your AI Interview Coach
        </h2>
        <p className="text-5xl md:text-6xl font-extrabold leading-tight text-cyan-400 text-glow mb-6">
          Practice. Analyze. Improve.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-10">
          Realistic mock interviews powered by advanced AI — prepare like a pro before the real one.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <button onClick={navigateToDashboard} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 glow">
            Start Free Mock Interview
          </button>
          <button className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
            <PlayIcon className="w-6 h-6 text-cyan-400" />
            <span>Watch Demo</span>
          </button>
        </div>
      </main>

      {/* Feature Highlights */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl">
            <TargetIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-Generated Questions</h3>
            <p className="text-slate-400">Get tailored questions for your target role and level.</p>
          </div>
          <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl">
            <SearchIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Real-Time Feedback</h3>
            <p className="text-slate-400">Receive instant analysis on clarity, relevance, and STAR framework usage.</p>
          </div>
          <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl">
            <ChartIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Detailed Reports</h3>
            <p className="text-slate-400">Track your progress and identify areas for improvement over time.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <section className="py-24 text-center">
        <h3 className="text-4xl font-bold mb-4">Ready to impress your next interviewer?</h3>
        <button onClick={navigateToDashboard} className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 glow">
          Start Your Free Session
        </button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-6 border-t border-slate-800 flex justify-between items-center text-slate-400">
        <div className="flex items-center space-x-2">
          <LogoIcon className="w-5 h-5" />
          <span>© 2024 First Round AI</span>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-cyan-400">About</a>
          <a href="#" className="hover:text-cyan-400">Privacy</a>
          <a href="#" className="hover:text-cyan-400">Terms</a>
        </div>
      </footer>
    </div>
  );
};

interface DashboardPageProps {
  navigateToInterview: () => void;
  navigateToHome: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ navigateToInterview, navigateToHome }) => {
    const recentSessions: Session[] = [
        { id: '1', role: 'QA Engineer', date: '2024-07-20', aiEngine: 'Gemini', score: 8.7, status: 'Completed' },
        { id: '2', role: 'Product Manager', date: '2024-07-18', aiEngine: 'Gemini', score: 9.1, status: 'Completed' },
        { id: '3', role: 'Frontend Developer', date: '2024-07-15', aiEngine: 'Gemini', score: 7.9, status: 'Completed' },
    ];

    const getRoleColor = (role: string) => {
        const colors = ['bg-blue-500/20 text-blue-300', 'bg-purple-500/20 text-purple-300', 'bg-green-500/20 text-green-300', 'bg-yellow-500/20 text-yellow-300'];
        let hash = 0;
        for (let i = 0; i < role.length; i++) {
            hash = role.charCodeAt(i) + ((hash << 5) - hash);
        }
        return colors[Math.abs(hash) % colors.length];
    };

    return (
        <div className="flex h-screen bg-slate-900 text-slate-50">
            {/* Sidebar */}
            <aside className="w-20 lg:w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col justify-between">
                <div>
                    <div className="flex items-center space-x-2 mb-10 px-2 cursor-pointer" onClick={navigateToHome}>
                        <LogoIcon className="w-8 h-8 text-cyan-400"/>
                        <h1 className="text-xl font-bold text-slate-50 hidden lg:block">First Round AI</h1>
                    </div>
                    <nav className="space-y-2">
                        <a href="#" className="flex items-center space-x-3 px-2 py-3 rounded-md bg-slate-800 text-cyan-400">
                            <DashboardIcon className="w-6 h-6" />
                            <span className="font-semibold hidden lg:block">Dashboard</span>
                        </a>
                         <a href="#" className="flex items-center space-x-3 px-2 py-3 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-50 transition-colors">
                            <MicIcon className="w-6 h-6" />
                            <span className="font-semibold hidden lg:block">Mock Interview</span>
                        </a>
                         <a href="#" className="flex items-center space-x-3 px-2 py-3 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-50 transition-colors">
                            <BookIcon className="w-6 h-6" />
                            <span className="font-semibold hidden lg:block">Study Plan</span>
                        </a>
                         <a href="#" className="flex items-center space-x-3 px-2 py-3 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-50 transition-colors">
                            <BuildingIcon className="w-6 h-6" />
                            <span className="font-semibold hidden lg:block">Company Brief</span>
                        </a>
                         <a href="#" className="flex items-center space-x-3 px-2 py-3 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-50 transition-colors">
                            <ReportIcon className="w-6 h-6" />
                            <span className="font-semibold hidden lg:block">Reports</span>
                        </a>
                    </nav>
                </div>
                 <div>
                    <a href="#" className="flex items-center space-x-3 px-2 py-3 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-50 transition-colors">
                        <SettingsIcon className="w-6 h-6" />
                        <span className="font-semibold hidden lg:block">Settings</span>
                    </a>
                </div>
            </aside>

            {/* Main Panel */}
            <main className="flex-1 p-8 overflow-y-auto relative">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-3xl font-bold">Welcome back, Alex!</h2>
                        <p className="text-slate-400">Let's continue your journey to interview mastery.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img src="https://picsum.photos/40/40" alt="User Avatar" className="w-10 h-10 rounded-full"/>
                        <ChevronDownIcon className="w-5 h-5 text-slate-400"/>
                    </div>
                </header>

                {/* Metrics Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl transition-transform hover:scale-105">
                        <h4 className="text-slate-400 mb-1">Avg. Clarity Score</h4>
                        <p className="text-3xl font-bold text-cyan-400">8.2</p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl transition-transform hover:scale-105">
                        <h4 className="text-slate-400 mb-1">Avg. Relevance Score</h4>
                        <p className="text-3xl font-bold text-blue-400">8.6</p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl transition-transform hover:scale-105">
                        <h4 className="text-slate-400 mb-1">Completed Interviews</h4>
                        <p className="text-3xl font-bold">12</p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl transition-transform hover:scale-105">
                        <h4 className="text-slate-400 mb-1">Hours Practiced</h4>
                        <p className="text-3xl font-bold">6.4h</p>
                    </div>
                </section>

                {/* Quick Actions */}
                 <section className="flex space-x-4 mb-8">
                    <button onClick={navigateToInterview} className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 glow">Start New Mock Interview</button>
                    <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 px-6 rounded-lg transition-colors">View My Reports</button>
                    <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-3 px-6 rounded-lg transition-colors">Generate Study Plan</button>
                </section>

                {/* Recent Sessions */}
                <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Recent Sessions</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-700 text-slate-400">
                                    <th className="p-3">Role</th>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">AI Engine</th>
                                    <th className="p-3">Score</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentSessions.map(session => (
                                    <tr key={session.id} className="border-b border-slate-800 hover:bg-slate-800/50">
                                        <td className="p-3 font-semibold"><span className={`px-2 py-1 rounded-full text-sm ${getRoleColor(session.role)}`}>{session.role}</span></td>
                                        <td className="p-3 text-slate-400">{session.date}</td>
                                        <td className="p-3 text-slate-400">{session.aiEngine}</td>
                                        <td className="p-3 font-semibold text-cyan-400">{session.score}</td>
                                        <td className="p-3"><span className="text-green-400">{session.status}</span></td>
                                        <td className="p-3 text-right">
                                            <button className="text-cyan-400 hover:text-cyan-300 font-semibold">View Report</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <button onClick={navigateToInterview} className="fixed bottom-8 right-8 bg-cyan-500 rounded-full p-4 shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-110 glow">
                    <MicIcon className="w-8 h-8 text-slate-900"/>
                </button>
            </main>
        </div>
    );
};

interface InterviewPageProps {
  navigateToDashboard: () => void;
}

const AudioVisualizer = () => {
    return (
        <div className="flex justify-center items-center space-x-2 h-24">
            {Array.from({ length: 40 }).map((_, i) => (
                <div
                    key={i}
                    className="w-1.5 bg-cyan-500/50 rounded-full"
                    style={{
                        height: `${Math.sin(i * 0.4) * 30 + 40}%`,
                        animation: `wave 1.2s ease-in-out ${i * 0.05}s infinite alternate`,
                    }}
                ></div>
            ))}
            <style jsx>{`
                @keyframes wave {
                    from { transform: scaleY(0.5); opacity: 0.5; }
                    to { transform: scaleY(1); opacity: 1; }
                }
            `}</style>
        </div>
    );
};


const InterviewPage: React.FC<InterviewPageProps> = ({ navigateToDashboard }) => {
  const [warning, setWarning] = useState<string | null>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setWarning("Tab switch detected — Warning 1/3.");
        setTimeout(() => setWarning(null), 4000);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);


    return (
        <div className="flex flex-col h-screen bg-black text-slate-50 p-6">
            {/* Header */}
            <header className="flex justify-between items-center w-full mb-8">
                <button onClick={navigateToDashboard} className="text-slate-400 hover:text-slate-50 transition-colors">
                    &larr; End Session
                </button>
                <div className="text-xl font-mono bg-slate-900 px-4 py-2 rounded-lg border border-slate-700">04:23</div>
                <div className="text-slate-400">AI Engine: <span className="font-semibold text-cyan-400">Gemini</span></div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col justify-center items-center text-center">
                <div className="w-full max-w-4xl p-8 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl">
                    <div className="text-sm text-slate-400 mb-2">Q1 of 3 | Type: Behavioral</div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                        "Tell me about a time you solved a tough bug."
                    </h1>
                </div>

                <div className="my-12 w-full">
                    <AudioVisualizer />
                </div>
                
                <div className="h-16 text-slate-400 text-lg">
                    Real-time transcript will appear here...
                </div>
            </main>

            {/* Controls */}
            <footer className="w-full flex justify-center items-center space-x-8">
                <button className="bg-slate-800 p-4 rounded-full text-slate-400 hover:text-white transition-colors">Replay Question</button>
                <button className="bg-red-600 p-8 rounded-full text-white transition-transform hover:scale-105 glow" style={{boxShadow: '0 0 15px #EF4444'}}>
                    <MicIcon className="w-10 h-10" />
                </button>
                <button className="bg-slate-800 p-4 rounded-full text-slate-400 hover:text-white transition-colors">Next Question</button>
            </footer>

            {/* Warning Banner */}
             {warning && (
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400/20 border border-yellow-500 text-yellow-300 px-6 py-3 rounded-lg text-sm animate-fade-in-out">
                    {warning}
                </div>
            )}
             <style jsx>{`
                @keyframes fade-in-out {
                    0%, 100% { opacity: 0; transform: translateY(10px) translateX(-50%); }
                    10%, 90% { opacity: 1; transform: translateY(0) translateX(-50%); }
                }
                .animate-fade-in-out {
                    animation: fade-in-out 4s ease-in-out;
                }
            `}</style>
        </div>
    );
};


function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const navigateToDashboard = () => setCurrentPage(Page.Dashboard);
  const navigateToInterview = () => setCurrentPage(Page.Interview);
  const navigateToHome = () => setCurrentPage(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage navigateToDashboard={navigateToDashboard} />;
      case Page.Dashboard:
        return <DashboardPage navigateToInterview={navigateToInterview} navigateToHome={navigateToHome} />;
      case Page.Interview:
        return <InterviewPage navigateToDashboard={navigateToDashboard} />;
      default:
        return <HomePage navigateToDashboard={navigateToDashboard} />;
    }
  };

  return (
    <div className="bg-slate-900">
      {renderPage()}
    </div>
  );
}

export default App;
