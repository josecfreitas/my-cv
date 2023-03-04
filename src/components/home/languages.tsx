import { Box, Heading, List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";

export const Languages = () => (
  <Box as="section">
    <Heading as="h2">Languages</Heading>

    <List>
      <CustomListItem title="Portuguese" label="Native" />
      <CustomListItem title="English" label="Fluent" />
    </List>
  </Box>
);
