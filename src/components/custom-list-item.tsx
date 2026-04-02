import {
  Box,
  Divider,
  Flex,
  ListIcon,
  ListItem,
  ListItemProps,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

interface CustomListItemProps extends ListItemProps {
  icon?: any;

  title: string;

  label?: string;
  href?: string;
  when?: string;
}

export const CustomListItem = ({
  icon,
  title,
  label,
  href,
  when,
  children,
  ...rest
}: CustomListItemProps) => {
  const Title = () => (
    <Text
      fontWeight="600"
      fontSize={{ base: "sm", md: "md" }}
      lineHeight="1.3"
      mt={0}
      sx={{
        "@media print": {
          fontSize: "0.82rem",
          lineHeight: 1.2,
        },
      }}
    >
      {title}
    </Text>
  );
  const Label = () => (
    <Text
      fontSize="xs"
      mt={1}
      color="resume.muted"
      lineHeight="1.4"
      sx={{
        "@media print": {
          fontSize: "0.65rem",
          marginTop: "0.12rem",
          lineHeight: 1.25,
        },
      }}
    >
      {label}
    </Text>
  );

  return (
    <ListItem
      my={3}
      sx={{
        "@media print": {
          marginTop: "0.45rem",
          marginBottom: "0.45rem",
        },
      }}
      {...rest}
    >
      <Flex
        gap={2}
        alignItems="flex-start"
        justifyContent="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <Flex gap={2} alignItems="flex-start" minW={0}>
          {icon && <ListIcon as={icon} boxSize={4} color="resume.accent" mt="0.2em" />}

          <Box minW={0}>
            {href && !label ? (
              <Link href={href} target="_blank">
                <Title />
              </Link>
            ) : (
              <Title />
            )}

            {label && (
              <>
                {href ? (
                  <Link href={href} target="_blank">
                    <Label />
                  </Link>
                ) : (
                  <Label />
                )}
              </>
            )}
          </Box>
        </Flex>

        {when && (
          <Text
            fontSize="xs"
            color="resume.muted"
            whiteSpace="nowrap"
            flexShrink={0}
            mt={{ base: 0, md: "0.15em" }}
            sx={{
              "@media print": {
                fontSize: "0.62rem",
                marginTop: "0.08rem",
              },
            }}
          >
            {when}
          </Text>
        )}
      </Flex>

      {children && (
        <>
          <Box
            fontSize="sm"
            mt={2}
            pl={icon ? 6 : 0}
            color="resume.muted"
            sx={{
              "@media print": {
                fontSize: "0.72rem",
                marginTop: "0.3rem",
              },
            }}
          >
            {children}
          </Box>
          <Divider
            my={4}
            borderColor="resume.line"
            sx={{
              "@media print": {
                marginTop: "0.55rem",
                marginBottom: "0.55rem",
              },
            }}
          />
        </>
      )}
    </ListItem>
  );
};
