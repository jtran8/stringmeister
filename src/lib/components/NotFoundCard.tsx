import { Card, CardBody, Image, Text } from "@chakra-ui/react";

import sad from "../../assets/img/sad.webp";

const NotFoundCard = () => {
  return (
    <Card maxW="md">
      <CardBody>
        <Text fontSize="sm" mb="20px" textAlign="center">
          String not found.
        </Text>
        <Image src={sad} borderRadius="lg" />
      </CardBody>
    </Card>
  );
};

export default NotFoundCard;
