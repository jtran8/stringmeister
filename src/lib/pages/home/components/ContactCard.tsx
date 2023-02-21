import { Card, CardBody, Heading } from "@chakra-ui/react";

import ContactForm from "./ContactForm";

const ContactCard = () => {
  return (
    <Card w="100%" maxW="xl">
      <CardBody>
        <Heading fontSize="lg" textAlign="center" mb="2">
          Book a Stringing
        </Heading>
        <ContactForm />
      </CardBody>
    </Card>
  );
};

export default ContactCard;
