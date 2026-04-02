import { List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SectionTitle } from "../section-title";

export const Skills = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>

    <List>
      <CustomListItem title="Backend and Platform Engineering">
        Node.js, Go, Java, GraphQL, REST APIs, distributed systems, event-driven
        architecture, Kafka, and high-throughput backend services.
      </CustomListItem>
      <CustomListItem title="Frontend and Product Development">
        React, TypeScript, JavaScript, HTML, CSS, and building end-to-end
        product experiences across web applications and internal platforms.
      </CustomListItem>
      <CustomListItem title="Data and Infrastructure">
        PostgreSQL, MongoDB, Elasticsearch, Docker, Kubernetes, CI/CD, and
        scalable production systems with strong focus on performance and
        reliability.
      </CustomListItem>
      <CustomListItem title="Architecture and Leadership">
        Software design, technical leadership, mentoring, engineering
        standards, platform strategy, and defining patterns, libraries, and
        best practices for teams.
      </CustomListItem>
    </List>
  </Section>
);
