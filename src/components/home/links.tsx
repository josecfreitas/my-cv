import { List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SvgIconAlura } from "../svg/svg-icon-alura";
import { SvgIconEmail } from "../svg/svg-icon-email";
import { SvgIconGithub } from "../svg/svg-icon-github";
import { SvgIconLinkedin } from "../svg/svg-icon-linkedin";
import { SvgIconSite } from "../svg/svg-icon-site";
import { SvgIconWhatsapp } from "../svg/svg-icon-whatsapp";

export const Links = () => (
  <Section as="nav">
    <List>
      <CustomListItem
        icon={SvgIconEmail}
        href="mailto:josecfreitas@outlook.com.br"
        title="josecfreitas@outlook.com.br"
      />
      <CustomListItem
        icon={SvgIconGithub}
        title="github.com/josecfreitas"
        href="https://github.com/josecfreitas"
      />
      <CustomListItem
        icon={SvgIconLinkedin}
        title="linkedin.com/in/jose-carlos"
        href="https://linkedin.com/in/jose-carlos"
      />
      <CustomListItem
        icon={SvgIconWhatsapp}
        title="+55 (17) 98100-8663"
        href="https://api.whatsapp.com/send?phone=5517981008663&text=Hello,%20I%20found%20you%20at%20josecarlos.tec.br"
      />
      <CustomListItem
        icon={SvgIconAlura}
        title="alura.com.br/user/josecfreitas"
        href="https://alura.com.br/user/josecfreitas"
      />
      <CustomListItem
        icon={SvgIconSite}
        title="josecarlos.tec.br"
        href="https://josecarlos.tec.br"
      />
    </List>
  </Section>
);
