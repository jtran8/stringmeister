import { SimpleGrid } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

import StringCard from "./StringCard";
import type StringData from "./StringData";

const supabase = createClient(
  `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}`,
  `${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`
);

const StringList = () => {
  const [stringList, setStrings] = useState<StringData[] | null>([]);

  useEffect(() => {
    const fetchStrings = async () => {
      const data = await supabase
        .from("strings")
        .select("*")
        .order("price", { ascending: false });
      setStrings(data.data);
    };
    fetchStrings();
  }, []);

  return (
    <SimpleGrid columns={[1, 2, null, 3]} spacing={4} width="100%">
      {stringList &&
        stringList.map((s) => (
          <StringCard
            key={s.sku}
            brand={s.brand}
            logo={s.logo}
            sku={s.sku}
            pic={s.pic}
            price={s.price}
            desc={s.desc}
            type={s.type}
            shape={s.shape}
            colour={s.color}
          />
        ))}
    </SimpleGrid>
  );
};

export default StringList;
