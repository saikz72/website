import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Contact from './components/Contact';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { useState } from 'react';

const lightTheme: Theme = createTheme({
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
    },
    text: {
      primary: '#000',
    },
  },
});

const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: blue[500],
    },
    background: {
      paper: 'black',
    },
    text: {
      primary: '#fff',
    },
  },
});

function App() {
  const [theme, setTheme] = useState<string>('light');

  const globalTheme = theme === 'light' ? lightTheme : darkTheme;
  console.log('pressed');

  return (
    <ThemeProvider theme={globalTheme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <AboutMe />
      <Experience />
      <Project />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
