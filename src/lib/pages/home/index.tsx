import { Box, VStack } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm";
import ContentTabs from "./components/ContentTabs";
import Labour from "./components/Labour";
import Landing from "./components/Landing";
import LoadingCard from "./components/LoadingCard";
import Location from "./components/Location";
import type ProductData from "./components/ProductData";

const supabase = createClient(
  `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}`,
  `${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`
);

const Home = () => {
  const [stringList, setStrings] = useState<ProductData[] | null>([]);
  const [customList, setCustom] = useState<ProductData[] | null>([]);
  const [otherList, setOther] = useState<ProductData[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchStrings = async () => {
    const data = await supabase
      .from("strings")
      .select("*")
      .order("price", { ascending: false })
      .order("brand", { ascending: true })
      .order("sku", { ascending: true });
    setStrings(data.data);
  };

  const fetchCustom = async () => {
    const data = await supabase
      .from("custom")
      .select("*")
      .order("price", { ascending: false });
    setCustom(data.data);
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
    fetchCustom();
    fetchOther();
    setIsLoading(false);
  }, []);

  return (
    <VStack gap={4}>
      <Landing />
      <Box w="80%" id="strings">
        <Labour />
      </Box>
      <VStack id="shop" gap={4}>
        {isLoading ? (
          <LoadingCard />
        ) : (
          <ContentTabs
            stringList={stringList}
            customList={customList}
            otherList={otherList}
          />
        )}
      </VStack>
      <Box w="100%" id="contact">
        <Location />
      </Box>
      <Box w={["80%", null, null, "50%"]}>
        <ContactForm stringList={stringList} />
      </Box>
    </VStack>
  );
};

export default Home;
