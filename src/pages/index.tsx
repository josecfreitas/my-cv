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
      <Box as="main">
        <Header />

        <Container>
          <Flex gap={{ md: 8 }} flexDir={{ base: "column", md: "row" }}>
            <Box flex={{ md: "0 0 300px" }}>
              <Links />
              <Education />
              <Certifications />
              <Publications />
              <HonorsAwards />
              <Languages />
            </Box>

            <Box>
              <AboutMe />
              <Career />
            </Box>
          </Flex>
        </Container>

        <Footer lastUpdate={lastUpdate} />
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
