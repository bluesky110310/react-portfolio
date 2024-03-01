import * as React from "react";
import CardContent from "@mui/material/CardContent";

import ColorCard from "../components/ColorCard";
import TypographyCaption from "../components/TypographyCaption";

const divStyle = {
  width: "85%",
  marginBottom: "50px",
  position: "relative",
};

export default function Employment() {
  return (
    <div style={divStyle} id={"back-to-Employment"}>
      <TypographyCaption>Work Experience</TypographyCaption>
      <CardContent>
        <ColorCard
          caption={"Self-Employed"}
          period={"Mar 2022 - May 2023"}
          contentCap={"Senior Software Engineer"}
        >
          <ul>
            <li>
              Designed and developed user interfaces using <b>Spring Framework</b>, <b>Spring Boot</b>, <b>Spring JPA</b>, <b>JSP</b>, <b>HTML</b>, <b>CSS</b>, <b>React</b>.
            </li>
            <li>
              Created a <b>Java</b> Bean based testing tools with <b>XML</b> input requests and <b>XML</b>/<b>Document</b> outputs.
            </li>
            <li>
              Initiated the application of <b>Java 8</b> features, causing a code compaction of <b>25%</b>.
            </li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"LastPass"}
          period={"Jun 2017 - Dec 2021"}
          contentCap={"Senior Full Stack Developer"}
        >
          <ul>
            <li>
              Designed and implemented <b>SaaS</b> platform using <b>Python</b>, <b>Django</b>, <b>GraphQL</b>, <b>PostgreSQL</b>, <b>MongoDB</b>, <b>Firebase</b>, and <b>AWS</b>.
            </li>
            <li>
              Heavy <b>JDBC</b> programming writing complex <b>SQL</b> and stored procedures for CRUD operations.
            </li>
            <li>
              Updated a custom <b>PHP</b> framework to introduce modern tools like <b>Docker</b>, <b>NPM</b>, <b>Composer</b>, <b>PHPUnit</b>, and Doctrine Migrations.
            </li>
            <li>
              Experienced in developing Web-based Applications using <b>Python</b>, <b>Bootstrap</b>, <b>CSS3</b>, <b>HTML5</b>, <b>JavaScript</b>, <b>Angular</b>, <b>React</b> and <b>jQuery</b>, <b>Microservices</b>.
            </li>
            <li>
              Created an admin panel and associated design system in <b>React</b> and Storybook to be used by clients and the internal admin.
            </li>
            <li>
              Became the go-to person for numerous areas of the app such as <b>React</b>, <b>GraphQL</b>, and testing, helping others in the team and proposing improvements on the usage of those.
            </li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Intetics Inc"}
          period={"Sep 2014 - May 2017"}
          contentCap={"Full Stack Developer"}
        >
          <ul>
            <li>
              Implemented <b>MVC</b> pattern using <b>JSP</b> and <b>Spring</b> Controller.
            </li>
            <li>
              Worked in a team and developed a new UI framework based on a styled system, <b>TypeScript</b> and <b>React</b>.
            </li>
            <li>
              Developed <b>Python</b> based <b>RESTful APIs</b> using <b>Django</b>, <b>SQLAlchemy</b> and <b>PostgreSQL</b> & Implemented client-side Interface using <b>React</b>.
            </li>
            <li>
              Development with Relational Database Management Systems including <b>MySQL</b> and <b>PostgreSQL</b>.
            </li>
            <li>
              Contributed to the integration with different APIs using <b>REST</b> and <b>GraphQL</b>.
            </li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Dash Technologies Inc"}
          period={"Jan 2013 - Aug 2014"}
          contentCap={"Web Developer"}
        >
          <ul>
            <li>
              Designed and developed user interfaces using <b>Spring Framework</b>.
            </li>
            <li>
              Developed web applications using UI technologies such as <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>jQuery</b>, <b>React</b>, <b>Angular</b>, <b>JSON</b>, <b>Bootstrap</b> and <b>Ajax</b>.
            </li>
            <li>
              Built a responsive website prototype for WestJet Vacations using <b>AngularJS</b>.
            </li>
          </ul>
        </ColorCard>
      </CardContent>
    </div>
  );
}
