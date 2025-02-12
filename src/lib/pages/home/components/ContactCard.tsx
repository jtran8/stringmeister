import { Card, CardBody, Heading } from "@chakra-ui/react";

import ContactForm from "../../../components/Contact";
import type ProductData from "../../../components/interfaces/ProductData";

const ContactCard = ({ stringList }: ProductData) => {
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
