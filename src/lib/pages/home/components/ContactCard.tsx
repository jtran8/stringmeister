import { Card, CardBody, Heading } from "@chakra-ui/react";

import ContactForm from "./ContactForm";
import type StringData from "./StringData";

const ContactCard = ({ stringList }: StringData) => {
  return (
    <Card w="100%" maxW="xl">
      <CardBody>
        <Heading fontSize="lg" textAlign="center" mb="2">
          Book a Stringing
        </Heading>
        <ContactForm stringList={stringList} />
      </CardBody>
    </Card>
  );
};

export default ContactCard;
