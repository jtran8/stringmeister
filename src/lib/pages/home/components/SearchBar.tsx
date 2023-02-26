import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import type { ChangeEvent, FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  onSearchChange: (searchTerm: string) => void;
}

const SearchBar: FC<SearchProps> = ({ onSearchChange }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement>
        <AiOutlineSearch />
      </InputLeftElement>
      <Input
        type="text"
        w="100%"
        placeholder="Search"
        onChange={handleSearch}
      />
    </InputGroup>
  );
};

export default SearchBar;
