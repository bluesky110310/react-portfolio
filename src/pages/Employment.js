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
      <TypographyCaption>Employment</TypographyCaption>
      <CardContent>
        <ColorCard
          caption={"Self-Employed"}
          period={"Jan 2022 - Mar 2023"}
          contentCap={"Senior Software Engineer"}
        >
          <ul>
            <li>
              Worked on <b>4+</b> projects using <b>Spring</b> frameworks, <b>MERN</b> & <b>MEAN</b> Stack, including the website development from the scratch.
            </li>
            <li>
              Built <b>3+</b> client’s websites with <b>Laravel</b>, <b>Symfony</b> & <b>WordPress</b>.
            </li>
            <li>
              Worked on cloud computing for developing websites using <b>Python</b> &<b>Django</b>.
            </li>
            <li>
              Developed the website, integrated with full-text search engines such as <b>Solr</b>.
            </li>
            <li>
              Designed, architected, and implemented scalable cloud-based web applications using <b>AWS</b>, <b>Microservices</b> & <b>GCP</b>, etc.
            </li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"Cloudwave"}
          period={"May 2017 - Nov 2021"}
          contentCap={"Senior Full Stack Java Developer"}
        >
          <ul>
            <li>
              Developed business enterprise websites from the scratch using <b>Alfresco</b> & <b>ADF</b>.
            </li>
            <li>
              Designed and implemented an application using <b>JSP</b>, <b>Spring MVC</b>, <b>Spring IOC</b>, <b>Spring Annotations</b>, <b>Spring AOP</b>, <b>Spring Transactions</b> & <b>Hibernate</b>.
            </li>
            <li>
              Developed, tested, and maintained current systems written in <b>PHP</b> & <b>Laravel</b>.
            </li>
            <li>
              Responsible for installing, configuring and maintaining <b>CodeIgniter</b>, <b>PHP</b>, <b>Apache</b> and <b>MySQL</b> on <b>AWS</b> cloud servers.
            </li>
            <li>
              Created <b>RESTful APIs</b> using <b>Node.js</b> and consumed them with <b>Angular.js</b>.
            </li>
            <li>
              Collaborated with backend, and client engineers to help build features, and solve creative problems.
            </li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"LEOCODE"}
          period={"Jun 2014 - Apr 2017"}
          contentCap={"Full Stack Developer"}
        >
          <ul>
            <li>
              Worked on <b>3+</b> Websites, Health/Fitness sites, and E-commerce sites.
            </li>
            <li>
              Improved functionality of web applications with <b>JSP</b> & <b>Servlets</b>, <b>Python</b> & <b>Django</b>.
            </li>
            <li>
              Created <b>2+</b> website using <b>CodeIgniter</b> + <b>Bootstrap</b>, <b>Laravel</b> + <b>Vue.js</b>.
            </li>
            <li>
              Effectively communicated within a multi-disciplined team, across <b>6+</b> locations and <b>3+</b> time zones.
            </li>
            <li>
              Adhered <b>100%</b> to standards and best practices around development processes, coding, and peer reviews.
            </li>
            <li>
              Wrote clean, maintainable, scalable, and well-tested code.
            </li>
          </ul>
        </ColorCard>
        <ColorCard
          caption={"10Clouds"}
          period={"Oct 2012 - May 2014"}
          contentCap={"Jr. Web Developer"}
        >
          <ul>
            <li>
              Built <b>5+</b> Web Applications powered by bulletproof code, with stunning interfaces using <b>React</b>, <b>Angular</b> & <b>Node.js</b> + <b>Express</b>.
            </li>
            <li>
              Partnered with a developer to implement <b>RESTful APIs</b> in <b>PHP</b>, enabling the analytics team to increase reporting speed by <b>20%</b>.
            </li>
            <li>
              Worked on back-end part using <b>PHP</b> & <b>Node.js</b>.
            </li>
          </ul>
        </ColorCard>
      </CardContent>
    </div>
  );
}
