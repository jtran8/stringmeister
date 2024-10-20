import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex wrap="wrap">
      <Header />
      <Box h="100%" w="100%" transition="0.5s ease-out">
        <Meta />
        <Flex wrap="wrap" minHeight="100vh">
          <Box width="full" as="main">
            {children}
          </Box>
          <Footer />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Layout;
