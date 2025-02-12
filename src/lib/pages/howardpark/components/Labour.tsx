import { Flex, Heading, HStack, Image, Spacer } from "@chakra-ui/react";

import flourish from "../../../../assets/img/flourish.svg";

const Labour = () => {
  return (
    <Flex h="100%" w="100%" py={[4, null, null, 8]} direction="column" gap={4}>
      <Image src={flourish} />
      <Heading textAlign="center" color="red.600" fontSize={["4xl", "6xl"]}>
        PRICES
      </Heading>
      <Spacer />
      <HStack mx={[0, null, null, 28]} justifyContent="space-betwen">
        <Heading fontWeight={500} fontSize={["2xl", "4xl"]}>
          Labour
        </Heading>
        <Spacer />
        <Heading fontWeight={500} fontSize={["2xl", "4xl"]}>
          $15
        </Heading>
      </HStack>
      <Spacer />
      <Heading textAlign="center" fontWeight={500} fontSize={["2xl", "4xl"]}>
        Pickup & Delivery
      </Heading>
      <Heading textAlign="center" fontWeight={500} fontSize={["2xl", "4xl"]}>
        Sundays @ 2PM
      </Heading>
      <Spacer />
      <Heading
        textAlign="center"
        fontWeight={500}
        fontStyle="italic"
        fontSize={["2xl", "4xl"]}
      >
        SPECIAL - $5 off your 1st Stringing
      </Heading>
      <Image src={flourish} />
    </Flex>
  );
};

export default Labour;
