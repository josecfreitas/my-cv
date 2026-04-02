import { List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SectionTitle } from "../section-title";
import { SvgIconAchievement } from "../svg/svg-icon-achievement";

export const HonorsAwards = () => (
  <Section>
    <SectionTitle>Honors &amp; Awards</SectionTitle>

    <List>
      <CustomListItem
        icon={SvgIconAchievement}
        title="2023 Business Insider Tech MVP Award"
        when="2023"
      />
      <CustomListItem
        icon={SvgIconAchievement}
        title="XXVIII Congresso de Iniciacao Cientifica - UNESP"
        when="2016"
      />
    </List>
  </Section>
);
