import { Heading, HeadingProps } from "@chakra-ui/react";

interface SectionTitleProps extends HeadingProps {}

export const SectionTitle = ({ children, ...rest }: SectionTitleProps) => (
  <Heading
    as="h2"
    fontSize={{ base: "xs", md: "sm" }}
    textTransform="uppercase"
    letterSpacing="0.22em"
    color="resume.accent"
    pb={2}
    mb={4}
    borderBottom="1px solid"
    borderColor="resume.line"
    fontWeight="700"
    {...rest}
  >
    {children}
  </Heading>
);
