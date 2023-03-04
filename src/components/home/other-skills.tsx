import { List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SectionTitle } from "../section-title";

export const OtherSkills = () => (
  <Section>
    <SectionTitle>Other Skills</SectionTitle>

    <List>
      <CustomListItem title="Microsoft Office">
        I have been using Microsoft Office for over 10 years. I have experience
        with Word, Excel, and PowerPoint.
      </CustomListItem>
      <CustomListItem title="Design">
        I have trained in Adobe Photoshop, Illustrator, and Adobe XD. I also
        have experience with Figma.
      </CustomListItem>
    </List>
  </Section>
);
