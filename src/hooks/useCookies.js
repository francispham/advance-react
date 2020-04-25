import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useCookies = ({ key }) => {
  const initial = Cookies.get(key);
  const [ cookie, setStateCookies ] = useState(initial);

  useEffect(() => {
    Cookies.set(key, cookie);
  }, [cookie, key]);
  return [cookie, setStateCookies];
};


/* 2 types of API for Considerations:
1. Less Flexible but have similar structure as useState() API:
declare:        const { value, get, set } = useCookie({key, value})
use:            value
declare again:  const { value, get, set } = useCookie({key: anotherKey, value})
use:            value                  
2. More Flexible 
1 time declare: const { get, set } = useCookie()
use:            get("theme")  
*/