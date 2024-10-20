import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  VStack,
  IconButton,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <Box h="100%" w="100%" bgColor="#0b533b">
      <HStack mx={[4, null, null, 20]} my={4} justify="space-between">
        <Heading color="#fff4de" fontStyle="italic">
          StringMeister
        </Heading>
        <IconButton
          icon={<HamburgerIcon />}
          color="white"
          bgColor="#0b533b"
          onClick={openDrawer}
          display={{ base: "block", md: "none" }}
          aria-label="drawer"
        />
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          fontWeight={600}
        >
          <Link href="#strings" color="#fff4de">
            Strings
          </Link>
          <Link href="#shop" color="#fff4de">
            Services
          </Link>
          <Link href="#shop" color="#fff4de">
            Goods
          </Link>
          <Link href="#contact" color="#fff4de">
            Contact
          </Link>
        </HStack>
      </HStack>

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader />
            <DrawerBody>
              <VStack spacing={8}>
                <Link href="#strings" onClick={closeDrawer}>
                  Strings
                </Link>
                <Link href="#shop" onClick={closeDrawer}>
                  Services
                </Link>
                <Link href="#shop" onClick={closeDrawer}>
                  Goods
                </Link>
                <Link href="#contact" onClick={closeDrawer}>
                  Contact
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
