import {
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import mascot from "../../../../assets/img/mascot.svg";

const Landing = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const headerH = useBreakpointValue({ base: 71, md: 75 }) ?? 75;

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const blockHeight = windowHeight - headerH;

  return (
    <Flex
      h={`${blockHeight}px`}
      w="100%"
      direction="column"
      justifyContent="space-betwen"
      bgColor="#fff4de"
    >
      <Box my={[4, 8]} />
      <Spacer />
      <Image src={mascot} h={["50%", "40%", null, "65%"]} />
      <Spacer />
      <Heading
        my={[4, 8]}
        color="#0b533b"
        fontWeight="900"
        textAlign="center"
        fontSize={["4xl", "6xl", null, "8xl"]}
        lineHeight="1.0"
      >
        Toronto Racquet Specialist
      </Heading>
    </Flex>
  );
};

export default Landing;
