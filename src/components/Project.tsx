import { Card, CardContent, CardMedia, Stack, Typography, Box, Divider, Tooltip, Link } from '@mui/material';
import { projectInfo } from '../contents/data';
import metaLogo from '../assets/MetaLogo.gif';
import eagleEye from '../assets/eagleEye.jpeg';
import scheduling from '../assets/scheduling.jpeg';
import mural from '../assets/mural.jpeg';
import supportQ from '../assets/supportQ.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

type ProjectProps = {};

type InformationCardProps = {
  title: string;
  description: string;
  date: string;
  githubLink?: string;
  liveDemoLink?: string;
  index: number;
};

const DisplayProjectImage = (index: number): React.ReactElement => {
  if (index === 0) {
    return <CardMedia component="img" height="100vh" image={scheduling} alt="Project Logo" />;
  }
  if (index === 1) {
    return <CardMedia component="img" height="100vh" image={mural} alt="Project Logo" />;
  }
  if (index === 2) {
    return <CardMedia component="img" height="100vh" image={supportQ} alt="Project Logo" />;
  }
  if (index === 3) {
    return <CardMedia component="img" height="100vh" image={eagleEye} alt="Project Logo" />;
  } else {
    return <CardMedia component="img" height="100vh" image={metaLogo} alt="Project Logo" />;
  }
};

const InformationCard = (props: InformationCardProps): React.ReactElement => {
  const { title, description, date, githubLink, liveDemoLink, index } = props;
  return (
    <Card sx={{ margin: 4, maxWidth: 345 }}>
      <CardContent>
        {DisplayProjectImage(index)}
        <Divider />
        <Typography align="left" gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography paragraph gutterBottom variant="subtitle1">
          {description}
        </Typography>
        <Stack direction="row">
          <Typography align="left" variant="subtitle2" marginRight="4px">
            Date:
          </Typography>
          <Typography align="left" gutterBottom variant="subtitle2">
            {date}
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href={githubLink ?? '#'} target="_blank" sx={{ marginRight: 2 }}>
            <Tooltip title="Learn more about the project on github">
              <GitHubIcon />
            </Tooltip>
          </Link>
          <Link href={liveDemoLink ?? '#'} target="_blank">
            <Tooltip title="Live demo of the project">
              <PlayCircleOutlineIcon />
            </Tooltip>
          </Link>
        </Stack>
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {projectInfo.map(({ title, description, date, githubLink, liveDemoLink }, index) => {
          return (
            <InformationCard
              key={index}
              githubLink={githubLink}
              title={title}
              description={description}
              date={date}
              liveDemoLink={liveDemoLink}
              index={index}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Project;
