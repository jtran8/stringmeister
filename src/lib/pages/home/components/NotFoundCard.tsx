import { Card, CardBody, Image, Text } from "@chakra-ui/react";

import sad from "../../../../assets/img/sad.webp";

import type StringData from "./StringData";

const NotFoundCard = ({ stringList }: StringData) => {
  return (
    <Card maxW="md">
      {stringList && (
        <CardBody>
          <Text fontSize="sm" mb="20px" textAlign="center">
            String not found.
          </Text>
          <Image src={sad} borderRadius="lg" />
        </CardBody>
      )}
    </Card>
  );
};

export default NotFoundCard;
