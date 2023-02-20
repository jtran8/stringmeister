import { VStack, Image, useColorModeValue } from "@chakra-ui/react";

import logoDark from "../../assets/img/logo_darkmode.svg";
import logoLight from "../../assets/img/logo_lightmode.svg";
import racquetsDark from "../../assets/img/racquets_darkmode.svg";
import racquetsLight from "../../assets/img/racquets_lightmode.svg";

const Header = () => {
  const logo = useColorModeValue(logoLight, logoDark);
  const racquets = useColorModeValue(racquetsLight, racquetsDark);
  return (
    <VStack
      spacing={4}
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
    >
      <Image src={logo} w={["100%", "75%", null, "50%"]} />
      <Image src={racquets} w={["40%", "25%", null, "15%"]} />
    </VStack>
  );
};
export default Header;
