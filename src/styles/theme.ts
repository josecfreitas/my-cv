import { extendTheme } from "@chakra-ui/react";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const theme = extendTheme({
  colors: {
    resume: {
      canvas: "#f3efe9",
      paper: "#fffdf9",
      panel: "#f8f3eb",
      ink: "#1e2430",
      muted: "#5f6775",
      line: "#ddd3c5",
      accent: "#8d5c45",
      link: "#6d4735",
    },
  },
  fonts: {
    heading: spaceGrotesk.style.fontFamily,
    body: ibmPlexSans.style.fontFamily,
  },
  styles: {
    global: {
      "html, body": {
        bg: "resume.canvas",
        color: "resume.ink",
      },
      body: {
        lineHeight: 1.6,
      },
      a: {
        color: "resume.link",
        textDecorationColor: "rgba(109, 71, 53, 0.24)",
        textUnderlineOffset: "0.16em",
      },
      "@media print": {
        "html, body": {
          bg: "#ffffff",
          color: "#111111",
        },
      },
    },
  },
  components: {
    Text: {
      baseStyle: {
        mt: ".45em",
        color: "resume.ink",
      },
    },
    Container: {
      baseStyle: {
        maxW: "container.lg",
      },
    },
  },
});
