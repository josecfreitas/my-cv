import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import ProfileImage from "/public/profile.jpg";

export const Header = () => (
  <Box as="header" py={{ base: 4, md: 8 }} bg="gray.100">
    <Container>
      <Flex
        alignItems="center"
        gap={{ base: 4, md: 8 }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          borderRadius="full"
          overflow="hidden"
          width="fit-content"
          maxWidth={{ base: "100px", md: "300px" }}
        >
          <Image
            src={ProfileImage}
            alt="José Carlos' profile image"
            width={300}
            height={300}
          />
        </Box>

        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading
            as="h1"
            size={{ base: "3xl", md: "4xl" }}
            mb={2}
            fontWeight="semibold"
          >
            José Carlos de Freitas
          </Heading>
          <Text
            as="strong"
            fontWeight="medium"
            color="gray.700"
            fontSize={{ base: "sm", md: "md" }}
          >
            Staff Software Engineer 3 @ Business Insider
          </Text>
          <Text color="gray.700" fontSize={{ base: "sm", md: "md" }} mt={1}>
            B.Sc. & M.Sc. in Computer Science (UNESP) | MBA in Software
            Architecture (Full Cycle)
          </Text>
          <Text color="gray.600" fontSize={{ base: "sm", md: "md" }} mt={1}>
            São José do Rio Preto, São Paulo, Brazil
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);
