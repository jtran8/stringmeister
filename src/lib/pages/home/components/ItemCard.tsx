import {
  Card,
  Badge,
  Box,
  Avatar,
  CardBody,
  Image,
  Text,
  Collapse,
  Flex,
  Spacer,
  useDisclosure,
  Show,
  Hide,
  Heading,
  VStack,
} from "@chakra-ui/react";

import type ProductData from "./ProductData";
import SpecsTable from "./SpecsTable";

const ItemCard = ({
  attributes,
  brand,
  logo,
  sku,
  pic,
  price,
  desc,
  specs,
  stats,
}: ProductData) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Card maxW="md" onClick={onToggle}>
      <CardBody>
        <VStack w="100%" gap={4}>
          <Flex w="100%" gap={[3, 4]} alignItems="center">
            <Avatar name={brand} src={logo} />
            <Box>
              <Flex gap={2} pb={1}>
                <Heading size="md">{brand}</Heading>
                {attributes && (
                  <Heading size="md" fontWeight={400}>
                    {sku}
                  </Heading>
                )}
              </Flex>
              <Flex gap={2} align="center">
                {!attributes && (
                  <Heading size="md" fontWeight={400}>
                    {sku}
                  </Heading>
                )}
                {attributes?.color && (
                  <Badge colorScheme={attributes.scheme}>
                    {attributes.color}
                  </Badge>
                )}
                {attributes?.gauges &&
                  attributes.gauges.map((g) => <Badge>{g}</Badge>)}
              </Flex>
            </Box>
            <Spacer />
            <Heading size="lg">${price}</Heading>
          </Flex>
          <Show above="sm">
            {pic && (
              <Image
                src={pic}
                alt="{sku}"
                h="280px"
                object-fit="contain"
                borderRadius="lg"
              />
            )}
            <Text fontSize="sm" mb="20px">
              {desc}
            </Text>
            {specs && <SpecsTable specs={specs} stats={stats} sku={sku} />}
          </Show>
          <Hide above="md">
            <Collapse in={isOpen} unmountOnExit>
              {pic && <Image src={pic} alt="{sku}" mb="20px" />}
              <Text fontSize="sm" mb="20px">
                {desc}
              </Text>
              {specs && <SpecsTable specs={specs} stats={stats} sku={sku} />}
            </Collapse>
          </Hide>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
