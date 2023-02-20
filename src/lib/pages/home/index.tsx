import { Grid } from "@chakra-ui/react";

import Map from "./components/Map";
import SomeText from "./components/SomeText";
import StringList from "./components/StringList";

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText
        heading="West Toronto Stringing Services"
        body="Our Offerings (prices include string & Labour)"
      />
      <StringList />
      <SomeText heading="" body="More strings coming soon!" />
      <SomeText
        heading=""
        body="Convenient Drop-Off & Pickup / 9AM to 9PM / 7 Days a Week"
      />
      <Map />
    </Grid>
  );
};

export default Home;
