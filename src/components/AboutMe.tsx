import { Card, CardContent, CardMedia, Stack, Typography, Container } from '@mui/material';
import profile from '../assets/profile.jpg';
import { useTheme } from '@mui/material/styles';

type AboutProps = {};

const AboutMe = (props: AboutProps) => {
  const globalTheme = useTheme();
  return (
    <Container id="AboutMe" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography color="secondary" align="center" variant="h3">
        About Me
      </Typography>
      <Card raised={true} sx={{ display: 'flex' }}>
        <CardMedia component="img" height="100vh" image={profile} alt="Profile image" />
        <CardContent>
          <Typography>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
            form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AboutMe;
