import { Flex, Heading, Image, Spacer } from "@chakra-ui/react";

import logo from "../../../../assets/img/howardpark.png";

const Landing = () => {
  return (
    <Flex
      h={["40vh", null, null, "40vh"]}
      w="100%"
      direction="column"
      justifyContent="space-betwen"
      bgColor="#fff4de"
      gap={10}
      alignItems="center"
    >
      <Spacer />
      <Image src={logo} h={["40%", null, null, "40%"]} />
      <Heading
        my={[4, 8]}
        color="#0b533b"
        fontWeight="900"
        textAlign="center"
        fontSize={["4xl", "6xl", null, "6xl"]}
        lineHeight="1.0"
      >
        Special Delivery Service
      </Heading>
      <Spacer />
    </Flex>
  );
};

export default Landing;
