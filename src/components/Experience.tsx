import { Card, CardContent, Container, Stack, Typography, CardMedia } from '@mui/material';
import { experienceInfo } from '../contents/data';
import profile from '../assets/profile.jpg';

type ExperienceProps = {};

type InformationCardProps = {
  companyName: string;
  role: string;
  description: string;
  date: number; //update this value to display date correctly
};

const InformationCard = (props: InformationCardProps): React.ReactElement => {
  const { companyName, role, description, date } = props;
  return (
    <Card raised={true} sx={{ margin: 4 }}>
      <CardContent>
        <Stack direction="column">
          <CardMedia component="img" height="100vh" image={profile} alt="Profile image" />s
          <Stack direction="row">
            <Typography variant="button">Company:</Typography>
            <Typography>{companyName}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>Role:</Typography>
            <Typography>{role}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>Description:</Typography>
            <Typography>{description}</Typography>
          </Stack>
          <Stack direction="row">
            <Typography>Date:</Typography>
            <Typography>{date}</Typography>
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
      <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {experienceInfo.map(({ companyName, role, description, date }) => {
          return <InformationCard companyName={companyName} role={role} description={description} date={date} />;
        })}
      </Container>
    </div>
  );
};

export default Project;
