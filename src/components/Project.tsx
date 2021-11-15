import { Card, CardContent, CardMedia, Stack, Typography, Box, Divider, IconButton, Tooltip } from '@mui/material';
import { projectInfo } from '../contents/data';
import metaLogo from '../assets/MetaLogo.gif';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

type ProjectProps = {};

type InformationCardProps = {
  title: string;
  description: string;
  date: string;
};

const InformationCard = (props: InformationCardProps): React.ReactElement => {
  const { title, description, date } = props;
  return (
    <Card raised={true} sx={{ margin: 4, maxWidth: 345 }}>
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
          <IconButton onClick={(_) => _}>
            <Tooltip title="Learn more about the project on github">
              <GitHubIcon />
            </Tooltip>
          </IconButton>
          <IconButton onClick={(_) => _}>
            <Tooltip title="Live demo of the project">
              <PlayCircleOutlineIcon />
            </Tooltip>
          </IconButton>
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
        {projectInfo.map(({ title, description, date }, index) => {
          return <InformationCard key={index} title={title} description={description} date={date} />;
        })}
      </Box>
    </div>
  );
};

export default Project;
