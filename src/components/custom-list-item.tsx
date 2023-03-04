import { Box, Flex, ListIcon, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CustomListItemProps {
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
}: CustomListItemProps) => {
  const Title = () => <Text fontWeight="medium">{title}</Text>;
  const Label = () => (
    <Text fontSize="xs" mt={1}>
      {label}
    </Text>
  );

  return (
    <ListItem my={3}>
      <Flex gap={1} alignItems="center">
        {icon && <ListIcon as={icon} boxSize={5} />}

        <Box>
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

        {when && (
          <Text fontSize="xs" color="gray.500" ml="auto" whiteSpace="nowrap">
            {when}
          </Text>
        )}
      </Flex>
    </ListItem>
  );
};
