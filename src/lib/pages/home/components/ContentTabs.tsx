import {
  Center,
  Hide,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import ItemList from "./ItemList";
import type StringData from "./StringData";

const ContentTabs = ({ stringList, gripList, otherList }: StringData) => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green" h="100%" w="100%">
      <TabList>
        <Tab>Strings</Tab>
        <Tab>Grips</Tab>
        <Tab>Balls & Other</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Center mb={4}>
            <Hide above="sm">
              <Text fontSize="sm">Tap item for more details.</Text>
            </Hide>
          </Center>
          <ItemList itemList={stringList} />
        </TabPanel>
        <TabPanel>
          <Center mb={4}>
            <Hide above="sm">
              <Text fontSize="sm">Tap item for more details.</Text>
            </Hide>
          </Center>
          <ItemList itemList={gripList} />
          <Center mt={4}>
            <Text fontSize="sm">Overgrip install free with stringing.</Text>
          </Center>
        </TabPanel>
        <TabPanel>
          <Center mb={4}>
            <Hide above="sm">
              <Text fontSize="sm">Tap item for more details.</Text>
            </Hide>
          </Center>
          <ItemList itemList={otherList} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ContentTabs;
