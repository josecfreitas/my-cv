import { List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SectionTitle } from "../section-title";
import { SvgIconEducation1 } from "../svg/svg-icon-education1";

export const Certifications = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>

    <List>
      <CustomListItem
        icon={SvgIconEducation1}
        title="200+ Tech Courses"
        label="Alura"
        href="https://cursos.alura.com.br/user/josecfreitas"
        when="2017 - 2020"
      />
    </List>
  </Section>
);
