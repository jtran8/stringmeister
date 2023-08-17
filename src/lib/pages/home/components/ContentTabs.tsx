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
import type ProductData from "./ProductData";

const ContentTabs = ({ stringList, gripList, otherList }: ProductData) => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green" h="100%" w="100%">
      <TabList>
        <Tab>Strings</Tab>
        <Tab>Grips</Tab>
        <Tab>Balls & Other</Tab>
      </TabList>
      <TabPanels>
        <TabPanel px={0}>
          <Center mb={4}>
            <Hide above="sm">
              <Text fontSize="sm">Tap item for more details.</Text>
            </Hide>
          </Center>
          <ItemList itemList={stringList} />
        </TabPanel>
        <TabPanel px={0}>
          <Center mb={4}>
            <Hide above="sm">
              <Text fontSize="sm">Tap item for more details.</Text>
            </Hide>
          </Center>
          <ItemList itemList={gripList} />
          <Center mt={4}>
            <Text fontSize="sm">Free overgrip installation.</Text>
          </Center>
        </TabPanel>
        <TabPanel px={0}>
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
