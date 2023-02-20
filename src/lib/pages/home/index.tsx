import { Grid, Link, Text } from "@chakra-ui/react";

import Map from "./components/Map";
import SomeText from "./components/SomeText";
import StringList from "./components/StringList";

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText
        heading="West Toronto Stringing Services"
        body="Our Offerings (prices include string & labour)"
      />
      <StringList />
      <SomeText heading="" body="More strings coming soon!" />
      <SomeText
        heading="Other Services"
        body="Wilson Pro Overgrip (White) - $5"
      />
      <Text fontSize="sm" textAlign="center" mt="-12px">
        Yonex Supergrap Overgrip (Black) - $5
      </Text>
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
