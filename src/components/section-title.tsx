import { Heading, HeadingProps } from "@chakra-ui/react";

interface SectionTitleProps extends HeadingProps {}

export const SectionTitle = ({ children, ...rest }: SectionTitleProps) => (
  <Heading as="h2" size="lg" mb=".5em" fontWeight="medium" {...rest}>
    {children}
  </Heading>
);
