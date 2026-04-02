import { Box, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { AboutMe } from "../components/home/about-me";
import { Career } from "../components/home/career";
import { Certifications } from "../components/home/certifications";
import { Education } from "../components/home/education";
import { Footer } from "../components/home/footer";
import { Header } from "../components/home/header";
import { HonorsAwards } from "../components/home/honors-awards";
import { Languages } from "../components/home/languages";
import { Links } from "../components/home/links";
import { Publications } from "../components/home/publications";
import { Skills } from "../components/home/skills";

interface HomeProps {
  lastUpdate: string;
}

export default function Home({ lastUpdate }: HomeProps) {
  return (
    <>
      <Head>
        <title>
          José Carlos de Freitas | Staff Software Engineer | B.Sc. & M.Sc. in Computer Science (Unesp) | MBA in Software Architecture (Full Cycle)
        </title>
        <meta
          name="description"
          content="José Carlos de Freitas is a Staff Software Engineer 3 at Business Insider with B.Sc. and M.Sc. degrees in Computer Science from UNESP and an MBA in Software Architecture from Full Cycle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Box as="main" minH="100vh" bg="resume.canvas" py={{ base: 0, md: 10 }}>
        <Container>
          <Box
            bg="resume.paper"
            border="1px solid"
            borderColor="resume.line"
            borderRadius={{ base: "none", md: "28px" }}
            overflow="hidden"
            boxShadow={{ base: "none", md: "0 28px 80px rgba(40, 29, 16, 0.10)" }}
            sx={{
              "@media print": {
                bg: "white",
                border: "none",
                borderRadius: "0",
                boxShadow: "none",
              },
            }}
          >
            <Header />

            <Box
              px={{ base: 6, md: 10 }}
              py={{ base: 6, md: 8 }}
              sx={{
                "@media print": {
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.8rem",
                  paddingBottom: "0.4rem",
                },
              }}
            >
              <Flex
                gap={{ base: 8, md: 10 }}
                flexDir={{ base: "column", md: "row" }}
                sx={{
                  "@media print": {
                    gap: "1rem",
                  },
                }}
              >
                <Box
                  flex={{ md: "0 0 300px" }}
                  bg={{ base: "transparent", md: "resume.panel" }}
                  border={{ base: "none", md: "1px solid" }}
                  borderColor={{ md: "resume.line" }}
                  borderRadius={{ base: "none", md: "22px" }}
                  px={{ base: 0, md: 5 }}
                  py={{ base: 0, md: 5 }}
                  alignSelf="flex-start"
                  sx={{
                    "@media print": {
                      flex: "0 0 320px",
                      bg: "transparent",
                      border: "none",
                      borderRadius: "0",
                      padding: "0",
                      fontSize: "0.92em",
                    },
                  }}
                >
                  <Links />
                  <Education />
                  <Certifications />
                  <Publications />
                  <HonorsAwards />
                  <Languages />
                </Box>

                <Box flex="1" minW={0}>
                  <AboutMe />
                  <Career />
                  <Skills />
                </Box>
              </Flex>
            </Box>

            <Footer lastUpdate={lastUpdate} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      lastUpdate: new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date()),
    },
  };
}
