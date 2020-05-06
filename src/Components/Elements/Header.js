import styled from "styled-components";

export const Header = styled.header`
  background: var(--green);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  > svg {
    margin-right: 20px;
  }
  > * {
    margin: 0;
  }

  button {
    appearance: none;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    background: none;
    border: none;
    z-index: 15;
  }
`;
