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
    sx={{
      "@media print": {
        fontSize: "0.66rem",
        paddingBottom: "0.32rem",
        marginBottom: "0.55rem",
        letterSpacing: "0.16em",
      },
    }}
    {...rest}
  >
    {children}
  </Heading>
);
