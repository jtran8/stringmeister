import { FaChevronUp, FaChevronDown } from "react-icons/fa";
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
  Button,
  useDisclosure,
  Center,
  Show,
  Hide,
} from "@chakra-ui/react";

import SpecsTable from "./SpecsTable";

interface StringProps {
  brand: string;
  logo: string;
  sku: string;
  pic: string;
  price: number;
  desc: string;
  type: string;
  shape: string;
  colour: string;
}

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
}: StringProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Card maxW="sm">
      <CardBody>
        <Flex gap={4} mb="20px">
          <Avatar name={brand} src={logo} />
          <Box>
            <Heading size="sm">{brand}</Heading>
            <Text>{sku}</Text>
          </Box>
          <Spacer />
          <Heading size="lg">${price}</Heading>
        </Flex>
        <Show above="sm">
          <Image src={pic} alt="{sku}" borderRadius="lg" mb="20px" />
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
          <Center>
            <Button variant="unstyled" size="xs" mb="-10px" onClick={onToggle}>
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </Button>
          </Center>
        </Hide>
      </CardBody>
    </Card>
  );
};

export default StringCard;
