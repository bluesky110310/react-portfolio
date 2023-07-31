import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import CustomCard from "../components/CustomCard";
import TypographyCaption from "../components/TypographyCaption";

export default function About() {
  return (
    <CustomCard actions={[]}>
      <div style={{ display: "flex" }}>
        <div id={"back-to-About"}></div>
        <CardContent sx={{ width: "100%" }}>
          <TypographyCaption>About Me</TypographyCaption>
          <Typography variant="h5" color="secondary">
            Senior Software Engineer with <b>10+</b> years of excellent experience, involved in complete SDLC including analysis, design, development, implementation, testing, support, and maintenance of enterprise-level web applications using <b>Java</b>, <b>PHP</b>, <b>Node.js</b> & related technologies.
            <br />
            Developed dozens of business enterprise websites such as healthcare, e-commerce, bank management system, etc.
            <br />
          </Typography>
        </CardContent>
      </div>
    </CustomCard>
  );
}
