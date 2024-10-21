import {
  Center,
  Heading,
  Hide,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import ItemList from "./ItemList";
import type ProductData from "./ProductData";

const ContentTabs = ({ stringList, customList, otherList }: ProductData) => {
  return (
    <Tabs isFitted variant="solid-rounded" h="100%" w="100%">
      <TabList>
        <Tab _selected={{ bg: "#0b533b", color: "white" }}>
          <Heading fontStyle="italic" fontWeight={600} fontSize="xl">
            STRINGS
          </Heading>
        </Tab>
        <Tab _selected={{ bg: "#0b533b", color: "white" }}>
          <Heading fontStyle="italic" fontWeight={600} fontSize="xl">
            SERVICES
          </Heading>
        </Tab>
        <Tab _selected={{ bg: "#0b533b", color: "white" }}>
          <Heading fontStyle="italic" fontWeight={600} fontSize="xl">
            GOODS
          </Heading>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel px={0}>
          <Center mb={4}>
            <Hide above="sm">
              <Heading fontSize="md" fontWeight={300}>
                Tap item for more details.
              </Heading>
            </Hide>
          </Center>
          <ItemList itemList={stringList} />
        </TabPanel>
        <TabPanel px={0}>
          <Center mb={4}>
            <Hide above="sm">
              <Heading fontSize="md" fontWeight={300}>
                Tap item for more details.
              </Heading>
            </Hide>
          </Center>
          <ItemList itemList={customList} />
        </TabPanel>
        <TabPanel px={0}>
          <Center mb={4}>
            <Hide above="sm">
              <Heading fontSize="md" fontWeight={300}>
                Tap item for more details.
              </Heading>
            </Hide>
          </Center>
          <ItemList itemList={otherList} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ContentTabs;
