import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import ProfileImage from "/public/profile.jpg";

export const Header = () => (
  <Box
    as="header"
    py={{ base: 6, md: 8 }}
    bg={{ base: "white", md: "linear-gradient(180deg, #fff9f3 0%, #fffdf9 100%)" }}
    borderBottom="1px solid"
    borderColor="resume.line"
  >
    <Container>
      <Flex
        alignItems="center"
        gap={{ base: 5, md: 8 }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          borderRadius="2xl"
          overflow="hidden"
          width={{ base: "120px", md: "148px" }}
          flexShrink={0}
          border="1px solid"
          borderColor="resume.line"
          boxShadow={{ base: "none", md: "0 16px 40px rgba(45, 34, 20, 0.10)" }}
        >
          <Image
            src={ProfileImage}
            alt="José Carlos' profile image"
            width={300}
            height={300}
          />
        </Box>

        <Box textAlign={{ base: "center", md: "left" }}>
          <Text
            mt={0}
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="0.28em"
            color="resume.accent"
            fontWeight="700"
            mb={2}
          >
            Software Engineer
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="0.95"
            letterSpacing="-0.04em"
            mb={3}
            fontWeight="700"
          >
            José Carlos de Freitas
          </Heading>
          <Text
            as="strong"
            fontWeight="600"
            color="resume.ink"
            fontSize={{ base: "md", md: "lg" }}
            mt={0}
          >
            Staff Software Engineer 3 @ Business Insider
          </Text>
          <Text color="resume.muted" fontSize={{ base: "sm", md: "md" }} mt={2}>
            B.Sc. & M.Sc. in Computer Science (UNESP) | MBA in Software
            Architecture (Full Cycle)
          </Text>
          <Text color="resume.muted" fontSize={{ base: "sm", md: "md" }} mt={1}>
            São José do Rio Preto, São Paulo, Brazil
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);
