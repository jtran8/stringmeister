import { Grid, Heading, Text } from "@chakra-ui/react";

const SomeText = () => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading fontSize="xl" fontWeight="bold">
        West Toronto Tennis Racquet Services
      </Heading>
      <Text fontSize="sm">Our Offerings (Prices include string & labour):</Text>
    </Grid>
  );
};

export default SomeText;
