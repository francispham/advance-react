import React from 'react';

import { useCookies } from '../hooks';
import { StyledCard } from './Elements';

const Cookie = () => {
  const [ cookie, setCookie ] = useCookies({ key: "1st Key" });
  const [ cookie2, setCookie2 ] = useCookies({ key: "2nd Key" });

  return (
    <div>
      <h3>Display Cookies</h3>
      <StyledCard>
        <h4> Cookie I: {cookie || ""}</h4>
        <input value={cookie} onChange={(e) => setCookie(e.target.value)} />
      </StyledCard>
      <StyledCard>
        <h4>Cookie II: {cookie2 || ""}</h4>
        <input value={cookie2} onChange={(e) => setCookie2(e.target.value)} />
      </StyledCard>
    </div>
  );
}

export default Cookie;


