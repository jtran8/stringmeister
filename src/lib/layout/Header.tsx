import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  VStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleLinkClick = () => {
    closeDrawer();
  };

  return (
    <Box h="100%" w="100%" bgColor="#0b533b">
      <HStack mx={[6, null, null, 20]} my={4} justify="space-between">
        <Heading color="#fff4de" fontStyle="italic">
          StringMeister
        </Heading>
        <IconButton
          icon={<HamburgerIcon boxSize={6} />}
          bgColor="#0b533b"
          color="white"
          onClick={openDrawer}
          display={{ base: "block", md: "none" }}
          aria-label="drawer"
        />
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <ScrollLink to="strings" smooth duration={500}>
            <Button variant="link" color="#fff4de">
              Strings
            </Button>
          </ScrollLink>
          <ScrollLink to="shop" smooth duration={500} offset={-20}>
            <Button variant="link" color="#fff4de">
              Services
            </Button>
          </ScrollLink>
          <ScrollLink to="shop" smooth duration={500} offset={-20}>
            <Button variant="link" color="#fff4de">
              Goods
            </Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={500}>
            <Button variant="link" color="#fff4de">
              Contact
            </Button>
          </ScrollLink>
        </HStack>
      </HStack>

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Heading color="#0b533b">Links</Heading>
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={4}>
                <ScrollLink
                  to="strings"
                  smooth
                  duration={500}
                  onClick={handleLinkClick}
                >
                  <Button variant="link">
                    <Heading>Strings</Heading>
                  </Button>
                </ScrollLink>
                <ScrollLink
                  to="shop"
                  smooth
                  duration={500}
                  offset={-10}
                  onClick={handleLinkClick}
                >
                  <Button variant="link">
                    <Heading>Services</Heading>
                  </Button>
                </ScrollLink>
                <ScrollLink
                  to="shop"
                  smooth
                  duration={500}
                  offset={-10}
                  onClick={handleLinkClick}
                >
                  <Button variant="link">
                    <Heading>Goods</Heading>
                  </Button>
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  onClick={handleLinkClick}
                >
                  <Button variant="link">
                    <Heading>Contact</Heading>
                  </Button>
                </ScrollLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
