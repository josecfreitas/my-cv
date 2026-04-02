import { List, Text } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SectionTitle } from "../section-title";

export const Career = () => (
  <Section>
    <SectionTitle>Career</SectionTitle>

    <List>
      <CustomListItem
        title="Senior Software Engineer to Staff Software Engineer 3"
        label="Business Insider"
        href="https://www.businessinsider.com/"
        when="Jul 2021 - Present"
      >
        <Text>
          Progressed through four promotions at Business Insider: Senior
          Software Engineer, Staff Software Engineer, Staff Software Engineer
          2, and Staff Software Engineer 3.
        </Text>
        <Text>
          Operating at staff-plus scope across large-scale platforms in the
          media industry, helping shape architecture, delivery, and engineering
          standards across teams.
        </Text>
        <Text>
          My work spans backend services, APIs, infrastructure, and developer
          experience, using technologies such as TypeScript, Node.js, Go,
          GraphQL, MongoDB, Elasticsearch, Docker, Kubernetes, and modern web
          frameworks.
        </Text>
        <Text>
          One example of that work was designing and building a Node.js and
          MongoDB API capable of handling more than 1,000 requests per second,
          with p95 latency below 4ms in production.
        </Text>
      </CustomListItem>
      <CustomListItem
        title="Senior Software Engineer"
        label="SmithRx"
        href="https://smithrx.com/"
        when="Aug 2025 - Present"
      >
        <Text>
          Working as a senior engineer in the healthcare and pharmacy benefits
          industry, building product and platform capabilities that support a
          modern PBM focused on transparency, cost efficiency, and member
          experience.
        </Text>
        <Text>
          My core stack includes React, GraphQL, Go, PostgreSQL, and Kafka,
          with responsibilities spanning application development, platform
          design, and scalable backend architecture.
        </Text>
        <Text>
          I also led the implementation of the company&apos;s Kafka-based event
          architecture, defining patterns, internal libraries, and best
          practices to help teams adopt event-driven systems more consistently.
        </Text>
      </CustomListItem>
      <CustomListItem
        title="Staff Software Engineer"
        label="Varsity Tutors, a Nerdy Company"
        href="https://www.varsitytutors.com/"
        when="May 2024 - Sep 2024"
      >
        <Text>
          Contributed as a staff engineer in a fast-moving education technology
          environment, providing technical leadership across a large senior
          engineering organization.
        </Text>
        <Text>
          I technically led 30 senior engineers and worked with Kafka, Go,
          PostgreSQL, React, and GraphQL to support platform development and
          high-impact engineering initiatives.
        </Text>
      </CustomListItem>
      <CustomListItem
        title="Co-founder"
        label="3R Eventos"
        href="https://www.eventos3r.com.br/"
        when="Feb 2018 - Jan 2024"
      >
        <Text>
          Co-founded and operated an events business, leading planning,
          execution, finance, customer service, vendor negotiation, marketing,
          and theme development.
        </Text>
        <Text>
          I managed budgets, coordinated suppliers, and led more than 100
          professionals during parties and large events, ensuring smooth
          operations and a high-quality customer experience from planning
          through execution.
        </Text>
        <Text>
          Our largest event was a New Year&apos;s Eve party with 5,000 guests,
          which required strong operational planning, team coordination, and
          execution under pressure.
        </Text>
      </CustomListItem>
      <CustomListItem
        title="Advanced Programmer Analyst"
        label="QAT Global"
        href="https://www.qat.com/"
        when="Dec 2020 - Jun 2021"
      >
        <Text>
          Played a key role in developing and maintaining a large utility
          automation application as part of a 14-person Scrum team.
        </Text>
        <Text>
          Worked with Java, Spring Boot, SQL Server, HTML, CSS, JavaScript,
          jQuery, Jenkins, JUnit, and SVN to deliver features, maintain system
          quality, and support ongoing product evolution.
        </Text>
      </CustomListItem>

      <CustomListItem
        title="Co-founder and Software Engineer"
        label="3r Agência"
        href="https://agencia3r.com.br/"
        when="Oct 2016 - Dec 2020"
      >
        <Text>
          Co-founded a digital agency and designed, built, and delivered custom
          software solutions for entrepreneurs and companies.
        </Text>
        <Text>
          Combined software engineering, product thinking, and UX/UI knowledge
          to lead projects from concept to launch using Java, Spring Boot,
          HTML, CSS, and JavaScript while working closely with clients and
          cross-functional teams.
        </Text>
      </CustomListItem>
      <CustomListItem
        title="Tech Lead @ Database Group"
        label="Universidade Estadual Paulista Julio de Mesquita Filho"
        href="https://www.grupogbd.com/PortalGBD/index"
        when="Jan 2016 - Apr 2018"
      >
        <Text>
          Led project teams at the university&apos;s Database Group, helping define
          requirements, schedules, deliverables, and technical direction across
          research and software initiatives.
        </Text>
        <Text>
          I also reviewed team activities, supported implementation, and
          coordinated testing to keep projects moving with quality and
          consistency.
        </Text>
      </CustomListItem>
      <CustomListItem
        title="Software Engineer @ Database Group"
        label="Universidade Estadual Paulista Julio de Mesquita Filho"
        href="https://www.grupogbd.com/PortalGBD/index"
        when="Jan 2014 - Dec 2015"
      >
        <Text>
          Developed and maintained systems for the university&apos;s Database Group,
          while also administering databases and supporting internal research
          and academic platforms.
        </Text>
        <Text>
          My work included Java, Spring Boot, JPA/Hibernate, PostgreSQL, JSP,
          HTML, CSS, Less, Bootstrap, JavaScript, and jQuery, with
          responsibilities spanning development, maintenance, and testing.
        </Text>
      </CustomListItem>
    </List>
  </Section>
);
