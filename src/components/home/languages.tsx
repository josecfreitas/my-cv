import { List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SectionTitle } from "../section-title";

export const Languages = () => (
  <Section>
    <SectionTitle>Languages</SectionTitle>

    <List>
      <CustomListItem title="Portuguese" label="Native" />
      <CustomListItem title="English" label="Fluent" />
    </List>
  </Section>
);
