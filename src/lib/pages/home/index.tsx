import { SimpleGrid, VStack } from "@chakra-ui/react";

import ContactCard from "./components/ContactCard";
import MapCard from "./components/MapCard";
import SomeText from "./components/SomeText";
import StringList from "./components/StringList";

const Home = () => {
  return (
    <VStack gap={4}>
      <SomeText
        heading="West Toronto Stringing Services"
        line1="Our Offerings (prices include string & labour)"
      />
      <StringList />
      <SomeText heading="" line1="More strings coming soon!" />
      <SomeText
        heading="Other Services"
        line1="Wilson Pro Overgrip (White) - $5"
        line2="Yonex Supergrap Overgrip (Black) - $5"
      />
      <SimpleGrid columns={[1, 2]} spacing={4} minW="100%">
        <MapCard />
        <ContactCard />
      </SimpleGrid>
    </VStack>
  );
};

export default Home;
