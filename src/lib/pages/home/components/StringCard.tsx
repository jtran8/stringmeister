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
        <Flex gap={4}>
          <Avatar name={brand} src={logo} />
          <Box>
            <Heading size="sm">{brand}</Heading>
            <Text>{sku}</Text>
          </Box>
          <Spacer />
          <Heading size="lg">${price}</Heading>
        </Flex>
        <Show above="sm">
          <Image src={pic} alt="{sku}" borderRadius="lg" my="20px" />
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
      </CardBody>
    </Card>
  );
};

export default StringCard;
