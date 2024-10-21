import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Image,
  Select,
  VStack,
  Heading,
  HStack,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  SimpleGrid,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";

import goat from "../../../../assets/img/goat.webp";

import type ProductData from "./ProductData";

const ContactForm = ({ stringList }: ProductData) => {
  const [state, handleSubmit] = useForm("xeqwgzjz");
  if (state.succeeded) {
    return (
      <VStack py={4} spacing={4}>
        <Heading color="#0b533b">
          Thank you, we&apos;ll be in contact soon!
        </Heading>
        <Image src={goat} borderRadius="xl" />
      </VStack>
    );
  }

  function makeId(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let counter = 0;
    while (counter < length) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomChar = characters[randomIndex];

      if (counter % 2 === 0) {
        result += randomChar.toUpperCase();
      } else {
        result += randomChar;
      }
      counter += 1;
    }
    return result;
  }

  const orderId = makeId(6);
  const spacing = " - ";

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} py={[4, 8]}>
        <Heading fontSize={["4xl", "6xl"]} mb={4} color="#0b533b">
          BOOK NOW!
        </Heading>
        <VisuallyHidden>
          <FormControl>
            <FormLabel fontSize="sm">Order Id</FormLabel>
            <Input id="orderId" value={orderId} type="text" name="orderId" />
          </FormControl>
        </VisuallyHidden>
        <FormControl isRequired>
          <FormLabel fontSize="sm">Name</FormLabel>
          <Input id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontSize="sm">Phone</FormLabel>
          <Input id="phone" type="tel" name="phone" />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </FormControl>
        <SimpleGrid columns={[1, 2]} spacing={4} w="100%">
          {" "}
          <FormControl isRequired>
            <FormLabel fontSize="sm">Main String</FormLabel>
            <Select id="string" name="string" placeholder="Select">
              {stringList &&
                stringList.map(
                  (s) =>
                    s.inStock && (
                      <option key={s.sku}>{s.brand + spacing + s.sku}</option>
                    )
                )}
              <option>Free String Consultation</option>
              <option>Bring Your Own</option>
            </Select>
            <ValidationError
              prefix="String"
              field="string"
              errors={state.errors}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="sm">Cross String</FormLabel>
            <Select id="string" name="string" placeholder="Select">
              {stringList &&
                stringList.map(
                  (s) =>
                    s.inStock && (
                      <option key={s.sku}>{s.brand + spacing + s.sku}</option>
                    )
                )}
              <option>Free String Consultation</option>
              <option>Bring Your Own</option>
            </Select>
            <ValidationError
              prefix="String"
              field="string"
              errors={state.errors}
            />
          </FormControl>
        </SimpleGrid>
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
          <Textarea
            id="notes"
            name="notes"
            placeholder="Email, goods you wish to purchase, customization requests, etc."
          />
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
