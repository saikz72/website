import { Typography, Divider } from '@mui/material';
import profile from '../assets/profile.jpg';

type AboutProps = {};

const styles: any = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: '100px',
  marginLeft: '100px',
};

const AboutMe = (props: AboutProps) => {
  return (
    <div id="AboutMe">
      <Typography color="secondary" align="center" variant="h3">
        About Me
      </Typography>
      <div style={styles}>
        <img src={profile} width="500" height="300" alt="Profile" />
        <Divider orientation="horizontal" light={true} />
        <Typography>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
          form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available.
        </Typography>
      </div>
    </div>
  );
};

export default AboutMe;
