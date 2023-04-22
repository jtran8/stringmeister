import { Table, Tbody, Th, Tr, Td, TableContainer } from "@chakra-ui/react";

interface Props {
  specs: any;
}

const SpecsTable = ({ specs }: Props) => (
  <TableContainer>
    <Table variant="unstyled" size="sm">
      <Tbody>
        {Object.keys(specs).map((spec: string) => (
          <Tr>
            <Th pt={2}>{spec}</Th>
            <Td>{specs[spec]}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);

export default SpecsTable;
