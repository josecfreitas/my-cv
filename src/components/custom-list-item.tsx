import { ListIcon, ListItem } from "@chakra-ui/react";
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
}: CustomListItemProps) => (
  <ListItem>
    {icon && <ListIcon as={icon} />}

    {href && !label ? (
      <Link href={href} target="_blank">
        {title}
      </Link>
    ) : (
      title
    )}

    {label && (
      <>
        {href ? (
          <Link href={href} target="_blank">
            {label}
          </Link>
        ) : (
          label
        )}
      </>
    )}

    {when}
  </ListItem>
);
