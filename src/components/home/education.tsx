import { List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SectionTitle } from "../section-title";
import { SvgIconEducation1 } from "../svg/svg-icon-education1";
import { SvgIconEducation2 } from "../svg/svg-icon-education2";

export const Education = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>

    <List>
      <CustomListItem
        icon={SvgIconEducation2}
        title="Master's degree in Computer Science"
        label="UNESP - Universidade Estadual Paulista"
        href="https://www2.unesp.br/"
        when="2017 - 2020"
      />
      <CustomListItem
        icon={SvgIconEducation2}
        title="Bachelor's degree in Computer Science"
        label="UNESP - Universidade Estadual Paulista"
        href="https://www2.unesp.br/"
        when="2013 - 2016"
      />
      <CustomListItem
        icon={SvgIconEducation1}
        title="200+ Technology Courses"
        label="Alura"
        href="https://cursos.alura.com.br/user/josecfreitas"
        when="2017 - Present"
      />
      <CustomListItem
        icon={SvgIconEducation1}
        title="Associate's degree in Computer Science"
        label="ETEC Philadelpho Gouvêa Netto"
        href="https://etecphiladelpho.cps.sp.gov.br/"
        when="2011 - 2012"
      />
    </List>
  </Section>
);
