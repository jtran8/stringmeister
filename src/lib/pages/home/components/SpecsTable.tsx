import { Table, Tbody, Th, Tr, Td, TableContainer } from "@chakra-ui/react";

interface SpecsProps {
  type: string;
  shape: string;
  colour: string;
}

const SpecsTable = ({ type, shape, colour }: SpecsProps) => (
  <TableContainer>
    <Table variant="unstyled" size="sm">
      <Tbody>
        <Tr>
          <Th>Type</Th>
          <Td>{type}</Td>
        </Tr>
        <Tr>
          <Th>Shape</Th>
          <Td>{shape}</Td>
        </Tr>
        <Tr>
          <Th>Colour</Th>
          <Td>{colour}</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
);

export default SpecsTable;
