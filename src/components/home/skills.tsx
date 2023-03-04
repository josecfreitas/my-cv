import { List } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SectionTitle } from "../section-title";

export const Skills = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>

    <List>
      <CustomListItem title="Programming Languages">
        I have 10 years of experience with HTML, CSS, and JavaScript, and 6
        years of experience with TypeScript. I also have 6 years of experience
        with NodeJS, 1 year of experience with Go, and 7 years of experience
        with Java. I have also received training in Scala (in 2018), PHP (in
        2017), C# (in 2016), C (in 2013), C++ (in 2012), and Visual Basic (in
        2012).
      </CustomListItem>
      <CustomListItem title="Databases">
        I have 7 years of experience with PostgreSQL, 3 years of experience with
        MongoDB, and 2 years of experience with ElasticSearch, MySql and Neo4j.
        I also have 1 year of experience with Redis. Additionally, I received
        training in Sqlite in 2012.
      </CustomListItem>
      <CustomListItem title="Frameworks">
        I have 2 years of experience with with NestJS and React, 3 years with
        ExpressJS and Angular2+, and 6 years with Spring Boot and jQuery.
        Additionally, I have trained in Vue, Sass, jUnit, Less, Spark,
        WordPress, React, GatsbyJS, NextJS, Jenkins, Apache Kafka, Flutter,
        Webpack, and Laravel, with varying levels of experience.
      </CustomListItem>
      <CustomListItem title="Others">
        I have 2 years of experience with GitHub Actions, Docker, Kubernetes,
        and AWS. I also have 6 years of experience with Unit Testing,
        Integration Testing, Git, SEO, NPM, Postman, UX/UI, and 3 years of
        experience with PWA. Additionally, I have 7 years of experience with
        Maven and 3 years of experience with SVN. I also have 3 years of
        experience with Scrum, and was trained in Kanban in 2017.
      </CustomListItem>
    </List>
  </Section>
);
