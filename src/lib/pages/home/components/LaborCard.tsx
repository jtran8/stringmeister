import { Card, CardBody, Heading, Text, VStack } from "@chakra-ui/react";

const LaborCard = () => {
  return (
    <Card size="md" textAlign="center">
      <CardBody>
        <VStack>
          <Heading size="md">Labour</Heading>
          <Text fontSize="3xl" fontWeight="bold">
            $15
          </Text>
          <Text fontSize="sm">$5 off your 1st stringing.</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default LaborCard;
