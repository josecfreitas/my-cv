import { List, Text } from "@chakra-ui/react";
import { CustomListItem } from "../custom-list-item";
import { Section } from "../section";
import { SectionTitle } from "../section-title";

export const Career = () => (
  <Section>
    <SectionTitle>Career</SectionTitle>

    <List>
      <CustomListItem
        title="Senior Staff Software Engineer"
        label="Business Insider"
        href="https://www.businessinsider.com/"
        when="Jan 2024 - Present"
      ></CustomListItem>

      <CustomListItem
        title="Staff Software Engineer"
        label="Business Insider"
        href="https://www.businessinsider.com/"
        when="Apr 2022 - Jan 2024"
      ></CustomListItem>
      <CustomListItem
        title="Senior Software Engineer"
        label="Business Insider"
        href="https://www.businessinsider.com/"
        when="Jul 2021 - Mar 2022"
      >
        <Text>
          As a Senior Staff Software Engineer, I have been a crucial part of a team that powers and supports the world's most-read, most helpful, and most trusted source of service journalism. My extensive experience with a wide range of technologies has enabled me to make a significant contribution to the success of the company.
        </Text>
        <Text>
          My expertise in HTML, CSS, JavaScript, TypeScript, NodeJS, ExpressJS, NestJS, Go, MongoDB, ElasticSearch, Docker, Kubernetes, GitHub, and other cutting-edge technologies has enabled me to design and develop highly scalable and reliable systems. I have played a key role in building and maintaining a robust and flexible infrastructure that can handle millions of requests each day.
        </Text>
        <Text>
          My experience has also allowed me to effectively mentor and lead junior team members, ensuring that they stay up-to-date with the latest industry developments and are well-equipped to handle complex software engineering tasks. Additionally, I have an excellent track record of collaborating with cross-functional teams, ensuring that project goals are met on time.
        </Text>
        <Text>
          Overall, I am a highly skilled and driven Senior Staff Software Engineer who is passionate about creating innovative solutions to complex problems. I am committed to delivering high-quality work and exceeding the expectations of stakeholders, and I believe that my expertise and experience make me an asset to any team.
        </Text>
      </CustomListItem>

      <CustomListItem
        title="Co-founder"
        label="3R Eventos"
        href="https://www.eventos3r.com.br/"
        when="Feb 2018 - Jan 2024"
      >
        <Text>
          As an event coordinator, my ultimate goal is to create unforgettable
          experiences that bring joy and happiness to people's lives. To achieve
          this, I am responsible for overseeing various aspects of event
          planning and execution, including financial management, team
          management, customer service, marketing, and theme development.
        </Text>
        <Text>
          In terms of financial management, I work closely with clients to
          establish budgets and ensure that all expenses stay within the
          allocated funds. I also negotiate contracts with vendors and suppliers
          to secure the best rates and ensure high-quality services.
        </Text>
        <Text>
          As the team leader for a group of around 70 event staff, including
          bartenders, security personnel, and other professionals, I manage
          schedules, delegate tasks, and oversee the execution of all
          event-related activities. I prioritize team communication and
          collaboration to ensure seamless event operations and customer
          satisfaction.
        </Text>
        <Text>
          As the point of contact for customer service inquiries, I am
          responsible for handling client complaints and resolving any issues
          that arise during the event. I also work with the marketing team to
          promote events and develop themes that align with the clients'
          preferences and expectations.
        </Text>
        <Text>
          Overall, my passion for event planning, attention to detail, and
          strong leadership skills enable me to execute successful events that
          create unforgettable memories for all attendees.
        </Text>
      </CustomListItem>
      <CustomListItem
        title="Advanced Programmer Analyst"
        label="QAT Global"
        href="https://www.qat.com/"
        when="Dec 2020 - Jun 2021"
      >
        <Text>
          As an Advanced Programmer Analyst, I played a critical role in
          developing and maintaining a large utility automation application in a
          team of 14 using Scrum, Java, Spring Boot, SQL Server, HTML, CSS,
          JavaScript, jQuery, Jenkins, Unit Testing (JUnit), SVN, and many
          others.
        </Text>
      </CustomListItem>

      <CustomListItem
        title="Co-founder and Software Engineer"
        label="3r Agência"
        href="https://agencia3r.com.br/"
        when="Oct 2016 - Dec 2020"
      >
        <Text>
          As a Co-founder and Software Engineer at 3r Agência, I leveraged my
          extensive knowledge of technologies such as Java, Spring Boot, HTML,
          CSS, JavaScript, and UX/UI design to create innovative and reliable
          solutions for entrepreneurs and companies. Through my strong
          leadership and communication skills, I effectively managed
          cross-functional teams, collaborated with clients, and delivered
          high-quality solutions that exceeded expectations. My passion for
          creating exceptional user experiences and my commitment to staying
          up-to-date with emerging technologies made me an asset to the company
          during my time there.
        </Text>
      </CustomListItem>
      <CustomListItem
        title="Tech Lead @ Database Group"
        label="UNESP - Universidade Estadual Paulista"
        href="https://www.grupogbd.com/PortalGBD/index"
        when="Jan 2016 - Apr 2018"
      ></CustomListItem>
      <CustomListItem
        title="Software Engineer @ Database Group"
        label="UNESP - Universidade Estadual Paulista"
        href="https://www.grupogbd.com/PortalGBD/index"
        when="Jan 2014 - Dec 2015"
      >
        <Text>
          As Technical Lead and Software Engineer, I managed project teams,
          defined project requirements and schedules, and developed project
          documents. I assisted the development team, reviewed their activities,
          and conducted project tests, reporting any bugs found. Additionally, I
          administered databases and developed and maintained Database Group's
          systems using Java, Spring Boot, JPA/Hibernate, PostgreSQL, JSP, HTML,
          CSS, Less, Bootstrap, JavaScript, and jQuery.
        </Text>
      </CustomListItem>
    </List>
  </Section>
);
