import { Box, Heading, List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { SvgIconAchievement } from "../svg/svg-icon-achievement";

export const Publications = () => (
  <Box as="section">
    <Heading as="h2">Publications</Heading>

    <List>
      <CustomListItem
        icon={SvgIconAchievement}
        title="An Efficient Parallel Optimization for Co-Authorship Network Analysis"
        label="IEEE International Conference on Big Data (Big Data 2017)"
        href="https://ieeexplore.ieee.org/abstract/document/8327078"
      />
      <CustomListItem
        icon={SvgIconAchievement}
        title="Analysing research collaboration through co-authorship networks in a big data environment: an efficient parallel approach"
        label="International Journal of Big Data Intelligence (IJBDI)"
        href="https://www.inderscience.com/info/inarticle.php?artid=106061"
      />
    </List>
  </Box>
);
