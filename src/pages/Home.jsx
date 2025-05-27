import React, { useState } from 'react';

function Home() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const handleNavClick = (section) => {
        alert(`Navigating to ${section} - Router integration needed`);
    };

    const handleGetStarted = () => {
        alert('Get Started clicked - Add your onboarding logic here');
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode
                ? 'bg-gray-900 text-white'
                : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'
            }`}>
            {/* Navigation */}
            <nav className={`px-6 py-4 shadow-lg transition-colors duration-300 ${darkMode
                    ? 'bg-gray-800 border-b border-gray-700'
                    : 'bg-white/80 backdrop-blur-sm border-b border-blue-100'
                }`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h2 className="text-2xl font-bold">
                        Study<span className="text-blue-500">Buddy</span>
                    </h2>
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={() => handleNavClick('Home')}
                            className={`hover:text-blue-500 transition-colors font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'
                                }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => handleNavClick('Dashboard')}
                            className={`hover:text-blue-500 transition-colors ${darkMode ? 'hover:text-blue-400' : ''
                                }`}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => handleNavClick('Goals')}
                            className={`hover:text-blue-500 transition-colors ${darkMode ? 'hover:text-blue-400' : ''
                                }`}
                        >
                            Goals
                        </button>
                        <button
                            onClick={() => handleNavClick('Quotes')}
                            className={`hover:text-blue-500 transition-colors ${darkMode ? 'hover:text-blue-400' : ''
                                }`}
                        >
                            Quotes
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${darkMode
                                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                                    : 'bg-gray-800 text-white hover:bg-gray-700'
                                }`}
                        >
                            {darkMode ? '☀️ Light' : '🌙 Dark'}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode
                                    ? 'text-white'
                                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
                                }`}>
                                Track Your Study Progress
                            </h1>
                            <p className={`text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                StudyBuddy helps you manage your study time, set goals, and stay motivated
                                with personalized tracking and insights.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleGetStarted}
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl 
                                         transition-all transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-blue-300"
                            >
                                🚀 Get Started
                            </button>
                            <button
                                onClick={() => handleNavClick('Demo')}
                                className={`px-8 py-4 font-semibold rounded-xl transition-all transform hover:scale-105 ${darkMode
                                        ? 'border-2 border-gray-600 text-gray-300 hover:border-gray-500'
                                        : 'border-2 border-blue-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50'
                                    }`}
                            >
                                View Demo
                            </button>
                        </div>

                        {/* Feature highlights */}
                        <div className="grid grid-cols-2 gap-4 pt-8">
                            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white/60'
                                }`}>
                                <div className="text-2xl mb-2">📊</div>
                                <h3 className="font-semibold mb-1">Progress Tracking</h3>
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Monitor your study sessions
                                </p>
                            </div>
                            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white/60'
                                }`}>
                                <div className="text-2xl mb-2">🎯</div>
                                <h3 className="font-semibold mb-1">Goal Setting</h3>
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Set and achieve targets
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image/Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <div className={`relative p-8 rounded-3xl ${darkMode
                                ? 'bg-gradient-to-br from-gray-800 to-gray-700'
                                : 'bg-gradient-to-br from-white to-blue-50'
                            } shadow-2xl`}>
                            {/* Robot Illustration */}
                            <div className="w-80 h-80 flex items-center justify-center">
                                <div className="text-8xl animate-pulse">🤖</div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute top-4 right-4 text-2xl animate-bounce">📚</div>
                            <div className="absolute bottom-4 left-4 text-2xl animate-bounce delay-150">✨</div>
                            <div className="absolute top-1/2 left-0 text-xl animate-bounce delay-300">📝</div>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            10K+
                        </div>
                        <div className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Active Students
                        </div>
                    </div>
                    <div className="text-center">
                        <div className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            50K+
                        </div>
                        <div className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Study Hours Tracked
                        </div>
                    </div>
                    <div className="text-center">
                        <div className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            95%
                        </div>
                        <div className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Goal Achievement Rate
                        </div>
                    </div>
                </div>
            </main>

            {/* Quote Section */}
            <section className={`py-16 ${darkMode
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                    : 'bg-gradient-to-br from-blue-600 to-indigo-600'
                }`}>
                <div className="container mx-auto px-5">
                    <div className={`rounded-lg p-10 text-center max-w-3xl mx-auto shadow-lg ${darkMode
                            ? 'bg-gray-800 shadow-black/20'
                            : 'bg-white shadow-black/10'
                        }`}>
                        <blockquote className={`text-2xl italic mb-5 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                            }`}>
                            "The secret of getting ahead is getting started."
                        </blockquote>
                        <p className={`font-semibold mb-7 ${darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>
                            - Mark Twain
                        </p>
                        <button
                            onClick={() => alert('New quote feature coming soon!')}
                            className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:shadow-lg hover:-translate-y-1 duration-300 ${darkMode
                                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                }`}
                        >
                            New Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`py-20 text-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'
                }`}>
                <div className="container mx-auto px-5 max-w-4xl">
                    <h2 className={`text-3xl mb-5 font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                        Ready to boost your productivity?
                    </h2>
                    <p className={`text-lg mb-8 mx-auto max-w-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Start tracking your study progress today and achieve your academic goals.
                    </p>
                    <button
                        onClick={() => alert('Account creation coming soon!')}
                        className="px-8 py-3 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:-translate-y-1 transition-all transform duration-300"
                    >
                        Create Account
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className={`pt-16 pb-5 shadow-inner ${darkMode
                    ? 'bg-gray-800 shadow-black/20'
                    : 'bg-white shadow-black/10'
                }`}>
                <div className="container mx-auto px-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

                        {/* Footer Logo */}
                        <div>
                            <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                                }`}>
                                Study<span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Buddy</span>
                            </h2>
                            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                                Your personal study companion
                            </p>
                        </div>

                        {/* Footer Links */}
                        <div>
                            <h3 className={`mb-5 font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'
                                }`}>
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                {["Home", "Dashboard", "Goals", "Quotes"].map((link) => (
                                    <li key={link}>
                                        <button
                                            onClick={() => handleNavClick(link)}
                                            className={`transition-colors ${darkMode
                                                    ? 'text-gray-400 hover:text-blue-400'
                                                    : 'text-gray-600 hover:text-blue-600'
                                                }`}
                                        >
                                            {link}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className={`mb-5 font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'
                                }`}>
                                Contact
                            </h3>
                            <p className={`mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Email: info@studybuddy.com
                            </p>
                            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Follow us on social media
                            </p>
                            <div className="flex space-x-5 text-2xl">
                                <button
                                    onClick={() => alert('Social media links coming soon!')}
                                    aria-label="Twitter"
                                    className="hover:-translate-y-1 transition-transform"
                                >
                                    🐦
                                </button>
                                <button
                                    onClick={() => alert('Social media links coming soon!')}
                                    aria-label="Facebook"
                                    className="hover:-translate-y-1 transition-transform"
                                >
                                    📘
                                </button>
                                <button
                                    onClick={() => alert('Social media links coming soon!')}
                                    aria-label="Instagram"
                                    className="hover:-translate-y-1 transition-transform"
                                >
                                    📷
                                </button>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div>
                            <h3 className={`mb-5 font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'
                                }`}>
                                Newsletter
                            </h3>
                            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Get study tips and updates
                            </p>
                            <div className="flex flex-col space-y-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`px-3 py-2 rounded-lg border transition-colors ${darkMode
                                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400'
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                                />
                                <button
                                    onClick={() => alert('Newsletter signup coming soon!')}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`border-t pt-5 text-center ${darkMode
                            ? 'border-gray-700 text-gray-400'
                            : 'border-gray-200 text-gray-600'
                        }`}>
                        <p>© 2025 StudyBuddy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;