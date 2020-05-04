import React from 'react';
import { useScript } from '../hooks';

const Script = () => {
  const [ isLoaded, isError ] = useScript('https://www.google.com/recaptcha/api.js');
  console.log('isLoaded, isError: ', isLoaded, isError);

  if (!isLoaded) return null;
  
  return (
    <div>
      <h3>Loading Scripts</h3>
    </div>
  );
};

export default Script;