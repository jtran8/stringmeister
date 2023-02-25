import { SimpleGrid, VStack } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

import ContactCard from "./components/ContactCard";
import LoadingCard from "./components/LoadingCard";
import MapCard from "./components/MapCard";
import SomeText from "./components/SomeText";
import type StringData from "./components/StringData";
import StringList from "./components/StringList";

const supabase = createClient(
  `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}`,
  `${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`
);

const Home = () => {
  const [stringList, setStrings] = useState<StringData[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStrings = async () => {
      const data = await supabase
        .from("strings")
        .select("*")
        .order("price", { ascending: false });
      setStrings(data.data);
      setIsLoading(false);
    };
    fetchStrings();
  }, []);
  return (
    <VStack gap={4}>
      <SomeText
        heading="West Toronto Stringing Services"
        line1="Our Offerings (prices include string & labour)"
      />
      {isLoading ? <LoadingCard /> : <StringList stringList={stringList} />}
      <SomeText heading="" line1="More strings coming soon!" />
      <SomeText
        heading="Other Services"
        line1="Wilson Pro Overgrip (White) - $5"
        line2="Yonex Supergrap Overgrip (Black) - $5"
      />
      <SimpleGrid columns={[1, 2]} spacing={4} minW="100%">
        <MapCard />
        <ContactCard stringList={stringList} />
      </SimpleGrid>
    </VStack>
  );
};

export default Home;
