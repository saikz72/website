import { Card, CardContent, Container, Typography } from '@mui/material';
import { projectInfo } from '../contents/data';

type ProjectProps = {};

type InformationCardProps = {
  title: string;
  description: string;
  date: number;
};

const InformationCard = (props: InformationCardProps): React.ReactElement => {
  const { title, description, date } = props;
  return (
    <Card raised={true} sx={{ minWidth: 0 }}>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
        <Typography>{date}</Typography>
      </CardContent>
    </Card>
  );
};

const Project = (props: ProjectProps): React.ReactElement => {
  return (
    <div id="Project">
      <Typography color="secondary" align="center" variant="h3">
        Projects
      </Typography>
      <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {projectInfo.map(({ title, description, date }, index) => {
          return <InformationCard key={index} title={title} description={description} date={date} />;
        })}
      </Container>
    </div>
  );
};

export default Project;
