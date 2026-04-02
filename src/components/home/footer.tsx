import { Box, Container, Flex, Text } from "@chakra-ui/react";

interface FooterProps {
  lastUpdate: string;
}

export const Footer = ({ lastUpdate }: FooterProps) => (
  <Box
    as="footer"
    py={5}
    borderTop="1px solid"
    borderColor="resume.line"
    bg="white"
    sx={{
      "@media print": {
        display: "none",
      },
    }}
  >
    <Container>
      <Flex justifyContent="space-between" gap={4} flexWrap="wrap">
        <Text fontSize="sm" color="resume.muted" mt={0}>
          Last updated on {lastUpdate}
        </Text>
        <Text fontSize="sm" color="resume.muted" mt={0}>
          Designed and developed by José Carlos
        </Text>
      </Flex>
    </Container>
  </Box>
);
