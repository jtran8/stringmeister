import { Input } from "@chakra-ui/react";
import type { ChangeEvent, FC } from "react";

interface SearchProps {
  onSearchChange: (searchTerm: string) => void;
}

const SearchBar: FC<SearchProps> = ({ onSearchChange }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <Input type="text" w="100%" placeholder="Search" onChange={handleSearch} />
  );
};

export default SearchBar;
