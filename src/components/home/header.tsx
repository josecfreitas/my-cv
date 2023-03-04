import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import ProfileImage from "/public/profile.jpg";

export const Header = () => (
  <Box as="header" py={8} bg="gray.100">
    <Container>
      <Flex alignItems="center" gap={8} flexDir={{ base: "column", md: "row" }}>
        <Box borderRadius="full" overflow="hidden" width="fit-content">
          <Image
            src={ProfileImage}
            alt="José Carlos' profile image"
            width={300}
            height={300}
          />
        </Box>

        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" size="4xl" mb={2} fontWeight="semibold">
            José Carlos de Freitas
          </Heading>
          <Text as="strong" fontWeight="medium" color="gray.700">
            Staff Software Engineer @ Insider, Inc. | Master of Computer Science
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);
