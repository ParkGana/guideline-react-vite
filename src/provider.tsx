import { ThemeProvider } from 'styled-components';
import AuthProvider from './providers/authProvider';
import { darkTheme, theme as lightTheme } from './styles/theme';
import { useThemeStore } from './stores/themeStore';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default Provider;
