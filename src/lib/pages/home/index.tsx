import { Grid, Link, Text } from "@chakra-ui/react";

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
      <Text fontSize="sm" textAlign="center" mt="20px" mb="-3">
        Convenient Drop-Off & Pickup
      </Text>
      <Text fontSize="sm" textAlign="center" mb="-3">
        9AM to 9PM
      </Text>
      <Text fontSize="sm" textAlign="center">
        7 Days / Week
      </Text>
      <Map />
      <Link
        fontSize="sm"
        textAlign="center"
        href="mailto:stringmeister@proton.me"
      >
        Contact Us
      </Link>
    </Grid>
  );
};

export default Home;
