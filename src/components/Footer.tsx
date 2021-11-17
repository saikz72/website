import { Stack, Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

type FooterProps = {};

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://saikz72.github.io/website/">
        saikouceesay.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = (props: FooterProps) => {
  return (
    <Box
      id="Contact"
      sx={{ py: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <Typography sx={{ py: 4 }}>Built by Saikou Ceesay. Want to get in touch?</Typography>
      <Stack direction="row" sx={{ display: 'flex', gap: '20px', mb: 2 }}>
        <Link href="https://www.github.com/saikz72" target="_blank">
          <Tooltip title="Visit my github profile">
            <GitHubIcon />
          </Tooltip>
        </Link>
        <Link href="https://www.linkedIn.com/in/saikz72" target="_blank">
          <Tooltip title="Visit my linkedIn profile">
            <LinkedInIcon />
          </Tooltip>
        </Link>
        <Link href="mailto: ceesaysaikou72@gmail.com" target="_blank">
          <Tooltip title="Send me an email">
            <MailIcon />
          </Tooltip>
        </Link>
        <Link href="https://twitter.com/saikz72" target="_blank">
          <Tooltip title="Visit my twitter profile">
            <TwitterIcon />
          </Tooltip>
        </Link>
        <Link href="https://www.instagram.com/saikz72/" target="_blank">
          <Tooltip title="Visit my instagram profile">
            <InstagramIcon />
          </Tooltip>
        </Link>
      </Stack>
      <Copyright />
    </Box>
  );
};
export default Footer;
