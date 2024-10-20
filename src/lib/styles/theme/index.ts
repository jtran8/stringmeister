import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";

export const theme = extendTheme({
  fonts: {
    heading: "Fraunces Variable, serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  config,
});
