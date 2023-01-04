import { Link } from "react-router-dom";
import styled from "styled-components";
import { GAMES } from "../../../text-adventure-objects/games";

const StartPage = () => {
  return (
    <Wrapper>
      <Body>
        <Title>Text adventures</Title>
        <ChapterTitle>Select your adventure</ChapterTitle>
        {GAMES.map((game) => (
          <LinkTo to={game.slug}>{game.title}</LinkTo>
        ))}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #000;
  color: #00ff00;
  padding: 8px;
`;
const Body = styled.div`
  border: 1px solid #00ff00;
  box-sizing: border-box;
  height: 97.5vh;
  overflow-y: scroll;
  padding: 30px 10px;
  @media (min-width: 800px) {
    padding: 50px;
    max-width: 800px;
    margin: 0 auto;
  }
`;
const Title = styled.h1`
  text-transform: uppercase;
  margin: 0 0 20px;
  text-align: center;
  letter-spacing: 4px;
  text-decoration: underline;
  font-size: 2.5rem;
`;
const ChapterTitle = styled.h2`
  text-transform: uppercase;
  margin: 0 0 20px;
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;
const LinkTo = styled(Link)`
  display: block;
  text-transform: uppercase;
  margin: 0 0 10px;
  text-align: center;
  font-size: 1rem;
  font-weight: 200;
  letter-spacing: 5px;
  background-color: #003300;
  border: 1px solid #00ff00;
  color: #00ff00;
  padding: 10px;
  border-radius: none;
  :hover {
    color: #00ff00;
    background-color: #006600;
  }
`;

export default StartPage;
