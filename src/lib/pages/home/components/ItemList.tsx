import { VStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

import ItemCard from "./ItemCard";
import NotFoundCard from "./NotFoundCard";
// import SearchBar from "./SearchBar";
import type StringData from "./StringData";

const ItemList = ({ itemList }: StringData) => {
  const [searchTerm, setSearchTerm] = useState("");

  // const handleSearchChange = (searchInput: string) => {
  //   setSearchTerm(searchInput);
  // };

  const filteredItems = itemList.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <VStack w="100%" spacing={4}>
      {/* <SearchBar onSearchChange={handleSearchChange} /> */}
      <SimpleGrid columns={[1, 2, null, 3]} spacing={4} w="100%">
        {filteredItems.length > 0 ? (
          filteredItems.map(
            (s) =>
              s.inStock && (
                <ItemCard
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
              )
          )
        ) : (
          <NotFoundCard />
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default ItemList;