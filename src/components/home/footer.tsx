import { Box, Container, Flex, Text } from "@chakra-ui/react";

interface FooterProps {
  lastUpdate: string;
}

export const Footer = ({ lastUpdate }: FooterProps) => (
  <Box as="footer" py={8} bgColor="gray.100">
    <Container>
      <Flex justifyContent="space-between">
        <Text>Last updated on {lastUpdate}</Text>
        <Text>Developed by José Carlos</Text>
      </Flex>
    </Container>
  </Box>
);
