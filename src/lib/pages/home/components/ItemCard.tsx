import {
  Card,
  Box,
  Avatar,
  CardBody,
  Image,
  Heading,
  Text,
  Collapse,
  Flex,
  Spacer,
  useDisclosure,
  Show,
  Hide,
  VStack,
} from "@chakra-ui/react";

import type ProductData from "./ProductData";
import SpecsTable from "./SpecsTable";

const ItemCard = ({
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
          <Flex w="100%" gap={4} alignItems="center">
            <Avatar name={brand} src={logo} />
            <Box>
              <Heading size="sm">{brand}</Heading>
              <Text>{sku}</Text>
            </Box>
            <Spacer />
            <Heading size="lg">${price}</Heading>
          </Flex>
          <Show above="sm">
            <Image
              src={pic}
              alt="{sku}"
              h="280px"
              object-fit="contain"
              borderRadius="lg"
            />
            <Text fontSize="sm" mb="20px">
              {desc}
            </Text>
            <SpecsTable specs={specs} stats={stats} sku={sku} />
          </Show>
          <Hide above="md">
            <Collapse in={isOpen} unmountOnExit>
              <Image src={pic} alt="{sku}" borderRadius="lg" mb="20px" />
              <Text fontSize="sm" mb="20px">
                {desc}
              </Text>
              <SpecsTable specs={specs} stats={stats} sku={sku} />
            </Collapse>
          </Hide>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ItemCard;
