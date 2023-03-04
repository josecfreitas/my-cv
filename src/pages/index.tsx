import { Box } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { AboutMe } from "../components/home/about-me";
import { Education } from "../components/home/education";
import { Footer } from "../components/home/footer";
import { Header } from "../components/home/header";
import { Languages } from "../components/home/languages";
import { Links } from "../components/home/links";
import { Publications } from "../components/home/publications";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <Box as="main" className={montserrat.className}>
        <Header />

        <Links />
        <Education />
        <Publications />
        <Languages />

        <AboutMe />

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
