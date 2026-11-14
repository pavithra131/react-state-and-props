
import { makeStyles } from "tss-react/mui";
import { Container, Stack, Typography, Chip } from "@mui/material";

import Counter from "./components/Counter";
import TaskManager from "./components/TaskManager";

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.page}>
      <Container maxWidth="md">
        <Stack className={classes.content} spacing={3}>
          <Stack spacing={1} className={classes.header}>
            <Typography
              variant="h4"
              className={classes.title}
            >
              My Productivity Dashboard
            </Typography>

            <Typography className={classes.subtitle}>
              Practise React state, events and component
              communication.
            </Typography>
          </Stack>

          <Counter />

          <TaskManager />
        </Stack>
      </Container>
    </div>
  );
}

export default App;

const useStyles = makeStyles()({
  page: {
    minHeight: "100vh",
    backgroundColor: "#F7F8FC",
    paddingTop: 48,
    paddingBottom: 48,
  },
  content: {
    maxWidth: 650,
    margin: "0 auto",
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontWeight: 700,
    color: "#263C70",
  },
  subtitle: {
    color: "#737B8C",
    marginTop: 8,
  },
});