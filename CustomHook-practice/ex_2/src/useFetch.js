import { useState, useEffect } from 'react';

const useFetch = (baseURL, initialType) => {
  const [data, setData] = useState(null);

  // 2.
  const fetchUrl = async (type) => {
    const response = await fetch(`${baseURL}/${type}`);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return { data, fetchUrl };
};

export default useFetch;

// 1.
// const fetchUrl = (type) => {
//   fetch(`${baseURL}/${type}`)
//     .then((res) => res.json())
//     .then((res) => setData(res));
// };
