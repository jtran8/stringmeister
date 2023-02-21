import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Image,
  Select,
  VStack,
  HStack,
  Button,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";

import goat from "../../../../assets/img/goat.jpg";
import strings from "../strings";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeqwgzjz");
  if (state.succeeded) {
    return (
      <VStack>
        <Text fontSize="lg">Thank you, we&apos;ll be in contact soon!</Text>
        <Image src={goat} borderRadius="xl" />
      </VStack>
    );
  }
  const spacing = " - ";
  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel fontSize="sm">Name</FormLabel>
          <Input id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize="sm">Email address</FormLabel>
          <Input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize="sm">Select String</FormLabel>
          <Select id="string" name="string" placeholder="Select">
            {strings.map((s) => (
              <option key={s.sku}>{s.brand + spacing + s.sku}</option>
            ))}
            <option>Hybrid - put string choices in notes</option>
            <option>Bring your own - labour $20</option>
          </Select>
          <ValidationError
            prefix="String"
            field="string"
            errors={state.errors}
          />
        </FormControl>
        <HStack w="100%" spacing={4}>
          <FormControl isRequired>
            <FormLabel fontSize="sm">Main Tension (lbs)</FormLabel>
            <NumberInput id="mains" name="mains" max={60} min={20}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <ValidationError
              prefix="Mains"
              field="mains"
              errors={state.errors}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="sm">Cross Tension (lbs)</FormLabel>
            <NumberInput id="crosses" name="crosses" max={60} min={20}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <ValidationError
              prefix="Crosses"
              field="crosses"
              errors={state.errors}
            />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel fontSize="sm">Notes</FormLabel>
          <Textarea id="notes" name="notes" />
        </FormControl>
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default ContactForm;
