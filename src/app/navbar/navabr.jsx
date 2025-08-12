'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

// Icon components
const DashboardIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const ConferencesIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
  </svg>
);

const SpeakersIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
  </svg>
);

const SponsorsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

const MarketingIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const ReportsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.83 2.83l4.24 4.24M14.83 2.83l-4.24 4.24M20.83 12.83l-4.24-4.24M10.83 12.83l4.24-4.24M2.83 12.83l4.24 4.24M12.83 20.83l4.24-4.24M12.83 2.83l-4.24 4.24" />
  </svg>
);

const PowerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const Navbar = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'conferences', label: 'Conferences', icon: ConferencesIcon },
    { id: 'speakers', label: 'Speakers', icon: SpeakersIcon },
    { id: 'sponsors', label: 'Sponsors', icon: SponsorsIcon },
    { id: 'marketing', label: 'Marketing', icon: MarketingIcon, hasDropdown: true },
    { id: 'reports', label: 'Reports', icon: ReportsIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon, hasDropdown: true },
  ];

  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
      const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialDark = stored ? stored === 'dark' : prefersDark;
      setIsDark(initialDark);
      if (initialDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {}
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        if (next) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      } catch {}
      return next;
    });
  };

  const routeToId = (path) => {
    if (!path) return 'dashboard';
    if (path.startsWith('/dashboard')) return 'dashboard';
    if (path.startsWith('/conferences')) return 'conferences';
    if (path.startsWith('/speakers')) return 'speakers';
    if (path.startsWith('/sponsors')) return 'sponsors';
    if (path.startsWith('/reports')) return 'reports';
    return 'dashboard';
  };

  const activeItem = routeToId(pathname);

  const activeClasses = isDark
    ? 'bg-blue-900/40 text-blue-300 border-l-4 border-blue-400 active'
    : 'bg-blue-100 text-blue-800 border-l-4 border-blue-500 active';
  const inactiveClasses = 'text-white hover:bg-gray-700';

  return (
    <div className={`flex h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-100'} navbar-container`}>
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white sidebar">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Scientary Ally Meetings logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
              priority
            />
            <h1 className="text-xl font-bold">Scientary Ally Meetings</h1>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="mt-6">
          {navItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.hasDropdown) {
                    if (item.id === 'marketing') setMarketingOpen(!marketingOpen);
                    if (item.id === 'settings') setSettingsOpen(!settingsOpen);
                  } else if (item.id === 'dashboard') {
                    router.push('/dashboard');
                  } else if (item.id === 'conferences') {
                    router.push('/conferences');
                  } else if (item.id === 'speakers') {
                    router.push('/speakers');
                  } else if (item.id === 'sponsors') {
                    router.push('/sponsors');
                  } else if (item.id === 'reports') {
                    router.push('/reports');
                  }
                }}
                className={`w-full flex items-center justify-between px-6 py-3 text-left nav-item ${
                  activeItem === item.id ? activeClasses : inactiveClasses
                }`}
              >
                <div className="flex items-center">
                  <item.icon />
                  <span className="ml-3">{item.label}</span>
                </div>
                {item.hasDropdown && (
                  <ChevronDownIcon />
                )}
              </button>
              
              {/* Dropdown items for Marketing */}
              {item.id === 'marketing' && marketingOpen && (
                <div className="bg-gray-900 border-t border-gray-700 dropdown-content">
                  <Link href="/marketing/email" className="block px-6 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white">
                    Email Marketing
                  </Link>
                  <Link href="/marketing/whatsapp" className="block px-6 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white">
                    Whatsapp
                  </Link>
                  <Link href="/marketing/sms" className="block px-6 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white">
                    Bulk SMS
                  </Link>
                </div>
              )}
              
              {/* Dropdown items for Settings */}
              {item.id === 'settings' && settingsOpen && (
                <div className="bg-gray-900 border-t border-gray-700 dropdown-content">
                  <Link href="/settings/profile" className="block px-6 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white">
                    Profile
                  </Link>
                  <Link href="/settings/payment-gateway" className="block px-6 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white">
                    Payment Gateway
                  </Link>
                  <Link href="/settings/third-party-api" className="block px-6 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white">
                    3rd Party API Integration
                  </Link>
                  <Link href="/settings/cache-cookies" className="block px-6 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-white">
                    Cache/Cookies
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col main-content">
        {/* Top Navigation Bar */}
        <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm border-b px-6 py-4`}>
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Welcome To Scientary Ally Meetings</h2>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Icons */}
              <button className={`p-2 rounded-full icon-button ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}>
                <SearchIcon />
              </button>
              <button className={`p-2 rounded-full icon-button ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}>
                <BellIcon />
              </button>
              <button className={`p-2 rounded-full icon-button ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}>
                <PowerIcon />
              </button>
              <button onClick={toggleTheme} aria-label="Toggle theme" className={`p-2 rounded-full icon-button ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}>
                {isDark ? <MoonIcon /> : <SunIcon />}
              </button>

              {/* User Info */}
              <div className="flex items-center space-x-3 ml-4">
                <span className={`${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Hey, Lavanya Admin</span>
                <div className={`w-10 h-10 ${isDark ? 'bg-blue-600' : 'bg-blue-500'} rounded-full flex items-center justify-center avatar`}>
                  <span className="text-white font-bold">L</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {children ? (
            children
          ) : (
            <div className={`${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'} rounded-lg shadow p-6`}>
              <h3 className="text-lg font-semibold mb-4">Dashboard Content</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                This is the main content area. The navigation system is now complete with both sidebar and top navigation bar.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;