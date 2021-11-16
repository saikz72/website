import { Container, Typography } from '@mui/material';

type FooterProps = {};

const Footer = (props: FooterProps) => {
  return (
    <Container id="Contact" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Typography color="secondary" variant="h3">
        Get in touch
      </Typography>
    </Container>
  );
};

export default Footer;
