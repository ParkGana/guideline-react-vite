import { useEffect } from 'react';
import { useThemeStore } from '../../stores/themeStore';

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    theme === 'light'
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark');
  }, []);

  /* 테마 Toggle */
  const handleToggleTheme = () => {
    toggleTheme();
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="text-body cursor-pointer" onClick={handleToggleTheme}>
      {theme.toLocaleUpperCase()}
    </div>
  );
};

export default ThemeButton;
