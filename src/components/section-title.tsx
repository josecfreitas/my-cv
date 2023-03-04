import { Heading, HeadingProps } from "@chakra-ui/react";

interface SectionTitleProps extends HeadingProps {}

export const SectionTitle = ({ children, ...rest }: SectionTitleProps) => (
  <Heading as="h2" size="lg" mb=".75em" fontWeight="semibold" {...rest}>
    {children}
  </Heading>
);
