import { Grid, Heading, Text } from "@chakra-ui/react";

interface SomeTextProps {
  heading: string;
  line1?: string;
  line2?: string;
}

const SomeText = ({ heading, line1, line2 }: SomeTextProps) => {
  return (
    <Grid textAlign="center" gap={2}>
      <Heading fontSize="xl" fontWeight="md">
        {heading}
      </Heading>
      <Text fontSize="sm">{line1}</Text>
      <Text fontSize="sm">{line2}</Text>
    </Grid>
  );
};

export default SomeText;
