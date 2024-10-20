import { Table, Tbody, Th, Tr, Td, TableContainer } from "@chakra-ui/react";

import SpecBar from "./SpecBar";

interface Props {
  specs: any;
  stats: any;
  sku: any;
}

const SpecsTable = ({ specs, stats, sku }: Props) => (
  <TableContainer>
    <Table variant="unstyled" size="sm">
      <Tbody>
        {Object.keys(specs).map((spec: string) => (
          <Tr key={sku + spec}>
            <Th fontFamily="Plus Jakarta Sans" pt={2}>
              {spec}
            </Th>
            <Td>{specs[spec]}</Td>
          </Tr>
        ))}
        {stats &&
          Object.keys(stats).map((stat: any) => (
            <Tr key={sku + stat}>
              <Th pt={2}>{stat}</Th>
              <Td>
                <SpecBar cat={stat} rating={stats} />
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  </TableContainer>
);

export default SpecsTable;
