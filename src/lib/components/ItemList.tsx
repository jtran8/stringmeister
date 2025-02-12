import { VStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

import type ProductData from "./interfaces/ProductData";
import ItemCard from "./ItemCard";
import NotFoundCard from "./NotFoundCard";

// import SearchBar from "./SearchBar";

const ItemList = ({ itemList }: ProductData) => {
  const [searchTerm] = useState("");

  // const handleSearchChange = (searchInput: string) => {
  //   setSearchTerm(searchInput);
  // };

  const filteredItems = itemList
    .filter(
      (item) =>
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sku.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.price - a.price);

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
                  brand={s?.brand}
                  logo={s?.logo}
                  sku={s.sku}
                  pic={s?.pic}
                  price={s.price}
                  desc={s.desc}
                  type={s?.type}
                  shape={s?.shape}
                  colour={s?.colour}
                  specs={s?.specs}
                  attributes={s?.attributes}
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
