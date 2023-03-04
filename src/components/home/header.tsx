import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Section } from "../section";

import ProfileImage from "/public/profile.jpg";

export const Header = () => (
  <Section as="header">
    <Container>
      <Flex alignItems="center" gap={8}>
        <Box borderRadius="full" overflow="hidden" width="fit-content">
          <Image
            src={ProfileImage}
            alt="José Carlos' profile image"
            width={300}
            height={300}
          />
        </Box>

        <Box>
          <Heading as="h1" size="4xl" mb={2}>
            José Carlos de Freitas
          </Heading>
          <Text as="strong" fontWeight="medium" color="gray.700">
            Staff Software Engineer @ Insider | Master of Computer Science
          </Text>
        </Box>
      </Flex>
    </Container>
  </Section>
);
