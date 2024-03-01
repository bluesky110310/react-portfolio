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
            <div style={{ textIndent: 20 }}>
              With over <b>12</b> years of experience in tech, working in several software development companies, I have played an essential role in developing and improving a wide range of software projects & products.
            </div>
            <div style={{ textIndent: 20 }}>
              Excellent reputation for resolving problem and improving customer satisfaction.
            </div>
          </Typography>
        </CardContent>
      </div>
    </CustomCard>
  );
}
