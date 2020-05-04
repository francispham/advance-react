import styled from 'styled-components';
import { elevation, transition, custom, purp } from "Utilities";

export const StyledCard = styled.div`
  color: white;
  margin: 1rem;
  font-size: 1rem;
  font-weight: 400;
  padding: 10px 40px;
  border-radius: 4px;
  display: inline-block;
  background: var(--green);
  box-shadow: 0 2px 10px rgba(50, 50, 73, 0.2),
    0 37.5px 75px -5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--blue);
  }
  input {
    margin: 1rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 4px;

    &:hover {
      background: var(--black);
      color: white;
    }
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const Card = styled.div`
  background: ${purp};
  border-radius: 5px;
  padding: 20px;
  h3 {
    margin-top: 0;
    font-size: 2rem;
  }
  img {
    width: 100%;
  }
  color: ${custom}; 
  ${elevation[4]};
  ${transition({
    ease: 'ease-in',
    length: '1s'
  })};
  &:hover {
    ${elevation[5]};
  }
`;