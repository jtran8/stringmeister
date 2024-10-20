import {
  Card,
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
              <Text fontWeight={700}>{brand}</Text>
              <Text>{sku}</Text>
            </Box>
            <Spacer />
            <Text fontSize="3xl" fontWeight={700}>
              ${price}
            </Text>
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
              {pic && (
                <Image src={pic} alt="{sku}" borderRadius="lg" mb="20px" />
              )}
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
