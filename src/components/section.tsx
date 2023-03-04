import { Box, BoxProps } from "@chakra-ui/react";

interface SectionProps extends BoxProps {}

export const Section = ({ children, ...rest }: SectionProps) => (
  <Box as="section" my={6} {...rest}>
    {children}
  </Box>
);
