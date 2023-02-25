import { VStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

import NotFoundCard from "./NotFoundCard";
import SearchBar from "./SearchBar";
import StringCard from "./StringCard";
import type StringData from "./StringData";

const StringList = ({ stringList }: StringData) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (searchInput: string) => {
    setSearchTerm(searchInput);
  };

  const filteredStrings = stringList.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <VStack w="100%" spacing={4}>
      <SearchBar onSearchChange={handleSearchChange} />
      <SimpleGrid columns={[1, 2, null, 3]} spacing={4} w="100%">
        {filteredStrings.length > 0 ? (
          filteredStrings.map((s) => (
            <StringCard
              key={s.id}
              brand={s.brand}
              logo={s.logo}
              sku={s.sku}
              pic={s.pic}
              price={s.price}
              desc={s.desc}
              type={s.type}
              shape={s.shape}
              colour={s.colour}
            />
          ))
        ) : (
          <NotFoundCard />
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default StringList;
