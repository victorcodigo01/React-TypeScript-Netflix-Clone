import React from "react";
import FooterWrapper from "../components/Footer/FooterWrapper";
import FooterTitle from "../components/Footer/FooterTitle";
import FooterRow from "../components/Footer/FooterRow";
import FooterColumn from "../components/Footer/FooterColumn";
import FooterLink from "../components/Footer/FooterLink";

/*---> Component <---*/
const FooterCompound = () => {
  return (
    <FooterWrapper>
      <FooterTitle>¿Preguntas? Contáctanos.</FooterTitle>
      <FooterRow>
        <FooterColumn>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Relaciones con Inversoroes</FooterLink>
          <FooterLink>Privacidad</FooterLink>
          <FooterLink>Test rápido</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Centro de ayuda</FooterLink>
          <FooterLink>Trabajos</FooterLink>
          <FooterLink>Preferencias de Cookies </FooterLink>
          <FooterLink>Notas legales</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Cuenta</FooterLink>
          <FooterLink>Maneras de Visualizar</FooterLink>
          <FooterLink>Información Corporativa</FooterLink>
          <FooterLink>Netflix Originales</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>Centro de Medios</FooterLink>
          <FooterLink>Términos de Uso</FooterLink>
          <FooterLink>Contáctanos</FooterLink>
        </FooterColumn>
      </FooterRow>
    </FooterWrapper>
  );
};

export default FooterCompound;
