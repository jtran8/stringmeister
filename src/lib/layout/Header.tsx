import { Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
    >
      <Text fontSize="2xl" fontWeight="bold">
        String Meister
      </Text>
    </Flex>
  );
};
export default Header;
