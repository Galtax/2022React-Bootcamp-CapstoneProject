import React from "react";

import { Container, Legend, SocialContainer, SocialLink, IconGithub } from "./Footer.style";
import myIconGithub from "../../assets/gitlogo.png"

const Footer = () => {
  return (
    <Container>
      <Legend>
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </Legend>
      <SocialContainer>
        <SocialLink href="https://github.com/galtax" target={"_blank"}>

          <IconGithub src={myIconGithub} />
        </SocialLink>

      </SocialContainer>
    </Container>
  );
};

export default Footer;
