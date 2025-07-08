import { ThemeProvider } from 'styled-components';
import AuthProvider from './providers/authProvider';
import { darkTheme, theme as lightTheme } from './styles/theme';
import { useThemeStore } from './stores/themeStore';
import QueryProvider from './providers/queryProvider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <QueryProvider>
        <AuthProvider>{children}</AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default Provider;
