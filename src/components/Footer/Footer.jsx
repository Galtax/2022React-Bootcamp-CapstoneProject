import React from 'react';
import PropTypes from 'prop-types';
import {  FooterMain
        , Legend
        , SocialContainer
        , SocialLink
        , IconGithub } from './FooterMain.styled'
import myIconGithub from "../../assets/gitlogo.png"

function Footer({ text }) {
  return (
    <FooterMain>
      <Legend>
        {text}
      </Legend>
      <SocialContainer>
        <SocialLink href="https://github.com/galtax" target={"_blank"}>

          <IconGithub src={myIconGithub} />
        </SocialLink>

      </SocialContainer>
    </FooterMain>
  );
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
