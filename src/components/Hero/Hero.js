import { Container } from "../Container.styled";
import { BackgroundStyled, TitleStyled } from "./Hero.styled";

export const Hero = () => {
  return (
    <BackgroundStyled>
      <Container>
        <TitleStyled>WELCOME TO TWEETS</TitleStyled>
      </Container>
    </BackgroundStyled>
  );
};
