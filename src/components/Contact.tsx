import { Container, Typography } from '@mui/material';

type ContactProps = {};

const Contact = (props: ContactProps) => {
  return (
    <Container id="Contact" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Typography color="secondary" variant="h3">
        Get in touch
      </Typography>
    </Container>
  );
};

export default Contact;
