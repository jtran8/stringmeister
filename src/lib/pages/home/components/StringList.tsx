import { SimpleGrid } from "@chakra-ui/react";

import strings from "../strings";

import StringCard from "./StringCard";

const StringList = () => {
  return (
    <SimpleGrid columns={[1, 2, null, 3]} spacing={4} width="100%">
      {strings.map((s) => (
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
          colour={s.colour}
        />
      ))}
    </SimpleGrid>
  );
};

export default StringList;
