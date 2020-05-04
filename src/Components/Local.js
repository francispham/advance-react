import React from 'react';
import { useLocalStorage } from '../hooks';
import { StyledCard } from "Elements";

const Local = () => {
  const [value, setValue] = useLocalStorage("Test", "I am initial");
  const [value2, setValue2] = useLocalStorage("Test2", "2nd Value");

  return (
    <div>
      <h3>Local Storage</h3>
      <StyledCard>
        <h4> Value I: {value || ""}</h4>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </StyledCard>
      <StyledCard>
        <h4>Value II: {value2 || ""}</h4>
        <input value={value2} onChange={(e) => setValue2(e.target.value)} />
      </StyledCard>
    </div>
  );
}

export default Local;