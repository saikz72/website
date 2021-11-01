import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Container, IconButton, Tooltip } from '@mui/material';

type NavbarProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
};

function Navbar(props: NavbarProps) {
  const { setTheme, theme } = props;
  const globalTheme = useTheme();

  const handleThemeToggle = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const ThemeIcon = () => {
    return theme === 'light' ? (
      <Tooltip title="Toogle to dark mode">
        <LightModeIcon style={{}} onClick={handleThemeToggle} />
      </Tooltip>
    ) : (
      <Tooltip title="Toogle to light mode">
        <DarkModeIcon onClick={handleThemeToggle} />
      </Tooltip>
    );
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ color: 'lightGreen' }}>
            Saikou Ceesay
          </Typography>

          <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" color="secondary" href="#AboutMe">
              About Me
            </Button>
            <Button variant="outlined" color="secondary" href="#Experience">
              Experiences
            </Button>
            <Button variant="outlined" color="secondary" href="#Project">
              Projects
            </Button>
            <Button variant="outlined" color="secondary" href="#Contact">
              Get in touch
            </Button>
            <Button target="_blank" href="#" color="secondary" variant="outlined">
              Resume
            </Button>
          </Container>
          <IconButton color="primary">
            <ThemeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
