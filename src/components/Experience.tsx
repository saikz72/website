import { Card, CardContent, Container, Stack, Typography, CardMedia, Box, Divider } from '@mui/material';
import { experienceInfo } from '../contents/data';
import profile from '../assets/profile.jpg';
import facebookLogo from '../assets/Facebook-Logo.png';

type ExperienceProps = {};

type InformationCardProps = {
  companyName: string;
  role: string;
  description: string;
  date: string; //update this value to display date correctly
};

const companyLogo = (companyName: String) => {
  switch (companyName) {
    case 'Facebook':
      return facebookLogo;
    default:
      return '';
  }
};

const InformationCard = (props: InformationCardProps): React.ReactElement => {
  const { role, description, date } = props;
  return (
    <Card raised={true} sx={{ margin: 4, maxWidth: 345 }}>
      <CardContent>
        <Stack direction="column">
          <CardMedia component="img" height="100vh" image={facebookLogo} alt="Company Logo" />
          <Divider />
          <Stack direction="column">
            <Typography align="left" gutterBottom variant="h6">
              {role}
            </Typography>
          </Stack>
          <Stack direction="column">
            <Typography paragraph gutterBottom variant="subtitle1">
              {description}
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography align="left" variant="subtitle2" marginRight="4px">
              Date:
            </Typography>
            <Typography align="left" gutterBottom variant="subtitle2">
              {date}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

const Project = (props: ExperienceProps): React.ReactElement => {
  return (
    <div id="Experience">
      <Typography color="secondary" align="center" variant="h3">
        Experiences
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {experienceInfo.map(({ companyName, role, description, date }, index) => {
          return (
            <InformationCard key={index} companyName={companyName} role={role} description={description} date={date} />
          );
        })}
      </Box>
    </div>
  );
};

export default Project;
