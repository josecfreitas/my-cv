import { Box, BoxProps } from "@chakra-ui/react";

interface SectionProps extends BoxProps {}

export const Section = ({ children, ...rest }: SectionProps) => (
  <Box as="section" my={{ base: 6, md: 7 }} {...rest}>
    {children}
  </Box>
);
