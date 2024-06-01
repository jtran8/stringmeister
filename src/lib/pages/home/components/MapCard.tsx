import {
  AspectRatio,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const MapCard = () => {
  return (
    <Card w="100%" maxW="xl">
      <CardBody>
        <VStack spacing={1} fontSize="sm" textAlign="center" mb="4">
          <Heading fontSize="lg" mb="2">
            Location & Hours
          </Heading>
          <Text>Convenient Drop-Off & Pickup</Text>
          <Text>10AM to 9PM</Text>
          <Text>7 Days / Week</Text>
          <Text>Call or Text: 647-878-8619</Text>
        </VStack>
        <AspectRatio ratio={1}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.5500984444654!2d-79.44621717071678!3d43.664801968838646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b346a83a35ce3%3A0xdf36e3ea2cd4984f!2s925%20Lansdowne%20Ave%2C%20Toronto%2C%20ON%20M6H%203Z2!5e0!3m2!1sen!2sca!4v1676876066935!5m2!1sen!2sca"
          />
        </AspectRatio>
      </CardBody>
    </Card>
  );
};

export default MapCard;
