import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/${type}`);
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return { data, fetchUrl };
}

export default useFetch;
