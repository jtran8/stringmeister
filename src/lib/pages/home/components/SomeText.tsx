import { Grid, Heading, Text } from "@chakra-ui/react";

interface SomeTextProps {
  heading: string;
  body: string;
}

const SomeText = ({ heading, body }: SomeTextProps) => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading fontSize="xl" fontWeight="md">
        {heading}
      </Heading>
      <Text fontSize="sm">{body}</Text>
    </Grid>
  );
};

export default SomeText;
