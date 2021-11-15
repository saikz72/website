import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Box,
  Divider,
  IconButton,
  Tooltip,
  Link,
} from '@mui/material';
import { projectInfo } from '../contents/data';
import metaLogo from '../assets/MetaLogo.gif';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

type ProjectProps = {};

type InformationCardProps = {
  title: string;
  description: string;
  date: string;
  githubLink?: string;
};

const githubLinkClick = (githubLink: string) => {
  <Link href={githubLink}></Link>;
};

const InformationCard = (props: InformationCardProps): React.ReactElement => {
  const { title, description, date, githubLink } = props;
  return (
    <Card sx={{ margin: 4, maxWidth: 345 }}>
      <CardContent>
        <CardMedia component="img" height="100vh" image={metaLogo} alt="Project Logo" />
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
          <Link href={githubLink} target="_blank" sx={{ marginRight: 2 }}>
            <Tooltip title="Learn more about the project on github">
              <GitHubIcon />
            </Tooltip>
          </Link>
          <Link href="#ComingSoon" target="_blank">
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
        {projectInfo.map(({ title, description, date, githubLink }, index) => {
          return (
            <InformationCard key={index} githubLink={githubLink} title={title} description={description} date={date} />
          );
        })}
      </Box>
    </div>
  );
};

export default Project;
