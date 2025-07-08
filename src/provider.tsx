import { ThemeProvider } from 'styled-components';
import AuthProvider from './providers/authProvider';
import { theme } from './styles/theme';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};

export default Provider;
