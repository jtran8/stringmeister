import { Card, CardBody, Text } from "@chakra-ui/react";

const LoadingCard = () => {
  return (
    <Card maxW="md">
      <CardBody>
        <Text fontSize="sm" mb="20px" textAlign="center">
          Loading...
        </Text>
      </CardBody>
    </Card>
  );
};

export default LoadingCard;
