import { Box, Text } from "@chakra-ui/react";

interface FooterProps {
  lastUpdate: string;
}

export const Footer = ({ lastUpdate }: FooterProps) => (
  <Box as="footer">
    <Text>Last updated on {lastUpdate}</Text>
    <Text>Developed by José Carlos</Text>
  </Box>
);
