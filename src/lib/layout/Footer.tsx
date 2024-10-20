import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
      py={2}
    >
      <Text fontSize="xs">{new Date().getFullYear()} - String Meister</Text>
    </Flex>
  );
};

export default Footer;
