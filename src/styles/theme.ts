import { extendTheme } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const theme = extendTheme({
  fonts: {
    heading: montserrat.style.fontFamily,
    body: montserrat.style.fontFamily,
  },
  components: {
    Text: {
      baseStyle: {
        mt: ".5em",
      },
    },
    Container: {
      baseStyle: {
        maxW: "container.xl",
      },
    },
  },
});
