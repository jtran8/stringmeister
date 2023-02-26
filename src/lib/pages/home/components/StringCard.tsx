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

import SpecsTable from "./SpecsTable";
import type StringData from "./StringData";

const StringCard = ({
  brand,
  logo,
  sku,
  pic,
  price,
  desc,
  type,
  shape,
  colour,
}: StringData) => {
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
            <Image src={pic} alt="{sku}" borderRadius="lg" />
            <Text fontSize="sm" mb="20px">
              {desc}
            </Text>
            <SpecsTable type={type} shape={shape} colour={colour} />
          </Show>
          <Hide above="md">
            <Collapse in={isOpen} unmountOnExit>
              <Image src={pic} alt="{sku}" borderRadius="lg" mb="20px" />
              <Text fontSize="sm" mb="20px">
                {desc}
              </Text>
              <SpecsTable type={type} shape={shape} colour={colour} />
            </Collapse>
          </Hide>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default StringCard;
