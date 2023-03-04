import { Box, Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { AboutMe } from "../components/home/about-me";
import { Career } from "../components/home/career";
import { Education } from "../components/home/education";
import { Footer } from "../components/home/footer";
import { Header } from "../components/home/header";
import { Languages } from "../components/home/languages";
import { Links } from "../components/home/links";
import { OtherSkills } from "../components/home/other-skills";
import { Projects } from "../components/home/projects";
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
          José Carlos | Software Engineer | Master of Computer Science
        </title>
        <meta
          name="description"
          content="José Carlos | Software Engineer with a Master's in Computer Science. Experienced in end-to-end project development. Visit my online CV to learn more."
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
              <Publications />
              <Languages />
            </Box>

            <Box>
              <AboutMe />
              <Career />
              <Skills />
              <OtherSkills />
              <Projects />
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
