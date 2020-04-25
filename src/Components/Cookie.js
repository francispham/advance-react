import React from 'react';
import styled from "styled-components";

import { useCookies } from '../hooks';

const Cookie = () => {
  const [ cookie, setCookie ] = useCookies({ key: "1st Key" });
  const [ cookie2, setCookie2 ] = useCookies({ key: "2nd Key" });

  return (
    <div>
      <h3>Display Cookies</h3>
      <CookieCard>
        <h4> Cookie I: {cookie || ""}</h4>
        <input value={cookie} onChange={(e) => setCookie(e.target.value)} />
      </CookieCard>
      <CookieCard>
        <h4>Cookie II: {cookie2 || ""}</h4>
        <input value={cookie2} onChange={(e) => setCookie2(e.target.value)} />
      </CookieCard>
    </div>
  );
}

export default Cookie;

const CookieCard = styled.div`
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
