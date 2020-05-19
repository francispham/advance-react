import styled from 'styled-components';
import { custom, custom1, black } from '../Utilities';

console.log('Button: ',custom, custom1)
export const Button = styled.button`
  display: inline-block;
  text-transform: uppercase;
  background: ${custom};
  margin: 1rem;
  padding: 10px 40px;
  color: ${black};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  box-shadow: 0 2px 10px rgba(50, 50, 73, 0.2),
    0 37.5px 75px -5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${custom1};
  }
`;