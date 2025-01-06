import { useState } from 'react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Settings</h1>
        <div className="mt-6">
          <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Appearance</h2>
              <div className="mt-4">
                <label htmlFor="dark-mode" className="flex items-center">
                  <input
                    id="dark-mode"
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleDarkModeToggle}
                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2 text-sm text-gray-900 dark:text-gray-100">Enable Dark Mode</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Add more settings sections here */}
      </div>
    </div>
  );
}