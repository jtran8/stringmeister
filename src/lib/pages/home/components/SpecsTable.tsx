import { Table, Tbody, Th, Tr, Td, TableContainer } from "@chakra-ui/react";

interface Props {
  type?: string;
  shape?: string;
  colour?: string;
}

const SpecsTable = ({ type, shape, colour }: Props) => (
  <TableContainer>
    <Table variant="unstyled" size="sm">
      <Tbody>
        {type && (
          <Tr>
            <Th>Type</Th>
            <Td>{type}</Td>
          </Tr>
        )}
        {shape && (
          <Tr>
            <Th>Shape</Th>
            <Td>{shape}</Td>
          </Tr>
        )}
        {colour && (
          <Tr>
            <Th>Colour</Th>
            <Td>{colour}</Td>
          </Tr>
        )}
      </Tbody>
    </Table>
  </TableContainer>
);

export default SpecsTable;
