import { SimpleGrid, VStack } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

import ContactCard from "./components/ContactCard";
import ContentTabs from "./components/ContentTabs";
import LoadingCard from "./components/LoadingCard";
import MapCard from "./components/MapCard";
import SomeText from "./components/SomeText";
import type StringData from "./components/StringData";

const supabase = createClient(
  `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}`,
  `${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`
);

const Home = () => {
  const [stringList, setStrings] = useState<StringData[] | null>([]);
  const [gripList, setGrips] = useState<StringData[] | null>([]);
  const [otherList, setOther] = useState<StringData[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchStrings = async () => {
    const data = await supabase
      .from("strings")
      .select("*")
      .order("price", { ascending: false });
    setStrings(data.data);
  };

  const fetchGrips = async () => {
    const data = await supabase
      .from("grips")
      .select("*")
      .order("price", { ascending: false });
    setGrips(data.data);
  };

  const fetchOther = async () => {
    const data = await supabase
      .from("other")
      .select("*")
      .order("price", { ascending: false });
    setOther(data.data);
  };

  useEffect(() => {
    fetchStrings();
    fetchGrips();
    fetchOther();
    setIsLoading(false);
  }, []);

  return (
    <VStack gap={4}>
      <SomeText
        heading="West Toronto Stringing Services"
        line1="Prices include string & labour."
      />
      {isLoading ? (
        <LoadingCard />
      ) : (
        <ContentTabs
          stringList={stringList}
          gripList={gripList}
          otherList={otherList}
        />
      )}
      <SimpleGrid columns={[1, 2]} spacing={4} minW="100%">
        <MapCard />
        <ContactCard stringList={stringList} />
      </SimpleGrid>
    </VStack>
  );
};

export default Home;
