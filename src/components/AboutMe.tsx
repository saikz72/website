import { Typography, Box } from '@mui/material';
import profile from '../assets/profile.jpeg';
import useMediaQuery from '@mui/material/useMediaQuery';

type AboutProps = {};

const AboutMe = (props: AboutProps) => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <div id="AboutMe">
      <Typography color="secondary" align="center" variant="h3">
        About Me
      </Typography>
      <Box
        sx={{
          gap: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {matches ? (
          <img src={profile} style={{ maxWidth: '50%' }} alt="Profile" />
        ) : (
          <img src={profile} style={{ maxWidth: '15%' }} alt="Profile" />
        )}
        <Box sx={{ maxWidth: '400px', mx: 4 }}>
          <Typography variant="body1">Hi, my name</Typography>
          <Typography variant="h3">Saikou Ceesay</Typography>
          <Typography gutterBottom>I am a software engineering student</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default AboutMe;
