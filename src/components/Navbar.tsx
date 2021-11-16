import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CodeIcon from '@mui/icons-material/Code';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkIcon from '@mui/icons-material/Work';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, Link, ListItemIcon, MenuItem, Stack, Tooltip } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

type NavbarProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
};

function Navbar(props: NavbarProps) {
  const { setTheme, theme } = props;
  const matches = useMediaQuery('(min-width:600px)');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeToggle = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const ThemeIcon = () => {
    return theme === 'light' ? (
      <Tooltip title="Toogle to dark mode">
        <LightModeIcon color="secondary" onClick={handleThemeToggle} />
      </Tooltip>
    ) : (
      <Tooltip title="Toogle to light mode">
        <DarkModeIcon color="secondary" onClick={handleThemeToggle} />
      </Tooltip>
    );
  };

  const menuToolTip = (
    <Tooltip title="Account settings">
      <IconButton onClick={handleMenuClick} size="small" sx={{ ml: 2 }}>
        <MenuIcon color="secondary" />
      </IconButton>
    </Tooltip>
  );

  const webView = (
    <div>
      <CssBaseline />
      <AppBar color="default" position="absolute" enableColorOnDark={true} elevation={0}>
        <Toolbar>
          {/** Header for mobile view */}
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
      <Toolbar />
    </div>
  );

  const mobileView = (
    <div>
      <CssBaseline />
      <AppBar color="primary" position="absolute" enableColorOnDark elevation={0}>
        <Toolbar>
          <Typography color="secondary" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Saikou Ceesay
          </Typography>
          {menuToolTip}
          <Menu
            color="secondary"
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="#AboutMe" color="secondary">
                <ListItemIcon>
                  <HomeIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="#Experience" color="secondary">
                <ListItemIcon>
                  <WorkIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                Experiences
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="#Project" color="secondary">
                <ListItemIcon>
                  <CodeIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                Projects
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="#Contact" color="secondary">
                <ListItemIcon>
                  <ContactSupportIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                Contacts
              </Link>
            </MenuItem>
          </Menu>
          <IconButton color="secondary">
            <Stack>
              <ThemeIcon />
            </Stack>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );

  return matches ? webView : mobileView;
}

export default Navbar;
