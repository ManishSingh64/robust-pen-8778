import React from "react";
import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";

export const Tester = () => {
  return (
    <TableContainer p={5}>
      <Table size="sm" >
        <Thead>
          <Tr>
            <Th>Today</Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
            <Th isNumeric>Total: 00:00:05</Th>
          </Tr>
        </Thead>

        {/* <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>          
        </Tbody>         */}
      </Table>
    </TableContainer>
  );
};
