import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Footer from './components/Footer';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import { Divider } from '@mui/material';

/*Common Theme configuration for both dark and light mode */
const commonTheme: any = {
  typography: {
    fontSize: 11.5,
  },
};

/*Light Theme configuration */
const lightTheme: Theme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
    },
    secondary: {
      main: blue[500],
    },
    background: {
      paper: 'white',
      default: '#EEEEEE',
    },
    text: {
      primary: '#000',
    },
  },
});

/*Dark Theme configuration */
const darkTheme: Theme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      paper: '#001E3C',
      default: '#0A1929',
    },
    text: {
      primary: '#fff',
    },
  },
});

function App() {
  const [theme, setTheme] = useState<string>('dark');
  console.log(darkTheme);
  console.log(lightTheme);
  const globalTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={globalTheme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <AboutMe />
      <Divider light />
      <Experience />
      <Divider light />
      <Project />
      <Divider light />
      <Footer />
      <Divider light />
    </ThemeProvider>
  );
}

export default App;
