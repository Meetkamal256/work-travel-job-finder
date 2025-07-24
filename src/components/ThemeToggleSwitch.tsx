import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex justify-end w-full mb-4 sm:mb-6">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 shadow-md"
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? (
          <FaSun className="text-yellow-400" size={20} />
        ) : (
          <FaMoon className="text-gray-800" size={20} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleSwitch;
