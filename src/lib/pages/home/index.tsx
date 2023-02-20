import { Grid } from "@chakra-ui/react";

import SomeText from "./components/SomeText";
import StringList from "./components/StringList";

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
      <StringList />
    </Grid>
  );
};

export default Home;
