import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CodeIcon from '@mui/icons-material/Code';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useTheme } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, Link, Slide, Stack, Tooltip, useScrollTrigger } from '@mui/material';
import PropTypes from 'prop-types';

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
  function HideOnScroll(props: any) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar color="default" position="sticky" enableColorOnDark={true} elevation={0}>
          <Toolbar>
            <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Saikou Ceesay
            </Typography>
            <Link color="secondary" href="#AboutMe">
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: 2 }}>
                <HomeIcon />
                <Typography>About</Typography>
              </Stack>
            </Link>
            <Link color="secondary" href="#Experience">
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: 2 }}>
                <WorkIcon />
                <Typography>Experiences</Typography>
              </Stack>
            </Link>
            <Link color="secondary" href="#Project">
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: 2 }}>
                <CodeIcon />
                <Typography>Projects</Typography>
              </Stack>
            </Link>
            <Link color="secondary" href="#Contact">
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: 2 }}>
                <ContactSupportIcon />
                <Typography>Contact</Typography>
              </Stack>
            </Link>
            <Link color="secondary" target="_blank" href="#">
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingRight: 2 }}>
                <AttachFileIcon />
                <Typography>Resume</Typography>
              </Stack>
            </Link>
            <IconButton color="primary">
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ThemeIcon />
              </Stack>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;
